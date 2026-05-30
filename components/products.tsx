import Image from "next/image";

interface Product {
  name: string;
  url: string;
  urlDisplay: string;
  description: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    name: "GTMVP",
    url: "https://www.gtmvp.com",
    urlDisplay: "gtmvp.com",
    description: "Eight AI agents that continuously map competitors, sharpen positioning, generate angles, score channels, and surface trends for post-PMF B2B SaaS founders.",
    category: "GTM Intelligence",
    image: "/images/products/gtmvp.jpg",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    urlDisplay: "claudeskillshq.com",
    description: "140+ verified Claude MCP skills installable in one command. Built because the ecosystem needed a registry.",
    category: "Developer Tools",
    image: "/images/products/claudeskillshq.jpg",
  },
  {
    name: "DocDoctor.ai",
    url: "https://demo.docdoctor.ai",
    urlDisplay: "demo.docdoctor.ai",
    description: "AI-powered healthcare platform for value-based care intelligence. Full-stack, solo-built.",
    category: "Healthcare",
    image: "/images/products/docdoctor.jpg",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    urlDisplay: "synapmarketing.com",
    description: "16 AI agents wired together to run core marketing department functions without headcount.",
    category: "MarTech",
    image: "/images/products/synapmarketing.jpg",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    urlDisplay: "aihomeworkhelp.net",
    description: "Free AI tutor covering all subjects. Built to make learning support accessible, not to monetize desperation.",
    category: "EdTech",
    image: "/images/products/aihomeworkhelp.jpg",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    urlDisplay: "studentaidetector.com",
    description: "AI-generated content detection at 99.4% accuracy. Companion to the homework help side.",
    category: "EdTech",
    image: "/images/products/studentaidetector.jpg",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    urlDisplay: "venturevault.space",
    description: "Curated startup ideas for builders who want a starting point, not a consultant.",
    category: "Tools",
    image: "/images/products/venturevault.jpg",
  },
  {
    name: "CompetitorIntelligence.co",
    url: "https://competitorintelligence.co",
    urlDisplay: "competitorintelligence.co",
    description: "Real-time competitive signal for B2B teams. Tracks every public move competitors make.",
    category: "Intelligence",
    image: "/images/products/competitorintelligence.jpg",
  },
  {
    name: "Barfliz",
    url: "https://barfliz.com",
    urlDisplay: "barfliz.com",
    description: "Social discovery app for nightlife. The consumer detour that proved the stack worked across verticals.",
    category: "Consumer",
    image: "/images/products/barfliz.jpg",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-midnight to-slate/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">
            Build velocity
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-balance">
            9 products shipped solo. All live.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not prototypes. Not Figma mocks. The grid below is the evidence that I
            actually build, not just advise. GTMVP and Attribyte are the active
            products. Everything else is proof of what the operator can do with a
            clear problem and enough time.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative flex flex-col bg-slate/30 border border-border rounded-xl overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate/50 border-b border-border">
                <Image
                  src={product.image}
                  alt={`Screenshot of ${product.urlDisplay}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-electric uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {product.description}
                </p>
                <p
                  className="text-xs font-mono text-muted-foreground/80 select-text"
                  aria-label={`URL: ${product.urlDisplay}`}
                >
                  {product.urlDisplay}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">
            No dev team. No VC funding. No agency.
          </p>
          <p className="text-foreground font-medium">
            Claude Code, clear thinking, and the willingness to ship.
          </p>
        </div>
      </div>
    </section>
  );
}
