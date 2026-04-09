/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/sell-land',
        destination: '/ohio-valley-guides',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
