import Link from "next/link";

const techStack = [
  { name: "React", color: "text-cyan" },
  { name: "TypeScript", color: "text-electric" },
  { name: "Supabase", color: "text-emerald" },
  { name: "Vite", color: "text-amber" },
  { name: "Claude Code", color: "text-foreground" },
];

const recentWork = [
  {
    repo: "stevekaplanai",
    description: "Personal website and portfolio. This site.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "bippinbarliz",
    description: "Barfliz - Social nightlife app with real-time location features.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "claude-skills-marketplace",
    description: "ClaudeSkillsHQ marketplace backend and skill validation.",
    language: "TypeScript",
    languageColor: "bg-electric",
  },
  {
    repo: "marketing-automation-os",
    description: "SynapMarketing 16-agent automation system.",
    language: "Python",
    languageColor: "bg-amber",
  },
];

export function GitHub() {
  return (
    <section id="github" className="py-24 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - GitHub context */}
          <div>
            <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
              Open Source
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Building in Public
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I ship code daily. Most of my products are built with a simple stack: React, TypeScript, Supabase, and Claude Code as my engineering partner.
            </p>
            
            {/* Tech stack */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Primary Stack:</p>
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
            
            {/* Workflow */}
            <div className="p-6 bg-slate/20 border border-border rounded-xl mb-8">
              <h3 className="font-bold text-foreground mb-3">How I Build</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Claude Code as primary dev partner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Push to main, conventional commits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Ship fast, iterate based on real usage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-1">&#10003;</span>
                  Small files, explicit error handling
                </li>
              </ul>
            </div>
            
            <Link
              href="https://github.com/Stevekaplanai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate/30 hover:bg-slate/50 text-foreground font-medium px-6 py-3 rounded-lg transition-colors border border-border hover:border-electric/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </Link>
          </div>
          
          {/* Right column - Recent repos */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground">Recent Repositories</h3>
              <span className="text-xs text-muted-foreground">@Stevekaplanai</span>
            </div>
            
            <div className="space-y-4">
              {recentWork.map((repo) => (
                <div
                  key={repo.repo}
                  className="p-5 bg-slate/20 border border-border rounded-xl hover:border-electric/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-mono font-medium text-foreground">
                      {repo.repo}
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 ${repo.languageColor} rounded-full`} />
                      <span className="text-xs text-muted-foreground">
                        {repo.language}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </div>
              ))}
            </div>
            
            {/* Activity note */}
            <div className="mt-6 p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="text-emerald font-medium">Active Development:</span>{" "}
                Barfliz v1.4.0 shipped March 2026. New features weekly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
