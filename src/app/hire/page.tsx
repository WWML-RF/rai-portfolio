"use client"

import { SeoHead } from "@/components/SeoHead";
import Link from "next/link";

export default function HirePage() {
    return (
        <>
            <SeoHead
                title="Hire Rai Fails | Photography, Process Design & Web Development"
                description="Book photography, videography, process improvement, or web development services in San Antonio and surrounding areas. Trusted by startups and nonprofits."
                url="https://yourdomain.com/hire"
                image="/images/og/hire.jpg"
            />

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                {/* Hero */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">
                        Bring Your Vision to Life — Creative & Technical Solutions
                    </h1>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                        I help small businesses, nonprofits, startups, and individuals transform their ideas into
                        action—through creative media, digital systems, and streamlined workflows.
                    </p>
                    <Link
                        href="https://calendly.com/raidion-fails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                    >
                        Book a Free Discovery Call
                    </Link>
                </section>

                {/* Services */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Photography */}
                    <div className="border p-6 rounded-xl shadow-sm bg-white space-y-4">
                        <h2 className="text-2xl font-semibold !text-emerald-700">Photography & Videography</h2>
                        <p className="text-gray-700">
                            Ideal for individuals, families, events, and business branding.
                        </p>
                        <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                            <li><b>Photography:</b> $85/hr — 5 retouched photos, 3 revisions, all raw images included</li>
                            <li>+2 hrs: 15 retouched photos, 5 revisions, all images</li>
                            <li><b>Videography:</b> $125/hr — includes editing & 3 revisions</li>
                        </ul>
                    </div>

                    {/* Process Design */}
                    <div className="border p-6 rounded-xl shadow-sm bg-white space-y-4">
                        <h2 className="text-2xl font-semibold !text-emerald-700">Process Optimization</h2>
                        <p className="text-gray-700">
                            Boost your efficiency through lean systems and smarter workflows.
                        </p>
                        <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                            <li>SharePoint configuration, training & governance</li>
                            <li>Workflow automation & waste reduction</li>
                            <li>Lean / Six Sigma mapping & metrics dashboards</li>
                        </ul>
                    </div>

                    {/* Web Development */}
                    <div className="border p-6 rounded-xl shadow-sm bg-white space-y-4">
                        <h2 className="text-2xl font-semibold !text-emerald-700">Web Design & Development</h2>
                        <p className="text-gray-700">
                            Strategy-led websites that communicate clearly and scale as you grow.
                        </p>
                        <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                            <li>Landing pages, full websites, and portfolio builds</li>
                            <li>Branding, copy, and mobile-first design</li>
                            <li>Hosted and deployed on Vercel</li>
                        </ul>
                    </div>
                </section>

                {/* Availability & Contact */}
                <section className="text-center space-y-4">
                    <h2 className="text-2xl font-semibold">Available In</h2>
                    <p className="text-gray-200">
                        San Antonio, Castroville, Boerne, and surrounding areas!
                    </p>
                    <p className="text-gray-200">
                        For virtual projects or general inquiries, email me directly at{" "}
                        <a href="mailto:raidion.fails@gmail.com" className="text-blue-600 underline">
                            raidion.fails@gmail.com
                        </a>
                    </p>
                    <Link
                        href="https://calendly.com/raidion-fails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                        Schedule a Session on Calendly
                    </Link>
                </section>
            </main>
        </>
    );
}
