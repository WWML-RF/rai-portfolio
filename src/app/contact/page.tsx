import { Metadata } from "next";
import Link from "next/link";
import { SeoHead } from "@/components/SeoHead";

export const metadata: Metadata = {
    title: "Contact | Raidion Fails – Book Photography, Strategy, or Web Services",
    description:
        "Get in touch with Raidion Fails for professional photography, videography, process improvement, or web development. Serving San Antonio, Castroville, and surrounding areas.",
    openGraph: {
        title: "Contact | Raidion Fails",
        description:
            "Get in touch with Raidion Fails for photography, consulting, and development services.",
        url: "https://yourdomain.com/contact",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <SeoHead
                title="Contact Raidion Fails – Photography, Strategy, Web Services"
                description="Contact Raidion Fails to book services in photography, process improvement, or web development. Serving San Antonio and surrounding areas."
                url="https://yourdomain.com/contact"
            />

            <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
                <header className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Let’s Connect</h1>
                    <p className="text-gray-200">
                        Whether you’re planning an event in San Antonio, optimizing your business systems, or building a digital experience—I'm here to help.
                    </p>
                </header>

                <section className="space-y-4 text-gray-200">
                    <p>
                        You can book a discovery call, send me an email, or connect through social platforms. I typically respond within 24 hours.
                    </p>

                    <ul className="space-y-2">
                        <li><strong>Email:</strong> <a href="mailto:raidion.fails@gmail.com" className="text-blue-600 hover:underline">RaiDion.fails@gmail.com</a></li>
                        <li><strong>Calendly:</strong> <a href="https://calendly.com/raidion-fails" className="text-blue-600 hover:underline">Book a Session</a></li>
                        <li><strong>Location:</strong> San Antonio, Castroville, Boerne, TX</li>
                    </ul>
                </section>

                <section className="text-center mt-8">
                    <Link
                        href="https://calendly.com/raidion-fails"
                        className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                    >
                        Book a Free Discovery Call
                    </Link>
                </section>
            </main>

            {/* ✅ Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Raidion Fails",
                        url: "https://yourdomain.com",
                        email: "mailto:your@email.com",
                        jobTitle: "Consultant, Photographer, Developer",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "San Antonio",
                            addressRegion: "TX",
                            postalCode: "78201",
                            addressCountry: "USA",
                        },
                        sameAs: [
                            "https://www.linkedin.com/in/raidion-fails",
                            "https://www.instagram.com/yourhandle"
                        ],
                    }),
                }}
            />
        </>
    );
}
