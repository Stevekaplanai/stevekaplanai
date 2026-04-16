import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "9+ Products Shipped Solo with AI",
  description:
    "A marketing operator who also writes code. 9+ live products built solo with Claude Code. React, TypeScript, Supabase. No engineers hired.",
  alternates: { canonical: "https://stevekaplan.ai/case-studies/ai-products" },
  openGraph: {
    title: "9+ Products Shipped Solo with AI | Steve Kaplan",
    description: "Marketing operator + full-stack builder. 9+ products. 1 person. Claude Code.",
    type: "article",
  },
};

const products = [
  { name: "Barfliz", what: "Social nightlife app with real-time geolocation", stack: "React, TypeScript, Vite, Supabase, Radar.io, Google Places", status: "v1.4.0, live", highlight: true },
  { name: "ClaudeSkillsHQ", what: "140+ Claude MCP skills marketplace", stack: "Web", status: "Live, $9.97 to $99/skill", highlight: true },
  { name: "DocDoctor.ai", what: "AI healthcare documentation (voice-to-text, EHR/FHIR)", stack: "Web, FHIR integrations", status: "Live", highlight: true },
  { name: "SynapMarketing", what: "Marketing automation OS with 16 AI agents", stack: "Web", status: "Live", highlight: false },
  { name: "AIHomeworkHelp", what: "AI tutoring platform (freemium, multi-subject)", stack: "Web", status: "Live", highlight: false },
  { name: "StudentAIDetector", what: "AI text detection (99% accuracy)", stack: "Web", status: "Live", highlight: false },
  { name: "VentureVault", what: "Free startup idea browser", stack: "Web", status: "Live", highlight: false },
  { name: "GTMVP.com", what: "AI automation agency site", stack: "Web", status: "Live", highlight: false },
  { name: "SteveKaplan.ai", what: "Personal portfolio and brand", stack: "Next.js, Tailwind, Vercel", status: "Live", highlight: false },
];

export default function AIProductsPage() {
  return (
    <main className="pt-28 pb-16">
      <article className="w-full max-w-4xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "9+ Products Shipped Solo with AI: A Marketing Operator Who Also Writes Code",
            author: { "@id": "https://stevekaplan.ai/#person" },
            url: "https://stevekaplan.ai/case-studies/ai-products",
            datePublished: "2026-04-12",
          }) }}
        />

        <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Case Study</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          9+ Products Shipped Solo with AI
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Most marketing operators cannot build software. Most builders cannot run paid media at scale.
          Steve does both. The builder portfolio is the receipt.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "9+", label: "Products Live" },
            { value: "1", label: "Team Size" },
            { value: "Days", label: "Time to Ship" },
            { value: "0", label: "Engineers Hired" },
          ].map((s) => (
            <div key={s.label} className="bg-midnight border border-border rounded-xl p-5 text-center">
              <p className="text-2xl font-bold font-mono text-electric mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">The Portfolio</h2>
          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.name} className={`bg-midnight border rounded-xl p-5 ${p.highlight ? "border-electric/30" : "border-border"}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="font-bold text-foreground font-mono">{p.name}</h3>
                  <span className="text-xs bg-emerald/10 text-emerald px-2 py-0.5 rounded-md w-fit">{p.status}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.what}</p>
                <p className="text-xs text-muted-foreground/60 mt-1 font-mono">{p.stack}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6">What This Proves</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Steve builds, not just advises", text: "When GTMVP says 'we build bespoke automation stacks,' it is not a metaphor. Steve writes code, deploys infrastructure, and ships production software. Every week." },
              { title: "AI-first development works", text: "9+ products by one person is only possible with AI-assisted development. Claude Code handles the heavy lifting. The operator provides judgment and domain expertise." },
              { title: "Full-stack technical credibility", text: "React, TypeScript, Supabase, APIs, push notifications, FHIR integrations, geolocation, AI agents. Not no-code. Real software engineering." },
              { title: "Speed as a feature", text: "Barfliz went from idea to v1.4.0 in months. ClaudeSkillsHQ launched with 140+ skills. GTMVP moves at startup speed, not agency speed." },
            ].map((lesson) => (
              <div key={lesson.title} className="bg-midnight border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-2">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground">{lesson.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-midnight border border-electric/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">Need someone who builds, not just advises?</h2>
          <p className="text-muted-foreground mb-6">The Profit Loop Audit is where it starts. $3,500. 5 days. Real systems, not decks.</p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25">
            Get Your Audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </article>
    </main>
  );
}
