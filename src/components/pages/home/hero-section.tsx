"use client";

import * as React from "react";
import { Star, Zap, Sparkles, CheckCircle2, ScanLine, ShieldCheck } from "lucide-react";
import { DownloadBadges } from "@/components/common";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-24 lg:pb-36 bg-[#0B0F17]">
      {/* Background radial glows with #0094DA at 8%–15% opacity */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-radial from-[#0094DA]/15 via-sky-900/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 -z-10 size-[450px] rounded-full bg-radial from-[#0094DA]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-40 -z-10 size-[400px] rounded-full bg-radial from-sky-900/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Rating pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0094DA]/25 bg-[#0094DA]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0094DA] backdrop-blur-md mb-6 shadow-inner">
              <div className="flex items-center text-amber-400">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-bold text-white">4.9</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Rated on iOS & Android</span>
              <span className="text-slate-600">•</span>
              <span className="font-semibold text-[#0094DA]">25,000+ happy users</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Scan Smarter.{" "}
              <span className="bg-gradient-to-r from-[#0094DA] via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Save Faster.
              </span>{" "}
              Manage Every Receipt.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
              Your digital receipt vault with on-device AI extraction, merchant deals, and paperless business invoicing.
            </p>

            {/* Download Badges with dark glassmorphism styling */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <DownloadBadges size="lg" />
            </div>

            {/* Quick feature highlights */}
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 w-full max-w-lg">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                <span>0.3s On-Device OCR</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                <span>256-Bit Vault Security</span>
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

                {/* Camera Viewfinder Box with Highlighted Line Items in #0094DA */}
                <div className="relative mt-3 rounded-2xl bg-[#111827] border border-slate-800 p-3.5 shadow-inner overflow-hidden flex-1 flex flex-col justify-between">
                  {/* Glowing Laser Scan Line Effect */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0094DA] to-transparent shadow-[0_0_14px_#0094DA] animate-bounce opacity-90 z-20" />

                  {/* Corner Edge-Detection Reticles */}
                  <div className="absolute top-2 left-2 size-3.5 border-t-2 border-l-2 border-[#0094DA]" />
                  <div className="absolute top-2 right-2 size-3.5 border-t-2 border-r-2 border-[#0094DA]" />
                  <div className="absolute bottom-2 left-2 size-3.5 border-b-2 border-l-2 border-[#0094DA]" />
                  <div className="absolute bottom-2 right-2 size-3.5 border-b-2 border-r-2 border-[#0094DA]" />

                  {/* Scanned Receipt Slip */}
                  <div className="rounded-xl bg-slate-950/90 p-3 border border-slate-800/90 text-slate-200">
                    {/* Highlighted Merchant Box */}
                    <div className="rounded-lg border border-[#0094DA] bg-[#0094DA]/10 p-2 relative mb-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black tracking-wider text-white uppercase">Trader Joe&apos;s #142</span>
                        <span className="text-[9px] font-bold text-[#0094DA] bg-[#0094DA]/20 px-1.5 py-0.2 rounded border border-[#0094DA]/40">
                          99.8% Match
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Columbus Ave • Oct 09, 2026</span>
                    </div>

                    {/* Highlighted Line Items */}
                    <div className="space-y-1.5 text-[11px] font-mono">
                      <div className="flex justify-between items-center py-1 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                        <span className="text-slate-300">Organic Hass Avocado (2x)</span>
                        <span className="font-semibold text-white">$3.98</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                        <span className="text-slate-300">Almond Milk Barista 32oz</span>
                        <span className="font-semibold text-white">$4.49</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-1.5 rounded bg-slate-900/60 border border-slate-800">
                        <span className="text-slate-300">Wild Caught Sockeye</span>
                        <span className="font-semibold text-white">$16.99</span>
                      </div>

                      {/* Highlighted Total Box in #0094DA */}
                      <div className="mt-2 pt-2 border-t border-dashed border-slate-800">
                        <div className="flex justify-between items-center rounded-lg border border-[#0094DA] bg-[#0094DA]/15 p-2 text-white">
                          <span className="text-xs font-bold uppercase tracking-wider">TOTAL EXTRACTED</span>
                          <span className="text-base font-extrabold text-[#0094DA]">$27.58</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Metadata Extraction Pills */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                    <div className="rounded-xl bg-slate-950/80 p-2 border border-slate-800 flex flex-col">
                      <span className="text-slate-400 uppercase font-semibold text-[9px]">Tax Classification</span>
                      <span className="font-medium text-emerald-400 mt-0.5">✓ Deductible Pantry</span>
                    </div>
                    <div className="rounded-xl bg-slate-950/80 p-2 border border-slate-800 flex flex-col">
                      <span className="text-slate-400 uppercase font-semibold text-[9px]">Payment Method</span>
                      <span className="font-medium text-slate-200 mt-0.5">💳 Apple Pay (*9012)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom App Action Bar */}
                <div className="mt-3 pt-2">
                  <div className="w-full rounded-2xl bg-[#0094DA] text-white py-2.5 text-xs font-semibold shadow-md shadow-[#0094DA]/30 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="size-3.5" />
                    <span>Saved to Secure Cloud Vault</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Badges around the device */}
            <div className="absolute -left-6 top-1/4 hidden sm:flex items-center gap-2.5 rounded-2xl bg-[#111827]/90 border border-slate-700/60 p-3 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-left duration-700">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#0094DA]/15 text-[#0094DA] border border-[#0094DA]/30">
                <Zap className="size-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">On-Device AI: 0.3s</span>
                <span className="text-[11px] text-slate-400">Zero cloud latency</span>
              </div>
            </div>

            <div className="absolute -right-6 bottom-16 hidden sm:flex items-center gap-2.5 rounded-2xl bg-[#111827]/90 border border-slate-700/60 p-3 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right duration-700">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="size-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Promo Applied</span>
                <span className="text-[11px] text-slate-400">Saved $12.50 at checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
