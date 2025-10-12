"use client";

import { BrevoForm } from "./BrevoForm";

export function EmailCollection() {
  return (
    <section
      id="waitlist"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Be among the first to experience the future of brand design. Join
            our waitlist and get exclusive early access when SPARKFOLIO
            launches.
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-xl border">
            {/* Brevo Form Embed */}
            <BrevoForm formId="YOUR_BREVO_FORM_ID" className="w-full" />
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Replace YOUR_BREVO_FORM_ID with your actual Brevo form ID</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Join 2,500+ entrepreneurs already on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
