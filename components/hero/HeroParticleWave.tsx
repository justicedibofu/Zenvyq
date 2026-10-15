"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseRef.current.targetX = relX * 50;
      mouseRef.current.targetY = relY * 30;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Multi-ribbon dense mesh: 160 columns x 60 depth rows = 9,600 points (safe 60fps)
    const cols = 160;
    const rows = 60;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      if (!reducedMotion) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      }

      const parallaxX = mouseRef.current.x;
      const parallaxY = mouseRef.current.y;

      const fov = 420;
      const horizonY = height * 0.52 + parallaxY;
      const centerX = width * 0.5 + parallaxX;

      // Draw from back to front for accurate depth sorting
      for (let r = rows - 1; r >= 0; r--) {
        const depthNorm = r / (rows - 1); // 1 (deep) to 0 (front)
        const z = depthNorm * 460 + 90;
        const scale = fov / (fov + z);

        for (let c = 0; c < cols; c++) {
          const colNorm = c / (cols - 1); // 0 (left) to 1 (right)
          const worldX = (colNorm - 0.5) * (width * 1.4);

          // 3 Distinct Rolling Mountain Peaks matching Ynora screenshot:
          // Left Peak: ~0.20, Center Peak: ~0.52, Right Peak: ~0.84
          const leftPeak = Math.exp(-Math.pow((colNorm - 0.20) * 6.0, 2)) * 145;
          const centerPeak = Math.exp(-Math.pow((colNorm - 0.52) * 4.6, 2)) * 165;
          const rightPeak = Math.exp(-Math.pow((colNorm - 0.84) * 5.2, 2)) * 135;
          const valleySwell = Math.sin(colNorm * Math.PI) * 55;

          const baseTerrain = (leftPeak + centerPeak + rightPeak + valleySwell) * (1 - depthNorm * 0.45);

          // Complex flowing sine wave harmonics (like silk/sand fluid)
          const t = reducedMotion ? 1.5 : step * 0.022;
          const wave1 = Math.sin(colNorm * 7.5 + t + depthNorm * 2.8) * 22;
          const wave2 = Math.cos(colNorm * 12.0 - t * 0.75 + depthNorm * 3.6) * 14;
          const wave3 = Math.sin(colNorm * 18.0 + t * 1.1 + depthNorm * 5.0) * 8;
          const wave4 = Math.cos(colNorm * 32.0 - t * 0.5) * 4;

          const totalElevation = baseTerrain + wave1 + wave2 + wave3 + wave4;

          // Projected 2D coordinates
          const projX = centerX + worldX * scale;
          const projY = horizonY - totalElevation * scale + depthNorm * 110;

          // Normalized altitude: 1 at luminous crest peaks, 0 at deep shadowed troughs
          const heightRatio = Math.min(Math.max((totalElevation - 30) / 160, 0), 1);

          // Dot sizing based on altitude and perspective
          const radius = Math.max((0.9 + heightRatio * 1.8) * scale * 1.4, 0.6);

          // High-contrast monochromatic styling matching Ynora:
          // Crest peaks: Luminous white & silver (glowing ridges)
          // Mid slopes: Silver-slate
          // Valleys / deep base: Dark charcoal / graphite dots against paper
          if (heightRatio > 0.62) {
            const crestAlpha = 0.85 + (heightRatio - 0.62) * 0.38;
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(crestAlpha, 1)})`;
          } else if (heightRatio > 0.32) {
            const midAlpha = 0.55 + heightRatio * 0.35;
            ctx.fillStyle = `rgba(135, 145, 165, ${midAlpha * (1 - depthNorm * 0.35)})`;
          } else {
            const darkAlpha = 0.45 + (1 - heightRatio) * 0.45;
            ctx.fillStyle = `rgba(22, 26, 36, ${darkAlpha * (1 - depthNorm * 0.3)})`;
          }

          ctx.beginPath();
          ctx.arc(projX, projY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reducedMotion) {
        step += 1;
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [reducedMotion]);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 w-full h-[46svh] min-h-[380px] max-h-[580px] overflow-hidden select-none z-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* 2D Perspective Particle Mountain Wave */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Subtle top blend */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-paper to-transparent pointer-events-none" />

      {/* Bottom seamless blend into the dark section below */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink via-ink/85 to-transparent pointer-events-none" />
    </div>
  );
}
