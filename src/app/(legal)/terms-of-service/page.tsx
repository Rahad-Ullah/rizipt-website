import type { Metadata } from "next";
import { FileText, Calendar } from "lucide-react";
import { getLegalDisclaimer } from "@/lib/legal-content";
import { PrintButton } from "@/components/layout";

export const revalidate = 3600; // Cache page for at least 1 hour

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the rules, acceptable use guidelines, and mutual terms governing your use of Rizipt applications and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default async function TermsOfServicePage() {
  const data = await getLegalDisclaimer("terms_of_service");

  return (
    <div>
      {/* Document Header */}
      <div className="mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20 mb-4">
          <FileText className="size-3.5" />
          <span>Official Rizipt Legal Terms</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Terms of Service
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          The rules, legal terms, and mutual responsibilities governing your use of Rizipt mobile applications and services.
        </p>

        {/* Document Meta Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="size-3.5 text-[#0094DA]" />
              <span>Last Updated: {data.formattedDate}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
              Type: terms_of_service
            </span>
          </div>

          <PrintButton />
        </div>
      </div>

      {/* Contained Formal HTML Content Card */}
      <div className="relative isolate rounded-3xl border border-slate-800/80 bg-[#111827]/70 backdrop-blur-md p-6 sm:p-10 lg:p-14 shadow-2xl">
        {/* Subtle Ambient Backlight Halo behind the card */}
        <div
          className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-[#0094DA]/15 via-transparent to-[#0094DA]/15 blur-2xl -z-10"
          aria-hidden="true"
        />

        {/* Contained Formal HTML Renderer using @tailwindcss/typography */}
        <div
          className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed prose-a:text-[#0094DA] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-l-[#0094DA] prose-blockquote:bg-[#0094DA]/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-table:border-slate-800 prose-th:bg-slate-900/80 prose-th:text-white prose-td:border-slate-800"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
}
