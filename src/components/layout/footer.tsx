import * as React from "react";
import Link from "next/link";
import { Logo } from "../common/logo";
import { DownloadBadges } from "../common/download-badges";
import { getAppLinks } from "@/lib/app-links";

export async function Footer() {
  const appLinks = await getAppLinks();

  return (
    <footer className="border-t border-slate-800/80 bg-[#0B0F17] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row: Minimal brand lockup alongside compact download badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Logo />
            <p className="mt-2 text-xs text-slate-400 max-w-sm">
              Your smart receipt organizer with on-device AI extraction and merchant deals.
            </p>
          </div>

          <div className="flex items-center">
            <DownloadBadges size="default" appStoreUrl={appLinks.appStore} playStoreUrl={appLinks.playStore} />
          </div>
        </div>

        {/* Bottom row: Copyright notice & essential policy routes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rizipt. All rights reserved.</p>

          <div className="flex items-center space-x-6 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-[#0094DA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0094DA] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
