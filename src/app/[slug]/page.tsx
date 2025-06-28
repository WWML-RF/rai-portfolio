import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        slug: "american-tenet-project",
        title: "American Tenet – Defense-Grade Project Management",
        description:
            "Built the digital backbone for an aerospace startup, leading Microsoft 365 migration, compliance, and project governance for advanced UAS R&D.",
        image: "/images/gallery/img_74.webp",
        content: `
        <p>This project involved building the digital backbone for an aerospace startup, leading Microsoft 365 migration, compliance, and project governance for advanced UAS research and development.</p>
        <p>Worked closely with teams to ensure seamless integration and compliance with strict aerospace standards.</p>
    `,
    },
    {
        slug: "army-logistics-ops",
        title: "OpsEngine – Military Precision Meets Scalable Process Design",
        description:
            "Developed a modular logistics and process optimization framework for the U.S. Army, managing $80M+ in assets and 150+ personnel.",
        image: "/images/gallery/img_49.webp",
        content: `
        <p>Designed and implemented a modular logistics system to optimize military supply chains.</p>
        <p>Managed high-value assets and coordinated over 150 personnel to increase efficiency and accuracy.</p>
    `,
    },
];

// ✅ FIXED: Make this async-compatible if needed
function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

// ✅ Required for static generation
export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

// ✅ FIXED: No longer using `await` unnecessarily
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const slug = await params.slug;
    const project = getProject(params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
            url: `https://yourdomain.com/work/${project.slug}`,
            type: "website",
        },
    };
}

// ✅ FIXED: Now async
export default async function ProjectPage({ params }: ProjectPageProps) {
    const slug = await params.slug;
    const project = getProject(params.slug);

    if (!project) {
        return (
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <p>The project you are looking for does not exist.</p>
                <Link href="/work" className="text-blue-600 hover:underline mt-4 block">
                    ← Back to Projects
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-5xl mx-auto p-6 space-y-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg object-cover"
            />
            <section
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: project.content }}
            />
            <Link href="/work" className="text-blue-600 hover:underline">
                ← Back to Projects
            </Link>
        </main>
    );
}
