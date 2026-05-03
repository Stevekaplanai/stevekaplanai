import Image from "next/image";
import Link from "next/link";
import { BookAuditButton } from "./book-audit-modal";

const stats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "9", label: "AI Products Built" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "36:1", label: "Lifetime Ad ROI" },
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
          {/* Left column - Identity + Offer */}
          <div>
            {/* Headshot + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-electric/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steve%20Headshot-LYW2CejUfUZzhDbWmR0cq4GVWRAgwJ.jpg"
                  alt="Steve Kaplan - AI Automation Consultant and Growth Marketer in Fort Lauderdale"
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

            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              Profit Loop Audit · 5 days · $3,500 flat · Money-back guarantee
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
              I find the top 5{" "}
              <span className="text-electric">AI and automation wins</span>{" "}
              in your GTM stack.{" "}
              <span className="text-emerald">In 5 days.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              I don&apos;t advise. I build. Growth marketer who writes code &mdash; $50M+ in ad
              spend, 9 AI products shipped, 100+ clients served.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Most fractional CMOs hand you a strategy deck. I deliver a ranked list of wins
              with effort-vs-lift scores and dollars attached &mdash; built by someone who
              fights the same friction you do, every day.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-electric">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <BookAuditButton className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Book Your Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </BookAuditButton>
              <Link
                href="/audit/sample"
                className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                See a sample audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right column - Pricing card */}
          <div className="bg-midnight border border-electric/30 rounded-2xl p-8 shadow-2xl shadow-electric/5">
            <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 text-electric text-xs font-medium px-3 py-1 rounded-full mb-5 font-mono uppercase tracking-wider">
              Profit Loop Audit
            </div>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-extrabold font-mono text-foreground">
                $3,500
              </span>
              <span className="text-lg text-muted-foreground ml-2">flat</span>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "5 business days end-to-end",
                "Top 5 wins ranked by effort vs lift",
                "30/60/90 day phased roadmap",
                "Money-back guarantee",
                "Credited toward a retainer",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
            <BookAuditButton className="w-full inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
              Book Your Audit
            </BookAuditButton>
            <p className="text-xs text-center text-muted-foreground mt-4">
              No spam. No sales sequence. Reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
