const fg = require('fast-glob');
const fs = require('fs');
const cheerio = require('cheerio');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const chalk = require('chalk');

const patterns = ['src/app/**/page.tsx', 'src/app/layout.tsx', '**/*.html'];
const ignore = ['node_modules/**', '.next/**', 'dist/**', 'build/**'];

function checkCheerioSEO(content) {
  const $ = cheerio.load(content);
  return {
    title: !!$('title').text(),
    description: !!$('meta[name="description"]').attr('content'),
    canonical: !!$('link[rel="canonical"]').attr('href'),
    openGraph: !!$('meta[property="og:title"]').attr('content'),
    twitterCard: !!$('meta[name="twitter:card"]').attr('content'),
    lang: $('html').attr('lang') === 'en',
  };
}

function checkJSXSEO(content) {
  let found = {
    title: false,
    description: false,
    canonical: false,
    openGraph: false,
    twitterCard: false,
    lang: true,
  };

  let ast;
  try {
    ast = parser.parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
  } catch (e) {
    return found;
  }

  traverse(ast, {
    // Check for export const metadata = { ... }
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration;
      if (
        decl?.type === 'VariableDeclaration' &&
        decl.declarations[0]?.id.name === 'metadata' &&
        decl.declarations[0].init?.type === 'ObjectExpression'
      ) {
        const props = decl.declarations[0].init.properties;

        props.forEach((prop) => {
          if (prop.key?.name === 'title') found.title = true;
          if (prop.key?.name === 'description') found.description = true;

          if (prop.key?.name === 'alternates') {
            const altProps = prop.value.properties || [];
            altProps.forEach((altProp) => {
              if (altProp.key?.name === 'canonical') {
                found.canonical = true;
              }
            });
          }

          if (prop.key?.name === 'openGraph') found.openGraph = true;
          if (prop.key?.name === 'twitter') found.twitterCard = true;
        });
      }
    },

    // Also handle <Head> / <Helmet> components
    JSXElement(path) {
      const name = path.node.openingElement.name.name;
      if (name === 'Head' || name === 'Helmet') {
        path.node.children.forEach((child) => {
          if (child.type !== 'JSXElement') return;

          const tag = child.openingElement.name.name;
          const attrs = child.openingElement.attributes;

          if (tag === 'title') found.title = true;

          if (tag === 'meta') {
            attrs.forEach((attr) => {
              const nameAttr = attr.name?.name;
              const value = attr.value?.value;

              if (nameAttr === 'name' && value === 'description') found.description = true;
              if (nameAttr === 'name' && value === 'twitter:card') found.twitterCard = true;
              if (nameAttr === 'property' && value === 'og:title') found.openGraph = true;
            });
          }

          if (tag === 'link') {
            let rel = null, href = null;
            attrs.forEach((attr) => {
              if (attr.name?.name === 'rel' && attr.value?.value === 'canonical') rel = true;
              if (attr.name?.name === 'href') href = true;
            });
            if (rel && href) found.canonical = true;
          }
        });
      }
    },
  });

  return found;
}

(async () => {
  const files = await fg(patterns, { ignore });
  const report = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let result;

    if (file.endsWith('.html')) {
      result = checkCheerioSEO(content);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
      result = checkJSXSEO(content);
    } else {
      continue;
    }

    const missing = [];
    if (!result.title) missing.push('title');
    if (!result.description) missing.push('meta description');
    if (!result.canonical) missing.push('canonical link');
    if (!result.openGraph) missing.push('Open Graph (og:title)');
    if (!result.twitterCard) missing.push('Twitter Card (twitter:card)');
    if (!result.lang) missing.push('html[lang="en"]');

    if (missing.length > 0) {
      report.push({ file, missing: missing.join(', ') });
    }
  }

  console.log(`\n${chalk.bold('SEO Audit Results')}`);
  console.log(`${chalk.gray('='.repeat(40))}`);

  if (report.length === 0) {
    console.log(chalk.green('✅ All files contain the required SEO tags.'));
  } else {
    console.log(chalk.red('❌ Files missing SEO tags:\n'));
    report.forEach(({ file, missing }) => {
      console.log(`${chalk.yellow('-')} ${chalk.cyan(file)}: ${chalk.red('missing')} ${chalk.magenta(missing)}`);
    });
  }

  console.log(`\n${chalk.bold('Summary')}`);
  console.log(`Scanned: ${chalk.cyan(files.length)} files`);
  console.log(`Passed: ${chalk.green(files.length - report.length)}`);
  console.log(`Failed: ${chalk.red(report.length)}\n`);

  process.exit(report.length > 0 ? 1 : 0);
})();

