"use client";

import * as React from "react";
import { Star, CheckCircle2, HeartHandshake } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarInitials: string;
  avatarBg: string;
  rating: number;
  content: string;
  verifiedType: "Freelancer" | "Small Cafe Owner" | "Daily Shopper";
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "Freelance Designer",
    location: "Austin, TX",
    avatarInitials: "ER",
    avatarBg: "bg-purple-600",
    rating: 5,
    content: "No more shoeboxes of crumpled receipts at tax time. Everything is extracted on-device with 99.8% precision.",
    verifiedType: "Freelancer",
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Artisan Roast Cafe",
    location: "Seattle, WA",
    avatarInitials: "MV",
    avatarBg: "bg-[#0094DA]",
    rating: 5,
    content: "Sending email receipts straight from my phone saves paper and time. Plus, customer return rates have noticeably surged.",
    verifiedType: "Small Cafe Owner",
  },
  {
    id: "test-3",
    name: "Chloe Dupont",
    role: "Smart Shopper",
    location: "Chicago, IL",
    avatarInitials: "CD",
    avatarBg: "bg-emerald-600",
    rating: 5,
    content: "I grab active promo codes before checking out everywhere. The instant cashback and coupon matching easily saves me $150/mo.",
    verifiedType: "Daily Shopper",
  },
];

const STATS = [
  { label: "Active Mobile Users", value: "25,000+" },
  { label: "Receipts Scanned & Stored", value: "1.8M+" },
  { label: "Shopper Savings Unlocked", value: "$1.2M+" },
  { label: "App Store & Play Rating", value: "4.9 ★" },
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
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Loved by Everyday Shoppers & Store Owners
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Hear how Rizipt is transforming expense tracking and local savings.
          </p>
        </div>

        {/* Stats Strip */}
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

        {/* Clean 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl bg-[#111827]/75 border border-slate-800 p-6 shadow-xl backdrop-blur-md hover:border-[#0094DA]/40 transition-all duration-300 relative"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full text-white font-bold text-xs shadow-md ${t.avatarBg}`}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                    <p className="text-[10px] text-slate-500">{t.location}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700/80 px-2 py-0.5 text-[10px] font-semibold text-slate-300 shrink-0">
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
