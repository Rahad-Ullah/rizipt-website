"use client";

import * as React from "react";
import {
  Camera,
  Cpu,
  FolderCheck,
  Sparkles,
  Scan,
  ScanLine,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Milestone {
  step: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const MILESTONES: Milestone[] = [
  {
    step: "01",
    badge: "Step 01 • Scan",
    title: "Scan Any Paper Receipt",
    description:
      "Point your phone camera at physical receipts, bills, or invoices. Smart edge-detection automatically locks onto the borders in 0.2 seconds.",
    icon: Camera,
    tags: ["Auto-Border Framing", "Anti-Glare Capture"],
  },
  {
    step: "02",
    badge: "Step 02 • Extract",
    title: "AI Processes & Extracts Data",
    description:
      "Our neural model processes the receipt instantly—extracting merchant name, date, itemized lines, tax, and total amount with 99.8% accuracy.",
    icon: Cpu,
    tags: ["99.8% Field Precision", "Itemized Line Items"],
  },
  {
    step: "03",
    badge: "Step 03 • Save",
    title: "Review & Save to Desired Folder",
    description:
      "Quickly review the verified receipt and save it directly into your desired folder—such as Groceries, Business, or Tax Deductions.",
    icon: FolderCheck,
    tags: ["Organized Custom Folders", "Tax Deductible Filing"],
  },
];

export function ScanExtractionDemo() {
  const [activeMilestone, setActiveMilestone] = React.useState<number>(0);
  const [isScanning, setIsScanning] = React.useState<boolean>(false);

  const handleSimulateScan = () => {
    setIsScanning(true);
    toast.info("Scanning receipt...", {
      description: "Detecting edge bounds and extracting line items.",
    });

    setTimeout(() => {
      setIsScanning(false);
      setActiveMilestone((prev) => (prev + 1) % MILESTONES.length);
      toast.success("AI Scan Complete: 99.8% Precision Score", {
        description: "Merchant Trader Joe's verified and filed to Groceries.",
      });
    }, 1200);
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B0F17] border-t border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <Sparkles className="size-3.5" />
            <span>AI Extraction Flow</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Experience 3-Step AI Receipt Extraction
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From physical paper to structured, tax-deductible record in under a second. See how Rizipt automates every step.
          </p>
        </div>

        {/* Workspace Area: Left Mobile Screen Mockup + Right Milestone Track */}
        <div className="mt-14 mx-auto max-w-6xl rounded-3xl border border-slate-800/80 bg-[#111827]/60 backdrop-blur-md p-4 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Realistic Smartphone Screen Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              {/* Obsidian Phone Chassis */}
              <div className="relative w-full max-w-[330px] sm:max-w-[360px] rounded-[48px] border-[10px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800/90 shadow-black/80">
                {/* Dynamic Island Notch */}
                <div className="relative mx-auto h-5 w-28 rounded-full bg-slate-900 mb-2 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-slate-800 absolute right-4" />
                </div>

                {/* Viewfinder Screen Area */}
                <div className="relative overflow-hidden rounded-[36px] bg-[#0E1420] p-4 min-h-[550px] flex flex-col justify-between text-white">
                  {/* Top App Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-lg bg-[#0094DA] flex items-center justify-center text-white shadow-xs shadow-[#0094DA]/30">
                        <ScanLine className="size-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block leading-tight">AI Scanner Mode</span>
                        <span className="text-[10px] text-slate-400">Edge-Detection Live</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#0094DA] border border-[#0094DA]/30">
                      <span className="size-1.5 rounded-full bg-[#0094DA] animate-pulse" />
                      {isScanning ? "Processing" : "Ready"}
                    </span>
                  </div>

                  {/* Camera Viewfinder Box with Edge Reticles & Scanned Receipt */}
                  <div className="relative my-3 rounded-2xl bg-[#111827] border border-slate-800 p-3 shadow-inner overflow-hidden flex-1 flex flex-col justify-between">
                    {/* Edge detection corner reticles in #0094DA */}
                    <div className="absolute top-2.5 left-2.5 size-4 border-t-2 border-l-2 border-[#0094DA]" />
                    <div className="absolute top-2.5 right-2.5 size-4 border-t-2 border-r-2 border-[#0094DA]" />
                    <div className="absolute bottom-2.5 left-2.5 size-4 border-b-2 border-l-2 border-[#0094DA]" />
                    <div className="absolute bottom-2.5 right-2.5 size-4 border-b-2 border-r-2 border-[#0094DA]" />

                    {/* Laser sweep animation when scanning */}
                    {isScanning && (
                      <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#0094DA] to-transparent shadow-[0_0_15px_#0094DA] animate-bounce z-20" />
                    )}

                    {/* Top Viewfinder Status Banner */}
                    <div className="relative z-10 flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-300 border border-slate-800">
                        <Scan className="size-3 text-[#0094DA]" />
                        Auto-Framing 4 Bounds
                      </span>
                      <span className="rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold">
                        99.8% Match
                      </span>
                    </div>

                    {/* Receipt Paper in Scanner */}
                    <div className="relative z-10 mx-auto w-full rounded-xl bg-slate-950/90 p-3 border border-slate-800 text-slate-200 shadow-md">
                      {/* Highlighted Merchant Box in #0094DA */}
                      <div className="rounded-lg border border-[#0094DA] bg-[#0094DA]/10 p-2 mb-2">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs uppercase tracking-wider text-white">
                            Trader Joe&apos;s #142
                          </span>
                          <span className="text-[9px] font-bold text-[#0094DA] bg-[#0094DA]/20 px-1.5 py-0.5 rounded border border-[#0094DA]/30">
                            Verified
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mt-0.5">
                          <span>Store #10492</span>
                          <span>Oct 09, 2026</span>
                        </div>
                      </div>

                      {/* Line Items */}
                      <div className="py-1 space-y-1.5 text-[11px] font-mono">
                        <div className="flex justify-between items-center py-0.5 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-300">Organic Honeycrisp 2lb</span>
                          <span className="font-semibold text-white">$6.99</span>
                        </div>
                        <div className="flex justify-between items-center py-0.5 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-300">Cold Brew Coffee 32oz</span>
                          <span className="font-semibold text-white">$5.49</span>
                        </div>
                        <div className="flex justify-between items-center py-0.5 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-300">Wild Salmon Fillet</span>
                          <span className="font-semibold text-white">$26.87</span>
                        </div>
                      </div>

                      {/* Tax & Total Extracted Box in #0094DA */}
                      <div className="pt-2 mt-1 border-t border-dashed border-slate-800 text-[11px] font-mono">
                        <div className="flex justify-between text-slate-400 px-1 py-0.5">
                          <span>Tax (8.875%)</span>
                          <span className="text-slate-200">$3.45</span>
                        </div>
                        <div className="mt-1 flex justify-between items-center rounded-lg border border-[#0094DA] bg-[#0094DA]/15 p-2 text-white">
                          <span className="font-bold text-xs">TOTAL EXTRACTED</span>
                          <span className="text-sm font-black text-[#0094DA]">$42.80</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Category tag preview inside phone */}
                    <div className="relative z-10 mt-2 flex items-center justify-between text-[10px] px-1 text-slate-400">
                      <span className="truncate max-w-[140px]">Tag: <strong className="text-slate-200">Groceries & Pantry</strong></span>
                      <span className="text-[#0094DA] font-semibold">Apple Pay (*4421)</span>
                    </div>
                  </div>

                  {/* Bottom Phone Action Bar: Trigger Re-Scan button */}
                  <div className="relative z-10 pt-2">
                    <button
                      type="button"
                      onClick={handleSimulateScan}
                      className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0094DA] hover:bg-[#007cb8] text-white py-2.5 text-xs font-semibold shadow-md shadow-[#0094DA]/30 transition-all active:scale-95 cursor-pointer"
                    >
                      <Camera className="size-3.5" />
                      <span>{isScanning ? "Processing Edge AI..." : "Trigger Camera Re-Scan"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Milestone Track from Up to Bottom */}
            <div className="lg:col-span-7">
              <div className="relative flex flex-col space-y-6 sm:space-y-8 pl-2 sm:pl-4">
                {/* Continuous Vertical Milestone Track Line */}
                <div
                  className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#0094DA] via-[#0094DA]/60 to-slate-800"
                  aria-hidden="true"
                />

                {MILESTONES.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  const isActive = activeMilestone === idx;

                  return (
                    <div
                      key={milestone.step}
                      onClick={() => setActiveMilestone(idx)}
                      className="group relative flex items-start gap-4 sm:gap-6 cursor-pointer"
                    >
                      {/* Milestone Node on Track */}
                      <div
                        className={cn(
                          "relative z-10 flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 select-none",
                          isActive
                            ? "bg-[#0094DA] text-white shadow-lg shadow-[#0094DA]/40 scale-110 ring-4 ring-[#0094DA]/20"
                            : "bg-[#161F30] text-slate-400 border border-slate-700/80 group-hover:border-[#0094DA]/60 group-hover:text-white"
                        )}
                      >
                        <Icon className="size-4 sm:size-5" />
                      </div>

                      {/* Milestone Block / Card */}
                      <div
                        className={cn(
                          "flex-1 rounded-2xl p-5 sm:p-6 transition-all duration-300 border shadow-md",
                          isActive
                            ? "bg-[#161F30] border-[#0094DA]/60 shadow-[#0094DA]/10 ring-1 ring-[#0094DA]/30"
                            : "bg-[#111827]/70 border-slate-800/90 hover:border-slate-700 hover:bg-[#161F30]/70"
                        )}
                      >
                        {/* Top Milestone Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider border",
                              isActive
                                ? "bg-[#0094DA]/15 text-[#0094DA] border-[#0094DA]/30"
                                : "bg-slate-900 text-slate-400 border-slate-800"
                            )}
                          >
                            <span>{milestone.badge}</span>
                          </span>

                          <span className="font-mono text-xs font-bold text-slate-500">
                            PHASE {milestone.step}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {milestone.tags.map((tag) => (
                            <span
                              key={tag}
                              className={cn(
                                "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium border transition-colors",
                                isActive
                                  ? "bg-slate-950/80 text-slate-300 border-slate-800"
                                  : "bg-slate-950/50 text-slate-500 border-slate-800/60"
                              )}
                            >
                              <CheckCircle2 className="size-3 text-[#0094DA]" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
