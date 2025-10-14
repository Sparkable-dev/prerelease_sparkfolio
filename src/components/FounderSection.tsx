"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="bg-gradient-to-b from-muted/20 via-background to-muted/30 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Proven Impact & Results
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven insights that demonstrate the transformative power of
            strategic design and brand development.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            className="w-full lg:flex-[2.3] space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              ROI & Revenue Growth
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              McKinsey's analysis reveals design-forward businesses achieve 32%
              higher revenue growth and 56% higher shareholder returns.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Every $1 invested in UX delivers $100 in returns (9,900% ROI),
              while design-centric companies outperformed the S&P 500 by 211%
              over 10 years.
            </p>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-2">
                Brand Design Impact:
              </h4>
              <ul className="text-muted-foreground text-base md:text-lg space-y-1 list-disc ml-5">
                <li>🎯 75% of consumers recognize a brand by its logo alone</li>
                <li>📈 Consistent brand use increases revenue by 23%</li>
                <li>
                  💰 68% of businesses report 10-20% revenue growth from brand
                  consistency
                </li>
                <li>
                  🔄 Customers need 7+ brand touchpoints before purchasing
                </li>
                <li>🚀 $11M profit increases on large innovation projects</li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-2">
                Leadership & Expertise:
              </h4>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
                Sudharsan (Sudu) Ananth is the visionary behind Sparkfolio,
                combining creativity, technology, and business strategy to help
                startups, SMBs, and enterprises turn ideas into successful
                stories. He has guided more than 10 startups from idea to
                launch, bridging the gap between what businesses struggle with
                and the solutions they need.
              </p>
              <p className="text-muted-foreground text-base md:text-lg italic leading-relaxed">
                "Design isn't just about how something looks — it's about how it
                helps your business grow. Every idea becomes a clear and
                powerful brand that makes an impact."
              </p>
            </div>

            <p className="text-primary text-lg font-semibold">
              Ready to transform your brand?{" "}
              <a
                href="mailto:sudu@sparkfolio.dev"
                className="underline hover:text-primary/80 transition-colors"
              >
                sudu@sparkfolio.dev
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/sudharsan-ananth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary/80 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative w-full max-w-md h-full rounded-2xl overflow-hidden flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/images/timeline.webp"
              alt="Brand Impact Visualization"
              className="w-full h-200 object-cover rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
