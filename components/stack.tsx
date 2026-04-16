const tools = [
  {
    letter: "B",
    name: "Google BigQuery",
    category: "Warehouse",
    description:
      "Serverless data warehouse. Pay-per-query. Native Google Ads, GA4, DV360 integration.",
    color: "bg-electric",
    cost: "$12K",
  },
  {
    letter: "P",
    name: "PostHog",
    category: "Analytics + CDP",
    description:
      "Product analytics, CDP, A/B testing, session replay, feature flags. All in one. Open source.",
    color: "bg-slate",
    cost: "$6K",
  },
  {
    letter: "F",
    name: "Fivetran",
    category: "Ingestion",
    description:
      "500+ managed connectors. Auto-syncs CRM, email, ads, payments into BigQuery.",
    color: "bg-cyan",
    cost: "$12K",
  },
  {
    letter: "d",
    name: "dbt",
    category: "Transform",
    description:
      "SQL transformation layer. Version-controlled. Automated testing. Clean golden records.",
    color: "bg-coral",
    cost: "$6K",
  },
  {
    letter: "L",
    name: "Looker Studio",
    category: "BI",
    description:
      "Native BigQuery dashboards. Free. Self-serve for marketing teams.",
    color: "bg-emerald",
    cost: "$0",
  },
  {
    letter: "H",
    name: "Hightouch",
    category: "Activation",
    description:
      "Reverse ETL. Pushes BigQuery audiences to Google Ads, Meta, LinkedIn, email, CRM.",
    color: "bg-emerald",
    cost: "$0",
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-electric uppercase tracking-wider mb-4 block">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
            The 6-Tool Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tool is best-in-class. Together, they replace enterprise platforms
            at a fraction of the cost.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-5 bg-card border border-border rounded-xl p-5 hover:border-electric/50 transition-colors"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg">
                  {tool.letter}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {tool.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {tool.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {tool.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-lg font-mono font-bold text-emerald">
                  {tool.cost}
                </span>
                <span className="text-xs text-muted-foreground block">/year</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cost comparison summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-coral/5 border border-coral/20 rounded-xl p-6">
            <span className="text-sm font-mono text-coral uppercase tracking-wider block mb-2">
              Legacy Platform
            </span>
            <span className="text-4xl font-bold font-mono text-coral">
              ~$295K
            </span>
            <span className="text-muted-foreground block mt-1">/year</span>
          </div>
          <div className="bg-emerald/5 border border-emerald/20 rounded-xl p-6">
            <span className="text-sm font-mono text-emerald uppercase tracking-wider block mb-2">
              My Stack
            </span>
            <span className="text-4xl font-bold font-mono text-emerald">
              ~$36K
            </span>
            <span className="text-muted-foreground block mt-1">/year</span>
          </div>
        </div>

        {/* Savings callout */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 bg-card border border-border rounded-xl px-8 py-5">
            <div>
              <span className="text-3xl font-bold font-mono text-emerald">88%</span>
              <span className="text-muted-foreground block text-sm">Cost Reduction</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="text-3xl font-bold font-mono text-amber">$259K</span>
              <span className="text-muted-foreground block text-sm">Saved Per Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
