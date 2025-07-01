"use client";

import { useRef, useState } from "react";
import { SeoHead } from "@/components/SeoHead";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setMessage(null);

        try {
            await emailjs.sendForm(
                "service_ooex05e",
                "template_xj7og49",
                formRef.current,
                "Vz4u__c6jLZDWDTLQ"
            );
            setMessage("Thanks for reaching out! Ill get back to you soon.");
            formRef.current.reset();
        } catch (error) {
            console.error("Failed to send message:", (error) || error);
            setMessage("Oops, something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <SeoHead
                title="Contact Rai Fails | Strategy, Design & Development"
                description="Get in touch with Rai Fails for consulting on process design, photography, web development, and more."
                url="buildwithrai.com/contact"
                image="/images/og/contact.jpg"
            />

            <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
                <h1 className="text-4xl font-bold text-center">Contact Me</h1>

                <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto">
                    Based in San Antonio, I offer consulting, digital strategy, and photography services designed to make your vision real. Whether you&apos;re a small business, nonprofit, or individual, I’d love to hear how I can support your goals. Reach out with your idea or question—I&apos;ll personally get back to you.
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-gray-800 p-8 rounded-lg shadow"
                    aria-label="Contact form"
                >
                    <div>
                        <label htmlFor="from_name" className="block mb-2 font-semibold">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="from_name"
                            name="from_name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-600 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_email" className="block mb-2 font-semibold">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="from_email"
                            name="from_email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-600 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 font-semibold">
                            Subject<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder="Brief summary"
                            className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-600 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-semibold">
                            Message<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="Write your message here..."
                            className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-600 focus:outline-none resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {message && (
                        <p
                            className={`mt-4 text-center font-medium ${message.startsWith("Oops")
                                ? "text-red-500"
                                : "text-green-500"
                                }`}
                            role="alert"
                        >
                            {message}
                        </p>
                    )}
                </form>

                <p className="text-center text-gray-400 text-sm max-w-xl mx-auto pt-4">
                    Located in San Antonio, serving local and remote clients. For project pricing, availability, or special inquiries, drop a message anytime. Let’s build something that matters.
                </p>
            </main>
        </>
    );
}
