import Link from "next/link";
import { BookAuditButton } from "@/components/book-audit-modal";

interface CompareRow {
  dim: string;
  alt: string;
  audit: string;
}

export function CompareTable({ rows, altLabel }: { rows: CompareRow[]; altLabel: string }) {
  return (
    <div className="bg-slate/30 border border-border rounded-xl overflow-hidden mb-10">
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
              Profit Loop Audit
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
  );
}

export function CompareCTA() {
  return (
    <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center mt-12">
      <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
        Ready to skip the comparison shopping?
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
        5 days. $3,500 flat. Money back if fewer than 3 wins.
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <BookAuditButton className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
          Book your audit
        </BookAuditButton>
        <Link
          href="/audit/sample"
          className="inline-flex items-center gap-2 bg-transparent border border-electric text-electric hover:bg-electric/10 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
        >
          See a sample audit &rarr;
        </Link>
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
