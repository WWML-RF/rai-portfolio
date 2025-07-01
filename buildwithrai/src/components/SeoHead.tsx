// components/SeoHead.tsx
'use client';

import Head from 'next/head';

type SeoProps = {
    title: string;
    description: string;
    url: string;
    image?: string;
};

export function SeoHead({ title, description, url, image }: SeoProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Raidion Fails",
        url,
        sameAs: [
            "https://www.linkedin.com/in/raidionfails",
            "https://buildwithrai.com"
        ],
        description,
    };

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </Head>
    );
}
