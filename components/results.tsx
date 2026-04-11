import Link from "next/link";

const trackRecord = [
  { value: "$50M+", label: "Lifetime Ad Spend Managed" },
  { value: "100+", label: "Clients Served" },
  { value: "3.2x", label: "Average ROAS" },
  { value: "40%", label: "CPA Reduction" },
];

const caseStudies = [
  {
    company: "Air Canada",
    context: "37M customers. 185 destinations. Fragmented data across multiple environments.",
    metrics: [
      { before: "2 weeks", after: "3.5 hours", label: "Campaign Analysis" },
      { before: "20 hours", after: "1 hour", label: "Analyst Time / Week" },
    ],
  },
  {
    company: "BVK Agency",
    context: "Previous all-in-one platform lacked customization. Row-based pricing drove costs up.",
    metrics: [
      { value: "50%", label: "Faster Reports" },
      { value: "0", label: "Data Workarounds" },
    ],
  },
];

const testimonial = {
  quote: "Steve doesn't just understand marketing theory — he builds the systems that execute it. The combination of strategic thinking and technical ability is rare.",
  author: "Marketing Director",
  company: "Mid-Market SaaS",
};

export function Results() {
  return (
    <section id="results" className="py-24 bg-slate/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Track Record
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Numbers Don&apos;t Lie
          </h2>
          <p className="text-lg text-muted-foreground">
            Every claim has a number. Every number has a story. Here&apos;s the proof.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trackRecord.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-midnight border border-border rounded-xl"
            >
              <p className="text-3xl md:text-4xl font-bold font-mono text-electric mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Case studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="bg-midnight border border-border rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {study.company}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {study.context}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-slate/30 rounded-lg p-4 text-center"
                  >
                    {metric.before ? (
                      <div className="mb-2">
                        <span className="text-sm font-mono text-muted-foreground line-through">
                          {metric.before}
                        </span>
                        <span className="text-xl font-mono font-bold text-emerald block">
                          {metric.after}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-mono font-bold text-cyan block mb-2">
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
        
        {/* Testimonial */}
        <div className="bg-gradient-to-r from-electric/5 to-emerald/5 border border-electric/20 rounded-xl p-8 md:p-12 text-center">
          <svg
            className="w-10 h-10 text-electric/30 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 max-w-3xl mx-auto text-balance">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-muted-foreground">
            <span className="font-medium text-foreground">{testimonial.author}</span>
            <span className="mx-2">&mdash;</span>
            <span>{testimonial.company}</span>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#get-white-paper"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            Get the Full Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
