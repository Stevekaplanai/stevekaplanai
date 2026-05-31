import Link from "next/link";

interface Tier {
  label: string;
  price: string;
  priceNote: string;
  headline: string;
  description: string;
  points: string[];
  accent: "electric" | "emerald" | "amber";
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    label: "Free",
    price: "$0",
    priceNote: "no card required",
    headline: "Smart Bidding Audit",
    description:
      "14 checkpoints across your bidding strategy, campaign structure, and signal quality. Know exactly where Google is misallocating your budget.",
    points: [
      "Bidding signal audit across campaigns",
      "Budget allocation scoring",
      "Conversion action quality check",
      "Audience layer diagnosis",
      "Priority fix list with estimated impact",
    ],
    accent: "electric",
    highlight: false,
  },
  {
    label: "$129",
    price: "$129",
    priceNote: "delivered in 24 hours",
    headline: "Operator Diagnostic",
    description:
      "22 modules. Written by an operator who has personally managed $50M+ in Google and Meta spend. No templates. No agency boilerplate.",
    points: [
      "22-module deep diagnostic",
      "Campaign-level analysis with specific findings",
      "Ranked fix list with dollar-impact estimates",
      "Channel mix assessment",
      "90-day execution roadmap",
    ],
    accent: "emerald",
    highlight: true,
  },
  {
    label: "Done for you",
    price: "$3,500+",
    priceNote: "per month, capped clients",
    headline: "GTMVP Rebuild",
    description:
      "We take over paid media strategy and execution. Capped at a small number of clients. Includes a 20% CPA reduction guarantee on qualifying accounts.",
    points: [
      "Full paid media strategy and execution",
      "Eight-agent intelligence backend running weekly",
      "Competitor mapping and positioning sharpening",
      "Channel scoring and angle generation",
      "20% CPA reduction guarantee on qualifying accounts",
    ],
    accent: "amber",
    highlight: false,
  },
];

const agents = [
  { name: "Bid Signal Auditor", role: "Flags wasted spend in real time" },
  { name: "Competitor Mapper", role: "Tracks positioning shifts weekly" },
  { name: "Positioning Sharpener", role: "Finds the angle only you can own" },
  { name: "Channel Scorer", role: "Ranks where to allocate next dollar" },
  { name: "Trend Monitor", role: "Surfaces category signals before spend" },
  { name: "Audience Architect", role: "Diagnoses audience signal decay" },
  { name: "Creative Analyst", role: "Reads creative fatigue before it costs" },
  { name: "Attribution Layer", role: "Maps conversion path gaps" },
];

const accentClasses: Record<Tier["accent"], { border: string; label: string; icon: string }> = {
  electric: {
    border: "border-electric/30",
    label: "text-electric",
    icon: "text-electric",
  },
  emerald: {
    border: "border-emerald/40",
    label: "text-emerald",
    icon: "text-emerald",
  },
  amber: {
    border: "border-amber/30",
    label: "text-amber",
    icon: "text-amber",
  },
};

export function GTMVPSection() {
  return (
    <section id="gtmvp" className="py-24 bg-gradient-to-b from-slate/10 to-midnight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            Lead product
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5 tracking-tight leading-[1.05]">
            The paid media OS for
            <br />
            <span className="text-electric">Series A founders still in the account.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You raised. You have a product people want. You are still logging into Google Ads
            yourself because nobody on your team has the pattern recognition to manage it at this
            budget. GTMVP is built for exactly that operator.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {tiers.map((tier) => {
            const accent = accentClasses[tier.accent];
            return (
              <div
                key={tier.label}
                className={`bg-midnight border rounded-2xl p-7 flex flex-col ${
                  tier.highlight
                    ? `${accent.border} ring-1 ring-emerald/20`
                    : "border-border"
                }`}
              >
                <div className="mb-5">
                  <p className={`text-xs uppercase tracking-wider font-mono font-medium mb-2 ${accent.label}`}>
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-4xl font-extrabold font-mono text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{tier.priceNote}</span>
                  </div>
                  <p className="text-lg font-bold text-foreground mb-2">{tier.headline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-2 flex-1">
                  {tier.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`font-mono mt-0.5 flex-shrink-0 ${accent.icon}`}>
                        +
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Agent backend callout */}
        <div className="bg-midnight border border-border rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 items-start">
            <div>
              <p className="text-xs uppercase tracking-wider text-electric font-mono font-medium mb-3">
                The backend
              </p>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                Eight specialized agents. Supervised, not autonomous.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                GTMVP runs eight agents as the intelligence layer behind every engagement.
                They audit bidding signals, map competitors, sharpen positioning, and score
                channels on a weekly cycle. You get the output. You make the calls. The agents
                do not touch your ad account.
              </p>
              <p className="text-xs text-muted-foreground/60 leading-relaxed">
                Agent infrastructure is supervised. Every output passes through operator
                review before it reaches you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="bg-slate/30 border border-border rounded-xl px-4 py-3"
                >
                  <p className="text-xs font-mono text-electric font-medium mb-0.5">
                    {agent.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{agent.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proof bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { stat: "$50M+", label: "Lifetime ad spend managed" },
            { stat: "10:1", label: "Sustained ROAS at $2M+/mo" },
            { stat: "3.2x", label: "Average ROAS" },
            { stat: "100+", label: "Clients served" },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-slate/20 border border-border rounded-xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-extrabold font-mono text-foreground mb-1">
                {item.stat}
              </p>
              <p className="text-xs text-muted-foreground leading-tight">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://www.gtmvp.com/smart-bidding-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
          >
            Get the free Smart Bidding Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="https://www.gtmvp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-electric hover:text-electric/80 font-medium transition-colors text-sm underline underline-offset-4"
          >
            See the full product
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
