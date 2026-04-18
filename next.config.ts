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
        destination: "/saaspocolypse/admin.html",
      },
      {
        source: "/saaspocolypse/share",
        destination: "/saaspocolypse/share.html",
      },
    ];
  },
};

export default nextConfig;
