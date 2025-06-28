#!/bin/bash

# Create and enter project
npx create-next-app@latest next-portfolio --ts --app --tailwind --eslint --src-dir --import-alias "@/*" --no-experimental-app --use-npm
cd next-portfolio

# Install required packages
npm install next-seo react-icons

# Install Vercel analytics
npm install @vercel/analytics

# Create folders
mkdir -p src/components src/app/gallery src/app/projects src/app/contact src/data

# Copy your previously downloaded components
cp -R ../portfolio_components/* src/components/

# Create SEO config
cat <<EOF > src/seo.config.ts
export const SEO = {
  title: "Raidion Fails – Portfolio",
  description: "Veteran-led data science and creative portfolio featuring photography, projects, and services.",
  canonical: "https://yourdomain.com",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    site_name: 'Raidion Fails Portfolio',
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
};
EOF

# Set up basic homepage
cat <<EOF > src/app/page.tsx
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
EOF

# Update next.config.js
cat <<EOF > next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["your-image-host.com"], // Update with real image hosts
  },
  experimental: {},
};

module.exports = nextConfig;
EOF

# Ready to start
echo "✅ Setup complete! Run 'npm run dev' to start your new portfolio."

