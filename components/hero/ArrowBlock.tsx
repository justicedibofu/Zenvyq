"use client";

import { motion } from "framer-motion";

interface ArrowBlockProps {
  className?: string;
}

export default function ArrowBlock({ className = "" }: ArrowBlockProps) {
  return (
    <motion.span
      className={`inline-flex items-center justify-center align-baseline mx-[0.06em] select-none ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
        delay: 0.55,
      }}
      aria-label="O"
    >
      <motion.span
        className="w-[0.80em] h-[0.80em] bg-ink text-white inline-flex items-center justify-center rounded-none relative overflow-hidden shadow-md group cursor-pointer border border-ink/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Subtle corner detail */}
        <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/40" />

        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[60%] h-[60%] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </motion.svg>
      </motion.span>
    </motion.span>
  );
}
