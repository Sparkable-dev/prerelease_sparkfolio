"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="bg-gradient-to-b from-muted/20 via-background to-muted/30 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Founder
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary behind Sparkfolio — driving innovation and
            technology leadership.
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
              Sudharsan (Sudu) Ananth
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Founder & Chief Technology Officer
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With a Masters degree from New York University and experience
              scaling 10+ startups from idea to funding, Sudharsan brings a
              unique blend of academic rigor and startup pragmatism to every
              project.
            </p>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-2">
                Background:
              </h4>
              <ul className="text-muted-foreground text-base md:text-lg space-y-1 list-disc ml-5">
                <li>🎓 Masters in Computer Science, NYU</li>
                <li>🚀 10+ startups scaled as technical advisor</li>
                <li>
                  💻 Full-stack expertise across modern and legacy systems
                </li>
                <li>🏗️ Specialist in HIPAA/SOC2 compliant architectures</li>
                <li>
                  🌍 Global experience with US, European, and Asian markets
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground text-lg font-semibold mb-2">
                Philosophy:
              </h4>
              <p className="text-muted-foreground text-base md:text-lg italic leading-relaxed">
                "Every startup deserves enterprise-quality technology
                leadership. By combining fractional CTO services with an
                integrated team, we make that possible at a price that doesn't
                require venture funding to afford."
              </p>
            </div>

            <p className="text-primary text-lg font-semibold">
              Connect:{" "}
              <a
                href="mailto:sudu@sparkfolio.dev"
                className="underline hover:text-primary/80 transition-colors"
              >
                sudu@sparkfolio.dev
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/sudarsan-ananth/"
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
              alt="Sudharsan Ananth"
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
