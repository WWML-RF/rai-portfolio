"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SeoHead } from "@/components/SeoHead";

type ImageType = {
    src: string;
    alt: string;
    tags: string[];
};

const images: ImageType[] = [
    { src: "/gallery/img_1.webp", alt: "Portrait 1", tags: ["portraits"] },
    { src: "/gallery/img_46.webp", alt: "Portrait 2", tags: ["portraits"] },
    { src: "/gallery/img_3.webp", alt: "Event 1", tags: ["events"] },
    { src: "/gallery/img_52.webp", alt: "Image 52", tags: [] },
    { src: "/gallery/img_57.webp", alt: "Landscape 1", tags: ["landscapes"] },
    { src: "/gallery/img_19.webp", alt: "Event 2", tags: ["events"] },
    { src: "/gallery/img_65.webp", alt: "Event 3", tags: ["events"] },
    { src: "/gallery/img_8.webp", alt: "Landscape 2", tags: ["landscapes"] },
    { src: "/gallery/img_54.webp", alt: "Image 54", tags: [] },
    { src: "/gallery/img_64.webp", alt: "Event 4", tags: ["events"] },
    { src: "/gallery/img_51.webp", alt: "Landscape 3", tags: ["landscapes"] },
    { src: "/gallery/img_61.webp", alt: "Event 5", tags: ["events"] },
    { src: "/gallery/img_10.webp", alt: "Portrait 3", tags: ["portraits"] },
    { src: "/gallery/img_53.webp", alt: "Portrait 4", tags: ["portraits"] },
    { src: "/gallery/img_60.webp", alt: "Event 6", tags: ["events"] },
    { src: "/gallery/img_67.webp", alt: "Event 7", tags: ["events"] },
    { src: "/gallery/img_69.webp", alt: "Image 69", tags: [] },
    { src: "/gallery/img_71.webp", alt: "Portrait 5", tags: ["portraits"] },
    { src: "/gallery/img_20.webp", alt: "Portrait 6", tags: ["portraits"] },
    { src: "/gallery/img_22.webp", alt: "Portrait 7", tags: ["portraits"] },
];

const allTags = ["all", ...Array.from(new Set(images.flatMap((image) => image.tags))).sort()];

export default function GalleryPage() {
    const [activeTag, setActiveTag] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);

    const filteredImages =
        activeTag === "all" ? images : images.filter((img) => img.tags.includes(activeTag));

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const showPrev = useCallback(() => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + filteredImages.length - 1) % filteredImages.length);
        }
    }, [lightboxIndex, filteredImages.length]);

    const showNext = useCallback(() => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
        }
    }, [lightboxIndex, filteredImages.length]);

    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, showPrev, showNext]);

    useEffect(() => {
        if (lightboxIndex === null) return;

        const previousActiveElement = document.activeElement as HTMLElement;
        lightboxRef.current?.focus();
        return () => previousActiveElement?.focus();
    }, [lightboxIndex]);

    return (
        <>
            <SeoHead
                title="Gallery | Rai Fails Photography & Creative Work"
                description="Explore a curated gallery of portraits, events, and landscapes captured by Rai Fails. Filter by category and enjoy high-quality images."
                url="https://buildwithrai.com/gallery"
                image="/gallery/img_1.webp"
            />

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Intro */}
                <section className="max-w-3xl mx-auto mb-10 text-center text-gray-300 space-y-4">
                    <p>
                        Based in San Antonio, I offer professional photography services specializing in portraits, events, and landscapes. My pricing starts at{" "}
                        <strong>$150 per session</strong>, tailored to your unique needs and creative vision.
                    </p>
                    <p>
                        Interested in capturing your moments? Let’s connect to discuss your project and schedule a session that fits your timeline and style.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
                        aria-label="Contact Rai Fails to book a photography session"
                    >
                        Book a Session
                    </a>
                </section>

                {/* Filter */}
                <nav className="flex flex-wrap justify-center gap-4 mb-8" aria-label="Filter gallery by category">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            className={`px-4 py-2 rounded-full border font-semibold uppercase text-sm tracking-wide transition
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                            ${
                                activeTag === tag
                                    ? "bg-blue-700 text-white border-blue-700"
                                    : "bg-transparent text-gray-600 border-gray-400 hover:bg-blue-100 hover:text-blue-800"
                            }`}
                            aria-pressed={activeTag === tag}
                            onClick={() => setActiveTag(tag)}
                            type="button"
                        >
                            {tag}
                        </button>
                    ))}
                </nav>

                {/* Grid */}
                <div
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                    style={{ columnGap: "1rem" }}
                >
                    {filteredImages.map((image, i) => (
                        <div
                            key={image.src}
                            className="break-inside-avoid cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            onClick={() => openLightbox(i)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openLightbox(i);
                                }
                            }}
                            aria-label={`View image: ${image.alt}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={750}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <section className="max-w-3xl mx-auto mt-12 text-center text-gray-300 space-y-4">
                    <p>
                        Ready to create stunning visuals that tell your story? Serving San Antonio and surrounding areas, I’m excited to collaborate with you on your next photography project.
                    </p>
                    <p>
                        Reach out today to discuss availability, pricing options, or any questions you have.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
                        aria-label="Contact Rai Fails for photography inquiries"
                    >
                        Contact Me
                    </a>
                </section>

                {/* Lightbox */}
                {lightboxIndex !== null && (
                    <div
                        ref={lightboxRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Image ${lightboxIndex + 1} of ${filteredImages.length}: ${filteredImages[lightboxIndex].alt}`}
                        tabIndex={-1}
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        onClick={closeLightbox}
                    >
                        {/* You can drop lightbox content here */}
                    </div>
                )}
            </main>
        </>
    );
}
