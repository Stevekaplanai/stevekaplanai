import Link from "next/link";

export function Newsletter() {
  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate/50 to-slate/20 border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-3 py-1 rounded-full mb-4">
                Daily Newsletter
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 text-balance">
                AI Money Minute
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Daily insights on AI, marketing automation, and growth systems.
                No fluff. Just actionable ideas from someone who builds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://aimoneyminute.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber/90 text-midnight font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Subscribe Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-48 h-48 bg-midnight border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent" />
                <div className="text-center relative z-10">
                  <span className="text-5xl font-bold font-mono text-amber block mb-1">AI</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Money Minute</span>
                  <div className="mt-3 text-xs text-muted-foreground">
                    by Steve Kaplan
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* What you get */}
          <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Daily Insights</p>
                <p className="text-xs text-muted-foreground">Actionable AI and marketing tips</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Builder Updates</p>
                <p className="text-xs text-muted-foreground">What I&apos;m shipping and learning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">No Fluff</p>
                <p className="text-xs text-muted-foreground">Real tactics, not theory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
