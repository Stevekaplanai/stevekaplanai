import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Closed My Agency After 10 Years and $50M in Ad Spend",
  description:
    "Click Then Convert worked by every metric. 100+ clients. 3.2x average ROAS. I closed it anyway. Here is why AI changed the math.",
  alternates: { canonical: "https://stevekaplan.ai/blog/closed-my-agency-after-50m" },
  openGraph: { title: "I Closed My Agency After $50M in Ad Spend | Steve Kaplan", type: "article" },
};

export default function Post() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "BlogPosting",
            headline: "I Closed My Agency After 10 Years and $50M in Managed Ad Spend. Here Is Why.",
            author: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/blog/closed-my-agency-after-50m",
            datePublished: "2026-04-15",
            keywords: ["marketing agency", "solo founder", "AI automation", "GTMVP", "career pivot", "ad spend"],
          }) }}
        />

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-electric/10 text-electric px-2.5 py-1 rounded-md">Founder Journey</span>
          <span className="text-xs text-muted-foreground">April 15, 2026</span>
          <span className="text-xs text-muted-foreground">5 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-8">
          I Closed My Agency After 10 Years and $50M in Ad Spend
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-[17px]">
          <p>
            I ran Click Then Convert for 10 years as a solo founder. $50M+ in managed ad spend. 100+ clients.
            3.2x average ROAS. Google Partner. Facebook Blueprint. Klaviyo Partner.
          </p>
          <p>By every metric, the business worked.</p>
          <p className="text-foreground font-medium text-xl">I closed it anyway.</p>

          <h2 className="text-xl font-bold text-foreground pt-4">What I saw coming</h2>
          <p>
            The work was not going to scale. I was manually optimizing campaigns for dozens of clients.
            Manually pulling reports. Manually adjusting bids. Manually onboarding. Every new client
            meant more of my hours, not better outcomes.
          </p>
          <p>
            I was trading time for money. The agency model is designed that way. More clients equals
            more revenue equals more work equals more hours. There is no leverage in the model unless
            you hire people. And hiring people means they learn on your clients' budgets while you
            manage them instead of doing the work.
          </p>
          <p>I did not want that business.</p>

          <h2 className="text-xl font-bold text-foreground pt-4">Then AI happened</h2>
          <p>
            Not the buzzword version. The real version. The version where I could build an entire
            automation stack in a week that would have taken a team of 3 engineers a quarter.
          </p>
          <p>
            I started building products. First one. Then three. Then nine. Each one took less time
            than the last. The workflow compounded. And the products I was building were solving the
            exact problems I had been solving manually for 10 years.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">The bet</h2>
          <p>
            So I made a bet. I shut down the agency and started GTMVP.
          </p>
          <p>
            The thesis is simple: the companies I used to run ads for do not need another agency.
            They need an operator who can build the AI and automation that runs their GTM without them.
          </p>
          <p>
            Same $50M in ad spend experience. Same 3.2x ROAS instinct. But now instead of doing the
            work manually for each client, I build systems that do the work.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">The evolution</h2>
          <div className="bg-midnight border border-border rounded-xl overflow-hidden not-prose my-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-slate/30">
                <th className="text-left font-semibold text-coral/80 px-5 py-3">Before (Agency)</th>
                <th className="text-left font-semibold text-emerald px-5 py-3">Now (GTMVP)</th>
              </tr></thead>
              <tbody>
                {[
                  ["Run ads for clients", "Build systems that run ads"],
                  ["Optimize CPA manually", "Automate optimization loops"],
                  ["Monthly reporting", "Real-time dashboards"],
                  ["More clients = more hours", "More clients = more systems"],
                  ["Solo operator, direct delivery", "Solo operator, AI-augmented delivery"],
                ].map(([old, now]) => (
                  <tr key={old} className="border-b border-border/50 last:border-0">
                    <td className="text-muted-foreground px-5 py-3">{old}</td>
                    <td className="text-foreground font-medium px-5 py-3">{now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground pt-4">Where I am now</h2>
          <p>
            10 months in. 1 retainer client. Building the pipeline. Shipping every week.
            9+ software products live. $300K/month in paid media at my day job keeping the instincts sharp.
          </p>
          <p>It is not glamorous yet. But it is the right bet.</p>
          <p>
            If you are running a mid-market company ($10M to $100M) and your GTM ops feel like they
            need a senior hire you cannot find, that is exactly the problem I built GTMVP to solve.
          </p>
          <p>
            Start with a{" "}
            <Link href="/audit" className="text-electric hover:text-electric/80 underline underline-offset-2">Profit Loop Audit</Link>.
            $3,500. 5 business days. I find the wins. Then I build them.
          </p>
        </div>
      </article>
    </main>
  );
}
