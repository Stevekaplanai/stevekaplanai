import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-slate/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-3">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                steve kaplan
              </span>
              <span className="text-2xl font-bold text-electric">.ai</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Growth Marketing, Engineered. I don&apos;t advise. I build.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#white-paper"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    White Paper
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://aimoneyminute.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/stevekaplanseo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/stevekaplanai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    X / Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Steve Kaplan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/stevekaplanseo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/stevekaplanai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
