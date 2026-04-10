const caseStudies = [
  {
    company: "Air Canada",
    description:
      "37M customers. 185 destinations. Fragmented data across multiple environments. Campaign analysis took weeks.",
    metrics: [
      { before: "2wk", after: "3.5hr", label: "Campaign Analysis" },
      { after: "1hr", before: "20hr", label: "Analyst Time / Week" },
    ],
  },
  {
    company: "BVK Agency",
    description:
      "Previous all-in-one platform lacked customization. Row-based pricing drove costs up. Slow reports eroded trust.",
    metrics: [
      { value: "50%", label: "Faster Reports" },
      { value: "0", label: "Data Workarounds" },
    ],
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 bg-slate/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-electric uppercase tracking-wider mb-4 block">
            Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Real Results
          </h2>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {study.company}
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    {study.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Case Study
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-midnight/50 border border-border rounded-lg p-4 text-center"
                  >
                    {metric.before ? (
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-2xl font-mono font-bold text-amber">
                          {metric.before}
                        </span>
                        <span className="text-muted-foreground">→</span>
                        <span className="text-2xl font-mono font-bold text-emerald">
                          {metric.after}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-mono font-bold text-cyan block mb-2">
                        {metric.value}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
