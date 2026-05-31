import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookAuditButton } from "@/components/book-audit-modal";

export const metadata: Metadata = {
  title: "Standards: what I will and won't do",
  description:
    "Six things I won't do, in writing. How I run GTMVP: no decks, no scope creep, no vendor kickbacks, no fake guarantees, no AI for the sake of AI, no work I can't ship myself.",
  alternates: { canonical: "https://stevekaplan.ai/standards" },
  openGraph: {
    title: "Standards: what I will and won't do | Steve Kaplan",
    description:
      "Six things I won't do, in writing. No decks. No scope creep. No vendor kickbacks. No fake guarantees. No AI for the sake of AI. No work I can't ship myself.",
    url: "https://stevekaplan.ai/standards",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Standards: Steve Kaplan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standards: six things I won't do, in writing.",
    description: "No decks. No vendor kickbacks. No AI for AI's sake. No fake guarantees.",
    images: ["/og-card.jpg"],
  },
};

const refusals = [
  {
    n: "01",
    title: "I won't ship a strategy deck.",
    body: "If the deliverable is a 47-slide PDF that nobody opens after the kickoff call, you didn't hire me. The GTMVP Diagnostic is a 22-module read of your ad account, the leaks named, and a written remediation plan you can act on. $129. 24-hour turnaround. PDF you can share. No deck.",
  },
  {
    n: "02",
    title: "I won't take vendor kickbacks.",
    body: "If I recommend a tool, it's because it ranks highest on effort vs lift for your stack, not because somebody's paying me. I have no affiliate, partner, or rev-share deals with any vendor I rank in a Diagnostic. I'll show you the comparison if you ask.",
  },
  {
    n: "03",
    title: "I won't sell you AI you don't need.",
    body: "If the highest-impact fix in your account is a clean conversion action and a tighter Smart Bidding signal stack, that's what the Diagnostic says. AI shows up when AI is the right move, not because it's trending. Half of what I find is bidding and tracking hygiene, not models.",
  },
  {
    n: "04",
    title: "I won't promise a number I can't back.",
    body: "The 3.2x average ROAS on my homepage is a documented track record across $50M+ of personally-managed spend, not a forward-looking promise. The $129 Diagnostic is 7-day money-back if it doesn't surface at least one move you'd act on. The Rebuild guarantee is action-gated: beat your trailing 90-day blended CPA by 20% in 90 days, or I work free until I do. No vague upside.",
  },
  {
    n: "05",
    title: "I won't take work I can't ship myself.",
    body: "Solo operator. No subcontractors, no offshore team, no junior bench. I write your Diagnostic. I run your Rebuild account. The reason the Rebuild caps at one or two clients per tier is that I do the work directly, not a junior learning on your budget.",
  },
  {
    n: "06",
    title: "I won't pretend I'm the right fit when I'm not.",
    body: "Pre-revenue, pre-PMF, or B2C-only? GTMVP is built for B2B SaaS paid-media mechanics, and you'd be buying a fix you can't act on yet. I'll tell you that straight and refund the Diagnostic on the spot. I'd rather lose $129 than waste your time and a quarter of your trust.",
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
            These six are operationally enforced, not aspirational. If I break one, you
            get the Diagnostic refunded and the Rebuild cancelled. No questions.
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
              These standards, baked into the work
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
              Start free. 14-checkpoint Smart Bidding Audit. No call.
            </h2>
            <p className="text-muted-foreground mb-6">
              Run the free audit on your domain. Want the operator-written version?
              The $129 Diagnostic ships in 24 hours, 7-day money-back.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <BookAuditButton className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Run the free audit
              </BookAuditButton>
              <Link
                href="/audit/sample"
                className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                See a sample audit
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
