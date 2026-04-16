import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The One Audience Segment That Changed Everything",
  description:
    "At $300K/month in paid media, I found an audience segment converting at 15.5% (3x the average) at $3,448/customer. Here is exactly how.",
  alternates: { canonical: "https://stevekaplan.ai/blog/audience-segment-changed-everything" },
  openGraph: { title: "The One Audience Segment That Changed Everything | Steve Kaplan", type: "article" },
};

export default function Post() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "BlogPosting",
            headline: "The One Audience Segment That Changed Everything",
            author: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/blog/audience-segment-changed-everything",
            datePublished: "2026-04-15",
            keywords: ["paid media", "audience segmentation", "Meta Ads", "ROAS", "customer acquisition"],
          }) }}
        />

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-electric/10 text-electric px-2.5 py-1 rounded-md">AI-Powered Growth Marketing</span>
          <span className="text-xs text-muted-foreground">April 15, 2026</span>
          <span className="text-xs text-muted-foreground">4 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-8">
          The One Audience Segment That Changed Everything
        </h1>

        <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed text-[17px]">
          <p>
            I manage $300K/month in paid media across Meta, Google, and TikTok at a 76-person firm.
          </p>
          <p>
            Last year I found an audience segment that converts to customers at 15.5%. The firm average is 5%.
          </p>
          <p>
            Same creative. Same offer. Same landing page. Just a different audience slice.
          </p>
          <p>
            The cost per customer dropped to $3,448. Before that segment, we were paying over $10K for the same outcome.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">What I learned</h2>

          <p>
            <strong className="text-foreground">1. Broad targeting beats Lookalike at scale.</strong> At $200K+/month in Meta spend, Interest/Broad targeting at $470 per result consistently outperformed Lookalike audiences at $705. Most operators never test this because Lookalikes "feel" smarter. They are not. At this spend level, the algorithm needs room to explore. Constraining it with a small seed audience actually hurts performance.
          </p>
          <p>
            <strong className="text-foreground">2. The winning segment was a data win, not a creative win.</strong> I looked at which leads actually became customers (not just which ones booked meetings) and built the audience backward from revenue. Most teams optimize for the wrong conversion event. They celebrate booked meetings when they should be celebrating closed deals. When I traced the full funnel from ad click to customer, the audience that looked worst at the top of the funnel looked best at the bottom.
          </p>
          <p>
            <strong className="text-foreground">3. At $200K+/month, audience strategy matters more than ad copy.</strong> Copy gets you clicks. Audiences get you customers. I have seen mediocre creative outperform award-winning creative when pointed at the right audience. The opposite is never true.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">The numbers</h2>

          <div className="bg-midnight border border-border rounded-xl overflow-hidden not-prose my-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-slate/30">
                <th className="text-left font-semibold text-foreground px-5 py-3">Metric</th>
                <th className="text-right font-semibold text-foreground px-5 py-3">Value</th>
              </tr></thead>
              <tbody>
                {[
                  ["Monthly ad spend", "$300K+"],
                  ["Meetings booked (Feb 2026)", "636"],
                  ["TM_Leads customer rate", "15.5% (3x avg)"],
                  ["Cost per customer (TM_Leads)", "$3,448"],
                  ["Broad CPR", "$470"],
                  ["Lookalike CPR", "$705 (lost)"],
                ].map(([m, v]) => (
                  <tr key={m} className="border-b border-border/50 last:border-0">
                    <td className="text-muted-foreground px-5 py-3">{m}</td>
                    <td className="text-foreground font-mono font-medium px-5 py-3 text-right">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground pt-4">What you should do</h2>

          <p>
            If you are spending $50K+ per month and have not mapped your lead-to-customer rate by audience segment, you are flying blind. You are optimizing for the top of the funnel while the bottom of the funnel tells a completely different story.
          </p>
          <p>
            Pull your CRM data. Match it back to ad source. Find which audience segments produce customers, not just leads. Then reallocate.
          </p>
          <p>
            This is exactly the kind of win I find in the first 48 hours of a{" "}
            <Link href="/audit" className="text-electric hover:text-electric/80 underline underline-offset-2">Profit Loop Audit</Link>.
            $3,500 flat. 5 business days.
          </p>
        </div>
      </article>
    </main>
  );
}
