"use client";

import * as React from "react";
import { Sparkles, CheckCircle2, ScanLine, Scan } from "lucide-react";
import { DownloadBadges } from "@/components/common";

export function HeroSection({ appLinks }: { appLinks: { appStore: string, playStore: string, siteUrl: string } }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-24 lg:pb-36 bg-slate-50/60 dark:bg-[#0B0F17]">
      {/* Background radial glows with #0094DA */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-radial from-[#0094DA]/10 dark:from-[#0094DA]/15 via-sky-200/40 dark:via-sky-900/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 -z-10 size-[450px] rounded-full bg-radial from-[#0094DA]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-40 -z-10 size-[400px] rounded-full bg-radial from-sky-200/40 dark:from-sky-900/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Early Access / New Launch Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0094DA]/25 bg-[#0094DA]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0094DA] backdrop-blur-md mb-6 shadow-inner">
              <Sparkles className="size-3.5 text-[#0094DA] dark:text-cyan-400 shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">Available on iOS & Android</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="font-semibold text-[#0094DA]">Join Early Access</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Scan Smarter.{" "}
              <span className="bg-gradient-to-r from-[#0094DA] via-sky-500 dark:via-sky-400 to-cyan-500 dark:to-cyan-300 bg-clip-text text-transparent">
                Save Faster.
              </span>{" "}
              Manage Every Receipt.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl">
              The intelligent mobile app that turns physical receipts into instant itemized records, unlocks exclusive merchant coupons, and keeps your finances effortlessly organized.
            </p>

            {/* Download Badges with dark glassmorphism styling */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <DownloadBadges size="lg" appStoreUrl={appLinks.appStore} playStoreUrl={appLinks.playStore} />
            </div>

            {/* Quick feature highlights */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 w-full max-w-lg">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                <span>0.3s On-Device OCR</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                <span>Organized Folders</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                <span>Zero Paper Waste</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity Mobile Device Mockup */}
          <div className="relative flex justify-center lg:col-span-5">
            {/* Obsidian Phone Mockup Chassis */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-[48px] border-[10px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800/90 shadow-black/80">
              {/* Dynamic Island Notch */}
              <div className="relative mx-auto h-5 w-28 rounded-full bg-slate-900 mb-2 flex items-center justify-center">
                <div className="size-2 rounded-full bg-slate-800 absolute right-4" />
              </div>

              {/* Viewfinder Screen Area */}
              <div className="relative overflow-hidden rounded-[36px] bg-[#0E1420] p-4 min-h-[580px] flex flex-col text-white">
                {/* Simulated In-App Top Status Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-[#0094DA] flex items-center justify-center text-white shadow-xs shadow-[#0094DA]/30">
                      <ScanLine className="size-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">AI Camera Scanner</span>
                      <span className="text-[10px] text-slate-400">On-Device Neural Engine</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#0094DA] border border-[#0094DA]/30">
                    <span className="size-1.5 rounded-full bg-[#0094DA] animate-pulse" />
                    Live Scan
                  </span>
                </div>

                {/* Camera Viewfinder Box with Paper Receipt under Live AI Extraction */}
                <div className="relative mt-3 rounded-2xl bg-gradient-to-b from-[#0A0E17] via-[#0E1522] to-[#0A0E17] border border-slate-800 p-3 shadow-inner overflow-hidden flex-1 flex flex-col justify-between">
                  {/* Subtle Camera Surface Background Grid (z-0) */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0" />

                  {/* Top Viewfinder HUD Banner (Foreground z-20) */}
                  <div className="relative z-20 flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-2.5 py-1 text-[10px] font-medium text-slate-300 border border-slate-800 backdrop-blur-sm">
                      <Scan className="size-3 text-[#0094DA]" />
                      Focus: Receipt Document
                    </span>
                    <span className="rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Focus Locked
                    </span>
                  </div>

                  {/* Physical Paper Receipt under Camera Focus (z-10) */}
                  <div className="relative z-10 mx-auto w-full rounded-2xl bg-slate-950/95 p-3.5 border-2 border-[#0094DA]/70 text-slate-200 shadow-2xl shadow-black/80 my-auto ring-1 ring-[#0094DA]/30">
                    {/* Precision Optical Corner Reticles on 4 corners of receipt */}
                    <div className="absolute -top-1.5 -left-1.5 size-3.5 border-t-2 border-l-2 border-[#38bdf8]" />
                    <div className="absolute -top-1.5 -right-1.5 size-3.5 border-t-2 border-r-2 border-[#38bdf8]" />
                    <div className="absolute -bottom-1.5 -left-1.5 size-3.5 border-b-2 border-l-2 border-[#38bdf8]" />
                    <div className="absolute -bottom-1.5 -right-1.5 size-3.5 border-b-2 border-r-2 border-[#38bdf8]" />

                    {/* Animated Laser Scanning Beam sweeping over the receipt contents */}
                    <div
                      className="pointer-events-none absolute inset-x-1.5 z-30 animate-scan-sweep"
                      aria-hidden="true"
                    >
                      {/* Glowing horizontal laser line */}
                      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_12px_#0094DA,0_0_26px_#0094DA]" />

                      {/* Trailing illuminated light wash */}
                      <div className="h-10 w-full -mt-0.5 bg-gradient-to-b from-[#0094DA]/25 via-[#0094DA]/5 to-transparent" />

                      {/* Left and Right reticle markers on the beam */}
                      <div className="absolute left-0 -top-1 size-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#0094DA]" />
                      <div className="absolute right-0 -top-1 size-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#0094DA]" />
                    </div>

                    {/* Highlighted Merchant Box in #0094DA */}
                    <div className="rounded-lg border border-[#0094DA] bg-[#0094DA]/10 p-2 mb-2">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs uppercase tracking-wider text-white">
                          TRADER JOE&apos;S #142
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

                    {/* Clean Monospace Line Items matching screenshot */}
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
                        <span className="font-bold text-xs uppercase tracking-wider">TOTAL EXTRACTED</span>
                        <span className="text-sm font-black text-[#0094DA]">$42.80</span>
                      </div>
                    </div>
                  </div>

                  {/* Viewfinder Bottom Status (Scanning Stage without folder info) */}
                  <div className="relative z-20 mt-1 flex items-center justify-between text-[10px] px-1 font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#0094DA] animate-ping" />
                      Auto-Detecting 4 Bounds
                    </span>
                    <span className="text-emerald-400 font-semibold">99.8% Clarity</span>
                  </div>
                </div>

                {/* Bottom App Action Bar: Live Ongoing AI Extraction State */}
                <div className="mt-3 pt-2">
                  <div className="w-full rounded-2xl bg-gradient-to-r from-[#0094DA] via-sky-500 to-[#0094DA] text-white py-2.5 text-xs font-semibold shadow-md shadow-[#0094DA]/30 flex items-center justify-center gap-2">
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full size-2 bg-white" />
                    </span>
                    <span>AI Extracting Receipt Data...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
