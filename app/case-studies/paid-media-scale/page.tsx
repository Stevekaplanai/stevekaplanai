import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scaling Paid Media to $300K/Month",
  description:
    "How Steve Kaplan scaled a 76-person firm from $200K to $300K/month in paid media while holding CPA. 15.5% customer rate at $3,448/customer.",
  alternates: { canonical: "https://stevekaplan.ai/case-studies/paid-media-scale" },
  openGraph: {
    title: "Scaling Paid Media to $300K/Month | Steve Kaplan",
    description: "From $200K to $300K/month. 15.5% customer rate. $3,448/customer. Here is how.",
    type: "article",
  },
};

const stats = [
  { value: "$300K+", label: "Monthly Ad Spend" },
  { value: "636", label: "Meetings / Month" },
  { value: "15.5%", label: "Customer Rate" },
  { value: "$3,448", label: "Cost / Customer" },
];

const results = [
  { metric: "Monthly paid spend", before: "~$200K", after: "$300K+" },
  { metric: "Booked meetings", before: "~300/month", after: "636 (437 Meta + 199 Google)" },
  { metric: "Meta CPM", before: "Degrading at scale", after: "$533 (held while scaling 50%)" },
  { metric: "Google CPA (best)", before: "Inconsistent", after: "$267 (PMax + LSA)" },
  { metric: "Meeting-to-customer (TM_Leads)", before: "~5% (firm avg)", after: "15.5% (3x)" },
  { metric: "Cost per customer (TM_Leads)", before: "Unknown", after: "$3,448" },
  { metric: "Conversion actions (Google)", before: "24 (polluted)", after: "Cleanup in progress" },
];

export default function PaidMediaScalePage() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-4xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Scaling Paid Media from $200K to $300K/Month While Holding CPA",
            author: { "@id": "https://stevekaplan.ai/#person" },
            publisher: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/case-studies/paid-media-scale",
            datePublished: "2026-04-12",
          }) }}
        />

        <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Case Study</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Scaling Paid Media from $200K to $300K/Month While Holding CPA
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-8">
          <span>76-person financial advisory firm</span>
          <span>Sunrise, FL</span>
          <span>2024 to present</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-midnight border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-bold font-mono text-electric mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            The firm needed to scale booked meetings from ~300/month to 1,000/month across Meta, Google, and TikTok.
            Previous attempts to push Meta past $200K/month degraded CPM and inflated cost per meeting.
            Google Ads had 24 conversion actions polluting Smart Bidding. Attribution was fragmented across platforms.
          </p>
        </section>

        {/* What We Built */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">What We Built</h2>

          <div className="space-y-6">
            <div className="bg-midnight border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Meta Ads ($185K to $235K/month)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Restructured into three pillars: Prospecting, Retargeting, Testing</li>
                <li>Interest/Broad at $470 CPR outperformed Lookalike at $705 CPR</li>
                <li>TM_Leads audience: 15.5% meeting-to-customer rate (3x firm average) at $3,448/customer</li>
              </ul>
            </div>

            <div className="bg-midnight border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Google Ads ($80K to $115K/month)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Consolidated from 24 conversion actions to the ones that matter for Smart Bidding</li>
                <li>PMax + LSA combination achieved $267 CPA (best performing structure)</li>
              </ul>
            </div>

            <div className="bg-midnight border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Attribution</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Built HubSpot attribution using hs_analytics_first_url UTM parameters</li>
                <li>Connected 782 historical customers back to source channels</li>
                <li>246 customers attributed to FB Paid Social alone</li>
                <li>541 closed-won deals tracked end-to-end at ~14% conversion rate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results Table */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">The Numbers</h2>
          <div className="bg-midnight border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-slate/30">
                  <th className="text-left font-semibold text-foreground px-5 py-3">Metric</th>
                  <th className="text-left font-semibold text-coral px-5 py-3">Before</th>
                  <th className="text-left font-semibold text-emerald px-5 py-3">After</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.metric} className="border-b border-border/50 last:border-0">
                    <td className="text-muted-foreground px-5 py-3">{r.metric}</td>
                    <td className="text-coral/70 font-mono px-5 py-3">{r.before}</td>
                    <td className="text-emerald font-mono font-medium px-5 py-3">{r.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lessons */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">What Made It Work</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Broad beats Lookalike", text: "At $200K+/month, Interest/Broad at $470 CPR consistently outperformed Lookalike at $705. Most operators never test this aggressively enough." },
              { title: "Audience segmentation is the lever", text: "TM_Leads was a data win, not a creative win. Identifying which leads convert to customers at 3x the average changed the entire allocation strategy." },
              { title: "Conversion action hygiene", text: "24 conversion actions were feeding Google Smart Bidding contradictory signals. Cleaning this up is the single highest-leverage Google Ads move for most accounts." },
              { title: "Attribution is not optional", text: "Connecting 782 customers back to source channels via UTM parameters made every scaling decision data-driven instead of gut-driven." },
            ].map((lesson) => (
              <div key={lesson.title} className="bg-midnight border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground">{lesson.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honest bottleneck */}
        <section className="mb-12">
          <div className="bg-amber/5 border border-amber/20 rounded-xl p-6">
            <h3 className="font-bold text-amber mb-2">Scaling Bottleneck (honest)</h3>
            <p className="text-sm text-muted-foreground">
              Show rate is stuck at 60%. 1,000 meetings/month is reachable on spend alone,
              but the firm needs 700+ shows to hit customer targets. This is the active problem being worked on.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">Want results like these?</h2>
          <p className="text-muted-foreground mb-6">The Profit Loop Audit finds the same kind of wins in your stack. $3,500 flat. 5 days.</p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25">
            Get Your Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </article>
    </main>
  );
}
