import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        slug: "american-tenet-project",
        title: "American Tenet – Defense-Grade Project Management",
        description:
            "Built the digital backbone for an aerospace startup, leading Microsoft 365 migration, compliance, and project governance for advanced UAS R&D.",
        image: "/gallery/img_74.webp",
    },
    {
        slug: "army-logistics-ops",
        title: "Military Precision Meets Scalable Process Design",
        description:
            "Developed a modular logistics and process optimization framework for the U.S. Army, managing $80M+ in assets and 150+ personnel.",
        image: "/gallery/img_50.webp",
    },
    {
        slug: "write-with-my-lens",
        title: "Write With My Lens – Bridging Engineering with Creative Strategy",
        description:
            "Founded a creative studio delivering web, branding, and content solutions for small businesses and nonprofits, especially veteran-led organizations.",
        image: "/gallery/img_45.webp",
    },
    {
        slug: "holliday-energy-law",
        title: "Holliday Energy Law Group – Automating Legal Workflows",
        description:
            "Transformed legal workflows with VBA automation and SharePoint governance, saving 20+ hours/week and reducing risk for an energy law firm.",
        image: "/gallery/img_75.webp",
    },
    {
        slug: "advocacy-in-action",
        title: "Advocacy in Action – Veterans Law & Legal Innovation",
        description:
            "Supported underserved communities and veterans through legal research, policy analysis, and public interest advocacy with TRLA, SALSA, and the Warrior Defense Project.",
        image: "/gallery/img_68.webp",
    },
];

export default function Projects() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold">My Work & Projects</h1>
                <p className="text-gray-200 max-w-2xl mx-auto">
                    A showcase of professional projects, volunteer work, and collaborations across engineering, strategy, and creative technology. Each project demonstrates my approach to solving complex problems through systems thinking, process optimization, and creative implementation.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(({ slug, title, description, image }) => (
                    <Link
                        href={`/projects/${slug}`}
                        key={slug}
                        className="block rounded-lg bg-white shadow hover:shadow-lg transition p-6 space-y-4"
                        aria-label={`Read: ${title}`}
                    >
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded"
                            priority={false}
                        />
                        <h2 className="text-2xl font-semibold text-emerald-700">{title}</h2>
                        <p className="text-gray-600">{description}</p>
                        <span className="inline-block mt-2 text-blue-600 hover:underline">
                            Read More →
                        </span>
                    </Link>
                ))}
            </section>
        </main>
    );
}
