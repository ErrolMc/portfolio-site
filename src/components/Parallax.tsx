"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export default function Parallax({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * -speed * 100]);

  return (
    <motion.div
      ref={ref}
      data-no-theme-transition
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
