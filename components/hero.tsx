import Link from "next/link";

const tools = [
  { name: "BigQuery", color: "bg-electric" },
  { name: "PostHog", color: "bg-slate" },
  { name: "Fivetran", color: "bg-cyan" },
  { name: "dbt", color: "bg-coral" },
  { name: "Looker Studio", color: "bg-emerald" },
  { name: "Hightouch", color: "bg-emerald" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-slate/30" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
          Free White Paper
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6 text-balance">
          Your marketing data stack is costing you{" "}
          <span className="text-emerald">$259K too much</span>.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          The modern 6-tool stack I use to replace $295K enterprise platforms
          &mdash; at 88% less cost.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#get-white-paper"
            className="w-full sm:w-auto bg-electric hover:bg-electric/90 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            Get the Free Playbook
          </Link>
          <Link
            href="#stack"
            className="w-full sm:w-auto bg-transparent border border-muted text-foreground hover:bg-slate text-lg font-medium px-8 py-4 rounded-xl transition-colors"
          >
            See the Stack
          </Link>
        </div>
        
        {/* Tool badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 bg-slate/50 border border-border px-4 py-2 rounded-lg"
            >
              <span className={`w-2.5 h-2.5 ${tool.color} rounded-sm`} />
              <span className="text-sm font-mono text-muted-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Tagline */}
        <p className="text-lg text-muted-foreground">
          I don&apos;t advise. I{" "}
          <span className="text-emerald font-semibold">build</span>.
        </p>
      </div>
    </section>
  );
}
