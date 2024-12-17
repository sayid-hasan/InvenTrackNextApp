/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  productionBrowserSourceMaps: false, // Suppresses source maps in production
};

export default nextConfig;
