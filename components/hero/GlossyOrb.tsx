"use client";

import { motion } from "framer-motion";

interface GlossyOrbProps {
  className?: string;
}

export default function GlossyOrb({ className = "" }: GlossyOrbProps) {
  return (
    <span
      className={`inline-flex items-center justify-center align-middle w-[0.82em] h-[0.82em] mx-[0.08em] relative select-none isolate overflow-visible ${className}`}
      style={{ verticalAlign: "-0.04em" }}
      aria-label="O"
    >
      <motion.span
        className="w-full h-full relative inline-flex items-center justify-center"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.35,
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_10px_rgba(10,140,255,0.28)]"
          animate={{
            y: [-1.5, 1.5, -1.5],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            {/* Main 3D spherical gradient */}
            <radialGradient id="orbMain" cx="35%" cy="30%" r="65%" fx="30%" fy="25%">
              <stop offset="0%" stopColor="#80C8FF" />
              <stop offset="25%" stopColor="#0A8CFF" />
              <stop offset="65%" stopColor="#0B3FA8" />
              <stop offset="90%" stopColor="#061E5C" />
              <stop offset="100%" stopColor="#030C28" />
            </radialGradient>

            {/* Primary specular highlight */}
            <radialGradient id="specularGlow" cx="32%" cy="28%" r="22%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Subtle rim light at bottom edge */}
            <linearGradient id="rimGlow" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0A8CFF" stopOpacity="0" />
            </linearGradient>

            {/* Inner ambient reflection */}
            <radialGradient id="innerReflect" cx="70%" cy="75%" r="35%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B3FA8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient shadow underneath */}
          <circle cx="50" cy="50" r="47" fill="#030A1C" opacity="0.25" />

          {/* Sphere base body */}
          <circle cx="50" cy="50" r="46" fill="url(#orbMain)" />

          {/* Bottom rim reflection */}
          <circle cx="50" cy="50" r="46" fill="url(#rimGlow)" />

          {/* Secondary bottom-right bounce reflection */}
          <circle cx="50" cy="50" r="46" fill="url(#innerReflect)" />

          {/* Specular pinpoint highlight */}
          <ellipse cx="36" cy="32" rx="14" ry="9" fill="url(#specularGlow)" transform="rotate(-25 36 32)" />
          <circle cx="34" cy="30" r="3.5" fill="#FFFFFF" opacity="0.95" />
        </motion.svg>
      </motion.span>
    </span>
  );
}
