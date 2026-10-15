"use client";

import * as React from "react";
import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrintButtonProps {
  className?: string;
}

export function PrintButton({ className }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "inline-flex items-center gap-1.5 p-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer text-xs shadow-xs dark:shadow-none",
        className
      )}
      aria-label="Print this legal document"
    >
      <Printer className="size-3.5 text-slate-500 dark:text-slate-400" />
      <span>Print Document</span>
    </button>
  );
}
