import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Audit Output | Profit Loop Audit | Steve Kaplan",
  description:
    "See exactly what a Profit Loop Audit delivers. Sample audit for a $28M B2B SaaS company with 65 employees.",
  openGraph: {
    title: "Sample Audit Output | Profit Loop Audit",
    description:
      "See exactly what a Profit Loop Audit delivers. Real structure, real numbers, fictional company.",
    url: "https://stevekaplan.ai/audit/sample",
  },
};

const stackInventory = [
  { tool: "HubSpot", category: "CRM", owner: "RevOps", connectedTo: "Meta Ads (manual CSV), Google Ads (native), Slack", pain: "Reps manually log calls. No auto-capture. 30% of activities untracked." },
  { tool: "Meta Ads", category: "Paid Social", owner: "Marketing", connectedTo: "HubSpot (weekly CSV export)", pain: "Attribution breaks between ad click and CRM deal. 40% of leads unattributed." },
  { tool: "Google Ads", category: "Paid Search", owner: "Marketing", connectedTo: "HubSpot (native)", pain: "18 conversion actions polluting Smart Bidding. PMax cannibalizing brand." },
  { tool: "Salesforce CPQ", category: "Quoting", owner: "Sales", connectedTo: "HubSpot (manual sync)", pain: "Quotes created in CPQ, manually copied to HubSpot deals. 2 hours/day wasted." },
  { tool: "Mixpanel", category: "Product Analytics", owner: "Product", connectedTo: "Nothing", pain: "Product usage data siloed. Marketing cannot see which leads use the product." },
  { tool: "Mailchimp", category: "Email Marketing", owner: "Marketing", connectedTo: "HubSpot (Zapier, breaks monthly)", pain: "Nurture sequences disconnected from CRM lifecycle stages." },
  { tool: "Google Sheets", category: "Reporting", owner: "Everyone", connectedTo: "Manual pulls from all tools", pain: "Weekly exec report takes 4 hours to build. Numbers stale by the time it ships." },
];

const topWins = [
  {
    rank: 1,
    name: "Automate Meta Ads to CRM attribution pipeline",
    lift: "Recover 40% of unattributed leads. Estimated $312K in pipeline currently invisible.",
    effort: "2 weeks to build. Server-side tracking + UTM standardization + HubSpot workflow.",
    liftScore: 10,
    effortScore: 4,
    ship: "Week 1-2",
  },
  {
    rank: 2,
    name: "Consolidate Google Ads conversion actions from 18 to 3",
    lift: "Smart Bidding optimization. Estimated 25% CPA reduction ($4,200/month savings).",
    effort: "3 days. Audit, pause, consolidate, re-train algorithms over 2 weeks.",
    liftScore: 8,
    effortScore: 2,
    ship: "Week 1",
  },
  {
    rank: 3,
    name: "Build real-time executive dashboard replacing Google Sheets",
    lift: "Save 16 hours/month of manual reporting. Numbers always current, not 5 days stale.",
    effort: "1 week. Connect HubSpot + ad platforms to a live dashboard.",
    liftScore: 7,
    effortScore: 3,
    ship: "Week 2-3",
  },
  {
    rank: 4,
    name: "Connect Mixpanel product usage signals to HubSpot lead scoring",
    lift: "Prioritize sales outreach to leads who actually use the product. Estimated 15% close rate improvement.",
    effort: "2 weeks. API integration + scoring model + sales workflow.",
    liftScore: 8,
    effortScore: 6,
    ship: "Month 2",
  },
  {
    rank: 5,
    name: "Automate demo reminder sequence to fix 45% show rate",
    lift: "Increase show rate from 45% to 65%. At 180 demos/month, that is 36 more live demos per month.",
    effort: "1 week. SMS + email reminder sequence triggered from HubSpot meeting booking.",
    liftScore: 7,
    effortScore: 2,
    ship: "Week 3",
  },
];

