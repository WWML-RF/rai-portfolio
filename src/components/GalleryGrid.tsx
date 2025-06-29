import Image from "next/image";

const images = [
  "/images/gallery/img1.webp",
  "/images/gallery/img2.webp",
  "/images/gallery/img3.webp",
];

export const GalleryGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((src, i) => (
      <Image key={i} src={src} alt={`Gallery image ${i + 1}`} className="rounded shadow" />

    ))}
  </div>
);