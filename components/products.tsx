import Link from "next/link";

const products = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    description: "AI automation + managed ads agency. Go-to-market in weeks, not months.",
    category: "Agency",
    color: "bg-electric",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    description: "140+ verified Claude MCP skills marketplace. $9.97-$99 per skill.",
    category: "Marketplace",
    color: "bg-emerald",
  },
  {
    name: "DocDoctor.ai",
    url: "https://docdoctor.ai",
    description: "AI healthcare documentation. Voice-to-text with medical terminology. EHR/FHIR integration.",
    category: "Healthcare",
    color: "bg-cyan",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    description: "Marketing automation OS with 16 AI agents. Campaign management on autopilot.",
    category: "MarTech",
    color: "bg-amber",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    description: "AI tutoring platform. Multi-subject support. Freemium model.",
    category: "EdTech",
    color: "bg-coral",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    description: "AI text detection tool. 99% accuracy. Built for educators.",
    category: "EdTech",
    color: "bg-coral",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    description: "Free startup idea browser. Curated opportunities for builders.",
    category: "Tools",
    color: "bg-slate",
  },
  {
    name: "Barfliz",
    url: "#",
    description: "Social/location-based nightlife app. React, Supabase, Radar.io. Active development.",
    category: "Consumer",
    color: "bg-electric",
    flagship: true,
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-midnight to-slate/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-balance">
            9 Products. All Self-Built. All Live.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not prototypes. Not Figma mocks. Live, working products with real users. Built with Claude Code as my engineering partner.
          </p>
        </div>
        
        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.url}
              target={product.url !== "#" ? "_blank" : undefined}
              rel={product.url !== "#" ? "noopener noreferrer" : undefined}
              className={`group relative p-6 bg-slate/20 border border-border rounded-xl hover:border-electric/40 transition-all hover:bg-slate/30 ${product.flagship ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {product.flagship && (
                <div className="absolute -top-3 left-6 bg-emerald text-midnight text-xs font-bold px-3 py-1 rounded-full">
                  Flagship Project
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${product.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-electric transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                </div>
                {product.url !== "#" && (
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-electric transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
        
        {/* Bottom stat */}
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
