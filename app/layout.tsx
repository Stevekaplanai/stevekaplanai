import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steve Kaplan | Growth Marketing, Engineered",
  description:
    "I don't advise. I build. Growth marketer who writes code. $50M+ ad spend managed. 8 AI products built. I build the growth engine — not just the strategy.",
  keywords: [
    "fractional CMO",
    "growth marketing",
    "marketing data stack",
    "BigQuery",
    "PostHog",
    "AI marketing",
    "marketing automation",
  ],
  authors: [{ name: "Steve Kaplan" }],
  openGraph: {
    title: "Steve Kaplan | Growth Marketing, Engineered",
    description:
      "I don't advise. I build. The $259K marketing data stack that replaces enterprise platforms at 88% less cost.",
    url: "https://stevekaplan.ai",
    siteName: "stevekaplan.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Kaplan | Growth Marketing, Engineered",
    description:
      "I don't advise. I build. The $259K marketing data stack that replaces enterprise platforms at 88% less cost.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
