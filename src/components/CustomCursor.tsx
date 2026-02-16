"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const posRef = useRef({ x: -100, y: -100 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      // Use rAF to batch position updates at screen refresh rate
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: posRef.current.x, y: posRef.current.y });
      });
    },
    [isVisible]
  );

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    if (hasTouch) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("cursor-none");
    window.addEventListener("mousemove", onMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        data-no-theme-transition
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="rounded-full bg-white"
        />
      </div>
      {/* Trailing ring */}
      <div
        data-no-theme-transition
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 36,
            height: isHovering ? 64 : 36,
            opacity: isVisible ? 0.5 : 0,
            borderWidth: isHovering ? 2 : 1,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="rounded-full border-white/40"
          style={{ borderStyle: "solid", borderColor: "rgba(255,255,255,0.3)" }}
        />
      </div>
    </>
  );
}
