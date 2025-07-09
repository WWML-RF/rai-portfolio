"use client";

import Image from "next/image";
import Link from "next/link";
import { SeoHead } from "@/components/SeoHead";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


// Reusable hook for scroll animation
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function HomePage() {
  const hero = useScrollAnimation();
  const diff = useScrollAnimation();
  const project = useScrollAnimation();
  const services = useScrollAnimation();
  const experience = useScrollAnimation();
  const cta = useScrollAnimation();

  return (
    <>
      <SeoHead
        title="Rai Fails | Strategy, Design, and Systems"
        description="Veteran-led creative and operational services — web development, process design, and photography in San Antonio, TX."
        url="https://buildwithrai.com"
        image="/gallery/portrait-50-a-man-in-a-suit-and-white-shirt-smiles-at-the-camera.webp"
      />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24 text-gray-100">

        {/* Hero */}
        <motion.section
          ref={hero.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={hero.controls}
          className="text-center space-y-6"
        >
          <Image
            src="/gallery/portrait-50-a-man-in-a-suit-and-white-shirt-smiles-at-the-camera.webp"
            alt="Rai Fails headshot"
            width={120}
            height={120}
            className="mx-auto rounded-full"
          />
          <h1 className="text-5xl font-bold leading-tight">
            Strategy. Story. Systems.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I&apos;m Rai Fails — a veteran, process designer, and creative strategist based in San Antonio. I help organizations transform ideas into action through lean systems, digital clarity, and human-centered design.
          </p>
          <Link
            href="/hire"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Explore Services
          </Link>
        </motion.section>

        {/* Differentiators */}
        <motion.section
          ref={diff.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={diff.controls}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl text-emerald-400 mb-2">Multidisciplinary Lens</h3>
              <p>From law to logistics to creative media — I integrate diverse domains into tailored, functional systems.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl text-emerald-400 mb-2">Process-Driven Thinking</h3>
              <p>Whether improving legal workflows or launching websites, I focus on scalable, sustainable operations.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl text-emerald-400 mb-2">Human-Centered Design</h3>
              <p>I build for clarity, empowerment, and lasting impact — not just short-term output.</p>
            </div>
          </div>
        </motion.section>

        {/* Featured Project */}
        <motion.section
          ref={project.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={project.controls}
          className="bg-emerald-700 text-white rounded-xl p-8 text-center space-y-4 shadow-md"
        >
          <h2 className="text-2xl font-semibold">Featured Project</h2>
          <p>
            <span className="font-medium">American Tenet – Defense-Grade Project Management</span>
          </p>
          <Link
            href="/projects/american-tenet-project"
            className="inline-block bg-blue-900 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
          >
            Read More
          </Link>
        </motion.section>

        {/* Services */}
        <motion.section
          ref={services.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={services.controls}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center">Core Services</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-sm list-disc list-inside">
            <li><b>Process Optimization:</b> Lean/Six Sigma workflows, compliance automation, and digital governance</li>
            <li><b>Web Development:</b> Strategy-led sites with copy, content, and scalable Next.js architecture</li>
            <li><b>Creative Services:</b> Photography & videography for events, branding, and personal milestones</li>
            <li><b>AI & Automation:</b> AI prompts, Zapier/Power Automate flows, SharePoint & Notion integrations</li>
          </ul>
          <div className="text-center mt-6">
            <Link
              href="/hire"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Hire Me
            </Link>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          ref={experience.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={experience.controls}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-center">Recent Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Holliday Energy Law Group</h3>
              <p className="text-sm text-gray-300">Legal Analyst (2023–2024)</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                <li>Reduced processing time by 15% via process mapping</li>
                <li>Automated task handoffs and improved compliance tracking</li>
                <li>Created dashboards to support data-driven decisions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">U.S. Army</h3>
              <p className="text-sm text-gray-300">Logistics Officer (2015–2019)</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                <li>Managed $80M+ in equipment and 150+ personnel</li>
                <li>Deployed digital tools for inventory & reporting</li>
                <li>Led multi-functional teams in fast-paced environments</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          ref={cta.ref}
          variants={fadeInUp}
          initial="hidden"
          animate={cta.controls}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold">Let’s Build Something That Lasts</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Whether you&apos;re launching a brand, streamlining a team, or just need clear advice — I bring structure, creativity, and execution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Start a Conversation
          </Link>
        </motion.section>

      </main>
    </>
  );
}
