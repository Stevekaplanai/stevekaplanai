import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AI-powered growth marketing, building products solo with AI, and the founder journey. By Steve Kaplan.",
  alternates: { canonical: "https://stevekaplan.ai/blog" },
};

const posts = [
  {
    slug: "audience-segment-changed-everything",
    title: "The One Audience Segment That Changed Everything",
    excerpt: "I manage $300K/month in paid media across 3 platforms. Last year I found an audience segment that converts to customers at 15.5%. The firm average is 5%.",
    date: "April 15, 2026",
    pillar: "AI-Powered Growth Marketing",
    readTime: "4 min",
  },
  {
    slug: "9-products-solo-with-ai",
    title: "I Shipped 9 Software Products in a Year. My Team Size Is 1.",
    excerpt: "A nightlife app. A skills marketplace. A healthcare documentation platform. A marketing automation OS with 16 AI agents. All live. All built with Claude Code.",
    date: "April 15, 2026",
    pillar: "Building with AI",
    readTime: "5 min",
  },
  {
    slug: "closed-my-agency-after-50m",
    title: "I Closed My Agency After 10 Years and $50M in Ad Spend",
    excerpt: "By every metric, the business worked. I closed it anyway. Here is why AI changed the math.",
    date: "April 15, 2026",
    pillar: "Founder Journey",
    readTime: "5 min",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="w-full max-w-4xl mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-electric font-medium mb-3">Blog</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          What I am learning, building, and shipping.
        </h1>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          Operator notes on AI-powered growth marketing, building products solo with AI, and running a business without a team.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-midnight border border-border rounded-xl p-6 md:p-8 hover:border-electric/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-electric/10 text-electric px-2.5 py-1 rounded-md">{post.pillar}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-electric transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
