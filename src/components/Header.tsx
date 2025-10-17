"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-background">
              <Image
                src="/images/logo.webp"
                alt="SparkFolio Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center">
              <span className="text-primary text-2xl font-inter">Spark</span>
              <span className="font-bold text-primary text-3xl ml-1 mt-2 font-italianno">
                Folio
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#impact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Impact
            </a>
            <a
              href="#waitlist"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Waitlist
            </a>
            <a
              href="mailto:hello@sparkfolio.dev"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
