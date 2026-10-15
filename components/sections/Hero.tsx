"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlossyOrb from "@/components/hero/GlossyOrb";
import HexCluster from "@/components/hero/HexCluster";
import ArrowBlock from "@/components/hero/ArrowBlock";
import HeroParticleWave from "@/components/hero/HeroParticleWave";
import { SITE_CONFIG } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full bg-paper text-ink pt-20 sm:pt-24 md:pt-26 overflow-hidden flex flex-col justify-between"
    >
      {/* 1px subtle architectural grid lines */}
      <div className="absolute inset-0 grid-bg-overlay pointer-events-none opacity-40 z-0" />

      {/* Hero Content Stage (Above the wave in z-index) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between pb-4 sm:pb-6">
        
        {/* Top Micro-label row (Subtle top-right position matching Ynora) */}
        <div className="flex items-center justify-between sm:justify-end pt-1 pb-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:hidden font-mono text-[9px] uppercase tracking-micro text-ink/70 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>REMOTE · NIGERIA</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-right font-mono text-[10px] sm:text-[11px] leading-tight uppercase tracking-micro text-ink/65"
          >
            <div>AI & AUTOMATION /</div>
            <div className="font-semibold text-ink/90">WHATSAPP CHATBOTS</div>
          </motion.div>
        </div>

        {/* Middle Main Stage: Giant Headline & Flanking Elements */}
        <div className="relative my-auto py-2 sm:py-3">
          
          {/* Vertical Rotated Micro-Label on Far Right (strictly hidden below 768px / md) */}
          <div className="hidden md:block absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none z-10">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-micro uppercase text-ink/55 border-b border-ink/20 pb-0.5 whitespace-nowrap">
              {SITE_CONFIG.microLabels.rightVertical}
            </span>
          </div>

          {/* Headline Display Container: Scaled with clamp to fit 1440x900 and 1920x1000 */}
          <div
            className="relative font-display font-extrabold uppercase leading-[0.88] select-none text-[clamp(2.5rem,min(6.8vw,9.8vh),7.0rem)]"
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            
            {/* LINE 1: TECHNOLOGY TO (White text with subtle depth shadow + Glossy 3D Blue Orb) */}
            <div className="overflow-hidden pb-1">
              <motion.div
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center flex-wrap text-white"
                style={{
                  textShadow: "0 1px 0 rgba(10,21,48,0.08), 0 8px 30px rgba(10,21,48,0.10)",
                }}
              >
                <span>TECHN</span>
                <GlossyOrb />
                <span>LOGY</span>
                <span className="ml-[0.24em] text-white">TO</span>
              </motion.div>
            </div>

            {/* Row with Left Pill + Line 2: POWER [hex cluster] BUSINESS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 md:gap-7 mt-1 sm:mt-2">
              
              {/* Left Pill CTA: "Work with us ↗" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex-shrink-0"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-mono text-[10px] sm:text-[11px] md:text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Work with us</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-bold">
                    ↗
                  </span>
                </Link>
              </motion.div>

              {/* LINE 2: POWER [hex cluster] BUSINESS */}
              <div className="overflow-hidden pb-1 flex-1">
                <motion.div
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                  className="flex items-center flex-wrap text-white"
                  style={{
                    letterSpacing: "-0.02em",
                    textShadow: "0 1px 0 rgba(10,21,48,0.08), 0 8px 30px rgba(10,21,48,0.10)",
                  }}
                >
                  <span>POWER</span>
                  <HexCluster />
                  <span>BUSINESS</span>
                </motion.div>
              </div>

            </div>

            {/* Row with Left Micro-Label + Line 3: GR[arrow]WTH */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 md:gap-10 mt-1 sm:mt-2">
              
              {/* Left Micro-Label (positioned right below the Pill button, hidden on small mobile) */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="hidden sm:block flex-shrink-0 w-36 font-mono text-[9px] sm:text-[10px] leading-tight uppercase tracking-micro text-ink/65"
              >
                <div>WEB & MOBILE /</div>
                <div className="font-semibold text-ink/85">SOFTWARE ENGINEERING</div>
              </motion.div>

              {/* LINE 3: GROWTH in --blue-500 (#0A8CFF) with Black Square Arrow replacing 'O' */}
              <div className="overflow-hidden pb-1 text-blue-500">
                <motion.div
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
                  className="flex items-center flex-wrap drop-shadow-sm"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  <span>GR</span>
                  <ArrowBlock />
                  <span>WTH.</span>
                </motion.div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Absolutely Anchored Particle Mountain Wave at the bottom behind headline (z-10) */}
      <HeroParticleWave />
    </section>
  );
}
