import Link from "next/link";

const pillars = [
  {
    label: "Multi-Touch Attribution",
    description:
      "Deterministic-primary identity resolution. Every touchpoint credited without relying on cookies as the primary path.",
  },
  {
    label: "Marketing Mix Modeling",
    description:
      "Spend-level signal across all channels. Understand incrementality at the portfolio level, not just last-click.",
  },
  {
    label: "Incrementality Testing",
    description:
      "Holdout-based lift measurement built into the platform. Stop guessing whether a channel is actually driving revenue.",
  },
];

export function AttribyteSection() {
  return (
    <section id="attribyte" className="py-24 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Attribution Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
            Attribyte.{" "}
            <span className="text-emerald">
              MTA, MMM, and incrementality in one platform.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I built Attribyte for marketing leaders at mid-market to enterprise
            B2B SaaS who need real measurement, not more dashboards. Most teams
            run three separate tools, get three conflicting answers, and make
            budget calls by gut. Attribyte puts all three measurement methods in
            one place so you can stop arguing about what is working.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Left: Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="p-6 bg-slate/20 border border-border rounded-xl hover:border-electric/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-electric flex-shrink-0 group-hover:bg-emerald transition-colors" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {pillar.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Context card */}
          <div className="bg-midnight border border-border rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-electric font-mono mb-3">
                Built for
              </p>
              <p className="text-foreground font-semibold leading-snug mb-4">
                VP Marketing, RevOps, and CMOs who need to answer the question
                their CFO keeps asking.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Privacy-first architecture. Deterministic identity as the
                primary path, probabilistic as the fallback. No third-party
                cookies required to get accurate attribution.
              </p>
            </div>

            <div className="bg-slate/30 border border-border rounded-lg px-4 py-4 space-y-2 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-electric font-mono mt-0.5">→</span>
                <span>
                  Built by Steve. Not a third-party tool. Owned and operated.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric font-mono mt-0.5">→</span>
                <span>
                  Cookieless-primary. Deterministic identity resolution first.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-electric font-mono mt-0.5">→</span>
                <span>
                  All three measurement methods. One platform. No stitching.
                </span>
              </p>
            </div>

            <Link
              href="https://attribyte.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              See Attribyte
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
      </div>
    </section>
  );
}
