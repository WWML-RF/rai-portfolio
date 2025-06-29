import type { Metadata } from "next";
//import { SeoHead } from "@/components/SeoHead";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raidion Fails – Portfolio",
  description: "Veteran, technologist, and creative. Explore my photography and data work.",
  keywords: ["Raidion Fails", "portfolio", "photography", "data", "veteran", "hire", "San Antonio"],
  metadataBase: new URL("https://yourdomain.com"), // Replace with real domain
  openGraph: {
    title: "Raidion Fails – Portfolio",
    description: "Photography, data science, and creative tech.",
    url: "https://yourdomain.com",
    siteName: "Raidion Fails",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with an actual image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raidion Fails – Portfolio",
    description: "Photography, data science, and creative tech.",
    creator: "@yourTwitter", // optional
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Nav />
        <main>{children}</main>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
