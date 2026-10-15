"use client";

import { useState } from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Telegram, ArrowRight, CheckOne } from "@icon-park/react";
import Logo from "@/components/brand/Logo";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const socialIconProps = {
    theme: "outline" as const,
    size: "18",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <footer className="relative bg-ink text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* 1px Vertical Grid Lines (Brutalist Architectural Grid) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 border-x border-white/5">
          <div className="hidden md:block col-span-6 border-r border-white/5" />
          <div className="hidden md:block col-span-6" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-16 border-b border-white/10">
          
          {/* Left Column: Brand Identity, Tagline, Socials & Newsletter */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Big White Live-Text ZENVYQ Wordmark with Icon */}
              <div className="mb-4">
                <Logo theme="dark" showTagline />
              </div>

              {/* Tagline */}
              <p className="font-display font-medium text-lg text-zinc-300 max-w-md uppercase tracking-tight">
                {SITE_CONFIG.tagline}
              </p>
              <p className="font-sans text-xs text-zinc-500 mt-2 max-w-sm leading-relaxed">
                Registered tech agency in Nigeria engineering intelligent workflows, WhatsApp automations, and custom enterprise software.
              </p>
            </div>

            {/* Social Icon Buttons (IconPark Outline Stroke 3) */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZENVYQ on Twitter / X"
                className="w-10 h-10 border border-white/15 bg-white/5 hover:border-blue-500 hover:bg-blue-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Twitter {...socialIconProps} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZENVYQ on Facebook"
                className="w-10 h-10 border border-white/15 bg-white/5 hover:border-blue-500 hover:bg-blue-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Facebook {...socialIconProps} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZENVYQ on Instagram"
                className="w-10 h-10 border border-white/15 bg-white/5 hover:border-blue-500 hover:bg-blue-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Instagram {...socialIconProps} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZENVYQ on Telegram"
                className="w-10 h-10 border border-white/15 bg-white/5 hover:border-blue-500 hover:bg-blue-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Telegram {...socialIconProps} />
              </a>
            </div>

            {/* Email Subscribe Input */}
            <div className="max-w-md pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block mb-2 font-semibold">
                JOIN OUR MAILING LIST
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-ink-light border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white text-ink hover:bg-blue-500 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Submit
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mt-2">
                  <CheckOne theme="outline" size="14" strokeWidth={3} />
                  <span>Subscribed!</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Nav Link List in Bordered Rows with Arrows (Matching Ynora) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="border-t border-white/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between py-4 border-b border-white/10 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="font-display font-bold uppercase tracking-tight text-lg group-hover:translate-x-1.5 transition-transform duration-200">
                    {link.label}
                  </span>
                  <div className="text-zinc-500 group-hover:text-blue-500 transition-colors">
                    <ArrowRight
                      theme="outline"
                      size="18"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-8 font-mono text-xs text-zinc-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>LOCATION: {SITE_CONFIG.contact.location}</div>
              <div className="text-blue-400">REMOTE · NIGERIA</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-zinc-500 gap-4">
          <div>
            © 2026 ZENVYQ Tech Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="text-blue-500">Built in Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
