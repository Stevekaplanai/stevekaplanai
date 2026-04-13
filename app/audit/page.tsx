import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profit Loop Audit | Steve Kaplan",
  description:
    "5-day flat-fee GTM stack audit for $10M to $100M companies. Find the top 5 AI and automation wins. $3,500. Money-back guarantee.",
  openGraph: {
    title: "Profit Loop Audit | Steve Kaplan",
    description:
      "5-day flat-fee GTM stack audit. Top 5 AI and automation wins, ranked by effort vs lift. $3,500. Money-back guarantee.",
    url: "https://stevekaplan.ai/audit",
    siteName: "stevekaplan.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Loop Audit | Steve Kaplan",
    description:
      "5-day flat-fee GTM stack audit. $3,500. Money-back guarantee.",
  },
};

const proofStats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "100+", label: "Clients Served" },
  { value: "40%", label: "Avg CPA Reduction" },
];

const timeline = [
  {
    day: "Day 0",
    title: "Kickoff",
    description:
      "60-minute call. I lock scope, get access to your stack, and confirm what we are looking for.",
  },
  {
    day: "Day 1",
    title: "Stack Inventory",
    description:
      "I map every tool, integration, and manual handoff in your GTM operation. CRM, ads, analytics, ops, email, reporting.",
  },
  {
    day: "Day 2",
    title: "Data Review",
    description:
      "I pull your pipeline data, ad spend, conversion rates, and attribution. I look for the gaps your dashboards do not show you.",
  },
  {
    day: "Day 3",
    title: "Opportunity Mapping",
    description:
      "I rank the top 5 wins by effort vs lift. Each one gets a specific number: expected revenue impact, hours saved, or cost reduced.",
  },
  {
    day: "Day 4",
    title: "Roadmap",
    description:
      "I build a phased 30/60/90 day plan. Which wins to ship first, what to sequence, what to skip.",
  },
  {
    day: "Day 5",
    title: "Delivery",
    description:
      "Live call. Recorded walkthrough. Written audit document you can hand to your board.",
  },
];

const deliverables = [
  { item: "Stack inventory", format: "Table + diagram" },
  { item: "Data baseline (spend, conversions, attribution)", format: "Dashboard snapshot" },
  { item: "Top 5 wins, ranked by effort vs lift", format: "Doc with specific numbers" },
  { item: "30/60/90 day phased roadmap", format: "Actionable plan" },
  { item: "Live delivery call", format: "60 minutes, recorded" },
  { item: "Written audit document", format: "PDF you can share" },
];

