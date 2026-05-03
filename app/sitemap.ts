import type { MetadataRoute } from "next";

const baseUrl = "https://stevekaplan.ai";
const today = "2026-05-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const compareSlugs = [
    "vs-strategy-deck",
    "vs-fractional-cmo",
    "vs-junior-marketer",
    "vs-agency-retainer",
    "vs-chatgpt-pro",
  ];

  return [
    // Top-level
    { url: baseUrl, lastModified: today, changeFrequency: "weekly", priority: 1.0 },

    // Audit funnel — highest commercial priority
    { url: `${baseUrl}/audit`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/audit/sample`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/standards`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/compare`, lastModified: today, changeFrequency: "weekly", priority: 0.85 },
    ...compareSlugs.map((slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Lead magnet
    { url: `${baseUrl}/white-paper`, lastModified: today, changeFrequency: "monthly", priority: 0.75 },

    // Live event
    { url: `${baseUrl}/saaspocolypse`, lastModified: today, changeFrequency: "daily", priority: 0.85 },

    // Case studies
    { url: `${baseUrl}/case-studies`, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/case-studies/paid-media-scale`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/case-studies/50m-ad-spend`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/case-studies/ai-products`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.65 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/audience-segment-changed-everything`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.55 },
    { url: `${baseUrl}/blog/9-products-solo-with-ai`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.55 },
    { url: `${baseUrl}/blog/closed-my-agency-after-50m`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.55 },
  ];
}
