"use client";

import { motion } from "framer-motion";

interface HexClusterProps {
  className?: string;
}

export default function HexCluster({ className = "" }: HexClusterProps) {
  return (
    <motion.span
      className={`inline-flex items-center justify-center align-middle mx-[0.2em] relative select-none ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 18,
        delay: 0.45,
      }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 160 80"
        className="w-[1.6em] h-[0.8em] overflow-visible"
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          {/* Dark glossy facet gradients */}
          <linearGradient id="hexDark1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E3340" />
            <stop offset="45%" stopColor="#141822" />
            <stop offset="100%" stopColor="#080A10" />
          </linearGradient>

          <linearGradient id="hexDark2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E2330" />
            <stop offset="60%" stopColor="#0E121A" />
            <stop offset="100%" stopColor="#04060A" />
          </linearGradient>

          <linearGradient id="blueGlowAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A8CFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B3FA8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Hexagon 1: Left */}
        <motion.polygon
          points="25,12 45,2 65,12 65,36 45,46 25,36"
          fill="url(#hexDark1)"
          stroke="#475066"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="drop-shadow-md"
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <line x1="28" y1="14" x2="45" y2="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

        {/* Hexagon 2: Center Top (with electric blue inner facet) */}
        <motion.polygon
          points="62,26 82,16 102,26 102,50 82,60 62,50"
          fill="url(#hexDark2)"
          stroke="#0A8CFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="drop-shadow-lg"
          animate={{ y: [1.5, -1.5, 1.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Core highlight dot on center hex */}
        <circle cx="82" cy="38" r="4" fill="#0A8CFF" opacity="0.9" />
        <circle cx="82" cy="38" r="1.5" fill="#FFFFFF" />

        {/* Hexagon 3: Right Top */}
        <motion.polygon
          points="98,12 118,2 138,12 138,36 118,46 98,36"
          fill="url(#hexDark1)"
          stroke="#475066"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="drop-shadow-md"
          animate={{ y: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <line x1="101" y1="14" x2="118" y2="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

        {/* Hexagon 4: Center-Right Lower */}
        <motion.polygon
          points="80,54 100,44 120,54 120,76 100,86 80,76"
          fill="url(#hexDark1)"
          stroke="#384055"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="drop-shadow-md"
          animate={{ y: [1, -1, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <line x1="83" y1="56" x2="100" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      </motion.svg>
    </motion.span>
  );
}
