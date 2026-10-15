import * as React from "react";
import { Sparkles, Smartphone, Check } from "lucide-react";
import { DownloadBadges, DynamicQRCode } from "@/components/common";

export function DownloadCTASection({ appLinks }: { appLinks: { appStore: string, playStore: string, siteUrl: string } }) {
  return (
    <section id="download" className="py-20 md:py-28 bg-white dark:bg-[#0B0F17] border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
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
                Download Rizipt for free on iOS and Android. Experience lightning-fast receipt scanning, keep expenses neatly filed into custom folders, and never miss out on merchant coupons.
              </p>

              {/* Download Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <DownloadBadges size="lg" appStoreUrl={appLinks.appStore} playStoreUrl={appLinks.playStore} />
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
                {/* Dynamic Smart Scannable QR Code */}
                <DynamicQRCode size={152} className="size-44" />

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
