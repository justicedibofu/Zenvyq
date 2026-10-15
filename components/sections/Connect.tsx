"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageOne, Send, CheckOne, LoadingOne } from "@icon-park/react";
import { SITE_CONFIG, SERVICES } from "@/lib/content";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: SERVICES[0].title,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          contact: "",
          service: SERVICES[0].title,
          message: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit. Please chat on WhatsApp.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Connection error. Please click below to chat directly on WhatsApp.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-paper text-ink py-24 sm:py-36 border-b border-paper-dark overflow-hidden"
    >
      {/* 1px subtle background grid */}
      <div className="absolute inset-0 grid-bg-overlay pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brutalist Corner-Bracket Bounded Container */}
        <div className="relative bg-paper-light border border-paper-dark p-8 sm:p-14 md:p-20 shadow-xl overflow-hidden">
          
          {/* L-shaped Corner Brackets (matching Ynora reference) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-ink pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-ink pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-ink pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-ink pointer-events-none" />

          {/* Top Micro Header inside Frame */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-paper-dark gap-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-micro text-blue-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>DIRECT CHANNELS</span>
            </div>

            <div className="font-mono text-xs text-ink/65">
              <span>REMOTE · NIGERIA</span>
            </div>
          </div>

          {/* Centerpiece: Huge "CONNECT" over Rotated Translucent Blue Square */}
          <div className="relative my-12 sm:my-16 flex flex-col items-center justify-center text-center">
            
            {/* Rotated Translucent Blue Square / Diamond */}
            <motion.div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/15 border border-blue-500/30 rounded-2xl pointer-events-none"
              style={{ rotate: 45 }}
              animate={{ rotate: [45, 48, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Micro-label Above: START YOUR PROJECT TODAY */}
            <span className="relative z-10 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-ink/70 mb-2">
              START YOUR PROJECT TODAY
            </span>

            {/* Huge CONNECT Wordmark */}
            <h2 className="relative z-10 font-display font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight text-ink drop-shadow-sm select-none">
              CONNECT
            </h2>

            {/* Micro-label Below: WITH US */}
            <span className="relative z-10 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mt-2">
              WITH US
            </span>
          </div>

          {/* Direct WhatsApp & Email Buttons (Rendered only if env vars are present) */}
          {SITE_CONFIG.contact.whatsappLink && (
            <div className="flex justify-center mb-10">
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-none transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                <MessageOne theme="outline" size="20" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <span>Chat on WhatsApp</span>
                <span className="font-bold transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          )}

          {/* Contact Form */}
          <div className="max-w-xl mx-auto pt-8 border-t border-paper-dark">
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-ink mb-6 text-center">
              OR SEND A DETAILED SPECIFICATION
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink/75 font-semibold mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-paper-dark text-ink font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink/75 font-semibold mb-1.5">
                  Email or WhatsApp Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. david@company.com or +234 800 000 0000"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-paper-dark text-ink font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink/75 font-semibold mb-1.5">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-paper-dark text-ink font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.number} — {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink/75 font-semibold mb-1.5">
                  Project Brief & Objectives *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are building, your timeline, or current bottlenecks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-paper-dark text-ink font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 bg-ink hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <LoadingOne theme="outline" size="18" strokeWidth={3} className="animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send theme="outline" size="16" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center gap-2">
                  <CheckOne theme="outline" size="16" strokeWidth={3} className="text-emerald-600 flex-shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-300 text-red-800 text-xs font-mono">
                  {responseMsg}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
