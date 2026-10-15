"use client";

import { motion } from "framer-motion";

// ----------------------------------------------------------------------
// 1. AI & Automation: Node Graph with Pulsing Connection Lines
// ----------------------------------------------------------------------
export function NodeGraphVisual() {
  return (
    <div className="w-full h-48 sm:h-56 relative flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 320 200" className="w-full h-full max-w-[280px]">
        <defs>
          <linearGradient id="nodeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A8CFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B3FA8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connection Lines with traveling pulse */}
        <line x1="160" y1="100" x2="60" y2="50" stroke="url(#nodeLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="160" y1="100" x2="260" y2="50" stroke="url(#nodeLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="160" y1="100" x2="70" y2="150" stroke="url(#nodeLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="160" y1="100" x2="250" y2="150" stroke="url(#nodeLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="60" y1="50" x2="70" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="260" y1="50" x2="250" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Traveling pulses */}
        <motion.circle
          r="3"
          fill="#38BDF8"
          animate={{
            cx: [160, 60],
            cy: [100, 50],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="#38BDF8"
          animate={{
            cx: [160, 260],
            cy: [100, 50],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle
          r="3"
          fill="#38BDF8"
          animate={{
            cx: [160, 70],
            cy: [100, 150],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          r="3"
          fill="#38BDF8"
          animate={{
            cx: [160, 250],
            cy: [100, 150],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />

        {/* Peripheral Nodes */}
        <circle cx="60" cy="50" r="10" fill="#131722" stroke="#0A8CFF" strokeWidth="1.5" />
        <circle cx="60" cy="50" r="4" fill="#0A8CFF" />
        <circle cx="260" cy="50" r="10" fill="#131722" stroke="#0A8CFF" strokeWidth="1.5" />
        <circle cx="260" cy="50" r="4" fill="#0A8CFF" />
        <circle cx="70" cy="150" r="10" fill="#131722" stroke="#0A8CFF" strokeWidth="1.5" />
        <circle cx="70" cy="150" r="4" fill="#0A8CFF" />
        <circle cx="250" cy="150" r="10" fill="#131722" stroke="#0A8CFF" strokeWidth="1.5" />
        <circle cx="250" cy="150" r="4" fill="#0A8CFF" />

        {/* Central Core AI Hub */}
        <motion.circle
          cx="160"
          cy="100"
          r="24"
          fill="#0A1530"
          stroke="#0A8CFF"
          strokeWidth="2"
          animate={{ r: [22, 26, 22] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="160" cy="100" r="14" fill="#0A8CFF" opacity="0.4" />
        <circle cx="160" cy="100" r="7" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Chatbots (WhatsApp): Animated Looping Chat Flow
// ----------------------------------------------------------------------
export function WhatsAppChatVisual() {
  return (
    <div className="w-full h-48 sm:h-56 relative flex flex-col justify-center px-4 space-y-2.5 font-sans select-none overflow-hidden text-xs">
      {/* Customer message */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4.5 }}
        className="self-end max-w-[85%] bg-blue-600/90 text-white px-3.5 py-2 rounded-2xl rounded-tr-xs shadow-md"
      >
        <p className="text-[11px] leading-tight font-medium">Can we automate customer triage and bookings 24/7?</p>
        <span className="text-[9px] text-blue-200 block text-right mt-0.5">10:42 WAT ✓✓</span>
      </motion.div>

      {/* Bot Reply */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 4.5 }}
        className="self-start max-w-[88%] bg-zinc-800 text-zinc-100 px-3.5 py-2 rounded-2xl rounded-tl-xs border border-white/10 shadow-md"
      >
        <div className="flex items-center gap-1 text-[10px] text-blue-400 font-mono mb-0.5 font-semibold">
          <span>● ZENVYQ BOT</span>
        </div>
        <p className="text-[11px] leading-tight">Yes! We qualify leads, sync to CRM, and confirm payments automatically.</p>
        <span className="text-[9px] text-zinc-400 block text-right mt-0.5">10:42 WAT</span>
      </motion.div>

      {/* Confirmation Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.2, repeat: Infinity, repeatDelay: 4.5 }}
        className="self-center bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] px-3 py-1 rounded-full flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Booking Confirmed #NG-7429</span>
      </motion.div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. Websites & Web Apps: Wireframe Browser Building Block by Block
// ----------------------------------------------------------------------
export function WireframeBrowserVisual() {
  return (
    <div className="w-full h-48 sm:h-56 relative flex items-center justify-center p-3 select-none">
      <div className="w-full max-w-[270px] h-[160px] border border-white/15 bg-ink-light rounded-sm flex flex-col overflow-hidden shadow-lg">
        {/* Top bar */}
        <div className="h-6 bg-white/5 border-b border-white/10 flex items-center justify-between px-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-[9px] text-zinc-400">zenvyq.app</span>
          <span className="w-2" />
        </div>

        {/* Content building blocks */}
        <div className="flex-1 p-2.5 space-y-2">
          {/* Header hero bar */}
          <motion.div
            className="h-6 bg-blue-500/25 border border-blue-500/40 rounded-xs"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Grid columns */}
          <div className="grid grid-cols-3 gap-2">
            <motion.div
              className="h-12 bg-white/5 border border-white/10 rounded-xs"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatDelay: 3.4 }}
            />
            <motion.div
              className="h-12 bg-white/5 border border-white/10 rounded-xs"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 1.0, repeat: Infinity, repeatDelay: 3.0 }}
            />
            <motion.div
              className="h-12 bg-blue-500/15 border border-blue-500/30 rounded-xs flex items-center justify-center"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 1.4, repeat: Infinity, repeatDelay: 2.6 }}
            >
              <div className="w-3 h-3 border border-blue-400 rounded-full" />
            </motion.div>
          </div>

          {/* Bottom chart line */}
          <div className="h-3 bg-white/5 rounded-xs overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
              animate={{ width: ["0%", "85%"] }}
              transition={{ duration: 1.8, delay: 1.5, repeat: Infinity, repeatDelay: 2.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. Mobile Apps: Phone Outline with Sliding UI Cards
// ----------------------------------------------------------------------
export function PhoneAppVisual() {
  return (
    <div className="w-full h-48 sm:h-56 relative flex items-center justify-center select-none">
      <div className="w-[130px] h-[175px] border-2 border-white/20 bg-ink-light rounded-[18px] p-2 relative flex flex-col justify-between overflow-hidden shadow-xl">
        {/* Notch */}
        <div className="w-12 h-2.5 bg-ink border border-white/20 rounded-full mx-auto" />

        {/* Sliding UI Cards */}
        <div className="space-y-2 my-auto">
          <motion.div
            className="p-1.5 bg-blue-500/20 border border-blue-500/40 rounded-md"
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
          >
            <div className="w-10 h-1.5 bg-blue-400 rounded-full mb-1" />
            <div className="w-16 h-1 bg-white/30 rounded-full" />
          </motion.div>

          <motion.div
            className="p-1.5 bg-white/5 border border-white/10 rounded-md"
            animate={{ y: [25, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatDelay: 2.5 }}
          >
            <div className="w-8 h-1.5 bg-white/60 rounded-full mb-1" />
            <div className="w-12 h-1 bg-white/20 rounded-full" />
          </motion.div>
        </div>

        {/* Home bar */}
        <div className="w-10 h-1 bg-white/30 rounded-full mx-auto" />
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 5. Business Registration (Nigeria): Document with Animating Stamp & Check
// ----------------------------------------------------------------------
export function CACDocumentVisual() {
  return (
    <div className="w-full h-48 sm:h-56 relative flex items-center justify-center p-3 select-none">
      <div className="w-[155px] h-[170px] bg-zinc-900 border border-white/15 rounded-xs p-3 relative flex flex-col justify-between shadow-xl">
        {/* Document Header */}
        <div className="border-b border-white/10 pb-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[7px] text-blue-400 uppercase tracking-widest font-semibold">
              CAC · NIGERIA
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="w-16 h-1 bg-white/40 mt-1" />
        </div>

        {/* Document lines */}
        <div className="space-y-1.5 my-auto">
          <div className="w-full h-1 bg-white/15" />
          <div className="w-4/5 h-1 bg-white/15" />
          <div className="w-3/4 h-1 bg-white/15" />
        </div>

        {/* Animated Stamp */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 2, opacity: 0, rotate: -30 }}
          animate={{ scale: [2, 1, 1], opacity: [0, 1, 1], rotate: [-30, -12, -12] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeOut" }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-emerald-400/80 bg-emerald-950/60 backdrop-blur-xs flex flex-col items-center justify-center text-emerald-400">
            <span className="font-mono text-[7px] font-bold tracking-widest uppercase">
              REGISTERED
            </span>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-mono text-[6px] tracking-wider text-emerald-300">
              OFFICIAL FILING
            </span>
          </div>
        </motion.div>

        {/* Document Footer */}
        <div className="border-t border-white/10 pt-1 flex justify-between font-mono text-[7px] text-zinc-500">
          <span>FEDERAL REPUBLIC</span>
          <span>OF NIGERIA</span>
        </div>
      </div>
    </div>
  );
}
