import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "GTMVP vs hiring a fractional CMO",
  description:
    "Why fractional CMOs become slide-deck factories, and when an operator-run audit beats the retainer. A $129 Diagnostic vs an $8K to $15K/mo retainer.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-fractional-cmo" },
  openGraph: {
    title: "GTMVP vs hiring a fractional CMO | Steve Kaplan",
    description:
      "Don't fire your in-house growth hire. Quarterback them. A $129 Diagnostic vs an $8K to $15K/mo retainer.",
    url: "https://stevekaplan.ai/compare/vs-fractional-cmo",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMVP vs hiring a fractional CMO",
    description: "Quarterback your team. Don't replace it.",
  },
};

const rows = [
  {
    dim: "Cost structure",
    alt: "$8K to $15K/mo retainer. 6 to 12 month commitment is the norm.",
    audit: "Free Smart Bidding Audit. $129 Diagnostic, one-time. Rebuild starts at $3,500/mo done-for-you, only if you want me running the account.",
  },
  {
    dim: "What you get monthly",
    alt: "Standing meetings, a deck, slack messages on strategy. Sometimes one or two new hires sourced.",
    audit: "The Diagnostic in 24 hours, then you decide. On Rebuild, I run the account and the agent engine watches it continuously. No standups.",
  },
  {
    dim: "Skin in the game",
    alt: "The retainer renews whether or not the work shipped.",
    audit: "7-day money-back on the Diagnostic. On Rebuild, I beat your trailing 90-day blended CPA by 20% or I work free until I do.",
  },
  {
    dim: "Operator credibility",
    alt: "Most fractional CMOs haven't run a P&L or a paid media account in 5+ years.",
    audit: "I run $300K/mo in live paid media right now. The audit is what I do every day, on my own desk.",
  },
  {
    dim: "Replaces your team",
    alt: "Often positioned as an alternative to hiring. Doesn't actually scale with you.",
    audit: "Quarterbacks your team. Rebuild Solo and Scale augment your people; they don't replace the CMO or agency. I give them sourced evidence and run the account alongside them.",
  },
];

export default function VsFractionalCmoPage() {
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
            GTMVP · vs hiring a fractional CMO
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Don&apos;t fire your in-house growth hire.{" "}
            <span className="text-emerald">Quarterback them.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Most fractional CMO conversations are about who to fire. The right
            conversation is about who to give better evidence to. Here&apos;s the
            comparison, with the tradeoffs each path actually earns you.
          </p>

          <CompareTable altLabel="Fractional CMO retainer" rows={rows} />

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-12 tracking-tight">
            The fractional-CMO trap
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The fractional CMO category exists because $300K full-time CMOs are
            expensive and $80K marketing managers don&apos;t have the strategic surface
            area for an $8M to $50M revenue business. So the market split the
            difference: senior brain, fractional time, retainer pricing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The math works on paper. It breaks in practice because of one structural
            flaw: a fractional CMO is paid by the month, not the outcome. The retainer
            renews regardless of whether the work shipped. So the cadence becomes
            standing meetings, slide decks, and slack discussions of strategy. None of
            it compounds into a fixed account without somebody else doing the shipping.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Worst case: you replace a team you should have been quarterbacking with
            a part-time strategist who became a slide-deck factory.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            What &ldquo;quarterback&rdquo; means in practice
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your in-house team or your agency is going to execute the work. The
            question is whether they&apos;re executing the highest-leverage moves with
            sourced evidence behind them, or whether they&apos;re shipping by gut.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Diagnostic gives them: the signal-stack leaks, the dollar numbers
            attached, the remediation steps, and the order to ship in. They don&apos;t
            need a retainer-priced strategist standing over their shoulder. They
            need the ammunition.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If after the Diagnostic you decide the team can&apos;t ship the fixes on their
            own, or you don&apos;t have a team yet, Rebuild puts me on the account
            running it for you. But that&apos;s a decision you make from data, not from a
            sales call. The $129 Diagnostic and the free audit are fully self-serve.
          </p>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
