const fs = require('fs-extra');
const path = require('path');
const slugify = require('slugify');

const IMAGE_DIR = '/Users/r.fails/my-portfolio/buildwithrai/public/gallery';
const OUTPUT_FILE = './image-metadata.json';

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

const guessCategory = (filename) => {
  const name = filename.toLowerCase();
  if (name.includes('portrait')) return 'portrait';
  if (name.includes('event')) return 'event';
  if (name.includes('product')) return 'product';
  return 'misc';
};

const buildFilename = (index, category, description) => {
  const slug = slugify(description, { lower: true });
  return `${category}-${index}-${slug}.webp`;
};

(async () => {
  try {
    const files = await fs.readdir(IMAGE_DIR);
    const images = files.filter(file =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    const metadata = [];

    for (let i = 0; i < images.length; i++) {
      const oldName = images[i];
      const ext = path.extname(oldName);
      const category = guessCategory(oldName);
      const description =
        category === 'portrait'
          ? 'Portrait of a person'
          : category === 'event'
          ? 'Event photo with people'
          : category === 'product'
          ? 'Product showcase image'
          : 'Miscellaneous photo';

      const newFilename = buildFilename(i + 1, category, description);

      metadata.push({
        oldName,
        newName: newFilename,
        src: `/gallery/${newFilename}`,
        alt: description,
        tags: [category],
      });
    }

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(metadata, null, 2));
    console.log(`✅ Metadata saved to ${OUTPUT_FILE}`);
    console.log('🔎 Review it before renaming the files.');

  } catch (err) {
    console.error('❌ Error:', err);
  }
})();

