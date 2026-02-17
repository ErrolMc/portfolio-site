"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center"
    >
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          data-no-theme-transition
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />
        <motion.div
          data-no-theme-transition
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--accent-green) 0%, transparent 70%)" }}
        />
        <motion.div
          data-no-theme-transition
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--accent-yellow) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main content - asymmetric layout */}
          <div className="lg:col-span-8 lg:col-start-1">
            {/* Overline */}
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="h-[1px] w-12"
                  style={{ backgroundColor: "var(--accent-green)" }}
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span
                  className="text-sm font-medium tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent-green)" }}
                >
                  {personalInfo.title}
                </span>
              </div>
            </ScrollReveal>

            {/* Main heading with text split animation */}
            <div className="mb-8">
              <TextReveal
                as="h1"
                className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
                delay={0.3}
                splitBy="word"
              >
                Building digital
              </TextReveal>
              <TextReveal
                as="h1"
                className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
                delay={0.5}
                splitBy="word"
              >
                experiences that
              </TextReveal>
              <div className="flex items-center gap-4 flex-wrap">
                <TextReveal
                  as="h1"
                  className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
                  delay={0.7}
                  splitBy="word"
                >
                  matter
                </TextReveal>
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "clamp(60px, 10vw, 120px)", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block h-[clamp(12px,2vw,20px)] rounded-full"
                  style={{ backgroundColor: "var(--accent-yellow)" }}
                />
              </div>
            </div>

            {/* Tagline */}
            <ScrollReveal delay={0.8}>
              <p
                className="text-lg md:text-xl max-w-xl leading-relaxed mb-12"
                style={{ color: "var(--muted)" }}
              >
                {personalInfo.tagline}. From real-time cloud systems to cross-platform
                mobile apps — I craft robust software with clean architecture and
                polished interfaces.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={1.0}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  as="a"
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#ffffff",
                  }}
                >
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - decorative element */}
          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <ScrollReveal delay={1.2} direction="right">
              <div className="relative">
                {/* Rotating badge */}
                <motion.div
                  data-no-theme-transition
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 mx-auto"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text style={{ fill: "var(--muted)", fontSize: "14px", letterSpacing: "4px" }}>
                      <textPath href="#circlePath">
                        SOFTWARE ENGINEER • FULL-STACK • CROSS-PLATFORM •{" "}
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Stats */}
                <div className="mt-12 space-y-6">
                  {[
                    { label: "Projects", value: "5+" },
                    { label: "Platforms", value: "8+" },
                    { label: "Technologies", value: "15+" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + i * 0.15 }}
                      className="flex items-center justify-between border-b pb-3"
                      style={{ borderColor: "var(--card-border)" }}
                    >
                      <span className="text-sm uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                        {stat.label}
                      </span>
                      <span className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
              Scroll
            </span>
            <div className="w-[1px] h-8" style={{ backgroundColor: "var(--muted)" }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
