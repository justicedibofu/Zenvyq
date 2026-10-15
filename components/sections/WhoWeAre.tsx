"use client";

import { motion } from "framer-motion";
import { SettingConfig, Brain } from "@icon-park/react";
import AbstractParticleBlob from "@/components/ui/AbstractParticleBlob";
import { WHO_WE_ARE } from "@/lib/content";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative bg-ink text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* 1px Vertical Grid Lines (Brutalist Architectural Grid) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 border-x border-white/5">
          <div className="hidden md:block col-span-3 border-r border-white/5" />
          <div className="hidden md:block col-span-5 border-r border-white/5" />
          <div className="hidden md:block col-span-4" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block: Micro-label left, Large statement right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16 sm:pb-24 border-b border-white/10">
          
          {/* Micro-label: ● WHO WE ARE */}
          <div className="md:col-span-3 pt-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-micro text-blue-400 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{WHO_WE_ARE.label}</span>
            </motion.div>
          </div>

          {/* Large Statement with Blue Highlight Block behind DEDICATED */}
          <div className="md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] uppercase"
            >
              <span className="inline-block bg-blue-500 text-white px-3 py-0.5 mr-2 sm:mr-3 rounded-none">
                {WHO_WE_ARE.statementLead}
              </span>
              <span>{WHO_WE_ARE.statementRest}</span>
            </motion.h2>
          </div>

        </div>

        {/* Bottom 3-Column Bento Grid: Card 1 (Automation), Card 2 (Intelligence), Tile 3 (Generative 3D Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-12 sm:pt-16">
          
          {/* Card 1: MECHANIZATION → AUTOMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 p-8 border border-white/10 bg-ink-card relative group hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
          >
            {/* Corner Ticks */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />

            <div>
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 text-blue-400 mb-6 group-hover:text-white group-hover:border-blue-500 transition-colors">
                <SettingConfig theme="outline" size="26" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              </div>

              <span className="font-mono text-[11px] uppercase tracking-widest text-blue-400 block mb-2 font-semibold">
                {WHO_WE_ARE.cards[0].category}
              </span>

              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-3">
                {WHO_WE_ARE.cards[0].title}
              </h3>
            </div>

            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              {WHO_WE_ARE.cards[0].description}
            </p>
          </motion.div>

          {/* Card 2: INTELLIGENCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 p-8 border border-white/10 bg-ink-card relative group hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
          >
            {/* Corner Ticks */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />

            <div>
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 text-blue-400 mb-6 group-hover:text-white group-hover:border-blue-500 transition-colors">
                <Brain theme="outline" size="26" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              </div>

              <span className="font-mono text-[11px] uppercase tracking-widest text-blue-400 block mb-2 font-semibold">
                {WHO_WE_ARE.cards[1].category}
              </span>

              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-3">
                {WHO_WE_ARE.cards[1].title}
              </h3>
            </div>

            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              {WHO_WE_ARE.cards[1].description}
            </p>
          </motion.div>

          {/* Tile 3: Generated Grayscale Abstract Particle Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 border border-white/10 bg-ink-card relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center p-4"
          >
            {/* Corner Ticks */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40" />

            <div className="w-full h-[260px] relative">
              <AbstractParticleBlob />
            </div>

            {/* Clean particle visual canvas without pseudo-technical micro-labels */}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
