"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    description: "AI automation + managed ads agency. Go-to-market in weeks, not months.",
    category: "Agency",
    accent: "#3b82f6",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    description: "140+ verified Claude MCP skills marketplace. $9.97–$99 per skill.",
    category: "Marketplace",
    accent: "#10b981",
  },
  {
    name: "DocDoctor.ai",
    url: "https://docdoctor.ai",
    description: "AI healthcare documentation. Voice-to-text with medical terminology. EHR/FHIR integration.",
    category: "Healthcare",
    accent: "#06b6d4",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    description: "Marketing automation OS with 16 AI agents. Campaign management on autopilot.",
    category: "MarTech",
    accent: "#f59e0b",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    description: "AI tutoring platform. Multi-subject support. Freemium model.",
    category: "EdTech",
    accent: "#f97316",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    description: "AI text detection for educators. 99% accuracy. Built to catch what matters.",
    category: "EdTech",
    accent: "#ec4899",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    description: "Free startup idea browser. Curated opportunities for builders.",
    category: "Tools",
    accent: "#8b5cf6",
  },
  {
    name: "Barfliz",
    url: "#",
    description: "Social/location-based nightlife app. React, Supabase, Radar.io. Active development.",
    category: "Consumer",
    accent: "#3b82f6",
    flagship: true,
    comingSoon: true,
  },
];

function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={product.url}
      target={product.url !== "#" ? "_blank" : undefined}
      rel={product.url !== "#" ? "noopener noreferrer" : undefined}
      className="group flex flex-col bg-slate/20 border border-border rounded-2xl overflow-hidden hover:border-electric/50 hover:shadow-[0_0_32px_rgba(59,130,246,0.1)] transition-all duration-300"
    >
      {/* Browser chrome */}
      <div className="flex-shrink-0 bg-[#1e293b] border-b border-border px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-midnight/60 rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
          <svg className="w-3 h-3 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[11px] text-muted-foreground truncate font-mono">
            {product.url !== "#" ? product.url.replace("https://", "") : "coming.soon"}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative w-full overflow-hidden bg-midnight" style={{ aspectRatio: "16/9" }}>
        {product.comingSoon || imgError ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: `linear-gradient(135deg, #0f172a 0%, ${product.accent}22 100%)` }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg"
              style={{ backgroundColor: product.accent }}
            >
              {product.name.charAt(0)}
            </div>
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
              {product.comingSoon ? "Coming Soon" : "Preview unavailable"}
            </span>
          </div>
        ) : (
          <Image
            src={screenshotUrl(product.url)}
            alt={`${product.name} homepage screenshot`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}

        {product.flagship && (
          <div className="absolute top-3 left-3 bg-emerald text-midnight text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
            Flagship
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-foreground group-hover:text-electric transition-colors leading-tight">
              {product.name}
            </h3>
            <span
              className="text-[11px] font-semibold uppercase tracking-wider mt-0.5 block"
              style={{ color: product.accent }}
            >
              {product.category}
            </span>
          </div>
          {product.url !== "#" && (
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-electric transition-colors flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </Link>
  );
}

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-midnight to-slate/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-balance">
            9 Products. All Self-Built. All Live.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not prototypes. Not Figma mocks. Live, working products with real users — built with Claude Code as my engineering partner.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">
            None of this required a dev team. None of it required VC funding.
          </p>
          <p className="text-foreground font-medium">
            It required Claude Code, clear thinking, and the willingness to ship.
          </p>
        </div>
      </div>
    </section>
  );
}
