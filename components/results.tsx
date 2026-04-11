import Link from "next/link";

const trackRecord = [
  { value: "$50M+", label: "Lifetime Ad Spend Managed" },
  { value: "36:1", label: "Lifetime Ad ROI" },
  { value: "100+", label: "Clients Served" },
  { value: "9", label: "AI Products Shipped" },
];

const caseStudies = [
  {
    company: "BarkBox",
    logo: "B",
    logoColor: "bg-amber",
    context: "D2C subscription service for dog owners. Needed aggressive growth while maintaining CAC efficiency.",
    testimonial: {
      quote: "He understands the big picture yet focuses on the metrics that matter - Cost to Acquire a Customer and New Customers Acquired.",
      author: "Todd Kane",
      title: "VP Growth, BarkBox",
    },
    metrics: [
      { value: "204%", label: "Increase in Conversions" },
      { value: "254%", label: "Increase in ROAS" },
      { value: "31%", label: "Decrease in Cost/Click" },
    ],
  },
  {
    company: "Air Canada",
    logo: "AC",
    logoColor: "bg-electric",
    context: "37M customers. 185 destinations. Fragmented data across multiple environments. Campaign analysis took weeks.",
    metrics: [
      { before: "2 weeks", after: "3.5 hours", label: "Campaign Analysis" },
      { before: "20 hours", after: "1 hour", label: "Analyst Time / Week" },
    ],
  },
  {
    company: "Neil Jesani Advisors",
    logo: "NJ",
    logoColor: "bg-emerald",
    context: "76-person financial advisory. $300K+/month in paid media. Full-stack martech implementation.",
    metrics: [
      { value: "$300K+", label: "Monthly Ad Spend" },
      { value: "Full Stack", label: "Martech Implementation" },
    ],
  },
];

const philosophy = [
  {
    title: "Grand Slam Offers",
    description: "Make offers so good people feel stupid saying no. Every campaign I build starts with an irresistible offer, not just clever ad copy.",
  },
  {
    title: "36:1 Returns",
    description: "For every $1 spent on advertising, I average $36 back. That&apos;s not theory - that&apos;s my lifetime track record across all campaigns.",
  },
  {
    title: "Leads First",
    description: "It&apos;s hard to be poor with leads banging down your door. I build systems that generate qualified leads on demand.",
  },
  {
    title: "Builder Not Advisor",
    description: "Most consultants give you a deck. I build the system that executes it. I write the code. I deploy the infrastructure.",
  },
];

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
        
        {/* Philosophy section - inspired by $100M books */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">My Operating Principles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="bg-midnight border border-border rounded-xl p-5 hover:border-electric/30 transition-colors"
              >
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Case studies */}
        <div className="space-y-6 mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Client Case Studies</h3>
          
          {/* BarkBox - Featured */}
          <div className="bg-midnight border border-amber/30 rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${caseStudies[0].logoColor} rounded-lg flex items-center justify-center`}>
                  <span className="text-lg font-bold text-midnight">{caseStudies[0].logo}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {caseStudies[0].company}
                  </h3>
                  <span className="text-xs text-amber uppercase tracking-wider font-medium">
                    Featured Case Study
                  </span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              {caseStudies[0].context}
            </p>
            
            {/* BarkBox metrics */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {caseStudies[0].metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-slate/30 rounded-lg p-4 text-center"
                >
                  <span className="text-2xl md:text-3xl font-mono font-bold text-emerald block mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* BarkBox testimonial */}
            {caseStudies[0].testimonial && (
              <div className="border-l-2 border-amber pl-4">
                <p className="text-foreground italic mb-2">
                  &ldquo;{caseStudies[0].testimonial.quote}&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{caseStudies[0].testimonial.author}</span>
                  {" "}&mdash; {caseStudies[0].testimonial.title}
                </p>
              </div>
            )}
          </div>
          
          {/* Other case studies */}
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.slice(1).map((study) => (
              <div
                key={study.company}
                className="bg-midnight border border-border rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${study.logoColor} rounded-lg flex items-center justify-center`}>
                      <span className="text-sm font-bold text-midnight">{study.logo}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {study.company}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Case Study
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {study.context}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-slate/30 rounded-lg p-3 text-center"
                    >
                      {"before" in metric ? (
                        <div className="mb-1">
                          <span className="text-xs font-mono text-muted-foreground line-through block">
                            {metric.before}
                          </span>
                          <span className="text-lg font-mono font-bold text-emerald">
                            {metric.after}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-mono font-bold text-cyan block mb-1">
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
        
        {/* CTA */}
        <div className="text-center">
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
