import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/saaspocolypse/admin",
        destination: "/saaspocolypse/admin/index.html",
      },
      {
        source: "/saaspocolypse/share",
        destination: "/saaspocolypse/share/index.html",
      },
    ];
  },
};

export default nextConfig;
