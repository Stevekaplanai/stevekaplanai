import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookAuditButton } from "@/components/book-audit-modal";

export const metadata: Metadata = {
  title: "Standards — what I will and won't do",
  description:
    "Six things I won't do, in writing. The Profit Loop Audit standards: no decks, no scope creep, no vendor kickbacks, no fake guarantees, no AI for the sake of AI, no work I can't ship myself.",
  alternates: { canonical: "https://stevekaplan.ai/standards" },
  openGraph: {
    title: "Standards — what I will and won't do | Steve Kaplan",
    description:
      "Six things I won't do, in writing. No decks. No scope creep. No vendor kickbacks. No fake guarantees. No AI for the sake of AI. No work I can't ship myself.",
    url: "https://stevekaplan.ai/standards",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Standards — Steve Kaplan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standards — six things I won't do, in writing.",
    description: "No decks. No vendor kickbacks. No AI for AI's sake. No fake guarantees.",
    images: ["/og-card.jpg"],
  },
};

const refusals = [
  {
    n: "01",
    title: "I won't ship a strategy deck.",
    body: "If the deliverable is a 47-slide PDF that nobody opens after the kickoff call, you didn't hire me. The Profit Loop Audit is a stack inventory, a data baseline, a ranked list of wins with dollar numbers attached, and a 30/60/90 plan your team can execute. Five business days. PDF you can share. No deck.",
  },
  {
    n: "02",
    title: "I won't take vendor kickbacks.",
    body: "If I recommend a tool, it's because it ranks highest on effort vs lift for your stack — not because somebody's paying me. I have no affiliate, partner, or rev-share deals with any vendor I rank in an audit. I'll show you the comparison if you ask.",
  },
  {
    n: "03",
    title: "I won't sell you AI you don't need.",
    body: "If your top-5 wins are a fixed lead-routing rule and a re-targeted retargeting audience, that's what the audit says. AI shows up when AI is the highest-leverage move — not because it's trending. Half the wins I find are workflow fixes, not models.",
  },
  {
    n: "04",
    title: "I won't promise a number I can't audit.",
    body: "No guaranteed ROAS lift. No guaranteed pipeline. No guaranteed CPA reduction. The 3.2x average ROAS on my homepage is a documented track record across $50M+ of personally-managed spend, not a forward-looking promise. I'll guarantee the deliverable: 5 wins or full refund. That's it.",
  },
  {
    n: "05",
    title: "I won't take work I can't ship myself.",
    body: "Solo operator. No subcontractors, no offshore team, no junior bench. If you book the audit, I do the audit. If you sign a retainer afterward, I do the work. The reason I can charge $3,500 flat for 5 days is that the cost structure isn't propping up an agency.",
  },
  {
    n: "06",
    title: "I won't pretend I'm the right fit when I'm not.",
    body: "Pre-revenue, pre-PMF, B2C-only, or under $5M ARR? You're paying for an audit you can't act on yet. I'll tell you that on the kickoff call and refund the audit on the spot. I'd rather lose a $3,500 audit than waste 5 days of your time and a quarter of your trust.",
  },
];

export default function StandardsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="w-full max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Standards · how I work
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Six things I won&apos;t do.{" "}
            <span className="text-emerald">In writing.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Most consultancies tell you what they do. The bigger trust signal is what they refuse.
            These six are operationally enforced &mdash; not aspirational. If I break one, you
            get the audit refunded and the retainer cancelled. No questions.
          </p>

          <div className="space-y-10 mb-16">
            {refusals.map((r) => (
              <section key={r.n} className="border-l-4 border-emerald/30 pl-6">
                <p className="text-sm font-mono text-electric mb-2">{r.n}</p>
                <h2 className="text-2xl md:text-[1.625rem] font-extrabold text-foreground mb-3 tracking-tight leading-tight">
                  {r.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{r.body}</p>
              </section>
            ))}
          </div>

          <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
            <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
              The audit, with these standards baked in
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
              5 days. $3,500 flat. Money back if fewer than 3 wins.
            </h2>
            <p className="text-muted-foreground mb-6">
              If anything in here changes my mind on the audit&apos;s value to you,
              tell me on the kickoff call and I&apos;ll refund it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <BookAuditButton className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Book your audit
              </BookAuditButton>
              <Link
                href="/audit/sample"
                className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                See a sample audit &rarr;
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
