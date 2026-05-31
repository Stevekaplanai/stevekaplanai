import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "GTMVP vs hiring a junior in-house marketer",
  description:
    "Why a junior marketer learning on your dollar costs more than an operator-run audit. $70K to $110K/yr + benefits vs a $129 Diagnostic.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-junior-marketer" },
  openGraph: {
    title: "GTMVP vs hiring a junior in-house marketer | Steve Kaplan",
    description:
      "$70K to $110K a year learning on your dollar, or $129 from an operator who has managed $50M+ in spend.",
    url: "https://stevekaplan.ai/compare/vs-junior-marketer",
    type: "article",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "GTMVP vs hiring a junior in-house" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMVP vs hiring a junior in-house",
    description: "$70K to learn, or $129 from an operator who's already shipped.",
    images: ["/og-card.jpg"],
  },
};

const rows = [
  {
    dim: "First-year cost",
    alt: "$70K to $110K base + 25 to 30% for taxes, benefits, equipment, software seats. ~$95K to $145K all-in.",
    audit: "Free Smart Bidding Audit. $129 Diagnostic, one-time. No benefits load, no software stack to provision.",
  },
  {
    dim: "Time to value",
    alt: "3 to 6 months to ramp on your stack, your data, your customer. Real output in month 6+.",
    audit: "Instant PDF for the free audit. 24 hours for the $129 Diagnostic, with the leaks dollar-attached.",
  },
  {
    dim: "Operator depth",
    alt: "Junior is learning attribution, paid media, lifecycle. They have to make every mistake at least once.",
    audit: "I've already managed $50M+ in spend across 100+ clients at a 3.2x average ROAS. The mistakes are priced in elsewhere.",
  },
  {
    dim: "What it produces",
    alt: "Tactical execution: campaign launches, copy iterations, dashboards. Strategic surface area is limited.",
    audit: "A 22-module Diagnostic: the signal-stack leaks, dollar numbers, and a written remediation plan. Strategic by construction.",
  },
  {
    dim: "Risk if it doesn't work",
    alt: "12-month tenure is below market average for marketing hires. You're back to interviewing in 11 months.",
    audit: "7-day money-back on the Diagnostic. No HR cleanup, no severance.",
  },
];

export default function VsJuniorMarketerPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="w-full max-w-3xl mx-auto px-6">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1 text-sm text-electric hover:text-electric/80 mb-6"
          >
            Back to all comparisons
          </Link>

          <p className="text-sm uppercase tracking-wider text-electric font-mono font-medium mb-3">
            GTMVP · vs hiring a junior in-house
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            $70K to learn, or{" "}
            <span className="text-emerald">$129 from an operator</span>{" "}
            who&apos;s already shipped.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            The junior-in-house hire is the most expensive decision in mid-stage
            marketing budgets, because the ramp cost is invisible until the head
            of finance asks why CPA didn&apos;t move in Q2.
          </p>

          <CompareTable altLabel="Junior in-house marketer" rows={rows} />

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-12 tracking-tight">
            The hidden ramp cost
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A junior marketing hire at $90K base is closer to $135K all-in by the
            time you load taxes, benefits, equipment, and the SaaS seats they&apos;ll
            consume. Most operators round-down to base when budgeting and round-up
            to all-in when explaining why the role isn&apos;t producing yet.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Worse: the first 90 days are pure ramp. They&apos;re learning your
            customer, your stack, your attribution model, your CRM hygiene. None of
            those skills are general; they&apos;re specific to your business.
            Ramp is invisible on the P&amp;L but it&apos;s the largest cost
            you&apos;ll never see itemized.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By month 6, when they&apos;re finally producing strategic output, the
            company has paid ~$67K for the ramp itself. The Diagnostic is $129. The
            math compares unfavorably.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            When you should hire the junior anyway
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hire the junior if the work is high-cadence execution that needs a
            full-time owner: launching campaigns weekly, managing the lifecycle
            program, owning the CRM. The audit doesn&apos;t replace that role. It
            tells the role what to ship first.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The two work together: the Diagnostic hands the junior the leaks with
            dollar numbers and a remediation plan, and the junior executes it without
            spending 6 months building intuition the audit already condensed.
          </p>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
