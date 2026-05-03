import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "Profit Loop Audit vs a strategy deck",
  description:
    "Why most consultancy decks decay in 60 days, and what an audit hands you instead. $3,500 vs $8K-15K/mo retainer.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-strategy-deck" },
  openGraph: {
    title: "Profit Loop Audit vs a strategy deck | Steve Kaplan",
    description:
      "Most consultants ship a deck. I ship the system that executes it. $3,500 vs $8K-15K/mo retainer.",
    url: "https://stevekaplan.ai/compare/vs-strategy-deck",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Profit Loop Audit vs a strategy deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Loop Audit vs a strategy deck",
    description: "Most consultants ship a deck. I ship the system that executes it.",
    images: ["/og-card.jpg"],
  },
};

const rows = [
  {
    dim: "Deliverable",
    alt: "47-slide PDF. Sometimes a Notion doc.",
    audit: "Stack map + data baseline + 5 wins ranked by effort vs lift + 30/60/90 plan. PDF you can share.",
  },
  {
    dim: "Time to first action",
    alt: "60-90 days for the deck. Then the team has to translate it into work.",
    audit: "5 business days end-to-end. Day 5 you have the ranked wins, dollar numbers, and the next step.",
  },
  {
    dim: "Cost",
    alt: "$8K-15K/mo retainer. Often a 6- or 12-month minimum.",
    audit: "$3,500 flat. No retainer, no minimum, no upsell sequence after.",
  },
  {
    dim: "Half-life",
    alt: "Decays in ~60 days as channels move and the market shifts.",
    audit: "30-day plan is most fresh; 60- and 90-day track is sequenced so the latest wins are always the highest-leverage ones at that moment.",
  },
  {
    dim: "Accountability",
    alt: "The deck doesn't ship anything. The consultant is gone before you find out it didn't work.",
    audit: "Refund if I find fewer than 3 executable wins. 100% credited toward a retainer if you sign within 30 days.",
  },
];

export default function VsStrategyDeckPage() {
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
            Profit Loop Audit · vs a strategy deck
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Most consultants ship a deck.{" "}
            <span className="text-emerald">I ship the system that executes it.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            The strategy deck is the most common GTM consulting deliverable in the world.
            It&apos;s also the most useless one once the consultant&apos;s out the door.
            Here&apos;s the honest comparison.
          </p>

          <CompareTable altLabel="Strategy deck consultant" rows={rows} />

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-12 tracking-tight">
            Why decks fail in the wild
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The deck is the easiest billable artifact a consultant can produce. It scales
            in the only direction that matters to a consulting practice: presentation hours.
            It scales in the wrong direction for you, the operator: every slide is one more
            thing your team has to translate into work, and translation is where most
            strategy goes to die.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I&apos;ve sat on the other side of 30+ of these. The consultant leaves, the deck
            gets emailed around, the head of marketing reads it, agrees with the framing,
            assigns three actions to her team, and the team gets pulled into the next
            quarterly sprint before any of those actions ship. By Day 60, the deck is a PDF
            sitting in a Slack thread nobody opens.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The audit doesn&apos;t cure the assignment problem &mdash; nothing does, except
            executing the work yourself. But it cuts the translation gap to zero. Each
            of the 5 wins is scoped to one person, with a dollar number, an effort
            estimate, and a 30/60/90 day track that maps to a sprint your team is already
            running.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            When the deck is actually the right call
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Two cases I&apos;d send you to a deck-shaped engagement instead:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-emerald font-mono">&rarr;</span>
              <span>You need a board narrative, not an execution plan. A deck is the
              right shape for an external story; an audit is the right shape for an
              internal sprint.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald font-mono">&rarr;</span>
              <span>You&apos;re pre-PMF and the question is &ldquo;what is our category?&rdquo;
              not &ldquo;what wins should we ship?&rdquo; Different question, different shape
              of answer.</span>
            </li>
          </ul>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
