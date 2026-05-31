import Link from "next/link";

interface ComparisonRow {
  option: string;
  cost: string;
  timeToValue: string;
  output: string;
  riskOfMiss: string;
  highlight?: boolean;
  href?: string;
}

const rows: ComparisonRow[] = [
  {
    option: "Junior in-house marketer",
    cost: "$70K to $110K/yr + benefits",
    timeToValue: "3 to 6 months",
    output: "Tactical execution. Limited strategic surface area.",
    riskOfMiss: "High. Learning on your dollar, attribution skills not on the bench.",
    href: "/compare/vs-junior-marketer",
  },
  {
    option: "Fractional CMO / strategy consultant",
    cost: "$8K to $15K/mo retainer",
    timeToValue: "60 to 90 days for first deck",
    output: "Strategy deck. No execution. Decays in 60 days.",
    riskOfMiss: "Medium. Output is talk, not ship.",
    href: "/compare/vs-fractional-cmo",
  },
  {
    option: "Smart Bidding Audit + $129 Diagnostic",
    cost: "Free, then $129",
    timeToValue: "Instant, or 24 hours",
    output: "Bidding signal stack + data baseline + ranked leaks + written remediation plan.",
    riskOfMiss: "7-day money-back if it does not surface a move you would act on. No call.",
    highlight: true,
  },
  {
    option: "DIY with ChatGPT Pro + tools",
    cost: "~$200/mo subscriptions + your time",
    timeToValue: "Weeks of your evenings",
    output: "Generic recommendations. No bidding signal audit. No data baseline.",
    riskOfMiss: "High. No operator review, no accountability, no track record behind it.",
    href: "/compare/vs-chatgpt-pro",
  },
];

export function AuditComparison() {
  return (
    <section className="py-20 md:py-24 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            How it stacks up
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight leading-tight">
            $129 against the alternatives.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Diagnostic is priced to be a no-brainer next to a senior hire, not the cheaper tools.
            The math gets clearer when you put them next to each other.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block bg-slate/30 border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate/50 border-b border-border">
                <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-5 py-4">
                  Option
                </th>
                <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-5 py-4">
                  Cost
                </th>
                <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-5 py-4">
                  Time to value
                </th>
                <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-5 py-4">
                  Output
                </th>
                <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-5 py-4">
                  Risk if it misses
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.option}
                  className={`border-b border-border/50 last:border-0 ${
                    row.highlight ? "bg-electric/5" : ""
                  }`}
                >
                  <td className="px-5 py-5 text-sm">
                    <p className={`font-semibold ${row.highlight ? "text-electric" : "text-foreground"}`}>
                      {row.option}
                    </p>
                    {row.href && (
                      <Link
                        href={row.href}
                        className="text-xs text-muted-foreground hover:text-electric mt-1 inline-block underline underline-offset-4"
                      >
                        Read the comparison
                      </Link>
                    )}
                  </td>
                  <td
                    className="px-5 py-5 text-sm font-mono text-foreground"
                    dangerouslySetInnerHTML={{ __html: row.cost }}
                  />
                  <td
                    className="px-5 py-5 text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: row.timeToValue }}
                  />
                  <td
                    className="px-5 py-5 text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: row.output }}
                  />
                  <td
                    className="px-5 py-5 text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: row.riskOfMiss }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/tablet cards */}
        <div className="lg:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.option}
              className={`border rounded-xl p-5 ${
                row.highlight ? "bg-electric/5 border-electric/30" : "bg-slate/30 border-border"
              }`}
            >
              <p
                className={`font-semibold mb-3 ${
                  row.highlight ? "text-electric" : "text-foreground"
                }`}
              >
                {row.option}
              </p>
              <dl className="space-y-2 text-sm">
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="text-xs font-mono uppercase tracking-wider text-muted-foreground sm:w-32 sm:flex-shrink-0">
                    Cost
                  </dt>
                  <dd
                    className="text-foreground font-mono"
                    dangerouslySetInnerHTML={{ __html: row.cost }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="text-xs font-mono uppercase tracking-wider text-muted-foreground sm:w-32 sm:flex-shrink-0">
                    Time to value
                  </dt>
                  <dd
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: row.timeToValue }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="text-xs font-mono uppercase tracking-wider text-muted-foreground sm:w-32 sm:flex-shrink-0">
                    Output
                  </dt>
                  <dd
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: row.output }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="text-xs font-mono uppercase tracking-wider text-muted-foreground sm:w-32 sm:flex-shrink-0">
                    Risk
                  </dt>
                  <dd
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: row.riskOfMiss }}
                  />
                </div>
                {row.href && (
                  <Link
                    href={row.href}
                    className="text-xs text-electric hover:text-electric/80 mt-2 inline-block underline underline-offset-4"
                  >
                    Read the full comparison
                  </Link>
                )}
              </dl>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Want to see all 5 head-to-head?{" "}
          <Link
            href="/compare"
            className="text-electric hover:text-electric/80 underline underline-offset-4"
          >
            Compare the audit vs every alternative
          </Link>
        </p>
      </div>
    </section>
  );
}
