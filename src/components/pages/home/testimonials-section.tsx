"use client";

import * as React from "react";
import Image from "next/image";
import { Star, CheckCircle2, HeartHandshake, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarImg: string;
  rating: number;
  highlight: string;
  content: string;
  verifiedType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "Freelance Brand Designer",
    location: "Austin, TX",
    avatarImg: "/images/elena.jpg",
    rating: 5,
    highlight: "Tax Deductions & On-Device OCR",
    content:
      "Tax season used to mean hours of sorting through faded, crumpled paper slips in a shoebox. With Rizipt, I scan physical receipts right after client lunches or supply runs—the on-device AI extracts line items in under a second and files them straight into my Deductibles folder. It has completely eliminated receipt anxiety for my 1099 taxes.",
    verifiedType: "Verified Freelancer",
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Founder, Artisan Roast Cafe",
    location: "Seattle, WA",
    avatarImg: "/images/marcus.jpg",
    rating: 5,
    highlight: "Paperless Invoicing & POS Speed",
    content:
      "Thermal paper rolls are expensive, chemical-heavy, and customers constantly lose them. Rizipt lets our specialty coffee shop dispatch itemized digital receipts straight to customers' phones via SMS or email in one tap. Checkouts move noticeably faster, and customers love having their coffee records saved cleanly in the app.",
    verifiedType: "Verified Store Owner",
  },
  {
    id: "test-3",
    name: "Chloe Dupont",
    role: "Smart Shopper & Budgeter",
    location: "Chicago, IL",
    avatarImg: "/images/chloe.jpg",
    rating: 5,
    highlight: "In-App Coupons & Clean Folders",
    content:
      "I originally downloaded Rizipt just to keep my grocery receipts organized, but the in-app partner coupon matching blew me away. It automatically matches verified discounts like 10% off at Zara and perks at nearby cafes before I check out. It's private, clean, and genuinely saves me real money every single week.",
    verifiedType: "Verified Shopper",
  },
];

const STATS = [
  { label: "OCR Recognition Speed", value: "< 0.3s" },
  { label: "AI Extraction Precision", value: "99.8%" },
  { label: "Paper Waste Eliminated", value: "100%" },
  { label: "Free Starter Plan", value: "Forever" },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0B0F17] border-t border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <HeartHandshake className="size-3.5" />
            <span>Community Stories</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for Everyday Shoppers.{" "}
            <span className="bg-gradient-to-r from-[#0094DA] via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Loved by Real People.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From freelancers organizing tax deductions to local store owners and everyday shoppers unlocking merchant perks, see how Rizipt replaces paper clutter with effortless clarity.
          </p>
        </div>

        {/* Product Performance Stats Strip */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#111827]/75 border border-slate-800 p-5 text-center shadow-lg backdrop-blur-md"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0094DA] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Rich 3-Card Grid with Real Profile Photos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-3xl bg-[#111827]/75 border border-slate-800/90 p-6 sm:p-7 shadow-xl backdrop-blur-md hover:border-[#0094DA]/50 hover:shadow-[#0094DA]/10 transition-all duration-300 relative group"
            >
              <div>
                {/* Top Row: Stars + Category Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center rounded-full bg-[#0094DA]/10 border border-[#0094DA]/25 px-2.5 py-0.5 text-[10px] font-semibold text-[#38bdf8]">
                    {t.highlight}
                  </span>
                </div>

                {/* Quote Body with subtle quote mark accent */}
                <div className="mt-4 relative">
                  <Quote className="size-6 text-slate-700/60 absolute -top-1 -left-1 -z-0 opacity-40" />
                  <p className="relative z-10 text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Footer with Real Profile Photo */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/90 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 shrink-0 rounded-full overflow-hidden ring-2 ring-[#0094DA]/30 shadow-md">
                    <Image
                      src={t.avatarImg}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium">{t.role}</p>
                    <p className="text-[10px] text-slate-500">{t.location}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700/80 px-2.5 py-1 text-[10px] font-semibold text-slate-300 shrink-0">
                  <CheckCircle2 className="size-3 text-[#0094DA]" />
                  {t.verifiedType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
