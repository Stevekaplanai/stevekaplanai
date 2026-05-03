import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "Profit Loop Audit vs DIY with ChatGPT Pro",
  description:
    "Why ChatGPT Pro can't run a stack inventory or rank wins by effort vs lift. $200/mo + your evenings vs $3,500 once.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-chatgpt-pro" },
  openGraph: {
    title: "Profit Loop Audit vs DIY with ChatGPT Pro | Steve Kaplan",
    description:
      "ChatGPT Pro can't pull your data, inventory your stack, or rank wins by effort vs lift. $200/mo vs $3,500 once.",
    url: "https://stevekaplan.ai/compare/vs-chatgpt-pro",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Profit Loop Audit vs DIY with ChatGPT Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Loop Audit vs DIY with ChatGPT Pro",
    description: "What ChatGPT can't do. And why you still want both.",
    images: ["/og-card.jpg"],
  },
};

const rows = [
  {
    dim: "Cost",
    alt: "$200/mo subscription + 20-40 hours of your evenings.",
    audit: "$3,500 flat. ~3 hours of your time across 5 days.",
  },
  {
    dim: "Stack inventory",
    alt: "ChatGPT can describe what tools EXIST in the world. It can't tell you what's running on YOUR stack.",
    audit: "I inventory every tool, integration, and manual handoff in your actual GTM stack. Table + diagram.",
  },
  {
    dim: "Data baseline",
    alt: "ChatGPT can't pull your spend, your conversions, or your attribution data. You'd have to feed it everything.",
    audit: "I pull pipeline, spend, conversions, and attribution gaps. Dashboard snapshot.",
  },
  {
    dim: "Operator review",
    alt: "Generic recommendations no operator has ever shipped. Hallucinations are silent.",
    audit: "Every recommendation has been shipped, by me, against real spend. The audit IS the operator review.",
  },
  {
    dim: "Accountability",
    alt: "The model is wrong sometimes. There's nobody to refund you.",
    audit: "Refund if fewer than 3 executable wins. The model can't do that.",
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
            &larr; All comparisons
          </Link>

          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Profit Loop Audit · vs DIY with ChatGPT Pro
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            $200/mo of generic recommendations.{" "}
            <span className="text-emerald">Or $3,500 from someone who&apos;s shipped them.</span>
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
            What it can&apos;t do is the audit. The audit isn&apos;t a thinking exercise
            &mdash; it&apos;s a stack inventory, a data baseline, an effort-vs-lift
            ranking, and a 30/60/90 plan. Each of those requires reading your
            actual systems, pulling your actual numbers, and judging the work
            against patterns I&apos;ve shipped (not patterns I&apos;ve trained on).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The model can write a generic 30/60/90 plan. It can&apos;t tell you
            that your CRM lead-routing rule is leaking 32% of inbound to a
            dead-letter status, because nobody told it the rule.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            Use ChatGPT after the audit, not instead of it
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The audit hands you a 30/60/90 plan. ChatGPT Pro is fantastic at
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
