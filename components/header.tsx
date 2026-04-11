"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-foreground tracking-tight">
            steve kaplan
          </span>
          <span className="text-xl font-bold text-electric">.ai</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="#white-paper"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            White Paper
          </Link>
          <Link
            href="#github"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
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
        
        <div className="flex items-center gap-4">
          <Link
            href="#get-white-paper"
            className="hidden sm:block bg-electric hover:bg-electric/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get the Playbook
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight border-t border-border">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="#white-paper"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              White Paper
            </Link>
            <Link
              href="#github"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://aimoneyminute.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="#get-white-paper"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-electric hover:bg-electric/90 text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors text-center"
            >
              Get the Playbook
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
