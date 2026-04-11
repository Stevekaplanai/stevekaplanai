"use client";

import { useState } from "react";

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
    description: "Air Canada, BVK, plus a DTC brand scenario. Challenges, solutions, results.",
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
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
              
              {isSubmitted ? (
                <div className="bg-emerald/10 border border-emerald/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Check your inbox!</h4>
                  <p className="text-muted-foreground">The white paper is on its way to {formData.email}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="wp-name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="wp-name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-midnight border border-slate rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="wp-email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="wp-email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-midnight border border-slate rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric hover:bg-electric/90 disabled:bg-electric/50 text-white text-lg font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Me the White Paper"
                    )}
                  </button>
                </form>
              )}
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                No spam. No sales pitch. Just the playbook.
              </p>
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
