"use client";

import { useState } from "react";

interface WhitePaperFormProps {
  variant?: "default" | "compact";
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  general?: string;
}

export function WhitePaperForm({ variant = "default", className = "" }: WhitePaperFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/white-paper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          company: formData.company.trim() || undefined,
          source: "stevekaplan.ai",
          requestedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear field-specific error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-emerald/10 border border-emerald/20 rounded-xl p-6 text-center ${className}`}>
        <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-foreground font-medium">Check your inbox!</p>
        <p className="text-sm text-muted-foreground">
          The white paper is on its way to {formData.email}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* General error message */}
      {errors.general && (
        <div className="bg-coral/10 border border-coral/20 text-coral text-sm rounded-lg p-3" role="alert">
          {errors.general}
        </div>
      )}

      <div>
        <label htmlFor="wp-name" className="sr-only">
          Your name
        </label>
        <input
          type="text"
          id="wp-name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "wp-name-error" : undefined}
          value={formData.name}
          onChange={handleInputChange("name")}
          className={`w-full px-4 py-3 bg-midnight border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-colors ${
            errors.name
              ? "border-coral focus:border-coral focus:ring-coral"
              : "border-slate focus:border-electric focus:ring-electric"
          }`}
        />
        {errors.name && (
          <p id="wp-name-error" className="text-coral text-xs mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wp-email" className="sr-only">
          Your email address
        </label>
        <input
          type="email"
          id="wp-email"
          name="email"
          placeholder="Your email address"
          required
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "wp-email-error" : undefined}
          value={formData.email}
          onChange={handleInputChange("email")}
          className={`w-full px-4 py-3 bg-midnight border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-colors ${
            errors.email
              ? "border-coral focus:border-coral focus:ring-coral"
              : "border-slate focus:border-electric focus:ring-electric"
          }`}
        />
        {errors.email && (
          <p id="wp-email-error" className="text-coral text-xs mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {variant === "default" && (
        <div>
          <label htmlFor="wp-company" className="sr-only">
            Company (optional)
          </label>
          <input
            type="text"
            id="wp-company"
            name="company"
            placeholder="Company (optional)"
            autoComplete="organization"
            value={formData.company}
            onChange={handleInputChange("company")}
            className="w-full px-4 py-3 bg-midnight border border-slate rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-electric hover:bg-electric/90 disabled:bg-electric/50 text-white font-semibold px-6 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-midnight"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </span>
        ) : (
          "Get the Free Playbook"
        )}
      </button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. No sales pitch. Just the playbook.
      </p>
    </form>
  );
}
