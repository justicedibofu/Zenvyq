"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, GraphicDesign, Code, Rocket } from "@icon-park/react";
import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const renderIcon = (iconName: string) => {
    const props = {
      theme: "outline" as const,
      size: "26",
      strokeWidth: 3,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };
    switch (iconName) {
      case "Search":
        return <Search {...props} />;
      case "GraphicDesign":
        return <GraphicDesign {...props} />;
      case "Code":
        return <Code {...props} />;
      case "Rocket":
        return <Rocket {...props} />;
      default:
        return <Code {...props} />;
    }
  };

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-paper text-ink py-24 sm:py-32 border-b border-paper-dark overflow-hidden"
    >
      {/* 1px subtle background grid */}
      <div className="absolute inset-0 grid-bg-overlay pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-16 sm:pb-20">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-micro text-blue-600 font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink leading-tight">
            ENGINEERING RIGOR FROM DAY ONE
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink/75 mt-4 leading-relaxed font-medium">
            A repeatable 4-stage deployment framework engineered for zero wasted cycles, transparent velocity, and enterprise reliability.
          </p>
        </div>

        {/* 4 Steps Row with Animated Connecting Line */}
        <div className="relative">
          
          {/* Animated Connecting Horizontal Line across cards on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-paper-border z-0">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-blue-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-paper-light border border-paper-dark p-7 relative group hover:border-ink transition-all duration-300 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                {/* Corner detail */}
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ink/40 group-hover:border-blue-500 transition-colors" />

                <div>
                  {/* Top: Icon circle + Number badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-paper-dark text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                      {renderIcon(step.icon)}
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-ink/30 group-hover:text-blue-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-ink mb-3">
                    {step.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-ink/75 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
