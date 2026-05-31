import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookAuditButton } from "@/components/book-audit-modal";

export const metadata: Metadata = {
  title: "Compare: GTMVP vs the alternatives",
  description:
    "Side-by-side comparisons of an operator-run paid media audit against fractional CMOs, strategy decks, junior hires, agency retainers, and DIY with ChatGPT Pro.",
  alternates: { canonical: "https://stevekaplan.ai/compare" },
  openGraph: {
    title: "Compare: GTMVP vs the alternatives | Steve Kaplan",
    description:
      "Five honest comparisons. No straw men. Fractional CMO, strategy deck, junior hire, agency retainer, ChatGPT Pro. Where an operator-run paid media audit beats each.",
    url: "https://stevekaplan.ai/compare",
    type: "website",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "GTMVP comparisons" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMVP vs the alternatives",
    description: "Five honest comparisons. No straw men. A free Smart Bidding Audit vs the next-tier hire.",
    images: ["/og-card.jpg"],
  },
};

const comparisons = [
  {
    slug: "vs-strategy-deck",
    title: "vs a strategy deck",
    hook: "Most consultants ship a 47-slide PDF. I ship the engine that finds the leaks and rebuilds the account.",
    cost: "$8K to $15K vs a free audit",
  },
  {
    slug: "vs-fractional-cmo",
    title: "vs hiring a fractional CMO",
    hook: "60 to 90 days of strategy work for a deck that decays in 60. Or a $129 Diagnostic in 24 hours.",
    cost: "$8K to $15K/mo vs $129",
  },
  {
    slug: "vs-junior-marketer",
    title: "vs hiring a junior in-house",
    hook: "$70K to $110K a year learning on your dollar, or $129 from an operator who has managed $50M+ in spend.",
    cost: "$70K+/yr vs $129",
  },
  {
    slug: "vs-agency-retainer",
    title: "vs an agency retainer",
    hook: "Quarterly cadence and dashboard theater, or a $129 operator-written Diagnostic in 24 hours.",
    cost: "$6K to $25K/mo vs $129",
  },
  {
    slug: "vs-chatgpt-pro",
    title: "vs DIY with ChatGPT Pro",
    hook: "Generic recommendations no operator has ever shipped. Or an audit from someone who runs $300K/mo every day.",
    cost: "$200/mo + your evenings vs a free audit",
  },
];

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <section className="w-full max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Compare · GTMVP
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Five honest comparisons.{" "}
            <span className="text-emerald">No straw men.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            GTMVP isn&apos;t the only way to find the leaks in your paid media. Here&apos;s how an
            operator-run audit stacks up against every alternative a founder typically considers.
            The tradeoffs each one earns you, in plain numbers.
          </p>

          <div className="space-y-3 mb-16">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="block bg-slate/30 hover:bg-slate/50 border border-border hover:border-electric/30 rounded-xl p-6 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      GTMVP
                    </p>
                    <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-2 tracking-tight group-hover:text-electric transition-colors">
                      {c.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">
                      {c.hook}
                    </p>
                    <p className="text-xs font-mono text-electric">{c.cost}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-electric flex-shrink-0 mt-1 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
            <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
              Skip the comparison shopping
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
              Work with me directly. Or run the free audit yourself.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <BookAuditButton className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Work with me directly
              </BookAuditButton>
              <a
                href="https://gtmvp.com"
                className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                Or run the free Smart Bidding Audit
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
