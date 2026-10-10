"use client";

import * as React from "react";
import { Sparkles, Smartphone, Check } from "lucide-react";
import { DownloadBadges } from "./download-badges";

export function DownloadCTASection() {
  return (
    <section id="download" className="py-20 md:py-28 bg-[#0B0F17] border-t border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-slate-950 px-6 py-16 sm:px-12 sm:py-20 lg:p-20 shadow-2xl ring-1 ring-slate-800">
          {/* Subtle gradient highlights */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#0094DA]/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy & Badges */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-[#0094DA]/30 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
                <Sparkles className="size-3.5 text-cyan-400" />
                <span>Instant App Download</span>
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to go paperless and{" "}
                <span className="bg-gradient-to-r from-[#0094DA] via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  never lose a receipt?
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Be among the first to experience paperless receipt tracking. Scan receipts with on-device AI precision, keep your expenses organized by folder, and discover exclusive merchant perks.
              </p>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <DownloadBadges size="lg" />
              </div>

              {/* Micro Trust Bullets */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-[#0094DA]" /> 100% Free Forever Basic Plan
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-[#0094DA]" /> No Credit Card Required
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-[#0094DA]" /> Instant 30-Second Setup
                </span>
              </div>
            </div>

            {/* Right Desktop QR Code Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[270px] rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-center text-white shadow-xl flex flex-col items-center">
                {/* Stylized QR Code Mock */}
                <div className="relative size-44 rounded-2xl bg-white p-3 shadow-md flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    className="size-full text-slate-900"
                  >
                    {/* QR Code finder patterns */}
                    <rect x="5" y="5" width="28" height="28" rx="4" fill="black" />
                    <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                    <rect x="13" y="13" width="12" height="12" rx="1" fill="#0094DA" />

                    <rect x="67" y="5" width="28" height="28" rx="4" fill="black" />
                    <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                    <rect x="75" y="13" width="12" height="12" rx="1" fill="#0094DA" />

                    <rect x="5" y="67" width="28" height="28" rx="4" fill="black" />
                    <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                    <rect x="13" y="75" width="12" height="12" rx="1" fill="#0094DA" />

                    {/* QR Code data modules */}
                    <rect x="38" y="10" width="6" height="6" fill="black" />
                    <rect x="48" y="10" width="6" height="6" fill="black" />
                    <rect x="38" y="24" width="6" height="6" fill="black" />
                    <rect x="54" y="24" width="6" height="6" fill="#0094DA" />

                    <rect x="10" y="38" width="6" height="6" fill="black" />
                    <rect x="24" y="38" width="6" height="6" fill="#0094DA" />
                    <rect x="38" y="38" width="8" height="8" fill="black" />
                    <rect x="52" y="38" width="8" height="8" fill="black" />
                    <rect x="68" y="38" width="6" height="6" fill="black" />
                    <rect x="82" y="38" width="6" height="6" fill="#0094DA" />

                    <rect x="38" y="52" width="6" height="6" fill="#0094DA" />
                    <rect x="48" y="52" width="6" height="6" fill="black" />
                    <rect x="62" y="52" width="6" height="6" fill="black" />
                    <rect x="76" y="52" width="6" height="6" fill="black" />

                    <rect x="10" y="52" width="6" height="6" fill="black" />
                    <rect x="24" y="52" width="6" height="6" fill="black" />
                    <rect x="38" y="66" width="6" height="6" fill="black" />
                    <rect x="48" y="76" width="6" height="6" fill="#0094DA" />
                    <rect x="62" y="66" width="8" height="8" fill="black" />
                    <rect x="76" y="76" width="6" height="6" fill="black" />
                    <rect x="84" y="66" width="6" height="6" fill="#0094DA" />
                  </svg>
                  {/* Center Brand Badge */}
                  <div className="absolute size-9 rounded-lg bg-[#0094DA] text-white flex items-center justify-center font-black text-xs shadow-sm">
                    R
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Smartphone className="size-4 text-cyan-400" />
                  <span>Scan with Phone Camera</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  Direct download link for iOS & Android devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