const baseline = [
  { metric: "Monthly ad spend", value: "$180K", benchmark: "N/A", gap: "" },
  { metric: "CAC", value: "$2,847", benchmark: "$1,800", gap: "58% over benchmark" },
  { metric: "Demo show rate", value: "45%", benchmark: "65%+", gap: "20pts below target" },
  { metric: "Meta lead attribution rate", value: "60%", benchmark: "95%+", gap: "40% of leads invisible" },
  { metric: "Google Ads conversion actions", value: "18", benchmark: "2-4", gap: "Smart Bidding confused" },
  { metric: "Weekly exec report build time", value: "4 hours", benchmark: "0 (automated)", gap: "16 hrs/month wasted" },
  { metric: "Lead-to-customer rate", value: "8.2%", benchmark: "12%+", gap: "Room to improve" },
  { metric: "Lead response time", value: "3.4 hours", benchmark: "Under 15 min", gap: "Leads going cold" },
];

const roadmap = {
  month1: [
    { week: "1", action: "Consolidate Google Ads conversion actions (Win 2)", result: "Smart Bidding re-optimization begins" },
    { week: "1-2", action: "Build Meta-to-CRM attribution pipeline (Win 1)", result: "40% of invisible pipeline recovered" },
    { week: "2-3", action: "Deploy real-time exec dashboard (Win 3)", result: "Zero manual reporting" },
    { week: "3", action: "Launch demo reminder sequence (Win 5)", result: "Show rate lift begins" },
  ],
  month2: [
    { week: "5-6", action: "Connect Mixpanel to HubSpot lead scoring (Win 4)", result: "Sales prioritizes product-active leads" },
    { week: "7-8", action: "Optimize Meta audiences with recovered attribution data", result: "CAC reduction cycle begins" },
  ],
  month3: [
    { week: "9-10", action: "A/B test new audience segments built from clean data", result: "Target: $2,100 CAC (from $2,847)" },
    { week: "11-12", action: "Quarterly review + new audit targets", result: "Profit Loop restarts" },
  ],
};

