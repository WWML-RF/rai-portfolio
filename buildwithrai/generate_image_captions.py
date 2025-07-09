# generate_image_captions.py
import os
import json
from PIL import Image
from tqdm import tqdm
from transformers import BlipProcessor, BlipForConditionalGeneration

# Local image folder
IMAGE_DIR = "/Users/r.fails/my-portfolio/buildwithrai/photos"
OUTPUT_FILE = "image-metadata.json"

# Load BLIP model
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

def generate_caption(image_path):
    raw_image = Image.open(image_path).convert('RGB')
    inputs = processor(raw_image, return_tensors="pt")
    out = model.generate(**inputs)
    caption = processor.decode(out[0], skip_special_tokens=True)
    return caption

def main():
    metadata = []
    index = 1

    for file in tqdm(os.listdir(IMAGE_DIR)):
        ext = os.path.splitext(file)[1].lower()
        if ext not in [".jpg", ".jpeg", ".png", ".webp"]:
            continue

        full_path = os.path.join(IMAGE_DIR, file)
        caption = generate_caption(full_path)
        category = "portrait" if "person" in caption or "man" in caption or "woman" in caption else "misc"

        slug = caption.lower().replace(" ", "-").replace(".", "").replace(",", "")
        new_filename = f"{category}-{index}-{slug}.webp"

        metadata.append({
            "oldName": file,
            "newName": new_filename,
            "src": f"/gallery/{new_filename}",
            "alt": caption,
            "tags": [category]
        })

        index += 1

    with open(OUTPUT_FILE, "w") as f:
        json.dump(metadata, f, indent=2)

    print(f"\n✅ Captions generated and saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()

