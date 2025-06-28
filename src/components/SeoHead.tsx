import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SeoHead = ({
  title = "My Portfolio | Raidion Fails",
  description = "Welcome to my professional and photography portfolio. Learn more, view work, and book services.",
  image = "/default-og-image.jpg", // Replace with actual path or hosted URL
  url = "https://yourdomain.com",   // Replace with your real domain
}: SeoHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    
    {/* Open Graph (Facebook, LinkedIn, etc.) */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    
    {/* Canonical URL */}
    <link rel="canonical" href={url} />
  </Head>
);
