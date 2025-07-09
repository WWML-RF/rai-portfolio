export async function GET() {
    const base = 'https://www.buildwithrai.com';

    const staticPaths = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/gallery',
        '/hire',
    ];

    const urls = staticPaths
        .map((path) => `<url><loc>${base}${path}</loc></url>`)
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
