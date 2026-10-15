"use client";

import { motion } from "framer-motion";

export default function RemoteNetworkVisual() {
  // 12 nodes positioned in a balanced, organic cluster without any map or city pins
  const nodes = [
    { id: 1, x: 80, y: 70, r: 4, pulse: true },
    { id: 2, x: 130, y: 50, r: 3, pulse: false },
    { id: 3, x: 180, y: 65, r: 3.5, pulse: true },
    { id: 4, x: 230, y: 80, r: 3, pulse: false },
    { id: 5, x: 100, y: 110, r: 3.5, pulse: false },
    { id: 6, x: 155, y: 100, r: 5, pulse: true }, // central hub
    { id: 7, x: 205, y: 120, r: 3, pulse: false },
    { id: 8, x: 255, y: 130, r: 3.5, pulse: true },
    { id: 9, x: 75, y: 150, r: 3, pulse: false },
    { id: 10, x: 125, y: 160, r: 4, pulse: false },
    { id: 11, x: 175, y: 155, r: 3.5, pulse: true },
    { id: 12, x: 220, y: 165, r: 3, pulse: false },
  ];

  // Connecting edges between nearby nodes
  const edges = [
    [1, 2], [2, 3], [3, 4],
    [1, 5], [2, 6], [3, 6], [4, 7], [4, 8],
    [5, 6], [6, 7], [7, 8],
    [5, 9], [6, 10], [6, 11], [7, 12], [8, 12],
    [9, 10], [10, 11], [11, 12],
  ];

  return (
    <div className="w-full h-44 sm:h-52 relative flex items-center justify-center overflow-hidden select-none">
      <motion.svg
        viewBox="0 0 320 210"
        className="w-full h-full max-w-[340px]"
        animate={{
          y: [-2, 2, -2],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A8CFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Thin connecting lines with subtle drift */}
        {edges.map(([fromId, toId], idx) => {
          const from = nodes.find((n) => n.id === fromId)!;
          const to = nodes.find((n) => n.id === toId)!;
          return (
            <line
              key={`edge-${idx}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#edgeGrad)"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="opacity-60"
            />
          );
        })}

        {/* 12 small nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {node.pulse && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r * 2.2}
                fill="#0A8CFF"
                opacity={0.25}
                animate={{
                  r: [node.r * 1.5, node.r * 3, node.r * 1.5],
                  opacity: [0.35, 0.05, 0.35],
                }}
                transition={{
                  duration: 3 + (node.id % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (node.id * 0.3) % 2,
                }}
              />
            )}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.pulse ? "#0A8CFF" : "#FFFFFF"}
              opacity={node.pulse ? 0.95 : 0.65}
            />
            {node.pulse && (
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r * 0.4}
                fill="#FFFFFF"
              />
            )}
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
