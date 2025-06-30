import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// --- Type ---
type ProjectParams = { slug: string };

// --- Project Data ---
const projects = [
    {
        slug: "american-tenet-project",
        title: "American Tenet – Defense-Grade Project Management",
        description:
            "Built the digital backbone for an aerospace startup, leading Microsoft 365 migration, compliance, and project governance for advanced UAS R&D.",
        image: "/gallery/img_74.webp",
        content: `
      <h3>Project Overview</h3>
      <p>At American Tenet, I architected the digital and operational backbone for advanced Unmanned Aerial Systems (UAS) R&D. My work spanned business and engineering teams...</p>
      <h3>My Approach</h3>
      <ul>
        <li><strong>Microsoft 365 Infrastructure:</strong> Led migration to SharePoint + Teams...</li>
        <!-- Trimmed for brevity -->
      </ul>
      <h3>Outcome</h3>
      <p>My systems enabled American Tenet to operate like a Series A startup...</p>
    `,
    },
    {
        slug: "army-logistics-ops",
        title: "OpsEngine – Military Precision Meets Scalable Process Design",
        description:
            "Developed a modular logistics and process optimization framework for the U.S. Army...",
        image: "/gallery/img_49.webp",
        content: `
      <h3>Project Overview</h3>
      <p>While serving as a U.S. Army Logistics Officer, I developed <strong>OpsEngine</strong>...</p>
      <!-- Trimmed for brevity -->
    `,
    },
    {
        slug: "write-with-my-lens",
        title: "Write With My Lens – Bridging Engineering with Creative Strategy",
        description:
            "Founded a creative studio delivering web, branding, and content solutions...",
        image: "/gallery/img_31.webp",
        content: `
      <h3>Project Overview</h3>
      <p><strong>Write With My Lens</strong> is my personal creative venture...</p>
      <!-- Trimmed for brevity -->
    `,
    },
    {
        slug: "holliday-energy-law",
        title: "HollidayOps – Automating Legal Workflows",
        description:
            "Transformed legal workflows with VBA automation and SharePoint governance...",
        image: "/gallery/img_75.webp",
        content: `
      <h3>Project Overview</h3>
      <p>At Holliday Energy Law Group, I merged process automation with legal compliance...</p>
      <!-- Trimmed for brevity -->
    `,
    },
    {
        slug: "advocacy-in-action",
        title: "Advocacy in Action – Veterans Law & Legal Innovation",
        description:
            "Supported underserved communities and veterans through legal research, policy analysis...",
        image: "/gallery/img_68.webp",
        content: `
      <h3>Project Overview</h3>
      <p>Through fellowships and internships with TRLA, SALSA, and the Warrior Defense Project...</p>
      <!-- Trimmed for brevity -->
    `,
    },
];

// --- Helpers ---
function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}

// --- generateStaticParams ---
export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

// --- generateMetadata ---
// Next.js 15: params is now a Promise
export async function generateMetadata({
    params,
}: {
    params: Promise<ProjectParams>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
            url: `https://yourdomain.com/projects/${project.slug}`,
            type: "website",
        },
    };
}

// --- Page Component ---
// FIXED: params is now a Promise in Next.js 15
export default async function ProjectPage({
    params,
}: {
    params: Promise<ProjectParams>;
}) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return (
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <p>The project you are looking for does not exist.</p>
                <Link href="/projects" className="text-blue-600 hover:underline mt-4 block">
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
                className="prose max-w-none text-gray-200 [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4"
                dangerouslySetInnerHTML={{ __html: project.content }}
            />
            <Link href="/projects" className="text-blue-600 hover:underline">
                ← Back to Projects
            </Link>
        </main>
    );
}