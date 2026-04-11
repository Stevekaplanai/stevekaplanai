import Image from "next/image";
import Link from "next/link";

const credentials = [
  "Google Partner",
  "Facebook Blueprint Certified",
  "Klaviyo Partner",
  "Published Author",
];

const expertise = [
  {
    title: "Growth Marketing",
    description: "D2C brand optimization, customer acquisition, attribution modeling. $2M+/month peak budgets.",
  },
  {
    title: "AI Development",
    description: "Building production AI products using Claude Code. Voice-to-text, EHR integration, predictive analytics.",
  },
  {
    title: "Marketing Technology",
    description: "Full-stack martech implementation. BigQuery, dbt, PostHog, Hightouch, Looker Studio.",
  },
  {
    title: "Paid Media",
    description: "Meta, Google, TikTok at scale. Performance creative, audience architecture, conversion optimization.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Click Then Convert",
    description: "Founded performance marketing agency. Scaled to manage $50M+ in client ad spend.",
  },
  {
    year: "2020",
    title: "BarkBox Partnership",
    description: "Delivered 204% increase in conversions, 254% ROAS improvement for D2C subscription leader.",
  },
  {
    year: "2023",
    title: "Neil Jesani Advisors",
    description: "Director of Marketing. $300K+/month paid media, full martech stack implementation.",
  },
  {
    year: "2024",
    title: "AI Builder Era",
    description: "Shipped 9 AI products solo using Claude Code. DocDoctor.ai, GTMVP, ClaudeSkillsHQ, and more.",
  },
  {
    year: "2025",
    title: "Published Author",
    description: "Released &apos;Marketing, Sales and Service with AI&apos; - practical frameworks for AI implementation.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Builder + Strategist = Results
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most fractional CMOs give you a strategy deck. I build the system that executes it.
          </p>
        </div>
        
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Background with headshot */}
          <div>
            {/* Large headshot */}
            <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden mb-8 border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steve%20Headshot-LYW2CejUfUZzhDbWmR0cq4GVWRAgwJ.jpg"
                alt="Steve Kaplan"
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4">
              The Short Version
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A year ago I was &quot;just&quot; a growth marketer with $50M+ in lifetime ad spend. Good at my job. But watching AI reshape everything.
              </p>
              <p>
                I didn&apos;t hire a dev team. I didn&apos;t wait for permission. I started building. Claude Code became my engineering partner. Nine products later, I&apos;m shipping faster than most funded startups.
              </p>
              <p>
                By day, I lead marketing for Neil Jesani Advisors &mdash; a 76-person financial advisory firm. $300K+/month in paid media. HubSpot, SEO, prospecting, brand strategy.
              </p>
              <p>
                By night, I build products that solve real problems. Healthcare documentation. AI tutoring. Marketing automation. MCP skills marketplaces.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-2">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="text-xs font-medium px-3 py-1.5 bg-slate/50 text-muted-foreground rounded-full border border-border"
                >
                  {cred}
                </span>
              ))}
            </div>
            
            {/* Book callout */}
            <div className="mt-8 p-6 bg-slate/30 border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-amber font-medium mb-1">Published Author</p>
                  <p className="text-foreground font-semibold mb-1">Marketing, Sales and Service with AI</p>
                  <p className="text-sm text-muted-foreground">
                    Practical frameworks for implementing AI in growth teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Timeline + Expertise */}
          <div className="space-y-8">
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">The Journey</h3>
              <div className="space-y-0 relative">
                <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border" />
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-4 pb-6 last:pb-0">
                    <div className="w-10 flex-shrink-0 flex items-start pt-1">
                      <div className="w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-xs font-mono font-bold text-electric">{item.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Expertise cards */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Core Expertise</h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-5 bg-slate/20 border border-border rounded-xl hover:border-electric/30 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors">
                        <span className="text-sm font-bold text-electric">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <Link
                href="https://www.linkedin.com/in/stevekaplanai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-electric hover:text-electric/80 font-medium transition-colors"
              >
                Connect on LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
