import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "GTMVP vs DIY with ChatGPT Pro",
  description:
    "Why ChatGPT Pro can't audit your Smart Bidding signal stack or pull your real spend. $200/mo + your evenings vs a free Smart Bidding Audit.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-chatgpt-pro" },
  openGraph: {
    title: "GTMVP vs DIY with ChatGPT Pro | Steve Kaplan",
    description:
      "ChatGPT Pro can't pull your spend, audit your Smart Bidding signal stack, or find the leaks. $200/mo vs a free Smart Bidding Audit.",
    url: "https://stevekaplan.ai/compare/vs-chatgpt-pro",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "GTMVP vs DIY with ChatGPT Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMVP vs DIY with ChatGPT Pro",
    description: "What ChatGPT can't do. And why you still want both.",
    images: ["/og-card.jpg"],
  },
};

const rows = [
  {
    dim: "Cost",
    alt: "$200/mo subscription + 20 to 40 hours of your evenings.",
    audit: "Free Smart Bidding Audit, ~30 minutes self-run. $129 Diagnostic if you want the operator-written version.",
  },
  {
    dim: "Signal-stack audit",
    alt: "ChatGPT can describe how Smart Bidding works in general. It can't tell you what your tCPA targets and conversion signals are doing.",
    audit: "The Diagnostic audits your actual Smart Bidding signal stack: 14 checkpoints free, 22 modules at $129.",
  },
  {
    dim: "Data baseline",
    alt: "ChatGPT can't pull your spend, your conversions, or your attribution data. You'd have to feed it everything.",
    audit: "The audit reads your real spend, conversions, and attribution gaps, then shows where the budget leaks.",
  },
  {
    dim: "Operator review",
    alt: "Generic recommendations no operator has ever shipped. Hallucinations are silent.",
    audit: "Every recommendation has been shipped, by me, against real spend across $50M+ in lifetime managed budget.",
  },
  {
    dim: "Accountability",
    alt: "The model is wrong sometimes. There's nobody to refund you.",
    audit: "7-day money-back on the Diagnostic. On Rebuild, I beat your trailing 90-day CPA by 20% or I work free until I do. The model can't do that.",
  },
];

export default function VsChatGptProPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="w-full max-w-3xl mx-auto px-6">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1 text-sm text-electric hover:text-electric/80 mb-6"
          >
            Back to all comparisons
          </Link>

          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            GTMVP · vs DIY with ChatGPT Pro
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            $200/mo of generic recommendations.{" "}
            <span className="text-emerald">Or an operator who&apos;s shipped them against $50M+ in spend.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            ChatGPT Pro is the most powerful generic-strategist tool ever built.
            It&apos;s also blind to your actual stack, your actual data, and your
            actual customer. Here&apos;s where the line is.
          </p>

          <CompareTable altLabel="ChatGPT Pro DIY" rows={rows} />

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-12 tracking-tight">
            What ChatGPT Pro is actually good at
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Honest answer: a lot. I use it every day. It&apos;s a research analyst,
            a copywriter, a code review partner, a thought partner on positioning.
            For 80% of marketing work, it&apos;s genuinely the best thing
            money can buy at $200/mo.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What it can&apos;t do is the audit. The audit isn&apos;t a thinking exercise.
            It&apos;s a Smart Bidding signal-stack review, a real-spend baseline, and a
            written remediation plan. Each of those requires reading your actual
            account, pulling your actual numbers, and judging the work against
            patterns I&apos;ve shipped (not patterns I&apos;ve trained on).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The model can write a generic remediation plan. It can&apos;t tell you
            that your tCPA target is throttling your highest-intent campaign, because
            nobody handed it your conversion data.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            Use ChatGPT after the audit, not instead of it
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The audit hands you a written remediation plan. ChatGPT Pro is fantastic at
            executing the plan: writing the email sequences, drafting the
            campaign copy, writing the SQL, building the SOP doc.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            That&apos;s the right shape: human-graded operator audit at the top of
            the funnel, AI-accelerated execution after. The 80% leverage of
            ChatGPT Pro lives downstream of having the right plan to execute.
          </p>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
