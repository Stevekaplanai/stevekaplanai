import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    description: "AI automation + managed ads agency. Go-to-market in weeks, not months.",
    category: "Agency",
    image: "/images/products/gtmvp.jpg",
    color: "border-electric",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    description: "140+ verified Claude MCP skills marketplace. $9.97-$99 per skill.",
    category: "Marketplace",
    image: "/images/products/claudeskillshq.jpg",
    color: "border-emerald",
  },
  {
    name: "DocDoctor.ai",
    url: "https://docdoctor.ai",
    description: "AI healthcare documentation. Voice-to-text with medical terminology. EHR/FHIR integration.",
    category: "Healthcare",
    image: "/images/products/docdoctor.jpg",
    color: "border-cyan",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    description: "Marketing automation OS with 16 AI agents. Campaign management on autopilot.",
    category: "MarTech",
    image: "/images/products/synapmarketing.jpg",
    color: "border-amber",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    description: "AI tutoring platform. Multi-subject support. Freemium model.",
    category: "EdTech",
    image: "/images/products/aihomeworkhelp.jpg",
    color: "border-coral",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    description: "AI text detection tool. 99% accuracy. Built for educators.",
    category: "EdTech",
    image: "/images/products/studentaidetector.jpg",
    color: "border-coral",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    description: "Free startup idea browser. Curated opportunities for builders.",
    category: "Tools",
    image: "/images/products/venturevault.jpg",
    color: "border-slate",
  },
  {
    name: "Barfliz",
    url: "#",
    description: "Social/location-based nightlife app. React, Supabase, Radar.io. Active development.",
    category: "Consumer",
    image: "/images/products/barfliz.jpg",
    color: "border-electric",
    flagship: true,
  },
];

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
            Not prototypes. Not Figma mocks. Live, working products with real users. Built with Claude Code as my engineering partner.
          </p>
        </div>
        
        {/* Products grid - Masonry-style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.name}
              href={product.url}
              target={product.url !== "#" ? "_blank" : undefined}
              rel={product.url !== "#" ? "noopener noreferrer" : undefined}
              className={`group relative bg-slate/10 border-2 border-border rounded-2xl overflow-hidden hover:${product.color} transition-all duration-300 hover:shadow-2xl hover:shadow-electric/10 ${
                product.flagship ? "lg:col-span-2 lg:row-span-1" : ""
              } ${index === 0 ? "lg:row-span-2" : ""}`}
            >
              {/* Flagship badge */}
              {product.flagship && (
                <div className="absolute top-4 left-4 z-20 bg-emerald text-midnight text-xs font-bold px-3 py-1 rounded-full">
                  Flagship Project
                </div>
              )}
              
              {/* Screenshot container */}
              <div className={`relative w-full overflow-hidden bg-slate/20 ${
                index === 0 ? "aspect-[4/5]" : product.flagship ? "aspect-[2/1]" : "aspect-video"
              }`}>
                <Image
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                
                {/* External link icon */}
                {product.url !== "#" && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-slate/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                )}
              </div>
              
              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${product.color.replace('border-', 'bg-')}`} />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-electric transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
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
