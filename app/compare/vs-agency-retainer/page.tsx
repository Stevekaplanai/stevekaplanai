import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CompareTable, CompareCTA } from "@/components/compare-helpers";

export const metadata: Metadata = {
  title: "GTMVP vs an agency retainer",
  description:
    "Why agency retainers optimize for agency retention, not your pipeline. $6K to $25K/mo of dashboard theater vs a $129 operator-written Diagnostic.",
  alternates: { canonical: "https://stevekaplan.ai/compare/vs-agency-retainer" },
  openGraph: {
    title: "GTMVP vs an agency retainer | Steve Kaplan",
    description:
      "Quarterly cadence and dashboard theater, or a $129 operator-written Diagnostic in 24 hours. $129 vs $6K to $25K/mo.",
    url: "https://stevekaplan.ai/compare/vs-agency-retainer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMVP vs an agency retainer",
    description: "I ran an agency for 10 years. I closed it. Here's why.",
  },
};

const rows = [
  {
    dim: "Cost",
    alt: "$6K to $25K/mo retainer. Often a 6-month minimum.",
    audit: "Free Smart Bidding Audit. $129 Diagnostic, one-time. Rebuild starts at $3,500/mo only if you want me running the account.",
  },
  {
    dim: "Cadence",
    alt: "Quarterly business reviews. Monthly dashboards. Weekly stand-ups.",
    audit: "Instant PDF for the free audit. 24 hours for the $129 Diagnostic. Then you decide.",
  },
  {
    dim: "What it optimizes for",
    alt: "Retention of the retainer. The QBR is theater because cancellation is the alternative.",
    audit: "Finding the leaks in your account. The Diagnostic is the deliverable. Nothing renews automatically.",
  },
  {
    dim: "Skin in the game",
    alt: "Agency keeps billing whether or not the campaigns work. The account manager rotates every 18 months.",
    audit: "Solo operator. The person who writes your Diagnostic is the same person running your account on Rebuild. On Rebuild I beat your trailing 90-day CPA by 20% or I work free until I do.",
  },
  {
    dim: "Output",
    alt: "Dashboards, reports, status updates. Sometimes campaigns ship; sometimes they're 'in queue.'",
    audit: "A 22-module Diagnostic. PDF you can share. The signal-stack leaks, dollar-attached, with a written remediation plan.",
  },
];

export default function VsAgencyRetainerPage() {
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
            GTMVP · vs an agency retainer
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]">
            Quarterly cadence and dashboard theater.{" "}
            <span className="text-emerald">Or a $129 Diagnostic in 24 hours.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I ran an agency for 10 years. Click Then Convert, $50M+ in spend
            across 100+ clients. I know exactly what the retainer is optimized for.
            It isn&apos;t your pipeline.
          </p>

          <CompareTable altLabel="Agency retainer" rows={rows} />

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-12 tracking-tight">
            Why I closed the agency
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The math on an agency is brutal once you stop selling and start
            counting. Junior media buyers cost you $80K. Senior strategists cost
            you $180K. Account managers cost you $90K. By the time you&apos;ve loaded
            up to handle 10 retainers, you need every one of them to renew or the
            P&amp;L breaks. Renewal becomes the only metric that matters.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The honest QBR is: &ldquo;here&apos;s what we did, here&apos;s what worked, here&apos;s
            what didn&apos;t, and here&apos;s why you should still pay us next quarter.&rdquo;
            The first three points are the deliverable; the fourth is why the
            slide deck takes 47 pages.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I closed the agency in 2024 because I&apos;d rather get paid for fixing
            the account than get paid for the renewal narrative. That&apos;s GTMVP.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 mt-10 tracking-tight">
            When the agency retainer is the right call
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One case: high-volume execution where the channels are stable and the
            work is repeatable. Weekly creative refreshes, daily bid management,
            lifecycle email sends. That&apos;s a labor problem, and agencies are good
            at labor at scale.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The audit doesn&apos;t replace that. It tells you whether the labor is
            being pointed at the right channels in the first place. Run the free
            Smart Bidding Audit first. Then decide if the agency is doing the right
            work or just doing it efficiently.
          </p>

          <CompareCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
