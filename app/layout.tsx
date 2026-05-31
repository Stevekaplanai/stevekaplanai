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
      jobTitle: "Founder of GTMVP. Paid media operator and builder.",
      description:
        "Growth marketer who writes code. I ran my paid media agency, Click Then Convert, for almost 10 years: $50M+ managed at a 3.2x lifetime ROAS across 100+ clients. Now I build GTMVP, the paid media OS for B2B founders who still log into Google Ads. 9 products shipped solo with Claude Code.",
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
      name: "Steve Kaplan | Paid media operator, building GTMVP",
      publisher: { "@id": "https://stevekaplan.ai/#person" },
    },
    {
      "@type": "Service",
      "@id": "https://stevekaplan.ai/audit#service",
      name: "GTMVP Paid Media Audit and Rebuild",
      description:
        "An operator-built paid media OS for B2B founders who still log into Google Ads. A free 14-checkpoint Smart Bidding Audit, a $129 operator-written Diagnostic, and a done-for-you Rebuild service with a 20% CPA-reduction guarantee.",
      provider: { "@id": "https://stevekaplan.ai/#person" },
      url: "https://stevekaplan.ai/audit",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free Smart Bidding Audit. 14-checkpoint Google Ads self-audit, emailed instantly.",
        },
        {
          "@type": "Offer",
          price: "129",
          priceCurrency: "USD",
          description: "Diagnostic. Operator-written paid media audit, 22 modules, 24-hour turnaround, 7-day money-back.",
        },
      ],
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
    default: "Steve Kaplan | Paid media operator, building GTMVP",
    template: "%s | Steve Kaplan",
  },
  description:
    "I ran my paid media agency, Click Then Convert, for almost 10 years. $50M+ managed at a 3.2x lifetime ROAS, 100+ clients. Now I build GTMVP, the paid media OS for B2B founders who still log into Google Ads. I don't advise. I build.",
  keywords: [
    "Steve Kaplan",
    "Steve Kaplan AI",
    "GTMVP",
    "paid media OS",
    "Google Ads audit",
    "Smart Bidding audit",
    "paid media operator",
    "growth marketing",
    "AI products",
    "B2B SaaS marketing",
    "Fort Lauderdale marketing",
  ],
  authors: [{ name: "Steve Kaplan", url: "https://stevekaplan.ai" }],
  creator: "Steve Kaplan",
  publisher: "GTMVP Inc",
  alternates: {
    canonical: "https://stevekaplan.ai",
  },
  openGraph: {
    title: "Steve Kaplan | Paid media operator, building GTMVP",
    description:
      "I ran my agency, Click Then Convert, for almost 10 years: $50M+ managed at a 3.2x lifetime ROAS. Now I build GTMVP, the paid media OS for B2B founders who still log into Google Ads.",
    url: "https://stevekaplan.ai",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Kaplan | Paid media operator, building GTMVP",
    description:
      "Ran my agency Click Then Convert for almost 10 years. $50M+ managed at 3.2x. Now building GTMVP, the paid media OS for founders who still log into Google Ads.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
