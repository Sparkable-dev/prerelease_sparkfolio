import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-background">
                <Image
                  src="/images/logo.webp"
                  alt="SPARKFOLIO Logo"
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
            </div>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              AI-powered brand design platform that helps startups create
              complete brand identities in minutes, not weeks.
            </p>
            <div className="flex gap-3">
              <a
                href="hello@sparkable.dev"
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sparkable.dev/"
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sparkable-dev/"
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Sparkable-dev"
                className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#hero"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Impact & Results
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#impact"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:sudu@sparkfolio.dev"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sudarsan-ananth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Founder
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 SPARKFOLIO. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="hover:text-foreground transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
