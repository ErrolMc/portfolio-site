"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer ref={ref} className="relative section-noise pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with logo and links */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b"
          style={{ borderColor: "var(--card-border)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              errol
              <span style={{ color: "var(--accent-green)" }}>.</span>
              mc
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-300 hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
              data-cursor-hover
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-medium transition-colors duration-300 hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
              data-cursor-hover
            >
              Email
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
            Designed &amp; built with care
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
