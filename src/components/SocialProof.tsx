"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    content:
      "I've been waiting for something like SPARKFOLIO! As a non-designer, I've struggled with branding for months. This could be exactly what I need to finally get professional results.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, EcoVenture",
    content:
      "The concept is brilliant - AI-powered brand design that actually understands your vision. I can't wait to see how it transforms our startup's identity when it launches.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder, HealthTech Solutions",
    content:
      "Finally, a solution that could give us agency-quality branding without the agency price tag. The early previews look incredibly promising for our industry.",
    rating: 5,
  },
];

const stats = [
  { number: "2,500+", label: "Early Access Signups" },
  { number: "98%", label: "Interest Rate" },
  { number: "Coming Soon", label: "Launch Date" },
  { number: "$5K+", label: "Potential Savings" },
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Early Access Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Early interest from entrepreneurs and startup communities
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">
              Product Hunt
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Indie Hackers
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Startup Communities
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Design Twitter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
