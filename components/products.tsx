import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    description: "AI automation + managed ads agency. Go-to-market in weeks, not months.",
    category: "Agency",
    image: "/images/products/gtmvp.jpg",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    description: "140+ verified Claude MCP skills marketplace. $9.97-$99 per skill.",
    category: "Marketplace",
    image: "/images/products/claudeskillshq.jpg",
  },
  {
    name: "DocDoctor.ai",
    url: "https://docdoctor.ai",
    description: "AI healthcare documentation. Voice-to-text with medical terminology. EHR/FHIR integration.",
    category: "Healthcare",
    image: "/images/products/docdoctor.jpg",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    description: "Marketing automation OS with 16 AI agents. Campaign management on autopilot.",
    category: "MarTech",
    image: "/images/products/synapmarketing.jpg",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    description: "AI tutoring platform. Multi-subject support. Freemium model.",
    category: "EdTech",
    image: "/images/products/aihomeworkhelp.jpg",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    description: "AI text detection tool. 99% accuracy. Built for educators.",
    category: "EdTech",
    image: "/images/products/studentaidetector.jpg",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    description: "Free startup idea browser. Curated opportunities for builders.",
    category: "Tools",
    image: "/images/products/venturevault.jpg",
  },
  {
    name: "Barfliz",
    url: "#",
    description: "Social/location-based nightlife app. React, Supabase, Radar.io. Active development.",
    category: "Consumer",
    image: "/images/products/barfliz.jpg",
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
        
        {/* Featured product - Barfliz */}
        {products.filter(p => p.flagship).map((product) => (
          <div key={product.name} className="mb-12">
            <Link
              href={product.url}
              target={product.url !== "#" ? "_blank" : undefined}
              rel={product.url !== "#" ? "noopener noreferrer" : undefined}
              className="group block relative bg-slate/20 border border-border rounded-2xl overflow-hidden hover:border-electric/40 transition-all hover:bg-slate/30"
            >
              <div className="absolute top-4 left-4 z-10 bg-emerald text-midnight text-xs font-bold px-3 py-1 rounded-full">
                Flagship Project
              </div>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={product.image}
                    alt={`${product.name} homepage screenshot`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight/80 lg:block hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-electric uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-electric transition-colors mb-4">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>React</span>
                    <span className="text-border">|</span>
                    <span>Supabase</span>
                    <span className="text-border">|</span>
                    <span>Radar.io</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        
        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.filter(p => !p.flagship).map((product) => (
            <Link
              key={product.name}
              href={product.url}
              target={product.url !== "#" ? "_blank" : undefined}
              rel={product.url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative bg-slate/20 border border-border rounded-xl overflow-hidden hover:border-electric/40 transition-all hover:bg-slate/30"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} homepage screenshot`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium bg-slate/80 backdrop-blur-sm text-foreground px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                {/* External link icon */}
                {product.url !== "#" && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center justify-center w-8 h-8 bg-electric rounded-full">
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
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground group-hover:text-electric transition-colors mb-2">
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