export default function SampleAuditPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/audit" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            &larr; Back to Audit
          </Link>
          <a
            href="mailto:steve@gtmvp.com?subject=Profit%20Loop%20Audit"
            className="bg-electric hover:bg-electric/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            Book Your Audit
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-4 py-2 rounded-full mb-6">
            Sample Output (Fictional Company)
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Profit Loop Audit: Meridian Analytics
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-muted-foreground mb-6">
            <span>B2B SaaS</span>
            <span>65 employees</span>
            <span>$28M ARR</span>
            <span>Austin, TX</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            This is a sample of exactly what you receive on Day 5. Real structure. Real level of detail.
            Fictional company, fictional numbers. Yours will be built from your actual data.
          </p>
        </section>

        {/* Executive Summary */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-midnight border border-electric/30 rounded-xl p-8">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-4">
              Executive Summary
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Meridian Analytics runs 7 tools across its GTM stack with 4 critical manual handoffs
              that cost an estimated 28 hours per week. 40% of paid media leads are unattributed,
              making every scaling decision a guess.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              The top 5 automation wins identified in this audit represent an estimated{" "}
              <span className="text-emerald font-bold">$312K in recovered pipeline visibility</span>,{" "}
              <span className="text-emerald font-bold">$50K+ in annual cost savings</span>, and a path
              from $2,847 CAC to under $2,100 within 90 days. The highest-leverage move is fixing
              Meta-to-CRM attribution, which can be shipped in 2 weeks.
            </p>
          </div>
        </section>

        {/* Stack Inventory */}
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Stack Inventory
          </p>
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            7 tools. 4 manual handoffs. 28 hours/week of friction.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-midnight border border-border rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="border-b border-border bg-slate/30">
                  <th className="text-left font-semibold text-foreground px-4 py-3">Tool</th>
                  <th className="text-left font-semibold text-foreground px-4 py-3">Category</th>
                  <th className="text-left font-semibold text-foreground px-4 py-3">Connected To</th>
                  <th className="text-left font-semibold text-foreground px-4 py-3 text-coral">Pain Point</th>
                </tr>
              </thead>
              <tbody>
                {stackInventory.map((row) => (
                  <tr key={row.tool} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-3 text-foreground font-medium font-mono">{row.tool}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.category}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.connectedTo}</td>
                    <td className="px-4 py-3 text-coral/80">{row.pain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Baseline */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Data Baseline
          </p>
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            Where you stand today
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {baseline.map((b) => (
              <div key={b.metric} className="bg-midnight border border-border rounded-xl p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{b.metric}</p>
                <p className="text-2xl font-bold font-mono text-foreground mb-1">{b.value}</p>
                {b.gap && (
                  <p className="text-xs text-coral">{b.gap}</p>
                )}
                {b.benchmark && b.benchmark !== "N/A" && (
                  <p className="text-xs text-muted-foreground">Benchmark: {b.benchmark}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Top 5 Wins */}
        <section className="py-16 bg-slate/20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
              Top 5 Wins (Ranked)
            </p>
            <h2 className="text-2xl font-extrabold text-foreground mb-2">
              What to fix, in what order, and what it is worth.
            </h2>
            <p className="text-muted-foreground mb-8">
              Ranked by lift-to-effort ratio. Ship from top to bottom.
            </p>

            <div className="space-y-4">
              {topWins.map((win) => (
                <div key={win.rank} className="bg-midnight border border-border rounded-xl p-6 hover:border-electric/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-electric/10 border border-electric/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold font-mono text-electric">{win.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-3">{win.name}</h3>
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-emerald uppercase tracking-wide mb-1">Expected Lift</p>
                          <p className="text-muted-foreground">{win.lift}</p>
                        </div>
                        <div>
                          <p className="text-xs text-amber uppercase tracking-wide mb-1">Effort</p>
                          <p className="text-muted-foreground">{win.effort}</p>
                        </div>
                        <div>
                          <p className="text-xs text-electric uppercase tracking-wide mb-1">Ship When</p>
                          <p className="text-foreground font-mono font-medium">{win.ship}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lift vs Effort bar */}
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-4 text-xs">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Lift</span>
                        <span className="text-emerald font-mono">{win.liftScore}/10</span>
                      </div>
                      <div className="h-1.5 bg-slate rounded-full overflow-hidden">
                        <div className="h-full bg-emerald rounded-full" style={{ width: `${win.liftScore * 10}%` }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Effort</span>
                        <span className="text-amber font-mono">{win.effortScore}/10</span>
                      </div>
                      <div className="h-1.5 bg-slate rounded-full overflow-hidden">
                        <div className="h-full bg-amber rounded-full" style={{ width: `${win.effortScore * 10}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Effort vs Lift Matrix */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Effort vs Lift Matrix
          </p>
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            The table your board will screenshot.
          </h2>

          <div className="bg-midnight border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-slate/30">
                  <th className="text-left font-semibold text-foreground px-4 py-3">Win</th>
                  <th className="text-center font-semibold text-emerald px-4 py-3">Lift</th>
                  <th className="text-center font-semibold text-amber px-4 py-3">Effort</th>
                  <th className="text-center font-semibold text-electric px-4 py-3">Ratio</th>
                  <th className="text-left font-semibold text-foreground px-4 py-3">Ship</th>
                </tr>
              </thead>
              <tbody>
                {topWins.map((win) => (
                  <tr key={win.rank} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-3 text-muted-foreground">Win {win.rank}: {win.name.split(" ").slice(0, 4).join(" ")}...</td>
                    <td className="px-4 py-3 text-center font-mono text-emerald">{win.liftScore}/10</td>
                    <td className="px-4 py-3 text-center font-mono text-amber">{win.effortScore}/10</td>
                    <td className="px-4 py-3 text-center font-mono font-bold text-electric">{(win.liftScore / win.effortScore).toFixed(1)}x</td>
                    <td className="px-4 py-3 font-mono text-foreground">{win.ship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 30/60/90 Roadmap */}
        <section className="py-16 bg-slate/20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
              30 / 60 / 90 Day Roadmap
            </p>
            <h2 className="text-2xl font-extrabold text-foreground mb-8">
              What gets shipped, and when.
            </h2>

            <div className="space-y-8">
              {/* Month 1 */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-emerald/10 border border-emerald/20 rounded-lg flex items-center justify-center text-sm font-mono text-emerald">30</span>
                  Days 1 to 30
                </h3>
                <div className="space-y-2">
                  {roadmap.month1.map((item) => (
                    <div key={item.week} className="flex gap-4 bg-midnight border border-border rounded-lg p-4">
                      <span className="text-xs font-mono text-muted-foreground w-12 flex-shrink-0 pt-0.5">Wk {item.week}</span>
                      <div className="flex-1">
                        <p className="text-foreground text-sm">{item.action}</p>
                        <p className="text-xs text-emerald mt-1">{item.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Month 2 */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-electric/10 border border-electric/20 rounded-lg flex items-center justify-center text-sm font-mono text-electric">60</span>
                  Days 31 to 60
                </h3>
                <div className="space-y-2">
                  {roadmap.month2.map((item) => (
                    <div key={item.week} className="flex gap-4 bg-midnight border border-border rounded-lg p-4">
                      <span className="text-xs font-mono text-muted-foreground w-12 flex-shrink-0 pt-0.5">Wk {item.week}</span>
                      <div className="flex-1">
                        <p className="text-foreground text-sm">{item.action}</p>
                        <p className="text-xs text-emerald mt-1">{item.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Month 3 */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center text-sm font-mono text-amber">90</span>
                  Days 61 to 90
                </h3>
                <div className="space-y-2">
                  {roadmap.month3.map((item) => (
                    <div key={item.week} className="flex gap-4 bg-midnight border border-border rounded-lg p-4">
                      <span className="text-xs font-mono text-muted-foreground w-12 flex-shrink-0 pt-0.5">Wk {item.week}</span>
                      <div className="flex-1">
                        <p className="text-foreground text-sm">{item.action}</p>
                        <p className="text-xs text-emerald mt-1">{item.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Did NOT Find */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            What I Did Not Find
          </p>
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            Honesty builds trust.
          </h2>
          <div className="bg-midnight border border-emerald/20 rounded-xl p-6 space-y-3">
            {[
              "CRM pipeline stages are clean and consistently used by the sales team. No change needed.",
              "Google Ads account structure (campaigns, ad groups) is well-organized. The problem is conversion actions, not structure.",
              "Website conversion rate (3.8%) is above industry average. Landing pages are not the bottleneck.",
              "Sales team follow-up cadence is solid once they have the lead. The gap is getting them the lead fast enough.",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-emerald mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Every audit includes this section. If something is working, I say so. No invented problems to justify a retainer.
          </p>
        </section>

        {/* Recommendation */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-midnight border border-electric/30 rounded-xl p-8">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-4">
              Recommendation
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              The highest-impact path is a monthly retainer starting with Wins 1 and 2 in the first
              two weeks. At $4,500/month (with the $3,500 audit fee credited to Month 1), the
              expected ROI based on Win 1 alone (recovering $312K in invisible pipeline) pays for
              the first year of the retainer in the first month.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you prefer to execute internally, the roadmap above gives your team a sequenced
              plan. Either path works. Win 2 (Google Ads cleanup) is a 3-day project your existing
              marketing manager can handle without me.
            </p>
          </div>
        </section>

        {/* Disclaimer + CTA */}
        <section className="py-16 bg-slate/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-4 py-2 rounded-full mb-6">
              This is a sample. Yours will be built from your actual data.
            </div>
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Want this for your company?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              $3,500 flat. 5 business days. Money-back guarantee.
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
            <Link href="/audit" className="hover:text-foreground transition-colors">
              Audit Page
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              stevekaplan.ai
            </Link>
            <a href="mailto:steve@gtmvp.com" className="hover:text-foreground transition-colors">
              steve@gtmvp.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
