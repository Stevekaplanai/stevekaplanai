import Image from "next/image";

interface Product {
  name: string;
  url: string;
  urlDisplay: string;
  description: string;
  category: string;
  image: string;
  flagship?: boolean;
}

const products: Product[] = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    urlDisplay: "gtmvp.com",
    description: "AI automation + managed ads agency. Turn AI hype into business results.",
    category: "Agency",
    image: "/images/products/gtmvp.jpg",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    urlDisplay: "claudeskillshq.com",
    description: "140+ verified Claude MCP skills. One command. Instant skills.",
    category: "Marketplace",
    image: "/images/products/claudeskillshq.jpg",
  },
  {
    name: "DocDoctor.ai",
    url: "https://demo.docdoctor.ai",
    urlDisplay: "demo.docdoctor.ai",
    description: "AI-powered healthcare platform. Enhancing value-based care intelligence.",
    category: "Healthcare",
    image: "/images/products/docdoctor.jpg",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    urlDisplay: "synapmarketing.com",
    description: "16 AI agents to run your marketing department.",
    category: "MarTech",
    image: "/images/products/synapmarketing.jpg",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    urlDisplay: "aihomeworkhelp.net",
    description: "Free AI tutor for all subjects. Student-friendly learning assistant.",
    category: "EdTech",
    image: "/images/products/aihomeworkhelp.jpg",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    urlDisplay: "studentaidetector.com",
    description: "Identify AI-generated content with 99.4% accuracy.",
    category: "EdTech",
    image: "/images/products/studentaidetector.jpg",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    urlDisplay: "venturevault.space",
    description: "Free startup ideas for builders. Curated opportunities.",
    category: "Tools",
    image: "/images/products/venturevault.jpg",
  },
  {
    name: "CompetitorIntelligence.co",
    url: "https://competitorintelligence.co",
    urlDisplay: "competitorintelligence.co",
    description: "Real-time competitive signal for B2B teams. Track every move your competitors make.",
    category: "Intelligence",
    image: "/images/products/competitorintelligence.jpg",
  },
  {
    name: "Barfliz",
    url: "https://barfliz.com",
    urlDisplay: "barfliz.com",
    description: "Never drink alone. The social network for nightlife.",
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
            9 products. All self-built. All live.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not prototypes. Not Figma mocks. Live, working products with real users.
          </p>
        </div>

        {/* Products grid - 3-column layout, static (no external links) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className={`relative flex flex-col bg-slate/30 border border-border rounded-xl overflow-hidden ${
                product.flagship ? "md:col-span-2 lg:col-span-1 border-emerald/30" : ""
              }`}
            >
              {/* Flagship badge */}
              {product.flagship && (
                <div className="absolute top-4 left-4 z-20 bg-emerald text-midnight text-xs font-bold px-3 py-1 rounded-full">
                  Flagship
                </div>
              )}

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
