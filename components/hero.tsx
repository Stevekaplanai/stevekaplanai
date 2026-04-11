"use client";

import Link from "next/link";
import { useState } from "react";

const stats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "9", label: "AI Products Built" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "100+", label: "Clients Served" },
];

export function Hero() {
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-slate/40" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Identity */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              Published Author
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
              The CMO who{" "}
              <span className="text-emerald">writes code</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Growth marketer. Solo builder. $50M+ in ad spend managed. 9 AI products shipped. I don&apos;t just talk about AI &mdash; I build it.
            </p>
            
            <p className="text-base text-muted-foreground mb-8">
              Director of Marketing at Neil Jesani Advisors by day. Building the future of marketing automation by night.
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-electric">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#about"
                className="bg-transparent border border-muted text-foreground hover:bg-slate text-sm font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="https://www.linkedin.com/in/stevekaplanai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate/50 text-muted-foreground hover:text-foreground text-sm font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                17K+ Followers
              </Link>
            </div>
          </div>
          
          {/* Right column - White Paper CTA */}
          <div className="bg-slate/30 border border-border rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 text-amber text-sm font-medium px-3 py-1 rounded-full mb-4">
                Free White Paper
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                The $259K Marketing Data Stack
              </h2>
              <p className="text-muted-foreground">
                The 6-tool stack I use to replace $295K enterprise platforms &mdash; at 88% less cost.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-emerald/10 border border-emerald/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">Check your inbox!</p>
                <p className="text-sm text-muted-foreground">The white paper is on its way.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-midnight border border-slate rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-midnight border border-slate rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-electric hover:bg-electric/90 disabled:bg-electric/50 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get the Free Playbook"}
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  No spam. No sales pitch. Just the playbook.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
