"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}) {
  return (
    <ScrollReveal delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
      <motion.article
        layoutId={`project-card-${project.id}`}
        onClick={() => onSelect(project)}
        className="group relative cursor-pointer rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--card-border)",
          boxShadow: "var(--card-shadow)",
        }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        data-cursor-hover
      >
        {/* Project header with accent color */}
        <div
          className="h-2 w-full"
          style={{ backgroundColor: project.color }}
        />

        <div className="p-8 md:p-10">
          {/* Category + Year */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full"
              style={{
                color: project.color,
                backgroundColor: `color-mix(in srgb, ${project.color} 12%, transparent)`,
              }}
            >
              {project.category}
            </span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>
              {project.year}
            </span>
          </div>

          {/* Title */}
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </motion.h3>

          {/* Tagline */}
          <p className="text-base mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.tagline}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  backgroundColor: "var(--surface-elevated)",
                  color: "var(--foreground)",
                }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ color: "var(--muted)" }}
              >
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* View more indicator */}
          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            <span className="text-sm font-semibold" style={{ color: project.color }}>
              View Case Study
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: project.color }}
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />

      {/* Modal */}
      <motion.div
        layoutId={`project-card-${project.id}`}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--card-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color header */}
        <div className="h-3 w-full" style={{ backgroundColor: project.color }} />

        <div className="p-8 md:p-12">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ backgroundColor: "var(--surface-elevated)" }}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--foreground)" }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Category */}
          <span
            className="text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full inline-block mb-6"
            style={{
              color: project.color,
              backgroundColor: `color-mix(in srgb, ${project.color} 12%, transparent)`,
            }}
          >
            {project.category} / {project.year}
          </span>

          {/* Title */}
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: "var(--foreground)" }}>
              Key Features
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span style={{ color: "var(--muted)" }}>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h4 className="text-sm font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: "var(--foreground)" }}>
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--surface-elevated)",
                    color: "var(--foreground)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View Source
            </MagneticButton>
            {project.liveUrl && (
              <MagneticButton
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-colors duration-300"
                style={{
                  borderColor: "var(--card-border)",
                  color: "var(--foreground)",
                }}
              >
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </MagneticButton>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 md:py-40 section-noise">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12" style={{ backgroundColor: "var(--accent-green)" }} />
              <span
                className="text-sm font-medium tracking-[0.2em] uppercase"
                style={{ color: "var(--accent-green)" }}
              >
                Selected Work
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <TextReveal
                as="h2"
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Projects that push boundaries
              </TextReveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <ScrollReveal delay={0.3}>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Each project represents a deep dive into different
                  technologies, platforms, and architectural patterns.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Projects grid - editorial asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                index={i}
                onSelect={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
