import * as React from "react";
import { cn } from "@/lib/utils";
import { APP_LINKS } from "@/lib/app-links";

interface DownloadBadgesProps {
  className?: string;
  size?: "default" | "lg";
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export function DownloadBadges({
  className,
  size = "default",
  appStoreUrl,
  playStoreUrl,
}: DownloadBadgesProps) {
  const isLg = size === "lg";

  const buttonClass = cn(
    "group inline-flex items-center gap-3 rounded-2xl transition-all duration-200 active:scale-95 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0094DA]",
    "bg-[#111827]/85 hover:bg-[#161F30] text-white border border-slate-700/60 hover:border-[#0094DA]/60 backdrop-blur-md shadow-lg shadow-black/40 hover:shadow-[#0094DA]/20 hover:-translate-y-0.5",
    isLg ? "px-5 py-3 min-w-[175px]" : "px-4 py-2.5 min-w-[155px]"
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-3 sm:gap-4", className)}>
      {/* Apple App Store */}
      <a
        href={appStoreUrl || APP_LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Download Rizipt on the Apple App Store"
      >
        <svg
          viewBox="0 0 384 512"
          fill="currentColor"
          className={cn(
            "shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#0094DA]",
            isLg ? "size-6" : "size-5"
          )}
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 66.7 27.5 137.9c13.7 34.6 37.6 70.4 67.5 70.4 20.5 0 29.5-13.4 57.3-13.4 27.2 0 37.1 13.4 58.6 13.4 30.7 0 54.4-32.5 68.1-67.1 16.4-40.3 23-81 23.3-83.3-1.6-.9-47.4-18.1-47.6-62.7zM245.9 84.7c15.1-18.4 25.4-44 22.6-70.1-22.3 1-48.4 14.8-63.8 33-13.7 15.9-25.7 42-22.5 67.2 24.8 1.9 48.6-11.7 63.7-30.1z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
            Download on the
          </span>
          <span className={cn("font-bold tracking-tight text-white", isLg ? "text-base" : "text-sm")}>
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href={playStoreUrl || APP_LINKS.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Get Rizipt on Google Play"
      >
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className={cn(
            "shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#0094DA]",
            isLg ? "size-6" : "size-5"
          )}
        >
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
            GET IT ON
          </span>
          <span className={cn("font-bold tracking-tight text-white", isLg ? "text-base" : "text-sm")}>
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
}
