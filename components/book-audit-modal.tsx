"use client";

import { useState } from "react";

export function BookAuditButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className || "inline-flex items-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 text-lg cursor-pointer"}
      >
        {children || (
          <>
            Book Your Audit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      {isOpen && <BookAuditModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

function BookAuditModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/steve@stevekaplan.ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Profit Loop Audit Request: ${formData.company}`,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message || "No additional details provided.",
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-midnight border border-border rounded-2xl p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald/10 border border-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Request received.</h3>
            <p className="text-muted-foreground mb-6">
              I will reply within 24 hours to schedule your kickoff.
            </p>
            <button
              onClick={onClose}
              className="text-electric hover:text-electric/80 text-sm font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-1">Book Your Profit Loop Audit</h3>
              <p className="text-sm text-muted-foreground">
                $3,500 flat. 5 business days. I reply within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">Your name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                    placeholder="Steve Kaplan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs text-muted-foreground mb-1.5">Company *</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                    placeholder="Acme Inc"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-xs text-muted-foreground mb-1.5">Your role *</label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                  >
                    <option value="" className="bg-midnight">Select role</option>
                    <option value="CEO" className="bg-midnight">CEO</option>
                    <option value="COO" className="bg-midnight">COO</option>
                    <option value="CRO" className="bg-midnight">CRO</option>
                    <option value="CMO" className="bg-midnight">CMO</option>
                    <option value="VP" className="bg-midnight">VP</option>
                    <option value="Director" className="bg-midnight">Director</option>
                    <option value="Other" className="bg-midnight">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5">
                  One line about your company (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm resize-none"
                  placeholder="We are a $25M B2B SaaS company with 60 employees. Running $150K/month in paid media. Attribution is broken."
                />
              </div>

              {/* Hidden fields for formsubmit.co */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-electric hover:bg-electric/90 disabled:bg-electric/50 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Request Your Audit"}
              </button>

              {status === "error" && (
                <p className="text-sm text-coral text-center">
                  Something went wrong. Email steve@stevekaplan.ai directly.
                </p>
              )}

              <p className="text-xs text-center text-muted-foreground">
                No spam. No sales sequence. Just a reply from Steve within 24 hours.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
