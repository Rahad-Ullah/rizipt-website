"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-0 text-slate-500 transition-colors select-none",
          className
        )}
        aria-label="Toggle theme"
        disabled
      >
        <span className="size-4 rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex size-9 items-center justify-center rounded-full border transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0094DA]",
        "border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 shadow-xs",
        "dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:hover:border-slate-700 dark:shadow-inner",
        "active:scale-95",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "size-4 transition-all duration-300",
          isDark
            ? "rotate-0 scale-100 text-amber-400 group-hover:rotate-45"
            : "hidden -rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "size-4 transition-all duration-300",
          !isDark
            ? "rotate-0 scale-100 text-slate-700 group-hover:-rotate-12 group-hover:text-[#0094DA]"
            : "hidden rotate-90 scale-0"
        )}
      />
    </button>
  );
}
