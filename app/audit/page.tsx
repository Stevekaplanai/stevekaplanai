import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROICalculator } from "@/components/roi-calculator";

export const metadata: Metadata = {
  title: "Profit Loop Audit — 5-Day GTM Stack Audit",
  description:
    "5-day flat-fee GTM stack audit for $10M to $100M companies. Find the top 5 AI and automation wins, ranked by effort vs lift. $3,500 flat. Money-back guarantee. By Steve Kaplan.",
  alternates: {
    canonical: "https://stevekaplan.ai/audit",
  },
  openGraph: {
    title: "Profit Loop Audit — 5-Day GTM Stack Audit | Steve Kaplan",
    description:
      "Find the top 5 AI and automation wins in your GTM stack. $3,500 flat. 5 business days. Money-back guarantee.",
    url: "https://stevekaplan.ai/audit",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Loop Audit — 5-Day GTM Stack Audit",
    description: "Find the top 5 AI and automation wins in your GTM stack. $3,500 flat. Money-back guarantee.",
  },
};

const HEADSHOT_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steve%20Headshot-LYW2CejUfUZzhDbWmR0cq4GVWRAgwJ.jpg";

const proofStats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "100+", label: "Clients Served" },
  { value: "40%", label: "Avg CPA Reduction" },
];

const timeline = [
  { day: "Day 0", title: "Kickoff", description: "60-minute call. Lock scope, get access, confirm targets." },
  { day: "Day 1", title: "Stack Inventory", description: "Map every tool, integration, and manual handoff." },
  { day: "Day 2", title: "Data Review", description: "Pull pipeline, spend, conversions, and attribution gaps." },
  { day: "Day 3", title: "Opportunity Mapping", description: "Rank top 5 wins by effort vs lift with specific numbers." },
  { day: "Day 4", title: "Roadmap", description: "Build a phased 30/60/90 day plan." },
  { day: "Day 5", title: "Delivery", description: "Live call. Recorded walkthrough. Written audit document." },
];

