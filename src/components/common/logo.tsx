import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-bold tracking-tight text-xl text-white transition-opacity hover:opacity-90 select-none",
        className
      )}
      aria-label="Rizipt Home"
    >
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-[#0094DA] text-white shadow-md shadow-[#0094DA]/30 transition-transform group-hover:scale-105">
        {/* Custom stylized receipt icon with edge jagged cuts */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h4" />
        </svg>
        {/* Sparkle badge in top right */}
        <span className="absolute -top-1 -right-1 flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-cyan-400" />
        </span>
      </div>
      <div className="flex items-center font-extrabold tracking-tight text-white text-lg sm:text-xl">
        <span>Rizipt</span>
        <span className="text-[#0094DA]">.</span>
      </div>
    </Link>
  );
}
