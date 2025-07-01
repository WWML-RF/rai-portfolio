'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects'; // Adjust path if needed

export default function ProjectsPage() {
    return (
        <motion.section
            className="max-w-5xl mx-auto py-10 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl text-center font-bold">Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My work spans legal innovation, process design, digital strategy, and creative media. From supporting U.S. veterans through public interest law to building full-stack systems for startups, each project reflects my drive to solve problems and elevate underserved communities through thoughtful execution and scalable solutions.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((p, idx) => (
                    <motion.li
                        key={p.slug}
                        className="border p-4 rounded shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                        <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                        <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">{p.description}</p>
                        <Link href={`/projects/${p.slug}`} className="text-blue-600 underline">
                            View Project →
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}
