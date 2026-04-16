import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Shipped 9 Products in a Year. My Team Size Is 1.",
  description:
    "A nightlife app, a skills marketplace, a healthcare platform, a marketing OS with 16 AI agents. All live. All built with Claude Code as my only dev partner.",
  alternates: { canonical: "https://stevekaplan.ai/blog/9-products-solo-with-ai" },
  openGraph: { title: "9 Products Solo with AI | Steve Kaplan", type: "article" },
};

export default function Post() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "BlogPosting",
            headline: "I Shipped 9 Software Products in a Year. My Team Size Is 1.",
            author: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/blog/9-products-solo-with-ai",
            datePublished: "2026-04-15",
            keywords: ["Claude Code", "AI development", "solo founder", "building with AI", "React", "Supabase"],
          }) }}
        />

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-electric/10 text-electric px-2.5 py-1 rounded-md">Building with AI</span>
          <span className="text-xs text-muted-foreground">April 15, 2026</span>
          <span className="text-xs text-muted-foreground">5 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-8">
          I Shipped 9 Software Products in a Year. My Team Size Is 1.
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-[17px]">
          <p>I have shipped 9 software products in the last year. My team is just me.</p>
          <p>
            A nightlife app with real-time geolocation. A marketplace with 140+ AI skills.
            A healthcare documentation platform. A marketing automation OS with 16 AI agents. Five more.
          </p>
          <p>All live. All in production. All built with Claude Code as my only dev partner.</p>

          <h2 className="text-xl font-bold text-foreground pt-4">How I got here</h2>
          <p>
            I am not an engineer by training. I ran a marketing agency for 10 years and managed $50M+ in ad spend.
            I picked up coding because I got tired of waiting for developers to build what I could see in my head.
          </p>
          <p>
            The first product took weeks. By the fifth, I was shipping in days. Not because the products got simpler.
            Because the workflow got tighter.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">What actually changed</h2>
          <p>
            <strong className="text-foreground">AI did not replace the thinking. It replaced the typing.</strong> I still design the systems,
            make the architecture decisions, and decide what to ship. Claude writes the code while I focus on the product.
          </p>
          <p>
            The result: I ship in days what used to take months. And the quality is production-grade, not prototype-grade.
            These are not toy demos. They are live applications handling real users with real data.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">The portfolio</h2>
          <div className="bg-midnight border border-border rounded-xl overflow-hidden not-prose my-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-slate/30">
                <th className="text-left font-semibold text-foreground px-5 py-3">Product</th>
                <th className="text-left font-semibold text-foreground px-5 py-3">What it does</th>
              </tr></thead>
              <tbody>
                {[
                  ["Barfliz", "Social nightlife app (React, Supabase, Radar.io, Google Places)"],
                  ["ClaudeSkillsHQ", "140+ Claude MCP skills marketplace ($9.97 to $99/skill)"],
                  ["DocDoctor.ai", "AI healthcare documentation (voice-to-text, EHR/FHIR)"],
                  ["SynapMarketing", "Marketing automation OS with 16 AI agents"],
                  ["AIHomeworkHelp", "AI tutoring platform (freemium, multi-subject)"],
                  ["StudentAIDetector", "AI text detection (99% accuracy)"],
                  ["VentureVault", "Free startup idea browser"],
                  ["GTMVP.com", "AI automation agency"],
                  ["SteveKaplan.ai", "This site"],
                ].map(([name, desc]) => (
                  <tr key={name} className="border-b border-border/50 last:border-0">
                    <td className="text-foreground font-mono font-medium px-5 py-3">{name}</td>
                    <td className="text-muted-foreground px-5 py-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-foreground pt-4">Why this matters for you</h2>
          <p>
            If you are a marketer or operator who has been thinking about building software, stop thinking about it.
            Start with one small tool that solves a problem you face every day. Use AI to build it. Ship it.
          </p>
          <p>The barrier to building is gone. The only question left is whether you have something worth building.</p>
          <p>
            And if you are a company looking for someone who can build the automation, not just describe it,
            that is what the{" "}
            <Link href="/audit" className="text-electric hover:text-electric/80 underline underline-offset-2">Profit Loop Audit</Link>{" "}
            is for. I find the wins. Then I build them.
          </p>
        </div>
      </article>
    </main>
  );
}
