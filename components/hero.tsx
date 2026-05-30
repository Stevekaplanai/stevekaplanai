import Image from "next/image";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "$50M+", label: "Lifetime Ad Spend" },
  { value: "10:1", label: "Sustained ROAS" },
  { value: "32:1", label: "Highest Single Result" },
  { value: "9", label: "Products Shipped Solo" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-slate/40" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Headshot + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-electric/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steve%20Headshot-LYW2CejUfUZzhDbWmR0cq4GVWRAgwJ.jpg"
                  alt="Steve Kaplan, growth marketer and solo builder"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hi, I&apos;m</p>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Steve Kaplan</h2>
              </div>
            </div>

            <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-foreground leading-[1.1] sm:leading-[1.05] tracking-tight mb-6 text-balance">
              I spent 15 years moving{" "}
              <span className="text-electric">$50M+ in paid media</span>{" "}
              for other people. Then I built the thing I always wished existed.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Most marketers at this level give you a strategy deck. I give you the system that
              executes it, and the receipts behind every number.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              I built GTMVP: eight AI agents that continuously map competitors, sharpen positioning,
              score channels, and surface the moves most founders are too close to see. Start with
              the free Smart Bidding Audit and find out exactly where your ad spend is leaking.
            </p>

            {/* Stat strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-[1.75rem] font-bold font-mono text-electric">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://www.gtmvp.com/smart-bidding-audit"
                className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
              >
                Get the free Smart Bidding Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.gtmvp.com"
                className="text-sm text-electric hover:text-electric/80 underline underline-offset-4 transition-colors"
              >
                Explore GTMVP
              </a>
            </div>
          </div>

          {/* Right column - credential card */}
          <div className="bg-midnight border border-electric/30 rounded-2xl p-8 shadow-2xl shadow-electric/5">
            <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 text-electric text-xs font-medium px-3 py-1 rounded-full mb-5 font-mono uppercase tracking-wider">
              Operator credentials
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight mb-5">
              15 years. $50M+ managed. 9 products shipped. All solo.
            </h3>

            <ul className="space-y-3.5 mb-6 text-[15px] text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-electric font-mono mt-0.5 flex-shrink-0">+</span>
                <span>
                  <span className="text-foreground font-semibold">10:1 sustained ROAS</span>{" "}
                  at $2M+/mo spend across Google and Meta.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-mono mt-0.5 flex-shrink-0">+</span>
                <span>
                  <span className="text-foreground font-semibold">32:1 highest single result.</span>{" "}
                  Not a footnote. A real number with a real audit trail.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-mono mt-0.5 flex-shrink-0">+</span>
                <span>
                  <span className="text-foreground font-semibold">9 products shipped solo</span>{" "}
                  with Claude Code, including GTMVP and Attribyte.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-electric font-mono mt-0.5 flex-shrink-0">+</span>
                <span>
                  Google Partner. Facebook Blueprint Certified. Klaviyo Partner.
                  Amazon bestselling author (2023).
                </span>
              </li>
            </ul>

            <div className="bg-slate/30 border border-border rounded-lg px-4 py-3 mb-6 text-xs text-muted-foreground space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="text-emerald font-semibold">+</span>
                100+ clients served across paid media, growth, and marketing ops.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald font-semibold">+</span>
                17K+ LinkedIn followers. Writing on AI-powered growth since 2023.
              </p>
            </div>

            <a
              href="https://www.gtmvp.com/smart-bidding-audit"
              className="w-full inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25"
            >
              Get the free Smart Bidding Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Free. No sales call required. Takes under 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
