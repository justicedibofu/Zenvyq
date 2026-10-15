"use client";

import React, { useEffect, useRef } from "react";

export default function AbstractParticleBlob({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Procedural 3D twisted particle ribbon / torus sculpture
    const numPoints = 1200;
    const points: { u: number; v: number; speed: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        u: Math.random() * Math.PI * 2,
        v: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
      });
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const R = Math.min(w, h) * 0.28;
      const r = R * 0.45;

      step += 0.008;

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        pt.u += pt.speed;

        // Parametric twisted Trefoil / Möbius ribbon in 3D
        const x3d = (R + r * Math.cos(pt.v)) * Math.cos(pt.u);
        const y3d = (R + r * Math.cos(pt.u * 2)) * Math.sin(pt.v);
        const z3d = r * Math.sin(pt.u * 3) + Math.sin(step + pt.v) * 20;

        // Rotate around Y and X axis
        const cosY = Math.cos(step * 0.8);
        const sinY = Math.sin(step * 0.8);
        const rotX = x3d * cosY - z3d * sinY;
        const rotZ = x3d * sinY + z3d * cosY;

        const cosX = Math.cos(0.4);
        const sinX = Math.sin(0.4);
        const rotY = y3d * cosX - rotZ * sinX;
        const finalZ = y3d * sinX + rotZ * cosX;

        // Perspective projection
        const fov = 280;
        const scale = fov / (fov + finalZ + 200);
        const projX = cx + rotX * scale;
        const projY = cy + rotY * scale;

        const depthAlpha = Math.min(Math.max((finalZ + 100) / 200, 0.15), 0.95);
        const isHighlight = Math.random() > 0.92;

        ctx.fillStyle = isHighlight
          ? `rgba(255, 255, 255, ${depthAlpha})`
          : `rgba(160, 175, 200, ${depthAlpha * 0.75})`;

        ctx.beginPath();
        ctx.arc(projX, projY, (isHighlight ? 1.6 : 1.1) * scale * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full block ${className}`} />;
}
