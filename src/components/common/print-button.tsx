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
        "inline-flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs",
        className
      )}
      aria-label="Print this legal document"
    >
      <Printer className="size-3.5 text-slate-400" />
      <span>Print Document</span>
    </button>
  );
}
