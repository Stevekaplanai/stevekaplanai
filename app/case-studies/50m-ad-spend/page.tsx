import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "$50M in Ad Spend as a Solo CEO",
  description:
    "10 years, 100+ clients, $50M+ managed ad spend, 3.2x average ROAS, 40% CPA reduction. The Click Then Convert story.",
  alternates: { canonical: "https://stevekaplan.ai/case-studies/50m-ad-spend" },
  openGraph: {
    title: "$50M in Ad Spend as a Solo CEO | Steve Kaplan",
    description: "10 years. 100+ clients. 3.2x average ROAS. Solo.",
    type: "article",
  },
};

const stats = [
  { value: "$50M+", label: "Lifetime Spend" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "100+", label: "Clients" },
  { value: "40%", label: "Avg CPA Reduction" },
];

const evolution = [
  { old: "Run ads for clients", now: "Build the systems that run ads" },
  { old: "Optimize CPA manually", now: "Automate optimization loops" },
  { old: "Monthly reporting", now: "Real-time executive dashboards" },
  { old: "Solo operator, direct delivery", now: "Solo operator, AI-augmented delivery" },
  { old: "100+ clients over 10 years", now: "10 retainers at $25K MRR" },
];

export default function FiftyMillionPage() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-4xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "$50M in Ad Spend as a Solo CEO: The Click Then Convert Story",
            author: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/case-studies/50m-ad-spend",
            datePublished: "2026-04-12",
          }) }}
        />

        <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Case Study</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          $50M in Ad Spend as a Solo CEO
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-8">
          <span>Click Then Convert</span>
          <span>2015 to 2024</span>
          <span>Closed (pivoted to GTMVP)</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-midnight border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-bold font-mono text-electric mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">The Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Steve Kaplan ran Click Then Convert as a solo founder and CEO for 10 years. No partners. No investors.
              No employees for most of the run. One person managing the entire client portfolio, from strategy to
              execution to reporting.
            </p>
            <p>
              $50M+ in lifetime managed ad spend. Peak months over $2M. 100+ clients across D2C brands, B2B SaaS,
              and B2B services. 3.2x average ROAS and 40% average CPA reduction. Google Partner, Facebook Blueprint
              Certified, Klaviyo Partner.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">What Made It Work</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Solo operator model", text: "No account managers. No junior staff learning on client budgets. Every client got Steve directly. This is the same model GTMVP runs today." },
              { title: "Attribution obsession", text: "Every dollar of spend was connected to a revenue outcome. Not impressions. Not engagement. Revenue. This discipline at 100+ clients over 10 years built the instinct Steve brings to every audit." },
              { title: "CPA reduction first", text: "Most agencies optimize for ROAS alone. Steve optimized for CPA reduction first, making ROAS improvements sustainable. The 40% average was the median, not a cherry-picked stat." },
              { title: "Platform diversity early", text: "By 2020 most clients ran Meta + Google + Klaviyo as an integrated stack. When iOS 14.5 broke attribution, Steve's clients were less exposed because they had diversified spend and server-side tracking." },
            ].map((lesson) => (
              <div key={lesson.title} className="bg-midnight border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground">{lesson.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">Why It Closed</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Steve did not shut down because of failure. He shut down because the market changed.
            AI and automation became the higher-leverage play. Running ads manually for 100 clients
            was the old model. Building systems that run themselves is the new one. GTMVP Inc is the evolution.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">The Evolution</h2>
          <div className="bg-midnight border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-slate/30">
                  <th className="text-left font-semibold text-coral/80 px-5 py-3">Click Then Convert</th>
                  <th className="text-left font-semibold text-emerald px-5 py-3">GTMVP</th>
                </tr>
              </thead>
              <tbody>
                {evolution.map((e) => (
                  <tr key={e.old} className="border-b border-border/50 last:border-0">
                    <td className="text-muted-foreground px-5 py-3">{e.old}</td>
                    <td className="text-foreground font-medium px-5 py-3">{e.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">Same instinct. New model.</h2>
          <p className="text-muted-foreground mb-6">The Profit Loop Audit brings 10 years of pattern recognition to your stack. $3,500. 5 days.</p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25">
            Get Your Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </article>
    </main>
  );
}