const deliverables = [
  { item: "Stack inventory (every tool, integration, manual step)", format: "Table + diagram" },
  { item: "Data baseline (spend, conversions, attribution)", format: "Dashboard snapshot" },
  { item: "Top 5 wins, ranked by effort vs lift", format: "Doc with specific numbers" },
  { item: "30/60/90 day phased roadmap", format: "Actionable plan" },
  { item: "Live delivery call + recorded walkthrough", format: "60 minutes" },
  { item: "Written audit document", format: "PDF you can share" },
];

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How is the Profit Loop Audit different from consulting?", acceptedAnswer: { "@type": "Answer", text: "I do not write strategy decks. I inventory your stack, pull your data, and deliver a ranked list of wins with numbers attached. Five days, not five months." } },
            { "@type": "Question", name: "How much does the Profit Loop Audit cost?", acceptedAnswer: { "@type": "Answer", text: "$3,500 flat fee. 5 business days. Money-back guarantee if fewer than 3 executable wins. Fully credited toward a retainer if you sign within 30 days." } },
            { "@type": "Question", name: "What if AI is not the right move for my company?", acceptedAnswer: { "@type": "Answer", text: "I will tell you. And I will refund the audit. I would rather lose a retainer than sell a lie." } },
            { "@type": "Question", name: "Can I see what the audit deliverable looks like?", acceptedAnswer: { "@type": "Answer", text: "Yes. A full sample audit for a fictional $28M B2B SaaS company is published at stevekaplan.ai/audit/sample." } },
          ],
        }) }}
      />
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-foreground font-bold text-lg">stevekaplan.ai</Link>
          <div className="flex items-center gap-4">
            <Link href="/audit/sample" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              See Sample Audit
            </Link>
            <span className="text-sm text-muted-foreground hidden sm:block">steve@stevekaplan.ai</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero - Full Width 2 Column */}
        <section className="relative min-h-screen pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-slate/40" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Copy */}
              <div className="lg:sticky lg:top-28">
                {/* Headshot + name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-electric/30">
                    <Image src={HEADSHOT_URL} alt="Steve Kaplan - AI Automation Consultant" fill sizes="(max-width: 768px) 80px, 96px" className="object-cover" priority />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Steve Kaplan</p>
                    <p className="text-xs text-muted-foreground">Fort Lauderdale, FL</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                  5 days. $3,500 flat. Money-back guarantee.
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
                  Your GTM stack has{" "}
                  <span className="text-emerald">hidden wins</span>.
                  <br />I find them in 5 days.
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  The Profit Loop Audit: I find the top 5 AI and automation wins in your stack,
                  ranked by effort vs lift, with a 30/60/90 day roadmap.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {proofStats.map((stat) => (
                    <div key={stat.label} className="text-center md:text-left">
                      <div className="text-2xl font-bold font-mono text-electric">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/audit/sample"
                  className="text-electric hover:text-electric/80 text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  See a sample audit output &rarr;
                </Link>
              </div>

              {/* Right Column - ROI Calculator */}
              <div>
                <ROICalculator />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-slate/20 border-t border-border">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">5 days. 6 steps. Zero guesswork.</h2>
              <p className="text-lg text-muted-foreground">Your total time commitment: about 3 hours across 5 days.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {timeline.map((step) => (
                <div key={step.day} className="flex gap-4 items-start bg-midnight border border-border rounded-xl p-5 hover:border-electric/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric/10 border border-electric/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold font-mono text-electric">{step.day}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables + Sample */}
        <section className="py-24">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Deliverables */}
              <div>
                <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Deliverables</p>
                <h2 className="text-3xl font-extrabold text-foreground mb-8">What you walk away with</h2>
                <div className="bg-midnight border border-border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-sm font-semibold text-foreground px-5 py-3">Deliverable</th>
                        <th className="text-left text-sm font-semibold text-foreground px-5 py-3">Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliverables.map((d) => (
                        <tr key={d.item} className="border-b border-border/50 last:border-0">
                          <td className="text-muted-foreground px-5 py-3 text-sm">{d.item}</td>
                          <td className="text-foreground font-medium px-5 py-3 font-mono text-xs">{d.format}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sample CTA */}
              <div className="bg-midnight border border-border rounded-xl p-8 lg:mt-14">
                <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Sample Audit
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Want to see the actual output?</h3>
                <p className="text-muted-foreground mb-6">
                  I published a full sample audit for a fictional $28M B2B SaaS company with 65 employees.
                  Same structure, same level of detail. Stack inventory, data baseline, top 5 wins, effort vs lift
                  matrix, 30/60/90 roadmap.
                </p>
                <Link
                  href="/audit/sample"
                  className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  View Sample Audit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who I Am */}
        <section className="py-24 bg-slate/20">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-midnight border border-border rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-electric/20">
                    <Image src={HEADSHOT_URL} alt="Steve Kaplan - Founder of GTMVP Inc" fill sizes="(max-width: 768px) 112px, 144px" className="object-cover" loading="lazy" />
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Who runs this</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Steve Kaplan</h2>
                  <p className="text-sm text-muted-foreground mb-4">Fort Lauderdale, FL</p>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      10 years running my own company. $50M+ in managed ad spend across 100+ clients
                      at a 3.2x average ROAS. Google Partner. Facebook Blueprint Certified.
                    </p>
                    <p>
                      Right now I am Director of Marketing at a 76-person financial advisory firm,
                      running $300K/month in paid media across Meta, Google, and TikTok. I also
                      ship software. 9+ products built solo using AI.
                    </p>
                    <p className="text-foreground font-medium">
                      I am not a consultant. I am an operator. The audit is not a deck with
                      recommendations. It is a ranked list of wins with dollars attached, built
                      by someone who fights the same friction you do, every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee + Pricing */}
        <section className="py-24">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guarantee */}
              <div className="bg-emerald/5 border border-emerald/20 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-emerald/10 border border-emerald/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Money-back guarantee.</h3>
                <p className="text-muted-foreground">
                  If you do not walk out of Day 5 with at least 3 clear wins you can
                  execute on (with or without me), you pay nothing. Full refund. No questions.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
                <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">One price. No surprises.</p>
                <div className="mb-4">
                  <span className="text-5xl font-extrabold font-mono text-foreground">$3,500</span>
                  <span className="text-lg text-muted-foreground ml-2">flat</span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  {["5 business days", "Credited toward a retainer", "Money-back guarantee", "No scope creep"].map((text) => (
                    <p key={text} className="flex items-center justify-center gap-2">
                      <svg className="w-3.5 h-3.5 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {text}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Use the calculator above to estimate your ROI before committing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 GTMVP Inc. Fort Lauderdale, FL.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">stevekaplan.ai</Link>
            <a href="https://linkedin.com/in/stevekaplanai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <span>steve@stevekaplan.ai</span>
          </div>
        </div>
      </footer>
    </>
  );
}
