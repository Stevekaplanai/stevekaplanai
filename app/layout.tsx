import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Steve Kaplan | The CMO Who Writes Code",
  description:
    "Growth marketer who writes code. Published author. $50M+ ad spend managed. 9 AI products built. I don't advise. I build.",
  keywords: [
    "Steve Kaplan",
    "growth marketing",
    "fractional CMO",
    "AI products",
    "marketing data stack",
    "BigQuery",
    "PostHog",
    "marketing automation",
    "published author",
    "AI builder",
  ],
  authors: [{ name: "Steve Kaplan" }],
  creator: "Steve Kaplan",
  openGraph: {
    title: "Steve Kaplan | The CMO Who Writes Code",
    description:
      "Growth marketer who writes code. Published author. $50M+ ad spend managed. 9 AI products built. I don't advise. I build.",
    url: "https://stevekaplan.ai",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Kaplan | The CMO Who Writes Code",
    description:
      "Growth marketer who writes code. Published author. $50M+ ad spend managed. 9 AI products built.",
    creator: "@stevekaplanai",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
