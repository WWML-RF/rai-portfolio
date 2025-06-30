import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto space-y-16">

      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Image
          src="/gallery/avatar.webp"
          alt="Rai Fails headshot"
          width={120}
          height={120}
          className="mx-auto rounded-full"
        />
        <h1 className="text-5xl font-bold">
          From the Field to Framework: Empowering San Antonio Brands with Strategy, Design, and Code.
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Hi, I'm Rai Fails—a San Antonio, Texas-based strategist, industrial engineer, and veteran dedicated to turning complex systems into actionable solutions. With roots in industrial engineering, law, and communications, I help organizations streamline operations, elevate brand impact, and build sustainable growth. Whether automating logistics for the U.S. Army or optimizing digital workflows for legal teams, my work lives at the intersection of efficiency, clarity, and purpose.
        </p>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          I also offer professional photography services—including portraits, family photos, graduation sessions, and event coverage—helping you celebrate milestones and preserve memories with creativity and care.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Connect with Me
        </Link>
      </section>

      {/* Featured Project */}
      <div className="max-w-xl mx-auto">
        <section className="bg-emerald-700 rounded-xl p-4 flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-semibold text-white">Featured Project</h2>
          <p className="text-center text-white">
            Recent project: <span className="font-medium">American Tenet Project Manager</span>
          </p>
          <Link
            href="/projects/american-tenet-project"
            className="inline-block bg-blue-800 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
          >
            Read More
          </Link>
        </section>
      </div>

      {/* About & Differentiators */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">What Sets Me Apart</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>
            <b>Multidisciplinary Expertise:</b> I blend industrial engineering, legal strategy, and creative media to deliver holistic solutions.
          </li>
          <li>
            <b>Results-Focused:</b> My work consistently reduces inefficiency, improves compliance, and helps brands communicate with clarity.
          </li>
          <li>
            <b>Human-Centered:</b> I design systems and stories that empower people, not just processes.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6">Core Services</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>
            <b>Process Optimization & Compliance:</b> Lean, Six Sigma, and data-driven strategies to cut waste, boost performance, and automate legal or compliance workflows.
          </li>
          <li>
            <b>Digital Transformation & Brand Communications:</b> Integrating AI, dashboards, and automation to make your business agile—paired with strategic messaging, photography, and creative content.
          </li>
        </ul>
      </section>

      {/* Work Experience Preview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold">Holliday Energy Law Group</h3>
            <p className="text-gray-200">Legal Analyst (2023–2024)</p>
            <ul className="list-disc list-inside text-gray-200 text-sm mt-2 space-y-1">
              <li>Facilitated Lean process mapping, reducing cycle time by 15%.</li>
              <li>Automated workflows, saving significant administrative time.</li>
              <li>Developed KPI dashboards for leadership decisions.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">United States Army</h3>
            <p className="text-gray-200">Platoon Leader | Executive Officer (2015–2019)</p>
            <ul className="list-disc list-inside text-gray-200 text-sm mt-2 space-y-1">
              <li>Led logistics and operations for a 158-soldier company.</li>
              <li>Reduced reporting errors by 30% with digital transformation.</li>
              <li>Maintained 100% asset accountability across deployments.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/projects"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View My Projects
          </Link>
        </div>
      </section>

      {/* Social & Contact Links */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Connect with Me</h2>
        <div className="flex justify-center space-x-8 text-lg text-blue-600">
          <a
            href="https://www.linkedin.com/in/raidionfails"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/raidionfails"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-600"
          >
            Instagram
          </a>
          <a
            href="mailto:raidion.fails@gmail.com"
            className="underline hover:text-green-600"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}