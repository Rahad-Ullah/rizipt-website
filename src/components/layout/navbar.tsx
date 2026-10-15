"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { Logo } from "../common/logo";
import { ThemeToggle } from "../common/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "For Merchants", href: "#merchants" },
  { name: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/90 py-3 shadow-xs dark:shadow-lg dark:shadow-black/40"
          : "bg-white/60 dark:bg-[#0B0F17]/60 backdrop-blur-xs py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Logo />

        {/* Minimalist Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-[#0094DA] dark:hover:text-[#0094DA] relative py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* High-visibility Action Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#download"
            className={cn(
              buttonVariants(),
              "rounded-full bg-[#0094DA] hover:bg-[#007cb8] text-white shadow-md shadow-[#0094DA]/30 hover:shadow-[#0094DA]/50 px-5 py-2 font-semibold transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 text-sm"
            )}
          >
            <ArrowDownToLine className="size-4" />
            <span>Download App</span>
          </Link>
        </div>

        {/* Mobile menu toggle & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0094DA]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-[#0094DA]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#download"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants(),
                  "w-full rounded-full bg-[#0094DA] hover:bg-[#007cb8] text-white font-semibold py-2.5 shadow-md shadow-[#0094DA]/25 flex items-center justify-center gap-2"
                )}
              >
                <ArrowDownToLine className="size-4" />
                <span>Download App</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
