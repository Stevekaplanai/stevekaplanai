"use client";

import { WhitePaperForm } from "./white-paper-form";

const contents = [
  {
    number: 1,
    title: "Full Architecture Diagrams",
    description: "Exactly how all 6 tools connect, from data sources to activation channels.",
  },
  {
    number: 2,
    title: "Line-by-Line Cost Breakdown",
    description: "Legacy vs. modern stack. Real numbers. No hand-waving.",
  },
  {
    number: 3,
    title: "4-Week Implementation Plan",
    description: "Step-by-step guide to go live. What to deploy each week and why.",
  },
  {
    number: 4,
    title: "BigQuery ML Code Examples",
    description: "Actual SQL for churn prediction, CLTV, clustering, and propensity scoring.",
  },
  {
    number: 5,
    title: "Real Case Studies",
    description: "BarkBox and more. Challenges, solutions, results.",
  },
];

const tools = [
  { name: "BigQuery", role: "Warehouse", cost: "$12K" },
  { name: "PostHog", role: "Analytics + CDP", cost: "$6K" },
  { name: "Fivetran", role: "Ingestion", cost: "$12K" },
  { name: "dbt Cloud", role: "Transform", cost: "$6K" },
  { name: "Looker Studio", role: "BI", cost: "$0" },
  { name: "Hightouch", role: "Activation", cost: "$0" },
];

export function WhitePaperPreview() {
  return (
    <section id="white-paper" className="py-24 bg-gradient-to-b from-slate/20 to-midnight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-4 py-2 rounded-full mb-6">
            Featured: Free White Paper
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
            The $259K Marketing Data Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            The exact 6-tool stack I use to give mid-market clients a modern, AI-powered marketing data foundation &mdash; at 88% less than legacy enterprise platforms.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Contents */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              What&apos;s Inside (16 Pages)
            </h3>
            
            <div className="space-y-4 mb-8">
              {contents.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-slate/20 border border-border rounded-xl"
                >
                  <div className="w-8 h-8 bg-electric/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-electric">{item.number}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* The Stack preview */}
            <div className="p-6 bg-midnight border border-border rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-foreground">The 6-Tool Stack</h4>
                <span className="text-emerald font-mono font-bold">~$36K/year</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{tool.name}</span>
                    <span className="font-mono text-foreground">{tool.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-muted-foreground">vs. Legacy Platform</span>
                <span className="font-mono text-coral line-through">~$295K</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div>
            <div
              id="get-white-paper"
              className="bg-slate/30 border border-border rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Get the Playbook
                </h3>
                <p className="text-muted-foreground">
                  Enter your details and I&apos;ll send the full white paper directly to your inbox.
                </p>
              </div>
              
              <WhitePaperForm variant="default" />
            </div>
            
            {/* Social proof */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate/20 border border-border rounded-xl text-center">
                <p className="text-2xl font-bold font-mono text-emerald">88%</p>
                <p className="text-xs text-muted-foreground">Cost Reduction</p>
              </div>
              <div className="p-4 bg-slate/20 border border-border rounded-xl text-center">
                <p className="text-2xl font-bold font-mono text-emerald">4 weeks</p>
                <p className="text-xs text-muted-foreground">Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
