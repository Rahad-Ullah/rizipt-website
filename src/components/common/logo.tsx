import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="relative flex size-8 sm:size-9 items-center justify-center transition-transform group-hover:scale-105 shrink-0">
        <Image
          src="/logo.png"
          alt="Rizipt Logo"
          width={36}
          height={36}
          className="size-full object-contain"
          priority
        />
      </div>
      <div className="flex items-center font-extrabold tracking-tight text-white text-lg sm:text-xl">
        <span>Rizipt</span>
        <span className="text-[#0094DA]">.</span>
      </div>
    </Link>
  );
}
