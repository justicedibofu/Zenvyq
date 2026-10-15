"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ theme = "light", className, showTagline = false }: LogoProps) {
  return (
    <Link
      href="#hero"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90 select-none",
        className
      )}
      aria-label="ZENVYQ Tech Ltd Home"
    >
      {theme === "light" ? (
        // On light backgrounds: full logo with navy wordmark, rendered 38-42px tall for crisp readability
        <div className="relative h-10 md:h-11 w-auto flex items-center">
          <Image
            src="/brand/logo-no-bg.png"
            alt="ZENVYQ Tech Ltd"
            width={210}
            height={52}
            priority
            className="h-9 md:h-10 w-auto object-contain"
          />
        </div>
      ) : (
        // On dark backgrounds: icon + live-text white wordmark (since navy wordmark disappears on dark)
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 md:h-10 md:w-10 flex-shrink-0">
            <Image
              src="/brand/logo-icon.png"
              alt="ZENVYQ Logo Icon"
              width={42}
              height={42}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline font-display font-extrabold tracking-tight text-xl md:text-2xl text-white">
              <span>ENVY</span>
              <span className="text-blue-500">Q</span>
            </div>
            {showTagline && (
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono -mt-1">
                Tech Ltd
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
