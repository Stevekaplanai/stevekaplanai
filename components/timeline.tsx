const weeks = [
  {
    week: 1,
    title: "Foundation",
    description:
      "Install PostHog on the site. Connect GA4 to BigQuery. Behavioral analytics + data warehouse live in under 1 hour.",
    color: "border-electric",
  },
  {
    week: 2,
    title: "Integration",
    description:
      "Add Fivetran connectors for CRM and email. Run first dbt models to build unified customer tables.",
    color: "border-cyan",
  },
  {
    week: 3,
    title: "Insights",
    description:
      "Build cross-channel Looker Studio dashboards. Launch PostHog experiments on highest-traffic pages.",
    color: "border-amber",
  },
  {
    week: 4,
    title: "Intelligence",
    description:
      "Train BigQuery ML models (churn, CLTV). Activate first audience segment via Hightouch.",
    color: "border-emerald",
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-electric uppercase tracking-wider mb-4 block">
            Implementation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Live in 4 Weeks. Not 6 Months.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {weeks.map((item) => (
            <div
              key={item.week}
              className={`bg-card border-t-4 ${item.color} border-x border-b border-border rounded-xl p-6`}
            >
              <span className="text-sm font-mono text-electric uppercase tracking-wider block mb-2">
                Week {item.week}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-electric/10 border border-electric/20 rounded-xl p-6 text-center">
          <p className="text-lg text-foreground font-medium">
            Full data-driven operation{" "}
            <span className="font-mono text-electric">4 weeks</span>{" "}
            <span className="text-muted-foreground mx-2">•</span>
            <span className="font-mono text-emerald">~$36K/year</span>
          </p>
        </div>
      </div>
    </section>
  );
}
