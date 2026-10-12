import * as React from "react";
import Link from "next/link";
import { ChevronLeft, Mail, ArrowRight } from "lucide-react";
import { Navbar, Footer } from "@/components/common";

export default function LegalRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#0094DA]/30 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back to Home navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#0094DA] transition-colors group cursor-pointer"
            >
              <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Content (SSR) */}
          {children}

          {/* Legal Compliance Support Card */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-[#111827]/50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-[#0094DA]/15 text-[#0094DA] flex items-center justify-center shrink-0 border border-[#0094DA]/30">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Have questions regarding our legal disclaimers?
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Our privacy compliance and legal officers respond to all inquiries within 24–48 business hours.
                </p>
              </div>
            </div>

            <a
              href="mailto:privacy@rizipt.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0094DA] hover:bg-[#007cb8] text-white px-4 py-2.5 text-xs font-semibold shadow-md shadow-[#0094DA]/30 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Contact Legal Team</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
