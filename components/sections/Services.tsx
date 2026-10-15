"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Robot,
  MessageOne,
  Browser,
  PhoneTelephone,
  Certificate,
  ArrowRight,
} from "@icon-park/react";
import {
  NodeGraphVisual,
  WhatsAppChatVisual,
  WireframeBrowserVisual,
  PhoneAppVisual,
  CACDocumentVisual,
} from "@/components/services/ServiceVisuals";
import { SERVICES } from "@/lib/content";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % SERVICES.length;
      setActiveIdx(next);
      panelRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + SERVICES.length) % SERVICES.length;
      setActiveIdx(prev);
      panelRefs.current[prev]?.focus();
    }
  };

  const renderVisual = (id: string) => {
    switch (id) {
      case "ai-automation":
        return <NodeGraphVisual />;
      case "chatbots":
        return <WhatsAppChatVisual />;
      case "web-apps":
        return <WireframeBrowserVisual />;
      case "mobile-apps":
        return <PhoneAppVisual />;
      case "business-registration":
        return <CACDocumentVisual />;
      default:
        return null;
    }
  };

  const renderIcon = (iconName: string) => {
    const props = {
      theme: "outline" as const,
      size: "24",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };
    switch (iconName) {
      case "Robot":
        return <Robot {...props} />;
      case "MessageOne":
        return <MessageOne {...props} />;
      case "Browser":
        return <Browser {...props} />;
      case "PhoneTelephone":
        return <PhoneTelephone {...props} />;
      case "Certificate":
        return <Certificate {...props} />;
      default:
        return <Robot {...props} />;
    }
  };

  return (
    <section
      id="services"
      className="relative bg-ink text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-micro text-blue-400 font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>SERVICES</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              WHAT WE <span className="text-blue-500">BUILD</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-zinc-400 max-w-md leading-relaxed">
            High-leverage digital systems, conversational commerce pipelines, and regulatory frameworks tailored for African market realities.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP: Horizontal Expanding-Panel Accordion */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:flex w-full h-[540px] mt-12 gap-3">
          {SERVICES.map((service, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  panelRefs.current[idx] = el;
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-none border transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "flex-[4] bg-gradient-to-b from-[#131722] to-ink-card border-blue-500/80 shadow-2xl shadow-blue-500/10 p-8"
                    : "flex-1 bg-ink-light border-white/10 hover:border-white/30 p-6 items-center"
                }`}
              >
                {/* Active Top Accent Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent" />
                )}

                {/* EXPANDED VIEW CONTENT */}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="h-full flex flex-col justify-between"
                  >
                    {/* Top Row: Index + Icon */}
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-3xl font-bold text-blue-500">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 flex items-center justify-center border border-blue-500/30 bg-blue-500/10 text-blue-400">
                        {renderIcon(service.icon)}
                      </div>
                    </div>

                    {/* Middle: Generative Animated Visual */}
                    <div className="my-auto py-2">
                      {renderVisual(service.id)}
                    </div>

                    {/* Bottom: Title, Description, Tags */}
                    <div>
                      <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-zinc-300 mb-5 leading-relaxed max-w-md">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // COLLAPSED STRIP VIEW
                  <div className="h-full w-full flex flex-col justify-between items-center py-2 select-none">
                    <span className="font-mono text-xl font-bold text-zinc-400">
                      {service.number}
                    </span>

                    {/* Rotated Vertical Title */}
                    <div className="rotate-90 origin-center whitespace-nowrap font-display font-bold text-base uppercase tracking-tight text-zinc-300 my-auto">
                      {service.title}
                    </div>

                    <div className="text-zinc-500">
                      {renderIcon(service.icon)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ---------------------------------------------------- */}
        {/* MOBILE: Stacked Vertical Accordion */}
        {/* ---------------------------------------------------- */}
        <div className="flex lg:hidden flex-col gap-4 mt-8">
          {SERVICES.map((service, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={service.id}
                className={`border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "bg-ink-card border-blue-500/80 shadow-lg"
                    : "bg-ink-light border-white/10"
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  aria-expanded={isActive}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xl font-bold text-blue-500">
                      {service.number}
                    </span>
                    <span className="font-display font-bold text-lg uppercase tracking-tight text-white">
                      {service.title}
                    </span>
                  </div>

                  <div className="text-blue-400">
                    {renderIcon(service.icon)}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 border-t border-white/10 pt-4"
                    >
                      <div className="py-2">
                        {renderVisual(service.id)}
                      </div>

                      <p className="font-sans text-sm text-zinc-300 mb-4 leading-relaxed mt-2">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
