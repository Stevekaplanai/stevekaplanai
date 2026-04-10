import { AlertCircle, DollarSign, Clock, Lock } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Require specialized engineers",
    description:
      "Just to run basic audience queries. Marketers can't self-serve.",
  },
  {
    icon: DollarSign,
    title: "Cost $295K+/year in total stack spend",
    description:
      "Platform fees, compute, clean rooms, partner apps, integrations, and BI — before a single insight.",
  },
  {
    icon: Clock,
    title: "Take 3-6 months to deploy",
    description:
      "By the time it's live, your market has already shifted.",
  },
  {
    icon: Lock,
    title: "Lock you into one vendor",
    description:
      "Proprietary formats, closed ecosystems, painful migrations.",
  },
];

export function Problem() {
  return (
    <section id="white-paper" className="py-24 bg-midnight">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-electric uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Most marketing teams are stuck on legacy data platforms that:
          </h2>
        </div>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="flex items-start gap-5 bg-card border border-border rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                <span className="text-coral font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
