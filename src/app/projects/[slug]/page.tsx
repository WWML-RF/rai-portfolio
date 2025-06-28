import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        slug: "american-tenet-project",
        title: "American Tenet – Defense-Grade Project Management",
        description:
            "Built the digital backbone for an aerospace startup, leading Microsoft 365 migration, compliance, and project governance for advanced UAS R&D.",
        image: "/gallery/img_74.webp",
        content: `
    <h3>Project Overview</h3>
    <p>At American Tenet, I architected the digital and operational backbone for advanced Unmanned Aerial Systems (UAS) R&D. My work spanned business and engineering teams, building a project management and compliance framework capable of scaling with rapid innovation, investor relations, and regulatory demands.</p>
    <h3>My Approach</h3>
    <ul>
        <li><strong>Microsoft 365 Infrastructure:</strong> Led the migration from fragmented tools to a unified SharePoint + Teams environment, establishing permissions, version control, and document standardization.</li>
        <li><strong>Compliance Binder:</strong> Developed SOPs, NDAs, onboarding packets, and CUI training tailored for defense tech.</li>
        <li><strong>Project Governance:</strong> Built project charters, briefs, retrospectives, and risk docs. Used Scrumban (MS Planner) to manage R&D and business development.</li>
        <li><strong>Stakeholder Orchestration:</strong> Coordinated between engineers, legal advisors, investors, universities, and government partners.</li>
    </ul>
    <h3>Impact</h3>
    <ul>
        <li>Created sustainable, cross-functional team environments for a zero-budget startup.</li>
        <li>Reduced tool fragmentation and licensing costs by unifying on Microsoft 365.</li>
        <li>Increased document security, traceability, and audit-readiness for CUI compliance.</li>
        <li>Accelerated funding readiness through consistent project briefs and investor decks.</li>
    </ul>
    <h3>Outcome</h3>
    <p>My systems enabled American Tenet to operate like a Series A startup before securing initial capital—laying the foundation for scalable innovation and investor trust.</p>
    `,
    },
    {
        slug: "army-logistics-ops",
        title: "OpsEngine – Military Precision Meets Scalable Process Design",
        description:
            "Developed a modular logistics and process optimization framework for the U.S. Army, managing $80M+ in assets and 150+ personnel.",
        image: "/gallery/img_49.webp",
        content: `
    <h3>Project Overview</h3>
    <p>While serving as a U.S. Army Logistics Officer, I developed <strong>OpsEngine</strong>, a modular framework for asset tracking, process optimization, and readiness monitoring—scalable from field platoons to battalion-level operations.</p>
    <h3>My Approach</h3>
    <ul>
        <li><strong>Process Engineering:</strong> Applied Lean tools, Root Cause Analysis, and SOP mapping to streamline training and maintenance cycles.</li>
        <li><strong>Tech Implementation:</strong> Built Excel-based dashboards for inventory, equipment, and personnel tracking—tools adopted by multiple commands.</li>
        <li><strong>Team Readiness:</strong> Led 150+ personnel across multiple deployments; created study halls and promotion pathways for NCOs and junior enlisted Soldiers.</li>
        <li><strong>Security & Continuity:</strong> Built secure workflows and redundant reporting systems, ensuring mission continuity and asset accountability.</li>
    </ul>
    <h3>Impact</h3>
    <ul>
        <li>Achieved 95%+ operational readiness rate in Korea and SOF support roles.</li>
        <li>Managed $80M+ in assets with zero losses during audit.</li>
        <li>Created the SOP backbone adopted by incoming leadership and other platoons.</li>
    </ul>
    <h3>Outcome</h3>
    <p>OpsEngine continues to influence readiness practices within multiple U.S. Army units and stands as a model for scalable operations infrastructure.</p>
    `,
    },
    {
        slug: "write-with-my-lens",
        title: "Write With My Lens – Bridging Engineering with Creative Strategy",
        description:
            "Founded a creative studio delivering web, branding, and content solutions for small businesses and nonprofits, especially veteran-led organizations.",
        image: "/gallery/img_31.webp",
        content: `
    <h3>Project Overview</h3>
    <p><strong>Write With My Lens</strong> is my personal creative venture, built to help small businesses and nonprofits—especially veteran-led organizations—craft strong brand identities and digital ecosystems. I provide end-to-end solutions: from web architecture and branding to high-impact photography and video, all rooted in technical excellence and storytelling.</p>
    <h3>My Approach</h3>
    <ul>
        <li><strong>Web Architecture:</strong> Designed and deployed WordPress and React websites, optimized for performance, branding, and user experience.</li>
        <li><strong>Visual Identity:</strong> Produced original photo and video content, building content libraries tailored to client personas and business goals.</li>
        <li><strong>Creative Strategy:</strong> Delivered full-service branding packages, including visual systems, site structure, messaging guides, and launch roadmaps.</li>
        <li><strong>Client Empowerment:</strong> Provided hands-on training and support for site maintenance and content updates.</li>
    </ul>
    <h3>Impact</h3>
    <ul>
        <li>Delivered 3–6 week turnaround for full-stack branding and web implementation.</li>
        <li>Increased client engagement through storytelling-focused visuals.</li>
        <li>Produced evergreen content that helped businesses boost visibility and trust.</li>
    </ul>
    <h3>Outcome</h3>
    <p>Write With My Lens continues to help visionaries turn ideas into compelling digital ecosystems—combining strategy, storytelling, and scalable design.</p>
    `,
    },
    {
        slug: "holliday-energy-law",
        title: "HollidayOps – Automating Legal Workflows",
        description:
            "Transformed legal workflows with VBA automation and SharePoint governance, saving 20+ hours/week and reducing risk for an energy law firm.",
        image: "/gallery/img_75.webp",
        content: `
    <h3>Project Overview</h3>
    <p>At Holliday Energy Law Group, I merged process automation with legal compliance—leading digital transformation for oil & gas title law operations. My focus: reduce manual, time-consuming processes and streamline document control to boost efficiency and security.</p>
    <h3>My Approach</h3>
    <ul>
        <li><strong>Excel & VBA Automation:</strong> Automated data-to-Word generation from multi-sheet allocation models, cutting document preparation time by 30%.</li>
        <li><strong>SharePoint Implementation:</strong> Migrated team data to SharePoint, implemented secure access layers, integrated Teams, and set up file recovery protocols.</li>
        <li><strong>Compliance & Training:</strong> Developed phishing/security training, CoPilot agents, and data integrity protocols following breach response.</li>
        <li><strong>Cost Optimization:</strong> Replaced Dropbox, Lucidchart, and Slack with Microsoft 365-native workflows, reducing SaaS overhead and centralizing operations.</li>
    </ul>
    <h3>Impact</h3>
    <ul>
        <li>Enabled real-time collaboration, compliance visibility, and secure file access.</li>
        <li>Saved 20+ hours per week in manual processing.</li>
        <li>Standardized digital training for legal support staff.</li>
        <li>Reduced documentation time by 20% and improved operational transparency.</li>
    </ul>
    <h3>Outcome</h3>
    <p>My work laid the foundation for scalable legal operations at Holliday Energy Law Group—reducing risk, boosting transparency, and empowering the team with modern, efficient workflows.</p>
    `,
    },
    {
        slug: "advocacy-in-action",
        title: "Advocacy in Action – Veterans Law & Legal Innovation",
        description:
            "Supported underserved communities and veterans through legal research, policy analysis, and public interest advocacy with TRLA, SALSA, and the Warrior Defense Project.",
        image: "/gallery/img_68.webp",
        content: `
    <h3>Project Overview</h3>
    <p>Through fellowships and internships with Texas RioGrande Legal Aid (TRLA), San Antonio Legal Services Association (SALSA), and the Warrior Defense Project, I supported underserved communities and U.S. veterans. My work included developing psychiatric advanced directives (PADs), authoring legal education materials, and conducting deep research into military policy and administrative law.</p>
    <h3>My Approach</strong></h3>
    <ul>
        <li><strong>TRLA:</strong> Conducted legal research and policy analysis for the Psychiatric Advance Directives (PADs) project. Drafted directives and developed outreach materials to help individuals proactively manage their mental health treatment.</li>
        <li><strong>SALSA:</strong> Assisted veterans with housing, benefits, and consumer legal issues through intake, case review, and support to supervising attorneys. Selected as a Moody Foundation Veterans Law Fellow.</li>
        <li><strong>Warrior Defense Project:</strong> Appointed Senior Research Fellow supporting veteran defense initiatives and policy review. Drafted internal white papers and analyzed statutory protections related to PTSD, sexual trauma, and military discharge review.</li>
    </ul>
    <h3>Impact</h3>
    <ul>
        <li>Improved access to legal knowledge and tools for underserved communities.</li>
        <li>Delivered legal education and advocacy to clients navigating mental health challenges.</li>
        <li>Supported legal service providers with targeted research, case analysis, and public-facing resources.</li>
        <li>Helped shape military-connected legal policy through interdisciplinary scholarship.</li>
    </ul>
    <h3>Outcome</h3>
    <p>My legal fellowships and research work continue to influence how legal aid, policy, and veteran-centered advocacy intersect—and how we can use law to drive dignity, access, and long-term impact.</p>
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
