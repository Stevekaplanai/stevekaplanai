import Link from "next/link";
import { BookAuditButton } from "./book-audit-modal";
import { timeline } from "@/app/audit/data";

export function AuditFeature() {
  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-midnight to-slate/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            The offer
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.05]">
            Stack audit. 5 days. 5 wins.
            <br />
            <span className="text-emerald">Ranked, scoped, dollar-attached.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most agencies optimize for retainer. Most fractional CMOs ship a deck. I run a
            5-day audit on your stack, find the highest-leverage moves, and hand them to your
            team in priority order. $3,500 flat. Money back if I find fewer than 3.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
          {/* Left: Effort vs lift framing + timeline */}
          <div className="bg-midnight border border-border rounded-2xl p-8">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3 font-mono">
              How the ranking works
            </p>
            <p className="text-foreground text-lg font-semibold mb-2 leading-snug">
              Every win gets two scores. Effort and lift.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Effort is what it costs you to ship &mdash; tooling, time, integration risk. Lift
              is dollars and hours back. We start with the wins that lift profit fastest, with
              the least effort. Slow lifts go on the 60- or 90-day track. Anything that doesn&apos;t
              clear the bar gets cut.
            </p>

            <div className="bg-slate/30 border border-border rounded-xl p-5 mb-6">
              <p className="text-xs uppercase tracking-wider text-electric font-mono mb-3">
                Patterns I find on most stacks
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald font-mono mt-0.5">→</span>
                  <span>Lead routing that loses 30%+ of inbound to dead-letter status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald font-mono mt-0.5">→</span>
                  <span>$5K&ndash;$30K/month in paid media spent on broken audiences nobody noticed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald font-mono mt-0.5">→</span>
                  <span>3&ndash;5 manual handoffs per deal that an AI workflow eats in an afternoon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald font-mono mt-0.5">→</span>
                  <span>Attribution gaps that make every channel look like it&apos;s working &mdash; or none</span>
                </li>
              </ul>
            </div>

            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3 font-mono">
              5-day timeline
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {timeline.map((step) => (
                <div
                  key={step.day}
                  className="bg-slate/30 border border-border rounded-lg px-3 py-2"
                >
                  <p className="text-[10px] font-mono text-electric uppercase tracking-wider">
                    {step.day}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                </div>
              ))}
            </div>

            <Link
              href="/audit"
              className="inline-flex items-center gap-2 text-electric hover:text-electric/80 text-sm font-medium mt-6 underline underline-offset-4 transition-colors"
            >
              Read the full audit page
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Outcomes card */}
          <div className="bg-midnight border border-electric/30 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-electric font-mono mb-3">
                What it costs · what you get
              </p>
              <div className="mb-5">
                <span className="text-5xl md:text-6xl font-extrabold font-mono text-foreground">
                  $3,500
                </span>
                <span className="text-lg text-muted-foreground ml-2">flat</span>
              </div>

              <p className="text-foreground font-semibold mb-3 leading-snug">
                You walk into Day 5 with:
              </p>
              <ul className="space-y-2.5 mb-6 text-[15px] text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-electric font-mono mt-0.5">→</span>
                  <span>5 wins, ranked. <span className="text-foreground">Each with dollars attached.</span></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-electric font-mono mt-0.5">→</span>
                  <span>A stack map your team will actually use.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-electric font-mono mt-0.5">→</span>
                  <span>A data baseline. <span className="text-foreground">No more arguing about what&apos;s working.</span></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-electric font-mono mt-0.5">→</span>
                  <span>A 30/60/90 plan. <span className="text-foreground">Execute with or without me.</span></span>
                </li>
              </ul>

              <div className="bg-slate/30 border border-border rounded-lg px-4 py-3 mb-6 text-xs text-muted-foreground space-y-1.5">
                <p className="flex items-center gap-2">
                  <span className="text-emerald">✓</span> Your time commitment: <span className="text-foreground font-semibold">~3 hours.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald">✓</span> Refund if <span className="text-foreground font-semibold">fewer than 3 wins.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald">✓</span> 100% credited toward a retainer.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <BookAuditButton className="w-full inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Book your audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </BookAuditButton>
              <Link
                href="/audit/sample"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                See a sample audit deliverable
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
