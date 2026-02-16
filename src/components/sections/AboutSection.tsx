"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";
import { skills, experience, education } from "@/data/portfolio";

function SkillBar({ name, delay }: { name: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="px-4 py-2.5 rounded-full text-sm font-medium"
      style={{
        backgroundColor: "var(--surface-elevated)",
        color: "var(--foreground)",
      }}
    >
      {name}
    </motion.div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.2 }}
        className="absolute left-0 top-3 w-[1px]"
        style={{ backgroundColor: "var(--card-border)" }}
      />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="absolute left-[-4px] top-2.5 w-[9px] h-[9px] rounded-full"
        style={{ backgroundColor: "var(--accent-green)" }}
      />

      {/* Content */}
      <div>
        <span className="text-sm font-medium" style={{ color: "var(--accent-green)" }}>
          {item.period}
        </span>
        <h4 className="text-xl font-bold mt-1 mb-1" style={{ color: "var(--foreground)" }}>
          {item.role}
        </h4>
        <p className="text-base mb-4" style={{ color: "var(--muted)" }}>
          {item.description}
        </p>
        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="w-1 h-1 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "var(--primary)" }}
              />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const allSkills = Object.entries(skills).map(([category, items]) => ({
    category,
    items,
  }));

  return (
    <section id="about" className="py-32 md:py-40 section-noise relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Parallax speed={0.15}>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-green) 0%, transparent 70%)" }}
          />
        </Parallax>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12" style={{ backgroundColor: "var(--accent-yellow)" }} />
              <span
                className="text-sm font-medium tracking-[0.2em] uppercase"
                style={{ color: "var(--accent-yellow)" }}
              >
                About Me
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <TextReveal
                as="h2"
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Crafting software across every platform
              </TextReveal>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column - About text + Timeline */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                Results-driven software engineer with several years of industry
                experience across banking, manufacturing, and games. Strong
                background working in large C#/.NET codebases, practicing TDD,
                CQRS, and CI/CD to ship reliable, maintainable features.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-lg leading-relaxed mb-12"
                style={{ color: "var(--muted)" }}
              >
                Comfortable translating complex domain requirements — from
                civil-engineering rules to mission-critical banking workflows
                and real-time gameplay systems — into practical technical
                solutions. Known for rapid onboarding into legacy systems,
                mentoring developers from other stacks, and collaborating
                effectively with distributed teams.
              </p>
            </ScrollReveal>

            {/* Experience Timeline */}
            <ScrollReveal delay={0.3}>
              <h3
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-8"
                style={{ color: "var(--foreground)" }}
              >
                Experience
              </h3>
            </ScrollReveal>

            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}

            {/* Education */}
            <ScrollReveal delay={0.4}>
              <h3
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-8 mt-12"
                style={{ color: "var(--foreground)" }}
              >
                Education
              </h3>
            </ScrollReveal>

            {education.map((edu, i) => (
              <ScrollReveal key={i} delay={0.5 + i * 0.15}>
                <div className="relative pl-8 pb-8 last:pb-0">
                  <div
                    className="absolute left-0 top-3 w-[1px] h-full"
                    style={{ backgroundColor: "var(--card-border)" }}
                  />
                  <div
                    className="absolute left-[-4px] top-2.5 w-[9px] h-[9px] rounded-full"
                    style={{ backgroundColor: "var(--accent-yellow)" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--accent-yellow)" }}>
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold mt-1 mb-1" style={{ color: "var(--foreground)" }}>
                    {edu.degree}
                  </h4>
                  <p className="text-base mb-2" style={{ color: "var(--muted)" }}>
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {edu.details}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right column - Skills */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ScrollReveal delay={0.2}>
              <h3
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-10"
                style={{ color: "var(--foreground)" }}
              >
                Skills & Technologies
              </h3>
            </ScrollReveal>

            <div className="space-y-10">
              {allSkills.map((group, groupIndex) => (
                <div key={group.category}>
                  <ScrollReveal delay={0.1 * groupIndex}>
                    <h4
                      className="text-xs font-medium tracking-[0.15em] uppercase mb-4"
                      style={{ color: "var(--muted)" }}
                    >
                      {group.category}
                    </h4>
                  </ScrollReveal>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <SkillBar
                        key={skill}
                        name={skill}
                        delay={groupIndex * 0.1 + i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
