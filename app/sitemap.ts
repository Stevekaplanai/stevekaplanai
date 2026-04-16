import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stevekaplan.ai";

  return [
    { url: baseUrl, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/audit`, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/audit/sample`, lastModified: "2026-04-13", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/case-studies/paid-media-scale`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/case-studies/50m-ad-spend`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/case-studies/ai-products`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog/audience-segment-changed-everything`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/9-products-solo-with-ai`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/closed-my-agency-after-50m`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.6 },
  ];
}
