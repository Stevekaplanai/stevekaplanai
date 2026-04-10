"use client";

import { useState } from "react";

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="get-white-paper"
      className="py-24 bg-gradient-to-b from-slate/30 to-midnight"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
          Get the Full White Paper{" "}
          <span className="text-emerald">Free</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          16 pages. Architecture diagrams. Cost breakdowns. 4-week implementation
          playbook. Real case studies.
        </p>

        {isSubmitted ? (
          <div className="bg-emerald/10 border border-emerald/20 rounded-xl p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-emerald"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Check your inbox!
            </h3>
            <p className="text-muted-foreground">
              The white paper is on its way to {formData.email}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-4 bg-slate/50 border border-slate rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-4 bg-slate/50 border border-slate rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-electric hover:bg-electric/90 disabled:bg-electric/50 text-white text-lg font-semibold px-10 py-5 rounded-xl transition-all hover:shadow-lg hover:shadow-electric/25 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Me the White Paper"
              )}
            </button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-6">
          No spam. No sales pitch. Just the playbook.
        </p>
      </div>
    </section>
  );
}
