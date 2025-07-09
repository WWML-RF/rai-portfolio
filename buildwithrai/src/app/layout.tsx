import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'Build With Rai',
    template: '%s | Build With Rai',
  },
  description:
    'Build With Rai offers professional web design and photography services based in San Antonio, Castroville, and Lytle. Specializing in portraits, events, landscapes, and web development using Next.js.',
  keywords: [
    'web design',
    'web design websites',
    'web design San Antonio',
    'web development',
    'next js',
    'development website',
    'sites website',
    'systems designs',
    'web design services',
    'services web development',
    'design process',
    'websites services',
    'portraits photography',
    'photography services',
    'landscapes in photography',
    'professional photos',
    'professional photoshoots',
    'gallery photographs',
    'generate image',
    'events for photography',
    'profile photo',
    'portrait pictures',
    'photoshoot 1',
    'professional photography',
    'Castroville web design',
    'Lytle photography'
  ],
  metadataBase: new URL('https://www.buildwithrai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Build With Rai',
    description:
      'Creative strategy, photography, and web development services based in San Antonio, TX. Explore our gallery and professional offerings.',
    url: 'https://www.buildwithrai.com',
    siteName: 'Build With Rai',
    images: [
      {
        url: '/gallery/img_1.webp',
        width: 1200,
        height: 630,
        alt: 'Portrait photo by Build With Rai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Build With Rai",
              image: "https://www.buildwithrai.com/gallery/img_1.webp",
              "@id": "https://www.buildwithrai.com",
              url: "https://www.buildwithrai.com",
              telephone: "+1-210-555-5555", // Optional, replace if real
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.4241,
                longitude: -98.4936,
              },
              sameAs: [
                "https://www.instagram.com/YOUR_HANDLE",
                "https://www.linkedin.com/in/YOUR_HANDLE",
              ],
              description:
                "Web development and creative photography serving San Antonio, Castroville, and Lytle. Specializing in portraits, events, and full-stack web design.",
            }),
          }}
        />
      </head>
      <body className="text-black bg-white">
        <Nav />
        <main className="min-h-screen px-4">{children}</main>
        <ScrollToTop />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
