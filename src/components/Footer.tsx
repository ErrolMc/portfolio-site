"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import { personalInfo } from "@/data/portfolio";

function Marquee() {
  const items = [
    "Let's Work Together",
    "Open to Opportunities",
    "Let's Work Together",
    "Open to Opportunities",
  ];

  return (
    <div className="overflow-hidden py-8 border-y" style={{ borderColor: "var(--card-border)" }}>
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{
              WebkitTextStroke: "1px var(--marquee-stroke)",
              color: "transparent",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer id="contact" ref={ref} className="relative section-noise pt-20 md:pt-32">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12" style={{ backgroundColor: "var(--accent-green)" }} />
                <span
                  className="text-sm font-medium tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent-green)" }}
                >
                  Get in Touch
                </span>
              </div>
            </ScrollReveal>

            <TextReveal
              as="h2"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              Have a project in mind?
            </TextReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
                style={{ color: "var(--muted)" }}
              >
                I&apos;m always interested in new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to
                reach out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  as="a"
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: "var(--accent-green)",
                    color: "#ffffff",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Send an Email
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-300"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--foreground)",
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Decorative right side */}
          <div className="hidden lg:flex lg:col-span-3 lg:col-start-10 items-end justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-right"
            >
              <div
                className="text-7xl font-bold"
                style={{ color: "var(--accent-yellow)", opacity: 0.3 }}
              >
                &#8599;
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. Designed & built with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-300 hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm transition-colors duration-300 hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
