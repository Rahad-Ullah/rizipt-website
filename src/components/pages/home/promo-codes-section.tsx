"use client";

import * as React from "react";
import Image from "next/image";
import {
  Tag,
  Calendar,
  TicketPercent,
  ChevronLeft,
  Check,
  Sparkles,
  ShieldCheck,
  Store,
  Wifi,
  Battery,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CouponData {
  id: string;
  merchant: string;
  logoText: string;
  subtitle: string;
  discount: string;
  expires: string;
  expiryDate: string;
  title: string;
  description: string;
  promoCode: string;
  image: string;
  category: string;
}

const COUPONS: CouponData[] = [
  {
    id: "zara",
    merchant: "Zara",
    logoText: "ZARA",
    subtitle: "Exclusive Partner Offer",
    discount: "10% Off",
    expires: "Ends in 4 Days",
    expiryDate: "Oct 31, 2026",
    title: "Get 10% off your next purchase.",
    description:
      "Show this in-app voucher at any Zara checkout counter or apply code during online checkout.",
    promoCode: "ZARA-RZ10",
    image: "/images/zara_boutique.jpg",
    category: "Fashion & Retail",
  },
  {
    id: "blue-bottle",
    merchant: "Blue Bottle Coffee",
    logoText: "BB",
    subtitle: "Specialty Roaster Perk",
    discount: "20% Off",
    expires: "Ends in 6 Days",
    expiryDate: "Nov 05, 2026",
    title: "Save 20% on any pour-over coffee.",
    description:
      "Valid on handcrafted pour-overs, cold brew selections, and single-origin coffee bean bags.",
    promoCode: "COFFEE20-RZ",
    image: "/images/coffee_cafe.jpg",
    category: "Coffee & Dining",
  },
  {
    id: "sweetgreen",
    merchant: "Sweetgreen",
    logoText: "SG",
    subtitle: "Organic Seasonal Dining",
    discount: "$5.00 Off",
    expires: "Ends in 3 Days",
    expiryDate: "Oct 28, 2026",
    title: "Enjoy $5 off fresh harvest bowls.",
    description:
      "Applicable on all seasonal grain bowls, warm protein greens, and fresh artisan beverages.",
    promoCode: "SWEET5-RZ",
    image: "/images/zara_boutique.jpg",
    category: "Healthy Eats",
  },
];

export function PromoCodesSection() {
  const [activeCouponId, setActiveCouponId] = React.useState<string>("zara");
  const [isRedeemed, setIsRedeemed] = React.useState<boolean>(false);

  const activeCoupon = React.useMemo(() => {
    return COUPONS.find((c) => c.id === activeCouponId) || COUPONS[0];
  }, [activeCouponId]);

  const handleRedeem = () => {
    setIsRedeemed(true);
    toast.success(`Coupon Redeemed for ${activeCoupon.merchant}!`, {
      description: `Voucher code ${activeCoupon.promoCode} applied. Enjoy your ${activeCoupon.discount} discount!`,
    });

    setTimeout(() => {
      setIsRedeemed(false);
    }, 3500);
  };

  return (
    <section id="promos" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#0B0F17] border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <Tag className="size-3.5" />
            <span>In-App Merchant Perks</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Shop Smarter.{" "}
            <span className="block bg-linear-to-r from-[#0094DA] via-sky-500 dark:via-sky-400 to-cyan-500 dark:to-cyan-300 bg-clip-text text-transparent">
              Unlock Exclusive In-App Deals.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover verified partner promotions, discount vouchers, and flash savings directly from top retail brands and neighborhood favorites—redeemable with one tap at checkout.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-16 mx-auto max-w-6xl rounded-3xl border border-slate-200/90 dark:border-slate-800/80 bg-white/80 dark:bg-[#111827]/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Interactive Storytelling & Value Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0094DA]">
                  Smart Coupon Discovery
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  No expired codes. No coupon clipping. Just instant savings.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every time you scan receipts or view store locations in Rizipt, our partner network surfaces active deals for that exact merchant.
                </p>
              </div>

              {/* Interactive Merchant Selector Tabs */}
              <div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2.5">
                  Try viewing different in-app partner coupons:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {COUPONS.map((coupon) => {
                    const isSelected = coupon.id === activeCoupon.id;
                    return (
                      <button
                        key={coupon.id}
                        type="button"
                        onClick={() => {
                          setActiveCouponId(coupon.id);
                          setIsRedeemed(false);
                        }}
                        className={cn(
                          "rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-2",
                          isSelected
                            ? "bg-[#0094DA] text-white border-[#0094DA] shadow-md shadow-[#0094DA]/30 scale-105"
                            : "bg-slate-100 dark:bg-[#161F30] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white"
                        )}
                      >
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <span>{coupon.merchant}</span>
                        <span className="text-[10px] opacity-80 font-mono">({coupon.discount})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4">
                  <div className="size-8 rounded-xl bg-[#0094DA]/15 text-[#0094DA] flex items-center justify-center mb-2.5 border border-[#0094DA]/30">
                    <Store className="size-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Direct Merchant Deals</h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Exclusive partner offers negotiated directly with brands you shop at weekly.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4">
                  <div className="size-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-2.5 border border-emerald-500/30">
                    <ShieldCheck className="size-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">100% Verified Active</h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Zero expired links. Coupons stay synced with store POS systems and dates.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Sparkles className="size-3.5 text-[#0094DA]" />
                <span>Tap <strong>Redeem Now</strong> in the simulated phone to test the in-app voucher claim!</span>
              </div>
            </div>

            {/* Right Column: High Fidelity Mobile Screen Mockup (Coupon Details Screen) */}
            <div className="lg:col-span-5 flex justify-center">
              {/* Obsidian Phone Chassis */}
              <div className="relative w-full max-w-81.25 sm:max-w-87.5 rounded-[48px] border-10 border-slate-900 bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800/90 shadow-black/80">
                {/* Dynamic Island Notch */}
                <div className="relative mx-auto h-5 w-28 rounded-full bg-slate-900 mb-2 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-slate-800 absolute right-4" />
                </div>

                {/* Mobile Screen Area */}
                <div className="relative overflow-hidden rounded-[36px] bg-[#0E1420] min-h-142.5 flex flex-col justify-between text-slate-900 select-none">
                  {/* Top Half: Retail Store Hero Backdrop & Header */}
                  <div className="relative h-60 w-full overflow-hidden flex flex-col justify-between p-4">
                    {/* Background Store Image */}
                    <Image
                      src={activeCoupon.image}
                      alt={activeCoupon.merchant}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-w-width: 350px) 100vw, 350px"
                    />

                    {/* Gradient Overlays for readable contrast */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/30 to-black/80 z-10" />

                    {/* In-App Status Bar (Top) */}
                    <div className="relative z-20 flex items-center justify-between text-white text-[11px] font-semibold pt-1">
                      <span>19:02</span>
                      <div className="flex items-center gap-1.5 opacity-90">
                        <Wifi className="size-3" />
                        <Battery className="size-3.5" />
                      </div>
                    </div>

                    {/* In-App Navigation Bar: < Back Button & Title */}
                    <div className="relative z-20 flex items-center justify-between mt-2">
                      <button
                        type="button"
                        aria-label="Back"
                        className="size-9 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        Coupon Details
                      </h4>
                      <div className="size-9" /> {/* Spacer */}
                    </div>

                    {/* Merchant Identity & Expiry Banner Overlaid on Photo */}
                    <div className="relative z-20 flex items-end justify-between mt-auto pt-4 pb-2">
                      <div className="flex items-center gap-2.5">
                        {/* Circular White Merchant Avatar */}
                        <div className="size-11 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 font-black text-xs tracking-wider shrink-0 border border-white">
                          {activeCoupon.logoText}
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-white leading-tight drop-shadow-sm">
                            {activeCoupon.merchant}
                          </h3>
                          <span className="text-[11px] text-slate-200 font-medium block drop-shadow-xs">
                            {activeCoupon.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Expiry Pill */}
                      <span className="inline-flex items-center rounded-full bg-white/90 border border-rose-200 px-2.5 py-0.5 text-[11px] font-bold text-rose-500 shadow-md shrink-0">
                        {activeCoupon.expires}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Half: White Curved Sheet Card (Pixel-Matched to Screenshot) */}
                  <div className="relative z-20 -mt-4 rounded-t-[32px] bg-white p-5 pt-6 flex-1 flex flex-col justify-between shadow-2xl">
                    <div>
                      {/* Two Light-Blue Metric Tiles Side-by-Side */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Tile 1: Discount Percentage */}
                        <div className="rounded-2xl bg-[#EAF6FD] p-3.5 border border-[#0094DA]/15">
                          <TicketPercent className="size-4 text-[#0094DA] mb-1.5" />
                          <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block">
                            DISCOUNT PERCENTAGE
                          </span>
                          <span className="text-lg font-black text-slate-900 block mt-0.5 tracking-tight">
                            {activeCoupon.discount}
                          </span>
                        </div>

                        {/* Tile 2: Expiry Date */}
                        <div className="rounded-2xl bg-[#EAF6FD] p-3.5 border border-[#0094DA]/15">
                          <Calendar className="size-4 text-[#0094DA] mb-1.5" />
                          <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block">
                            EXPIRY DATE
                          </span>
                          <span className="text-sm font-black text-slate-900 block mt-1 tracking-tight">
                            {activeCoupon.expiryDate}
                          </span>
                        </div>
                      </div>

                      {/* Headline Offer Title */}
                      <h4 className="mt-4 text-lg font-extrabold text-slate-900 leading-snug tracking-tight">
                        {activeCoupon.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {activeCoupon.description}
                      </p>
                    </div>

                    {/* Bottom CTA Button: Redeem Now / Redeemed State */}
                    <div className="mt-3.5 pt-1">
                      <button
                        type="button"
                        onClick={handleRedeem}
                        className={cn(
                          "w-full rounded-2xl py-2.5 text-xs font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95",
                          isRedeemed
                            ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30 ring-2 ring-emerald-400/50"
                            : "bg-[#0094DA] hover:bg-[#007cb8] shadow-[#0094DA]/30"
                        )}
                      >
                        {isRedeemed ? (
                          <>
                            <Check className="size-3.5 text-white stroke-3" />
                            <span>Voucher Activated: {activeCoupon.promoCode}</span>
                          </>
                        ) : (
                          <>
                            <Tag className="size-3.5 fill-white" />
                            <span>Redeem Now</span>
                          </>
                        )}
                      </button>

                      {/* iOS Home Indicator */}
                      <div className="h-1 w-24 bg-slate-900 rounded-full mx-auto mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
