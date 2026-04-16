import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from $50M+ in managed ad spend. Case studies on scaling paid media, solo operator growth, and building 9+ AI products.",
  alternates: { canonical: "https://stevekaplan.ai/case-studies" },
};

const studies = [
  {
    slug: "paid-media-scale",
    title: "Scaling Paid Media from $200K to $300K/Month",
    subtitle: "76-person financial advisory firm",
    stats: [
      { value: "$300K+", label: "Monthly Spend" },
      { value: "15.5%", label: "Customer Rate" },
      { value: "$3,448", label: "Cost/Customer" },
      { value: "3x", label: "vs Firm Avg" },
    ],
    tags: ["Meta Ads", "Google Ads", "Attribution", "Audience Segmentation"],
  },
  {
    slug: "50m-ad-spend",
    title: "$50M in Ad Spend as a Solo CEO",
    subtitle: "Click Then Convert, 2015 to 2024",
    stats: [
      { value: "$50M+", label: "Lifetime Spend" },
      { value: "3.2x", label: "Avg ROAS" },
      { value: "100+", label: "Clients" },
      { value: "40%", label: "CPA Reduction" },
    ],
    tags: ["B2B SaaS", "D2C", "Solo Operator", "Attribution"],
  },
  {
    slug: "ai-products",
    title: "9+ Products Shipped Solo with AI",
    subtitle: "The marketing operator who also writes code",
    stats: [
      { value: "9+", label: "Products Live" },
      { value: "1", label: "Team Size" },
      { value: "Days", label: "Time to Ship" },
      { value: "0", label: "Engineers Hired" },
    ],
    tags: ["Claude Code", "React", "Supabase", "AI Development"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-foreground font-bold text-lg">stevekaplan.ai</Link>
          <Link href="/audit" className="text-sm text-electric hover:text-electric/80 transition-colors">Get Your Audit</Link>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <div className="w-full max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Case Studies</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Numbers, not narratives.
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Every claim has a number. Every number has a story. Here is the proof behind $50M+ in managed ad spend, 100+ clients, and 9+ products shipped solo.
          </p>

          <div className="space-y-6">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block bg-midnight border border-border rounded-xl p-8 hover:border-electric/30 transition-colors group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-2">{study.subtitle}</p>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-electric transition-colors mb-3">
                      {study.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate/50 text-muted-foreground px-2.5 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 lg:gap-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-xl font-bold font-mono text-electric">{stat.value}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/audit" className="text-electric hover:text-electric/80 text-sm font-medium underline underline-offset-4 transition-colors">
              Want results like these? Start with a Profit Loop Audit &rarr;
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 GTMVP Inc. Fort Lauderdale, FL.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/audit" className="hover:text-foreground transition-colors">Audit</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
