"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerButton, Close, ArrowRight, MessageOne } from "@icon-park/react";
import Logo from "@/components/brand/Logo";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/content";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-paper/95 backdrop-blur-md border-paper-dark py-3.5 shadow-sm"
            : "bg-paper/80 backdrop-blur-xs border-paper-border/60 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center">
            {/* Left: Brand Logo */}
            <div className="flex items-center justify-start">
              <Logo theme="light" />
            </div>

            {/* Center: CONTACT pill link */}
            <div className="flex items-center justify-center">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 border border-ink/20 hover:border-ink bg-transparent text-ink font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:bg-ink hover:text-white"
              >
                <span>CONTACT</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </Link>
            </div>

            {/* Right: MENU button */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group flex items-center gap-2.5 px-3 py-1.5 border border-ink/20 hover:border-ink font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <span>MENU</span>
                <HamburgerButton
                  theme="outline"
                  size="18"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:scale-110"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Dark Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-ink text-white flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-6">
              <Logo theme="dark" showTagline />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:border-white font-mono text-xs uppercase tracking-widest text-white transition-all hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close navigation menu"
              >
                <span>CLOSE</span>
                <Close
                  theme="outline"
                  size="18"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:rotate-90"
                />
              </button>
            </div>

            {/* Main Links with big Framer Motion stagger */}
            <div className="max-w-7xl w-full mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <nav className="lg:col-span-8 flex flex-col space-y-3 sm:space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + idx * 0.06,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-zinc-300 hover:text-white transition-colors"
                    >
                      <span className="font-mono text-sm sm:text-base text-blue-500 opacity-80">
                        0{idx + 1}
                      </span>
                      <span className="group-hover:translate-x-2 transition-transform duration-200">
                        {link.label}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-2xl sm:text-4xl">
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Menu Sidebar Details */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between space-y-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-400 block mb-2">
                    ● DIRECT CONTACT
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Need a website, mobile app, WhatsApp bot, or CAC registration? Message us directly.
                  </p>
                  {SITE_CONFIG.contact.whatsappLink && (
                    <a
                      href={SITE_CONFIG.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-none transition-all shadow-lg shadow-blue-500/20"
                    >
                      <MessageOne
                        theme="outline"
                        size="18"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <span>Chat on WhatsApp</span>
                      <ArrowRight
                        theme="outline"
                        size="16"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </a>
                  )}
                </div>

                <div className="font-mono text-xs text-zinc-500 space-y-1">
                  {SITE_CONFIG.contact.email && (
                    <div>
                      EMAIL:{" "}
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  )}
                  <div>LOCATION: {SITE_CONFIG.contact.location}</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Menu */}
            <div className="max-w-7xl w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-zinc-500">
              <span>© {new Date().getFullYear()} ZENVYQ TECH LTD · ALL RIGHTS RESERVED</span>
              <span className="mt-2 sm:mt-0 text-blue-400">REMOTE · NIGERIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