const faqs = [
  {
    q: "How is this different from a consulting engagement?",
    a: "I do not write strategy decks. I inventory your stack, pull your data, and deliver a ranked list of wins with numbers attached. Five days, not five months.",
  },
  {
    q: "Can I see what the final deliverable looks like?",
    a: "Yes. I published a full sample audit for a fictional $28M B2B SaaS company. Same structure, same level of detail. See it at /audit/sample.",
  },
  {
    q: "What access do you need?",
    a: "CRM (read-only), ad accounts, analytics, and email marketing. I send an access checklist on Day 0. No access, no audit.",
  },
  {
    q: "What if AI is not the right move for us?",
    a: "I will tell you. And I will refund the audit. I would rather lose a retainer than sell a lie.",
  },
  {
    q: "Can you do this for a company larger than 80 people?",
    a: "Yes, but the sweet spot is 50 to 80. The audit scope stays the same. Larger companies sometimes need a longer inventory phase.",
  },
  {
    q: "What happens after the audit?",
    a: "Most clients move into a monthly retainer where I build and run the stack. The $3,500 audit fee is fully credited toward your first month. Some clients execute the roadmap internally. Both are fine.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-foreground font-bold text-lg">
            stevekaplan.ai
          </Link>
          <a
            href="mailto:steve@gtmvp.com?subject=Profit%20Loop%20Audit"
            className="bg-electric hover:bg-electric/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            Book Your Audit
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-slate/40" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              5 days. $3,500 flat. Money-back guarantee.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
              Your GTM stack has{" "}
              <span className="text-emerald">hidden wins</span>.
              <br />I find them in 5 days.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              The Profit Loop Audit: I find the top 5 AI and automation wins in
              your stack, ranked by effort vs lift, with a 30/60/90 day roadmap.
            </p>

            <a
              href="mailto:steve@gtmvp.com?subject=Profit%20Loop%20Audit"
              className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 text-lg"
            >
              Book Your Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              $3,500 flat. Fully credited toward a retainer.
            </p>
            <p className="mt-6">
              <Link
                href="/audit/sample"
                className="text-electric hover:text-electric/80 text-sm font-medium underline underline-offset-4 transition-colors"
              >
                See a sample audit output &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Proof Bar */}
        <section className="py-12 bg-slate/20 border-y border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {proofStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold font-mono text-electric mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                5 days. 6 steps. Zero guesswork.
              </h2>
              <p className="text-lg text-muted-foreground">
                Your total time commitment: about 3 hours across 5 days.
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((step, i) => (
                <div
                  key={step.day}
                  className="flex gap-6 items-start bg-midnight border border-border rounded-xl p-6 hover:border-electric/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-electric/10 border border-electric/20 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-bold font-mono text-electric">
                      {step.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 bg-slate/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
                Deliverables
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                What you walk away with
              </h2>
            </div>

            <div className="bg-midnight border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4">
                      Deliverable
                    </th>
                    <th className="text-left text-sm font-semibold text-foreground px-6 py-4">
                      Format
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deliverables.map((d) => (
                    <tr key={d.item} className="border-b border-border/50 last:border-0">
                      <td className="text-muted-foreground px-6 py-4">{d.item}</td>
                      <td className="text-foreground font-medium px-6 py-4 font-mono text-sm">
                        {d.format}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
                Is This For You?
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Built for operators, not browsers.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Good fit */}
              <div className="bg-emerald/5 border border-emerald/20 rounded-xl p-8">
                <h3 className="text-lg font-bold text-emerald mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  This is for you if
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-emerald mt-1">&#8226;</span>You are a CEO, COO, CRO, or CMO</li>
                  <li className="flex gap-2"><span className="text-emerald mt-1">&#8226;</span>Your company is $10M to $100M in revenue</li>
                  <li className="flex gap-2"><span className="text-emerald mt-1">&#8226;</span>You have 50 to 80 employees</li>
                  <li className="flex gap-2"><span className="text-emerald mt-1">&#8226;</span>You know AI can help but do not know where to start</li>
                  <li className="flex gap-2"><span className="text-emerald mt-1">&#8226;</span>You are tired of agencies and freelancers who disappear</li>
                </ul>
              </div>

              {/* Bad fit */}
              <div className="bg-coral/5 border border-coral/20 rounded-xl p-8">
                <h3 className="text-lg font-bold text-coral mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  This is not for you if
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-coral mt-1">&#8226;</span>You are pre-revenue or under $5M</li>
                  <li className="flex gap-2"><span className="text-coral mt-1">&#8226;</span>You want someone to &ldquo;teach you AI&rdquo;</li>
                  <li className="flex gap-2"><span className="text-coral mt-1">&#8226;</span>You are looking for the cheapest option</li>
                  <li className="flex gap-2"><span className="text-coral mt-1">&#8226;</span>You are a marketing agency (I am your competitor, not your vendor)</li>
                  <li className="flex gap-2"><span className="text-coral mt-1">&#8226;</span>You need a 6-month proposal process before making a decision</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who I Am */}
        <section className="py-24 bg-slate/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-midnight border border-border rounded-xl p-8 md:p-12">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-6">
                Who runs this
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                Steve Kaplan. Fort Lauderdale, FL.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
        </section>

        {/* Guarantee */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-emerald/10 border border-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Money-back guarantee.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              If you do not walk out of Day 5 with at least 3 clear wins you can
              execute on (with or without me), you pay nothing. Full refund.
              No questions.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-slate/20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-midnight border border-electric/30 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-4">
                One price. No surprises.
              </p>
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-extrabold font-mono text-foreground">
                  $3,500
                </span>
                <span className="text-xl text-muted-foreground ml-2">flat</span>
              </div>

              <div className="space-y-3 text-muted-foreground mb-8 max-w-md mx-auto">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 business days, start to finish
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fully credited toward a retainer if you sign within 30 days
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Money-back guarantee if fewer than 3 wins
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No hourly billing. No scope creep. No surprise invoice.
                </p>
              </div>

              <a
                href="mailto:steve@gtmvp.com?subject=Profit%20Loop%20Audit"
                className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 text-lg"
              >
                Book Your Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Questions I get asked
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-midnight border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Ready?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Email steve@gtmvp.com with subject &ldquo;Profit Loop Audit&rdquo; and one
              sentence about your company. I reply within 24 hours.
            </p>
            <a
              href="mailto:steve@gtmvp.com?subject=Profit%20Loop%20Audit"
              className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 text-lg mb-4"
            >
              Book Your Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm text-muted-foreground">
              $3,500 flat. 5 business days. Fully credited toward a retainer.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GTMVP Inc. Fort Lauderdale, FL.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              stevekaplan.ai
            </Link>
            <a
              href="https://linkedin.com/in/stevekaplanai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:steve@gtmvp.com"
              className="hover:text-foreground transition-colors"
            >
              steve@gtmvp.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
