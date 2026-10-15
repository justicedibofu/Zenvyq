"use client";

import { PhoneTelephone, Earth, Message, Certificate } from "@icon-park/react";
import RemoteNetworkVisual from "@/components/ui/RemoteNetworkVisual";
import { WHY_ZENVYQ } from "@/lib/content";

export default function WhyUs() {
  const iconProps = {
    theme: "outline" as const,
    size: "24",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <section
      id="why-us"
      className="relative bg-paper text-ink py-24 sm:py-32 border-b border-paper-dark overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-16 sm:pb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink leading-[1.12]">
            {WHY_ZENVYQ.headlineLead}{" "}
            <span className="inline-block bg-blue-500 text-white px-3 py-0.5 rounded-none">
              {WHY_ZENVYQ.headlineHighlight}
            </span>{" "}
            {WHY_ZENVYQ.headlineEnd}
          </h2>
        </div>

        {/* Clean 4-Tile Bento Grid (2 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Tile 1 (Light) */}
          <div className="bg-paper-light border border-paper-dark p-8 sm:p-12 flex flex-col justify-between min-h-[280px]">
            <div className="w-10 h-10 flex items-center justify-center text-blue-600 mb-8">
              <PhoneTelephone {...iconProps} />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-4">
                {WHY_ZENVYQ.tiles[0].title}
              </h3>
              <p className="font-sans text-base text-ink/80 leading-relaxed max-w-md">
                {WHY_ZENVYQ.tiles[0].body}
              </p>
            </div>
          </div>

          {/* Tile 2 (Dark, Large with Generated Visual) */}
          <div className="bg-ink text-white border border-white/10 p-8 sm:p-12 flex flex-col justify-between min-h-[360px] md:row-span-2">
            <div className="w-10 h-10 flex items-center justify-center text-blue-400 mb-6">
              <Earth {...iconProps} />
            </div>

            {/* Generated Node & Line Visual (Drifting loose cluster of 12 nodes, no maps) */}
            <div className="my-auto py-4">
              <RemoteNetworkVisual />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-4">
                {WHY_ZENVYQ.tiles[1].title}
              </h3>
              <p className="font-sans text-base text-zinc-300 leading-relaxed max-w-md">
                {WHY_ZENVYQ.tiles[1].body}
              </p>
            </div>
          </div>

          {/* Tile 3 (Light) */}
          <div className="bg-paper-light border border-paper-dark p-8 sm:p-12 flex flex-col justify-between min-h-[280px]">
            <div className="w-10 h-10 flex items-center justify-center text-blue-600 mb-8">
              <Message {...iconProps} />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-4">
                {WHY_ZENVYQ.tiles[2].title}
              </h3>
              <p className="font-sans text-base text-ink/80 leading-relaxed max-w-md">
                {WHY_ZENVYQ.tiles[2].body}
              </p>
            </div>
          </div>

          {/* Tile 4 (Light) */}
          <div className="bg-paper-light border border-paper-dark p-8 sm:p-12 flex flex-col justify-between min-h-[280px] md:col-span-2">
            <div className="w-10 h-10 flex items-center justify-center text-blue-600 mb-8">
              <Certificate {...iconProps} />
            </div>

            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-4">
                {WHY_ZENVYQ.tiles[3].title}
              </h3>
              <p className="font-sans text-base text-ink/80 leading-relaxed">
                {WHY_ZENVYQ.tiles[3].body}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
