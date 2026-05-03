import Link from "next/link";
import { BookAuditButton } from "./book-audit-modal";
import { deliverables, timeline } from "@/app/audit/data";

const HIGHLIGHT_DELIVERABLES = deliverables.slice(0, 3);

export function AuditFeature() {
  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-midnight to-slate/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
            Profit Loop Audit · 5 days · Money-back guarantee
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
            Find the top 5 wins in your{" "}
            <span className="text-electric">GTM stack</span>{" "}
            in 5 days.
          </h2>
          <p className="text-lg text-muted-foreground">
            $3,500 flat. No retainers. No strategy decks. A ranked list of AI and automation wins
            with effort-vs-lift scores and dollars attached.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
          {/* Left: Deliverables + timeline */}
          <div className="bg-midnight border border-border rounded-2xl p-8">
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
              What you walk away with
            </p>
            <ul className="space-y-3 mb-8">
              {HIGHLIGHT_DELIVERABLES.map((d) => (
                <li key={d.item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-foreground font-medium">{d.item}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{d.format}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
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

          {/* Right: Pricing card */}
          <div className="bg-midnight border border-electric/30 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
                One price. No surprises.
              </p>
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-extrabold font-mono text-foreground">
                  $3,500
                </span>
                <span className="text-lg text-muted-foreground ml-2">flat</span>
              </div>
              <ul className="space-y-2.5 mb-8 text-sm text-muted-foreground">
                {[
                  "5 business days end-to-end",
                  "Money-back guarantee if fewer than 3 wins",
                  "Credited toward a retainer",
                  "No scope creep, no strategy decks",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <BookAuditButton className="w-full inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                Book Your Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </BookAuditButton>
              <Link
                href="/audit/sample"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                See a sample audit
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
