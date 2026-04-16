import Link from "next/link";

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/case-studies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            &larr; All Case Studies
          </Link>
          <Link href="/audit" className="text-sm text-electric hover:text-electric/80 transition-colors">
            Get Your Audit
          </Link>
        </div>
      </nav>
      {children}
      <footer className="py-8 border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 GTMVP Inc.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/audit" className="hover:text-foreground transition-colors">Audit</Link>
            <Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
