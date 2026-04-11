import Link from "next/link";

const trackRecord = [
  { value: "$50M+", label: "Lifetime Ad Spend Managed" },
  { value: "36:1", label: "Lifetime Ad ROI" },
  { value: "100+", label: "Clients Served" },
  { value: "9", label: "AI Products Shipped" },
];

const barkBoxCaseStudy = {
  company: "BarkBox",
  logo: "B",
  logoColor: "bg-amber",
  agency: "Click Then Convert",
  context:
    "D2C subscription service for dog owners. Needed aggressive growth while maintaining CAC efficiency.",
  testimonial: {
    quote:
      "He understands the big picture yet focuses on the metrics that matter - Cost to Acquire a Customer and New Customers Acquired.",
    author: "Todd Kane",
    title: "VP Growth, BarkBox",
  },
  metrics: [
    { value: "204%", label: "Increase in Conversions" },
    { value: "254%", label: "Increase in ROAS" },
    { value: "31%", label: "Decrease in Cost/Click" },
  ],
};

const philosophy = [
  {
    title: "Grand Slam Offers",
    description:
      "Make offers so good people feel stupid saying no. Every campaign I build starts with an irresistible offer, not just clever ad copy.",
  },
  {
    title: "36:1 Returns",
    description:
      "For every $1 spent on advertising, I average $36 back. That's not theory - that's my lifetime track record across all campaigns.",
  },
  {
    title: "Leads First",
    description:
      "It's hard to be poor with leads banging down your door. I build systems that generate qualified leads on demand.",
  },
  {
    title: "Builder Not Advisor",
    description:
      "Most consultants give you a deck. I build the system that executes it. I write the code. I deploy the infrastructure.",
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
            Every claim has a number. Every number has a story. Here&apos;s the
            proof.
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
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Philosophy section - inspired by $100M books */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            My Operating Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="bg-midnight border border-border rounded-xl p-5 hover:border-electric/30 transition-colors"
              >
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BarkBox Case Study - Featured */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Client Case Study
          </h3>

          <div className="bg-midnight border border-amber/30 rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 ${barkBoxCaseStudy.logoColor} rounded-lg flex items-center justify-center`}
                >
                  <span className="text-xl font-bold text-midnight">
                    {barkBoxCaseStudy.logo}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {barkBoxCaseStudy.company}
                  </h3>
                  <span className="text-xs text-amber uppercase tracking-wider font-medium">
                    via {barkBoxCaseStudy.agency}
                  </span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider bg-slate/50 px-3 py-1 rounded-full">
                Featured Case Study
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {barkBoxCaseStudy.context}
            </p>

            {/* BarkBox metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {barkBoxCaseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-slate/30 rounded-xl p-6 text-center"
                >
                  <span className="text-3xl md:text-4xl font-mono font-bold text-emerald block mb-2">
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* BarkBox testimonial */}
            <div className="border-l-4 border-amber pl-6 py-2">
              <p className="text-lg text-foreground italic mb-3">
                &ldquo;{barkBoxCaseStudy.testimonial.quote}&rdquo;
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">
                  {barkBoxCaseStudy.testimonial.author}
                </span>
                {" "}&mdash; {barkBoxCaseStudy.testimonial.title}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#get-white-paper"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            See How I Build Marketing Systems
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
