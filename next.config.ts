/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["your-image-host.com"], // Update this with actual domains if needed
  },
  experimental: {
    serverActions: {}
  },
};

module.exports = nextConfig;
