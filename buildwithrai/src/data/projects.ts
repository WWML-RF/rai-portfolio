// src/data/projects.ts
import { Project } from '../types/project'; // KEEP THIS

const projects: Project[] = [
    {
        slug: "american-tenet-project",
        title: "American Tenet – Defense-Grade Project Management",
        description: "As a project manager and operations leader at aerospace startup American Tenet, RaiDion helped build internal systems from scratch. He led a full migration to Microsoft 365, designed secure SharePoint environments for engineering and business dev teams, and developed SOPs for Controlled Unclassified Information (CUI), NDAs, and compliance training. He also supported investor outreach, project planning, and executive decision-making during high-stakes UAS R&D projects.",
        image: "/gallery/img_74.webp",
        content: `
        <h3>Project Overview</h3>
        <p>At American Tenet, I architected the digital and operational backbone...</p>
        <ul>
            <li><strong>SharePoint:</strong> Set up permissions and version control</li>
            <li><strong>Compliance:</strong> SOPs, NDAs, onboarding, and CUI training</li>
        </ul>
    `
    },
    {
        slug: "veterans-advocacy",
        title: "Advocacy in Action – Veterans Law, Indigent Case Management, and Legal Innovation",
        description: "Through fellowships and internships with Texas RioGrande Legal Aid (TRLA), San Antonio Legal Services Association (SALSA), and the Warrior Defense Project, RaiDion supported underserved communities and U.S. veterans. His work included developing psychiatric advanced directives (PADs), authoring legal education materials, and conducting deep research into military policy and administrative law.",
        image: "/gallery/img_68.webp",
        content: `
        <h3>Project Overview</h3>
        <p>Legal research, PADs, and veteran casework with TRLA, SALSA, and WDP.</p>
        <ul>
            <li><strong>Impact:</strong> Improved access to legal resources for vulnerable populations</li>
            <li><strong>Tools:</strong> Westlaw, LexisNexis, Adobe</li>
        </ul>
    `
    },
    {
        slug: "write-with-my-lens",
        title: "Write With My Lens – Bridging Engineering with Creative Strategy",
        description: "Write With My Lens is RaiDion’s personal creative venture that helps small businesses and nonprofits—especially veteran-led organizations—build strong brand identities. He provides end-to-end digital presence solutions using WordPress, React, Figma, and Adobe Suite. He also produces high-quality photo and video content in San Antonio, Tx. for storytelling and marketing.",
        image: "/gallery/img_31.webp",
        content: `
        <h3>Project Overview</h3>
        <p>Photography, web development, and branding for veteran-owned businesses.</p>
        <ul>
            <li><strong>Tools:</strong> WordPress, React, Figma, Adobe Suite</li>
        </ul>
    `
    },
    {
        slug: "operational-excellence",
        title: "Military Precision Meets Scalable Process Design",
        description: "RaiDion managed over $80M in assets and led logistics operations for a 158-soldier company in the U.S. Army. He applied Lean Six Sigma to streamline operations, reduce downtime by 37%, and improve inventory accuracy. By developing Excel-based dashboards for equipment and personnel readiness, he enabled commanders to make faster, data-informed decisions.",
        image: "/gallery/img_49.webp",
        content: `
        <h3>Project Overview</h3>
        <p>Applied Lean Six Sigma to build operational dashboards and SOPs.</p>
        <ul>
            <li><strong>Results:</strong> Reduced downtime 37%, zero losses in $80M equipment audit</li>
        </ul>
    `
    },
    {
        slug: "holliday-legal-automation",
        title: "Holliday Energy Law Group Process Improvement – Automating Legal Workflows",
        description: "At Holliday Energy Law Group, RaiDion transformed energy title workflows with custom VBA macros and GUI tools that automated data transfer between Excel and Word—cutting documentation time by 20%. As SharePoint Administrator, he centralized file governance, created secure access layers, and reduced software expenses by replacing Dropbox, Slack, and Hubspot.",
        image: "/gallery/img_75.webp",
        content: `
        <h3>Project Overview</h3>
        <p>Digitized oil & gas legal workflows and boosted efficiency with Microsoft tools.</p>
        <ul>
            <li><strong>Tools:</strong> Excel (VBA), SharePoint, Teams</li>
        </ul>
    `
    }
];

export default projects;
