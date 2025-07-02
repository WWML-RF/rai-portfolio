// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import projects from '@/data/projects';
import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export const dynamicParams = true;

interface ExtendedProject extends Project {
    description?: string;
    technologies?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug) as ExtendedProject | undefined;

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.title,
        description: project.description || `Learn more about ${project.title}`,
        openGraph: {
            title: project.title,
            description: project.description || `Learn more about ${project.title}`,
            images: project.image ? [{ url: project.image }] : [],
        },
    };
}

export default async function ProjectPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug) as ExtendedProject | undefined;

    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto py-10 px-4 space-y-6">
            <header>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {project.title}
                </h1>
                {project.description && (
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>
                )}
            </header>

            {project.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <article className="prose prose-gray max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300">
                {project.content ? (
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                ) : (
                    <p>No detailed information available for this project.</p>
                )}
            </article>

            {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            View Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            View Source
                        </a>
                    )}
                </div>
            )}

            <nav className="pt-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                    ← Back to Projects
                </Link>
            </nav>
        </main>
    );
}