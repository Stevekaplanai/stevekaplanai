import { FileText, BarChart3, Calendar, Code, Award } from "lucide-react";

const contents = [
  {
    icon: FileText,
    title: "Full Architecture Diagrams",
    description:
      "Exactly how all 6 tools connect, from data sources to activation channels.",
  },
  {
    icon: BarChart3,
    title: "Line-by-Line Cost Breakdown",
    description:
      "Legacy vs. modern stack. Real numbers. No hand-waving.",
  },
  {
    icon: Calendar,
    title: "4-Week Implementation Plan",
    description:
      "Step-by-step guide to go live. What to deploy each week and why.",
  },
  {
    icon: Code,
    title: "BigQuery ML Code Examples",
    description:
      "Actual SQL for churn prediction, CLTV, clustering, and propensity scoring.",
  },
  {
    icon: Award,
    title: "Real Case Studies",
    description:
      "Air Canada, BVK, plus a DTC brand scenario. Challenges, solutions, results.",
  },
];

export function WhitePaperPreview() {
  return (
    <section className="py-24 bg-slate/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-electric uppercase tracking-wider mb-4 block">
            Inside the White Paper
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
            16 pages of implementation details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not theory. Not fluff. The exact playbook I use to deploy modern
            marketing data stacks for mid-market clients.
          </p>
        </div>

        <div className="space-y-4">
          {contents.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-5 bg-card border border-border rounded-xl p-6 hover:border-electric/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-electric/10 rounded-full flex items-center justify-center">
                <span className="text-electric font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
