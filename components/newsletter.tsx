import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate to-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <span className="text-sm font-mono text-amber uppercase tracking-wider mb-3 block">
                Newsletter
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                AI Money Minute
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Daily insights on AI, marketing automation, and growth systems.
                No fluff. Just actionable ideas from someone who builds.
              </p>
              <Link
                href="https://aimoneyminute.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber hover:bg-amber/90 text-midnight font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-48 h-48 bg-midnight/50 border border-border rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold font-mono text-amber block">AI</span>
                  <span className="text-sm text-muted-foreground">Money Minute</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
