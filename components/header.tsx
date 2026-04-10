import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-foreground tracking-tight">
            steve kaplan
          </span>
          <span className="text-xl font-bold text-electric">.ai</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#white-paper"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            White Paper
          </Link>
          <Link
            href="#stack"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            The Stack
          </Link>
          <Link
            href="#results"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Results
          </Link>
          <Link
            href="https://aimoneyminute.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Newsletter
          </Link>
        </nav>
        <Link
          href="#get-white-paper"
          className="bg-electric hover:bg-electric/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Get the Playbook
        </Link>
      </div>
    </header>
  );
}
