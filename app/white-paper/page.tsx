import type { Metadata } from "next";
import { Header } from "@/components/header";
import { WhitePaperPreview } from "@/components/white-paper-preview";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The $259K Marketing Data Stack — Free White Paper",
  description:
    "The exact 6-tool stack I use to give mid-market clients a modern AI-powered marketing data foundation at 88% less than legacy enterprise platforms. Free 16-page white paper by Steve Kaplan.",
  alternates: {
    canonical: "https://stevekaplan.ai/white-paper",
  },
  openGraph: {
    title: "The $259K Marketing Data Stack — Free White Paper | Steve Kaplan",
    description:
      "The 6-tool stack I use to replace $295K enterprise platforms — at 88% less cost. Free 16-page white paper.",
    url: "https://stevekaplan.ai/white-paper",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The $259K Marketing Data Stack — Free White Paper",
    description: "The 6-tool stack I use to replace $295K enterprise platforms — at 88% less cost.",
  },
};

export default function WhitePaperPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <WhitePaperPreview />
      </main>
      <Footer />
    </>
  );
}
