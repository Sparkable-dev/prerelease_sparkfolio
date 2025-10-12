"use client";

import { Check, Zap, Crown, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Early Access",
    price: "Free",
    period: "Forever",
    description: "Perfect for getting started with AI-powered brand design",
    features: [
      "Complete brand identity generation",
      "Unlimited brand books",
      "Color palette generation",
      "Logo design tools",
      "Website mockups",
      "Basic templates",
    ],
    cta: "Join Waitlist",
    popular: false,
    icon: Zap,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing startups and agencies",
    features: [
      "Everything in Early Access",
      "Advanced AI models",
      "Custom brand guidelines",
      "High-resolution exports",
      "Team collaboration",
      "Priority support",
      "API access",
      "White-label options",
    ],
    cta: "Get Early Access",
    popular: true,
    icon: Crown,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations and enterprises",
    features: [
      "Everything in Pro",
      "Custom AI training",
      "Dedicated support",
      "On-premise deployment",
      "Advanced analytics",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
    icon: Star,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium mb-6">
            <span>💰</span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? "md:-mt-8 md:mb-8" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 shadow-2xl shadow-primary/10"
                      : "bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                  }`}
                >
                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                        plan.popular
                          ? "bg-gradient-to-br from-primary to-accent"
                          : "bg-gradient-to-br from-primary/20 to-accent/20"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          plan.popular ? "text-white" : "text-primary"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-chart-1 to-chart-1 text-black hover:shadow-lg hover:shadow-chart-1/30 hover:scale-105"
                        : "bg-card border border-border hover:border-chart-1/30 hover:bg-chart-1/5 text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-4" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
