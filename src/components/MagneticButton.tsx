"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  strength?: number;
  style?: React.CSSProperties;
}

export default function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  target,
  rel,
  type,
  disabled,
  onClick,
  strength = 0.3,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = as === "a" ? "a" : as === "div" ? "div" : "button";

  const linkProps = as === "a" ? { href, target, rel } : {};
  const buttonProps = as === "button" ? { type, disabled } : {};

  return (
    <motion.div
      ref={ref}
      data-no-theme-transition
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      <Tag
        className={`magnetic-glow ${className}`}
        onClick={onClick}
        style={style}
        {...linkProps}
        {...buttonProps}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
