"use client";

import { BrevoForm } from "./BrevoForm";

export function EmailCollection() {
  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium mb-6">
            <span>🚀</span>
            <span>Early Access</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get Early Access
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Be among the first to experience the future of brand design. Join
            our waitlist and get exclusive early access when SPARKFOLIO
            launches.
          </p>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-border/50 relative">
            <div className="absolute inset-0 rounded-3xl  " />
            <div className="relative">
              {/* Brevo Form Embed */}
              <BrevoForm className="w-full" />
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>2,500+ entrepreneurs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Early access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-4" />
              <span>Free forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
