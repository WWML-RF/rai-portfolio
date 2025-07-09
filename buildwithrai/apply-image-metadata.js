const fs = require('fs-extra');
const path = require('path');

const IMAGE_DIR = '/Users/r.fails/my-portfolio/buildwithrai/public/gallery';
const METADATA_FILE = './image-metadata.json';
const OUTPUT_TS_FILE = './src/data/galleryImages.ts'; // or .json if you prefer

(async () => {
  try {
    const metadata = await fs.readJSON(METADATA_FILE);
    const finalImages = [];

    for (const entry of metadata) {
      const { oldName, newName, src, alt, tags } = entry;
      const oldPath = path.join(IMAGE_DIR, oldName);
      const newPath = path.join(IMAGE_DIR, newName);

      if (await fs.pathExists(oldPath)) {
        await fs.rename(oldPath, newPath);
        console.log(`🔄 Renamed: ${oldName} → ${newName}`);
      } else {
        console.warn(`⚠️ File not found: ${oldName}`);
        continue;
      }

      finalImages.push({ src, alt, tags });
    }

    const outputTS = `export const galleryImages = ${JSON.stringify(finalImages, null, 2)};\n`;
    await fs.outputFile(OUTPUT_TS_FILE, outputTS);

    console.log(`\n✅ Done! Images renamed and gallery data saved to ${OUTPUT_TS_FILE}`);
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();

