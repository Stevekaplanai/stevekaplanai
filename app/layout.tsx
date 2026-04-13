import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://stevekaplan.ai/#person",
      name: "Steve Kaplan",
      url: "https://stevekaplan.ai",
      jobTitle: "AI Automation Consultant & Growth Marketer",
      description:
        "Growth marketer who writes code. $50M+ ad spend managed. 9 AI products built solo. Director of Marketing at a 76-person financial advisory firm.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steve%20Headshot-LYW2CejUfUZzhDbWmR0cq4GVWRAgwJ.jpg",
      sameAs: [
        "https://linkedin.com/in/stevekaplanai",
        "https://github.com/stevekaplanai",
        "https://gtmvp.com",
      ],
      knowsAbout: [
        "AI Automation",
        "Growth Marketing",
        "Paid Media (Meta, Google, TikTok)",
        "Marketing Attribution",
        "B2B SaaS",
        "Claude Code",
        "Full-Stack Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Lauderdale",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://stevekaplan.ai/#website",
      url: "https://stevekaplan.ai",
      name: "Steve Kaplan | AI Automation & Growth Marketing",
      publisher: { "@id": "https://stevekaplan.ai/#person" },
    },
    {
      "@type": "Service",
      "@id": "https://stevekaplan.ai/audit#service",
      name: "Profit Loop Audit",
      description:
        "5-day flat-fee GTM stack audit for $10M to $100M companies. Find the top 5 AI and automation wins, ranked by effort vs lift, with a 30/60/90 day roadmap. $3,500 flat. Money-back guarantee.",
      provider: { "@id": "https://stevekaplan.ai/#person" },
      url: "https://stevekaplan.ai/audit",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      offers: {
        "@type": "Offer",
        price: "3500",
        priceCurrency: "USD",
        description: "Flat fee, 5 business days, fully credited toward a retainer",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://stevekaplan.ai/#org",
      name: "GTMVP Inc",
      url: "https://gtmvp.com",
      founder: { "@id": "https://stevekaplan.ai/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Lauderdale",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stevekaplan.ai"),
  title: {
    default: "Steve Kaplan | AI Automation & Growth Marketing",
    template: "%s | Steve Kaplan",
  },
  description:
    "Growth marketer who writes code. $50M+ ad spend managed. 9 AI products built solo. I don't advise. I build.",
  keywords: [
    "Steve Kaplan",
    "Steve Kaplan AI",
    "AI automation consultant",
    "growth marketing",
    "fractional CMO",
    "AI products",
    "marketing data stack",
    "GTM automation",
    "Profit Loop Audit",
    "B2B SaaS marketing",
    "Fort Lauderdale marketing",
    "GTMVP",
  ],
  authors: [{ name: "Steve Kaplan", url: "https://stevekaplan.ai" }],
  creator: "Steve Kaplan",
  publisher: "GTMVP Inc",
  alternates: {
    canonical: "https://stevekaplan.ai",
  },
  openGraph: {
    title: "Steve Kaplan | AI Automation & Growth Marketing",
    description:
      "Growth marketer who writes code. $50M+ ad spend managed. 9 AI products built solo. I don't advise. I build.",
    url: "https://stevekaplan.ai",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Kaplan | AI Automation & Growth Marketing",
    description:
      "Growth marketer who writes code. $50M+ ad spend. 9 AI products built.",
    creator: "@stevekaplanai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
