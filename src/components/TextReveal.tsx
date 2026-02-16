"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  splitBy?: "word" | "char";
  once?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  splitBy = "word",
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const units =
    splitBy === "char" ? children.split("") : children.split(" ");

  return (
    <Tag className={className} ref={ref as React.RefObject<HTMLHeadingElement>}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap">
        {units.map((unit, i) => (
          <span key={i} className="overflow-hidden inline-block pb-[0.08em] -mb-[0.08em] align-bottom">
            <motion.span
              data-no-theme-transition
              className="inline-block"
              initial={{ y: "110%", rotateX: -80 }}
              animate={isInView ? { y: "0%", rotateX: 0 } : { y: "110%", rotateX: -80 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.04,
              }}
            >
              {unit}
              {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
