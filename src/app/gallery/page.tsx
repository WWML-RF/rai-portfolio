"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import galleryImages from "../../../data/gallery.json";
;

type GalleryImage = {
    src: string;
    category: "portraits" | "landscapes" | "events";
};

const typedGalleryImages = galleryImages as GalleryImage[];

const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
};

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState<
        "all" | "portraits" | "landscapes" | "events"
    >("all");

    const filteredImages =
        selectedCategory === "all"
            ? typedGalleryImages
            : typedGalleryImages.filter((img) => img.category === selectedCategory);

    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
            <section className="text-center space-y-4 mb-8">
                <h2 className="text-3xl font-bold">Photography Portfolio: Portraits, Landscapes, and Events</h2>
                <p className="text-gray-200 max-w-2xl mx-auto">
                    Explore a curated collection of my photography work including portraits, landscapes, and event coverage.
                    Based in San Antonio, I work with individuals, families, and businesses to capture moments that matter.
                </p>
            </section>
            <div className="text-center mt-12 space-y-6 mb-8">
                <a
                    href="https://calendly.com/raidion-fails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    Book a Session
                </a>
            </div>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-8 space-x-6">
                {["all", "portraits", "landscapes", "events"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat as any)}
                        className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === cat
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
            >
                {filteredImages.map((img: GalleryImage, index: number) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={`Gallery image ${index + 1}`}
                        className="mb-4 rounded shadow cursor-pointer hover:opacity-90 transition"
                    // TODO: Add lightbox open on click here later
                    />
                ))}
            </Masonry>
            <p className="text-center text-gray-200 max-w-2xl mx-auto mt-10">
                Every photo tells a story—whether it's the quiet strength of a portrait, the wide beauty of a Texas landscape, graduation, or the energy of a community event. I aim to capture moments that are timeless, honest, and tailored to your vision. If you're in San Antonio, Castroville, Boerne, or the surrounding area, I'd be honored to document your next chapter.
            </p>

            {/* Book a Session */}
            <div className="text-center mt-12">
                <a
                    href="https://calendly.com/raidion-fails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                    Book a Session
                </a>
            </div>
        </main>
    );
}
