import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "Profit Loop Audit vs hiring a fractional CMO",
  description:
    "Why fractional CMOs become slide-deck factories, and when an audit beats the retainer. $3,500 flat vs $8K-15K/mo.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-fractional-cmo" },
};

const rows = [
  {
    dim: "Cost structure",
    alt: "$8K-15K/mo retainer. 6-12 month commitment is the norm.",
    audit: "$3,500 flat. One engagement. 100% credited if you sign a retainer within 30 days.",
  },
  {
    dim: "What you get monthly",
    alt: "Standing meetings, a deck, slack messages on strategy. Sometimes one or two new hires sourced.",
    audit: "Five days, then the audit. After that, you decide if you want me on retainer with the same shape of work.",
  },
  {
    dim: "Skin in the game",
    alt: "The retainer renews whether or not the work shipped.",
    audit: "Refund if fewer than 3 executable wins. The audit IS the proof of fit before any retainer.",
  },
  {
    dim: "Operator credibility",
    alt: "Most fractional CMOs haven't run a P&L or a paid media account in 5+ years.",
    audit: "I'm currently running $300K/mo in paid media as Director of Marketing at a 76-person firm. The audit is what I do every day, on my own desk.",
  },
  {
    dim: "Replaces your team",
    alt: "Often positioned as an alternative to hiring. Doesn't actually scale with you.",
    audit: "Quarterbacks your team. The 30/60/90 plan is what your existing people execute. I'm not trying to replace them; I'm trying to give them sourced evidence.",
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
            &larr; All comparisons
          </Link>

          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Profit Loop Audit · vs hiring a fractional CMO
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
            area for an $8M&ndash;$50M revenue business. So the market split the
            difference: senior brain, fractional time, retainer pricing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The math works on paper. It breaks in practice because of one structural
            flaw: a fractional CMO is paid by the month, not the outcome. The retainer
            renews regardless of whether the wins shipped. So the cadence becomes
            standing meetings, slide decks, and slack discussions of strategy &mdash;
            none of which compound into shipped work without somebody else doing the
            shipping.
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
            The audit gives them: the ranked list of wins, the dollar numbers
            attached, the effort estimates, and the order to ship in. They don&apos;t
            need a retainer-priced strategist standing over their shoulder. They
            need the ammunition.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If after the audit you decide the team can&apos;t ship the wins on their
            own &mdash; or you don&apos;t have a team yet &mdash; the audit credits 100%
            toward a retainer with me. But that&apos;s a decision you make from data,
            not from a sales call.
          </p>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
