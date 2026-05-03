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
  async headers() {
    return [
      {
        source: "/saaspocolypse/og-card.jpg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/saaspocolypse",
        destination: "/saaspocolypse/index.html",
      },
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
