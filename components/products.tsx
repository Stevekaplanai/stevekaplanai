import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "GTMVP",
    url: "https://gtmvp.com",
    description: "AI automation + managed ads agency. Turn AI hype into business results.",
    category: "Agency",
    image: "/images/products/gtmvp.jpg",
  },
  {
    name: "ClaudeSkillsHQ",
    url: "https://claudeskillshq.com",
    description: "140+ verified Claude MCP skills. One command. Instant skills.",
    category: "Marketplace",
    image: "/images/products/claudeskillshq.jpg",
  },
  {
    name: "DocDoctor.ai",
    url: "https://demo.docdoctor.ai",
    description: "AI-powered healthcare platform. Enhancing value-based care intelligence.",
    category: "Healthcare",
    image: "/images/products/docdoctor.jpg",
  },
  {
    name: "SynapMarketing",
    url: "https://synapmarketing.com",
    description: "16 AI agents to run your marketing department.",
    category: "MarTech",
    image: "/images/products/synapmarketing.jpg",
  },
  {
    name: "AIHomeworkHelp",
    url: "https://aihomeworkhelp.net",
    description: "Free AI tutor for all subjects. Student-friendly learning assistant.",
    category: "EdTech",
    image: "/images/products/aihomeworkhelp.jpg",
  },
  {
    name: "StudentAIDetector",
    url: "https://studentaidetector.com",
    description: "Identify AI-generated content with 99.4% accuracy.",
    category: "EdTech",
    image: "/images/products/studentaidetector.jpg",
  },
  {
    name: "VentureVault",
    url: "https://venturevault.space",
    description: "Free startup ideas for builders. Curated opportunities.",
    category: "Tools",
    image: "/images/products/venturevault.jpg",
  },
  {
    name: "Barfliz",
    url: "https://barfliz.com",
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
            9 Products. All Self-Built. All Live.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not prototypes. Not Figma mocks. Live, working products with real users.
          </p>
        </div>

        {/* Products grid - Clean 3-column layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col bg-slate/30 border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-electric/50 hover:shadow-xl hover:shadow-electric/5 hover:-translate-y-1 ${
                product.flagship ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Flagship badge */}
              {product.flagship && (
                <div className="absolute top-4 left-4 z-20 bg-emerald text-midnight text-xs font-bold px-3 py-1 rounded-full">
                  Flagship
                </div>
              )}

              {/* Screenshot */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate/50">
                <Image
                  src={product.image}
                  alt={`${product.name} homepage screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-electric uppercase tracking-wider">
                    {product.category}
                  </span>
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-electric transition-colors"
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
                <h3 className="text-xl font-bold text-foreground group-hover:text-electric transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
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
