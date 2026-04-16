const stats = [
  {
    value: "$50M+",
    label: "Ad Spend Managed",
    color: "text-emerald",
  },
  {
    value: "8",
    label: "AI Products Built",
    color: "text-cyan",
  },
  {
    value: "3.2x",
    label: "Avg ROAS",
    color: "text-amber",
  },
  {
    value: "100+",
    label: "Clients Served",
    color: "text-electric",
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-slate/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-bold font-mono ${stat.color} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
