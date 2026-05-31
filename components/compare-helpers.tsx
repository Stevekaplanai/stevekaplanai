import Link from "next/link";
import { BookAuditButton } from "./book-audit-modal";

interface CompareRow {
  dim: string;
  alt: string;
  audit: string;
}

export function CompareTable({ rows, altLabel }: { rows: CompareRow[]; altLabel: string }) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block bg-slate/30 border border-border rounded-xl overflow-hidden mb-10">
        <table className="w-full">
          <thead className="bg-slate/50 border-b border-border">
            <tr>
              <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-4 py-3 w-1/4">
                Dimension
              </th>
              <th className="text-left text-xs font-mono uppercase tracking-wider text-muted-foreground px-4 py-3">
                {altLabel}
              </th>
              <th className="text-left text-xs font-mono uppercase tracking-wider text-electric px-4 py-3">
                GTMVP
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dim} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-4 text-sm font-semibold text-foreground align-top">
                  {r.dim}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground align-top leading-relaxed">
                  {r.alt}
                </td>
                <td className="px-4 py-4 text-sm text-foreground align-top leading-relaxed bg-electric/5">
                  {r.audit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-3 mb-10">
        {rows.map((r) => (
          <div
            key={r.dim}
            className="bg-slate/30 border border-border rounded-xl overflow-hidden"
          >
            <div className="px-4 py-2 bg-slate/50 border-b border-border">
              <p className="text-xs font-mono uppercase tracking-wider text-electric font-semibold">
                {r.dim}
              </p>
            </div>
            <div className="px-4 py-3 border-b border-border/50">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 mb-1">
                {altLabel}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.alt}</p>
            </div>
            <div className="px-4 py-3 bg-electric/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-electric mb-1">
                GTMVP
              </p>
              <p className="text-sm text-foreground leading-relaxed">{r.audit}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CompareCTA() {
  return (
    <div className="bg-midnight border border-electric/30 rounded-xl p-6 md:p-8 text-center mt-12">
      <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
        Stop guessing whether your spend backs out
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
        Work with me directly. Or run the free audit yourself.
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <BookAuditButton className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
          Work with me directly
        </BookAuditButton>
        <a
          href="https://gtmvp.com"
          className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
        >
          Or run the free Smart Bidding Audit
        </a>
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 bg-transparent border border-muted text-foreground hover:bg-slate text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
        >
          See all comparisons
        </Link>
      </div>
    </div>
  );
}
