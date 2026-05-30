import Link from "next/link";

interface TechItem {
  name: string;
  color: string;
}

interface RepoItem {
  repo: string;
  description: string;
  language: string;
  languageColor: string;
}

const techStack: TechItem[] = [
  { name: "React", color: "text-cyan-400" },
  { name: "TypeScript", color: "text-electric" },
  { name: "Supabase", color: "text-emerald" },
  { name: "Python", color: "text-amber" },
  { name: "Claude Code", color: "text-foreground" },
];

const shippingLog: RepoItem[] = [
  {
    repo: "gtmvp",
    description: "Eight-agent GTM intelligence engine. Competitor mapping, positioning, channel scoring, and trend detection for post-PMF B2B SaaS founders.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "attribyte",
    description: "MTA, MMM, and incrementality in one platform. Built to replace the spreadsheet patchwork most growth teams run on.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "bippinbarliz",
    description: "Barfliz: social nightlife app with real-time location features and swarm-based venue discovery.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "marketing-automation-os",
    description: "Synap: multi-agent marketing automation system. Audience segmentation, campaign triggers, and performance loops.",
    language: "Python",
    languageColor: "bg-amber",
  },
];

export function GitHub() {
  return (
    <section id="github" className="py-24 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
              Shipping Log
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Built in Public, Documented in Real Time
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Nine products shipped solo. Every commit is logged, every architecture decision is a real one, and the whole thing runs on a stack I can operate alone.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The builds are not demos. They are live products with real users, real errors, and real iteration cycles. That is what the commit history actually shows.
            </p>

            {/* Tech stack */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Primary stack:</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`font-mono text-sm ${tech.color} bg-slate/30 px-3 py-1.5 rounded-md border border-border`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* How I build */}
            <div className="p-6 bg-slate/20 border border-border rounded-xl mb-8">
              <h3 className="font-bold text-foreground mb-3">How the loop works</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Claude Code as primary engineering partner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Conventional commits, push to main, ship fast
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Iterate on real usage data, not roadmap assumptions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Small focused files, explicit error handling throughout
                </li>
              </ul>
            </div>

            <Link
              href="https://github.com/Stevekaplanai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate/30 hover:bg-slate/50 text-foreground font-medium px-6 py-3 rounded-lg transition-colors border border-border hover:border-electric/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View the full commit history
            </Link>
          </div>

          {/* Right column: shipping log */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground">What shipped</h3>
              <span className="text-xs text-muted-foreground font-mono">@Stevekaplanai</span>
            </div>

            <div className="space-y-4">
              {shippingLog.map((repo) => (
                <div
                  key={repo.repo}
                  className="p-5 bg-slate/20 border border-border rounded-xl hover:border-electric/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-mono font-medium text-foreground">
                      {repo.repo}
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 ${repo.languageColor} rounded-full`} aria-hidden="true" />
                      <span className="text-xs text-muted-foreground">
                        {repo.language}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </div>
              ))}
            </div>

            {/* Build cadence note */}
            <div className="mt-6 p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="text-emerald font-medium">Active builds:</span>{" "}
                GTMVP and Attribyte in continuous development. Commits most days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
