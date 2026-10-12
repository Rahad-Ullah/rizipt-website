"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ShieldCheck,
  FileText,
  Calendar,
  Printer,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Navbar, Footer } from "@/components/common";
import { LegalContentData } from "@/lib/legal-content";

interface LegalPageLayoutProps {
  data: LegalContentData;
  type: "privacy" | "terms";
}

export function LegalPageLayout({ data, type }: LegalPageLayoutProps) {
  const isPrivacy = type === "privacy";

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#0094DA]/30 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#0094DA] transition-colors group cursor-pointer"
            >
              <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Document Header */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20 mb-4">
              {isPrivacy ? (
                <ShieldCheck className="size-3.5" />
              ) : (
                <FileText className="size-3.5" />
              )}
              <span>Official Rizipt Legal Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {isPrivacy
                ? "Understand how Rizipt collects, processes, encrypts, and respects your receipt records and personal information."
                : "The rules, legal terms, and mutual responsibilities governing your use of Rizipt mobile applications and services."}
            </p>

            {/* Document Meta Row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Calendar className="size-3.5 text-[#0094DA]" />
                  <span>Last Updated: {data.lastUpdated}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                  Version {data.version}
                </span>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
              >
                <Printer className="size-3.5 text-slate-400" />
                <span>Print Document</span>
              </button>
            </div>
          </div>

          {/* Contained Formal HTML Content Card */}
          <div className="relative isolate rounded-3xl border border-slate-800/80 bg-[#111827]/70 backdrop-blur-md p-6 sm:p-10 lg:p-14 shadow-2xl">
            {/* Ambient Backlight Halo behind the card */}
            <div
              className="pointer-events-none absolute -inset-3 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-[#0094DA]/15 via-transparent to-[#0094DA]/15 blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* Contained Formal HTML Renderer with Scoped Inline CSS */}
            <div
              className="legal-prose-container"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />

            {/* Contained Scoped CSS Styles */}
            <style jsx>{`
              .legal-prose-container {
                color: #cbd5e1;
                font-size: 0.95rem;
                line-height: 1.8;
                word-break: break-word;
              }

              .legal-prose-container :global(h1) {
                color: #ffffff;
                font-size: 1.85rem;
                font-weight: 800;
                margin-top: 2.25rem;
                margin-bottom: 1rem;
                line-height: 1.3;
                letter-spacing: -0.02em;
              }

              .legal-prose-container :global(h2) {
                color: #f8fafc;
                font-size: 1.35rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 0.85rem;
                line-height: 1.35;
                letter-spacing: -0.015em;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid rgba(51, 65, 85, 0.4);
              }

              .legal-prose-container :global(h2:first-of-type) {
                margin-top: 0;
              }

              .legal-prose-container :global(h3) {
                color: #e2e8f0;
                font-size: 1.1rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 0.6rem;
                line-height: 1.4;
              }

              .legal-prose-container :global(p) {
                margin-top: 0;
                margin-bottom: 1.25rem;
                color: #94a3b8;
              }

              .legal-prose-container :global(ul) {
                list-style-type: disc;
                margin-top: 0.5rem;
                margin-bottom: 1.25rem;
                padding-left: 1.5rem;
                color: #94a3b8;
              }

              .legal-prose-container :global(ol) {
                list-style-type: decimal;
                margin-top: 0.5rem;
                margin-bottom: 1.25rem;
                padding-left: 1.5rem;
                color: #94a3b8;
              }

              .legal-prose-container :global(li) {
                margin-bottom: 0.5rem;
                padding-left: 0.25rem;
              }

              .legal-prose-container :global(li::marker) {
                color: #0094DA;
              }

              .legal-prose-container :global(a) {
                color: #0094DA;
                text-decoration: underline;
                text-underline-offset: 3px;
                font-weight: 500;
                transition: color 0.15s ease;
              }

              .legal-prose-container :global(a:hover) {
                color: #38bdf8;
              }

              .legal-prose-container :global(strong) {
                color: #f8fafc;
                font-weight: 600;
              }

              .legal-prose-container :global(em) {
                color: #cbd5e1;
                font-style: italic;
              }

              .legal-prose-container :global(blockquote) {
                border-left: 3px solid #0094DA;
                background-color: rgba(0, 148, 218, 0.06);
                border-radius: 0 0.75rem 0.75rem 0;
                padding: 1rem 1.25rem;
                margin: 1.5rem 0;
                color: #cbd5e1;
              }

              .legal-prose-container :global(blockquote p:last-child) {
                margin-bottom: 0;
              }

              .legal-prose-container :global(table) {
                width: 100%;
                border-collapse: collapse;
                margin: 1.75rem 0;
                font-size: 0.85rem;
                border-radius: 0.75rem;
                overflow: hidden;
                border: 1px solid rgba(51, 65, 85, 0.6);
              }

              .legal-prose-container :global(th),
              .legal-prose-container :global(td) {
                border: 1px solid rgba(51, 65, 85, 0.5);
                padding: 0.75rem 1rem;
                text-align: left;
              }

              .legal-prose-container :global(th) {
                background-color: rgba(22, 31, 48, 0.9);
                color: #ffffff;
                font-weight: 600;
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              }

              .legal-prose-container :global(tr:nth-child(even)) {
                background-color: rgba(17, 24, 39, 0.4);
              }

              .legal-prose-container :global(hr) {
                border: 0;
                border-top: 1px solid rgba(51, 65, 85, 0.6);
                margin: 2.25rem 0;
              }

              .legal-prose-container :global(code) {
                font-family: var(--font-mono, monospace);
                font-size: 0.85em;
                background-color: rgba(15, 23, 42, 0.8);
                border: 1px solid rgba(51, 65, 85, 0.6);
                padding: 0.15rem 0.35rem;
                border-radius: 0.25rem;
                color: #38bdf8;
              }
            `}</style>
          </div>

          {/* Quick Legal Support Contact Box */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-[#111827]/50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-[#0094DA]/15 text-[#0094DA] flex items-center justify-center shrink-0 border border-[#0094DA]/30">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Have questions regarding our {data.title}?
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Our privacy compliance and legal officers respond to all inquiries within 24–48 business hours.
                </p>
              </div>
            </div>

            <a
              href={isPrivacy ? "mailto:privacy@rizipt.com" : "mailto:legal@rizipt.com"}
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
