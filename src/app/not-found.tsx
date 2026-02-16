"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h1
          className="text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter"
          style={{
            WebkitTextStroke: "2px var(--primary)",
            color: "transparent",
          }}
        >
          404
        </h1>
        <p
          className="text-xl md:text-2xl mb-2 font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Page not found
        </p>
        <p
          className="text-base mb-10 max-w-md mx-auto"
          style={{ color: "var(--muted)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <MagneticButton
          as="a"
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
          style={{
            backgroundColor: "var(--primary)",
            color: "#ffffff",
          }}
        >
          Go Home
        </MagneticButton>
      </motion.div>
    </div>
  );
}
