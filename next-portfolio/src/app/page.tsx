import { SeoHead } from "@/components/SeoHead";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SeoHead title="Home | Raidion Fails" />
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="mb-6">Explore my photography, projects, and book my services.</p>
        <ul className="space-y-2">
          <li><Link href="/projects" className="text-blue-500">📁 View Projects</Link></li>
          <li><Link href="/gallery" className="text-blue-500">📸 Photography Gallery</Link></li>
          <li><a href="https://calendly.com/yourusername" className="text-blue-500">📅 Book via Calendly</a></li>
        </ul>
        <div className="mt-6">
          <p>Find me on:</p>
          <ul className="flex gap-4 mt-2">
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
            <li><a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">📸 Instagram</a></li>
            <li><a href="mailto:you@example.com">📧 Email</a></li>
          </ul>
        </div>
      </main>
      <Analytics />
    </>
  );
}
