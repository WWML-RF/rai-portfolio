"use client";

import Image from "next/image";
import Link from "next/link";
import { SeoHead } from "@/components/SeoHead";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


// Custom scroll animation hook
function useScrollAnimation(threshold = 0.2) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return { ref, controls };
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function AboutPage() {
    const hero = useScrollAnimation();
    const whatDrives = useScrollAnimation();
    const journey = useScrollAnimation();
    const advocacy = useScrollAnimation();
    const skills = useScrollAnimation();
    const education = useScrollAnimation();
    const contact = useScrollAnimation();

    return (
        <>
            <SeoHead
                title="About Rai Fails | Veteran Strategist & Systems Architect"
                description="Meet Rai Fails, a U.S. Army veteran and creative systems engineer blending law, engineering, and storytelling to scale operations, compliance, and advocacy."
                url="https://yourdomain.com/about"
                image="/gallery/portrait-50-a-man-in-a-suit-and-white-shirt-smiles-at-the-camera.webp"
            />

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">

                {/* Hero Section */}
                <motion.section
                    ref={hero.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={hero.controls}
                    className="text-center space-y-4"
                >
                    <Image
                        src="/gallery/portrait-50-a-man-in-a-suit-and-white-shirt-smiles-at-the-camera.webp"
                        alt="Raidion Fails Headshot"
                        width={120}
                        height={120}
                        className="rounded-full mx-auto"
                        priority
                    />
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                        I’m Rai Fails—a U.S. Army veteran, compliance technologist, and operations strategist based in San Antonio, Texas. My journey spans leading logistics missions, reengineering legal systems, and building creative platforms that drive clarity and action.
                    </p>
                </motion.section>

                {/* What Drives Me */}
                <motion.section
                    ref={whatDrives.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={whatDrives.controls}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold">What Drives Me</h2>
                    <p className="text-gray-200">
                        I build systems that serve people. From optimizing workflows and legal operations to empowering teams with the right tools and messaging, I aim to bridge the gap between intention and execution—at scale and with heart.
                    </p>
                    <p className="text-gray-200">
                        My work blends industrial engineering, law, and creative media to help teams lead with clarity, reduce friction, and amplify their impact.
                    </p>
                </motion.section>

                {/* Journey */}
                <motion.section
                    ref={journey.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={journey.controls}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold">My Journey So Far</h2>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                        <li>Led Army logistics and aerial delivery for 150+ personnel and $80M+ in assets across Korea, New Mexico, and Special Forces HQ.</li>
                        <li>Automated legal workflows and built compliance frameworks using SharePoint and VBA for law firms and nonprofits.</li>
                        <li>Advanced UAS defense R&D and startup ops at American Tenet via Microsoft 365 ecosystem design and governance.</li>
                        <li>Built integrated dashboards using Visio, Power BI, and Planner to support cross-functional decision-making.</li>
                        <li>Founded a creative studio delivering brand systems, content strategy, and visual storytelling for mission-driven clients.</li>
                    </ul>
                </motion.section>

                {/* Advocacy */}
                <motion.section
                    ref={advocacy.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={advocacy.controls}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold">Volunteer & Advocacy</h2>
                    <p className="text-gray-200">
                        Giving back is core to my mission. I use my legal and systems background to support underserved communities, veterans, and policy advocacy:
                    </p>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                        <li><strong>Veterans Law Fellow</strong> – Supported casework and legal aid at SALSA, helping veterans navigate benefits and housing systems.</li>
                        <li><strong>Warrior Defense Project</strong> – Led policy and legal research on military-connected issues, from discharge reviews to trauma-informed justice.</li>
                        <li><strong>TRLA</strong> – Authored Psychiatric Advance Directives and created outreach tools promoting mental health legal autonomy.</li>
                    </ul>
                </motion.section>

                {/* Skills */}
                <motion.section
                    ref={skills.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={skills.controls}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold">Certifications & Tools</h2>
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
                        <li>Lean Production, Project Management, Six Sigma, Agile/Scrum, SharePoint Administration</li>
                        <li>Microsoft 365 (Teams, Planner, OneDrive, Visio)</li>
                        <li>Legal workflows, policy research, risk compliance</li>
                    </ul>
                </motion.section>

                {/* Education */}
                <motion.section
                    ref={education.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={education.controls}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-gray-200">Education</h2>
                    <ul className="space-y-4 text-gray-200">
                        <li>
                            <p className="font-bold">St. Mary&apos;s University</p>
                            <p><em>MS, Industrial Engineering & Management</em> – Expected 2025</p>
                            <p className="text-sm text-gray-400">Lean Production | Agile Dev | Requirements Engineering | Python | Operations Research</p>
                        </li>
                        <li>
                            <p className="font-bold">St. Mary&apos;s University School of Law</p>
                            <p><em>Doctor of Jurisprudence</em> – 2022</p>
                            <p className="text-sm text-gray-400">Administrative Law | Immigration | Human Rights | Property</p>
                        </li>
                        <li>
                            <p className="font-bold">University of Texas at Arlington</p>
                            <p><em>BA, Communication – Public Relations</em> – 2014</p>
                            <p className="text-sm text-gray-400">Business Comms | Strategic PR | Media Systems | Advertising</p>
                        </li>
                    </ul>
                </motion.section>

                {/* CTA */}
                <motion.section
                    ref={contact.ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={contact.controls}
                    className="flex justify-center"
                >
                    <div className="space-y-6 text-center max-w-xl">
                        <h2 className="text-2xl font-semibold">Let’s Connect</h2>
                        <p className="text-gray-200">
                            Whether you&apos;re scaling systems or telling stories—I&apos;d love to collaborate. Let&apos;s build something real, resilient, and human-centered.
                        </p>
                        <Link
                            href="https://calendly.com/raidion-fails"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                        >
                            Book a Session
                        </Link>
                    </div>
                </motion.section>

            </main>
        </>
    );
}
