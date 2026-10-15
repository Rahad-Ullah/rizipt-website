"use client";

import * as React from "react";
import Image from "next/image";
import {
  Store,
  Receipt,
  Send,
  Tag,
  CheckCircle2,
  Check,
  Wifi,
  Battery,
  Coffee,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MerchantTab = "receipt" | "coupon";

export function MerchantSection() {
  const [activeTab, setActiveTab] = React.useState<MerchantTab>("receipt");
  const [isReceiptSent, setIsReceiptSent] = React.useState<boolean>(false);
  const [isCouponPublished, setIsCouponPublished] = React.useState<boolean>(false);

  const handleDispatchReceipt = () => {
    setIsReceiptSent(true);
    toast.success("Digital Receipt #RZ-8491 Dispatched!", {
      description:
        "Delivered to sarah.chen@gmail.com. Auto-filed in customer's Food & Dining folder with zero paper wasted.",
    });

    setTimeout(() => {
      setIsReceiptSent(false);
    }, 4000);
  };

  const handlePublishCoupon = () => {
    setIsCouponPublished(true);
    toast.success("Coupon Published to Shoppers!", {
      description:
        "Summer Solstice Special (25% Off) is now live in the Rizipt Deals feed for customers to discover and redeem.",
    });

    setTimeout(() => {
      setIsCouponPublished(false);
    }, 4000);
  };

  return (
    <section id="merchants" className="py-20 md:py-28 bg-white dark:bg-[#0B0F17] border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <Store className="size-3.5" />
            <span>Rizipt For Store Owners & Merchants</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Stop Wasting Paper Rolls.{" "}
            <span className="block bg-gradient-to-r from-[#0094DA] via-sky-500 dark:via-sky-400 to-cyan-500 dark:to-cyan-300 bg-clip-text text-transparent">
              Connect Directly With Every Customer.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Thermal printers jam, ink fades, and paper rolls cost hundreds every year. Rizipt empowers store owners and merchants with an all-in-one mobile toolkit: dispatch instant digital receipts to customer phones and publish promotions shoppers love—with zero extra hardware and zero added fees.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Feature Navigator & Benefits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Feature 1: Digital Receipts Card */}
            <div
              onClick={() => setActiveTab("receipt")}
              className={cn(
                "group cursor-pointer rounded-3xl border p-6 sm:p-7 transition-all duration-300 relative overflow-hidden",
                activeTab === "receipt"
                  ? "border-[#0094DA]/70 bg-sky-50/70 dark:bg-[#111827]/90 shadow-xl shadow-[#0094DA]/10 ring-1 ring-[#0094DA]/30"
                  : "border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-[#111827]/50 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#111827]/70"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={cn(
                      "size-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors",
                      activeTab === "receipt"
                        ? "bg-[#0094DA] text-white border-[#0094DA]"
                        : "bg-slate-100 text-slate-500 border-slate-200 group-hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:group-hover:text-white"
                    )}
                  >
                    <Receipt className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        1-Tap Digital Receipt Dispatcher
                      </h3>
                      {activeTab === "receipt" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#0094DA]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#0094DA] border border-[#0094DA]/30">
                          Active Demo
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Paperless point-of-sale receipt issuance for smartphones & tablets
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Send clean, itemized digital receipts straight to your customer&apos;s Rizipt app via phone, email, or instant QR scan in less than 2 seconds. Completely eliminates costly thermal paper rolls, toxic BPA coatings, and lost slips.
              </p>

              {/* Feature Checklist */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>100% paperless & eco-friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Auto-filed in customer smart folders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>No proprietary POS hardware needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Permanent proof for returns & warranty</span>
                </div>
              </div>
            </div>

            {/* Feature 2: In-App Coupon Publisher Card */}
            <div
              onClick={() => setActiveTab("coupon")}
              className={cn(
                "group cursor-pointer rounded-3xl border p-6 sm:p-7 transition-all duration-300 relative overflow-hidden",
                activeTab === "coupon"
                  ? "border-[#0094DA]/70 bg-sky-50/70 dark:bg-[#111827]/90 shadow-xl shadow-[#0094DA]/10 ring-1 ring-[#0094DA]/30"
                  : "border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-[#111827]/50 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#111827]/70"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={cn(
                      "size-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors",
                      activeTab === "coupon"
                        ? "bg-[#0094DA] text-white border-[#0094DA]"
                        : "bg-slate-100 text-slate-500 border-slate-200 group-hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:group-hover:text-white"
                    )}
                  >
                    <Tag className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Publish Exclusive Deals & Coupons
                      </h3>
                      {activeTab === "coupon" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#0094DA]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#0094DA] border border-[#0094DA]/30">
                          Active Demo
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Launch custom discounts and drive immediate foot-traffic to your store
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Create and publish promotional deals directly from your phone in seconds. Set your discount percentage, upload your campaign image, and define validity dates. Published coupons appear instantly in the Rizipt shopper feed for local customers to discover, save, and redeem at your counter—bringing verified foot traffic with zero ad agency middlemen.
              </p>

              {/* Feature Checklist */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Instant in-app coupon publishing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Custom discounts, photos & expiry dates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Appears directly in local customer Deals feed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#0094DA] shrink-0" />
                  <span>Zero ad spend or third-party commission</span>
                </div>
              </div>
            </div>

            {/* Merchant Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111827]/70 p-3.5 text-center shadow-xs dark:shadow-none">
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">100%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Paperless & BPA Free</div>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111827]/70 p-3.5 text-center shadow-xs dark:shadow-none">
                <div className="text-xl sm:text-2xl font-black text-[#0094DA]">&lt; 2s</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Receipt Delivery</div>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111827]/70 p-3.5 text-center shadow-xs dark:shadow-none">
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">$0</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Hardware Purchase</div>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#111827]/70 p-3.5 text-center shadow-xs dark:shadow-none">
                <div className="text-xl sm:text-2xl font-black text-emerald-500 dark:text-emerald-400">0%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Added Surcharges</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic In-App Phone Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Obsidian Phone Chassis */}
            <div className="relative w-full max-w-83.75 sm:max-w-90 rounded-[48px] border-10 border-slate-900 bg-slate-950 p-2.5 shadow-2xl ring-1 ring-slate-800/90 shadow-black/80">
              {/* Dynamic Island Notch */}
              <div className="relative mx-auto h-5 w-28 rounded-full bg-slate-900 mb-2 flex items-center justify-center">
                <div className="size-2 rounded-full bg-slate-800 absolute right-4" />
              </div>

              {/* Mobile Screen Area (Consistent Obsidian Dark Design) */}
              <div className="relative overflow-hidden rounded-[36px] bg-[#0E1420] min-h-145 flex flex-col justify-between select-none">
                {/* Phone Status Bar */}
                <div className="relative z-20 flex items-center justify-between text-white text-[11px] font-semibold px-4 pt-2">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 opacity-90">
                    <Wifi className="size-3" />
                    <Battery className="size-3.5" />
                  </div>
                </div>

                {/* In-App Merchant Mode Switcher Tabs */}
                <div className="px-4 pt-2.5 pb-1 z-20">
                  <div className="grid grid-cols-2 rounded-full bg-slate-900/90 p-1 border border-slate-800 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab("receipt")}
                      className={cn(
                        "rounded-full py-1.5 transition-all text-center flex items-center justify-center gap-1.5",
                        activeTab === "receipt"
                          ? "bg-[#0094DA] text-white shadow-md shadow-[#0094DA]/30"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      <Receipt className="size-3.5" />
                      Receipt Dispatch
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("coupon")}
                      className={cn(
                        "rounded-full py-1.5 transition-all text-center flex items-center justify-center gap-1.5",
                        activeTab === "coupon"
                          ? "bg-[#0094DA] text-white shadow-md shadow-[#0094DA]/30"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      <Tag className="size-3.5" />
                      Publish Coupon
                    </button>
                  </div>
                </div>

                {/* TAB CONTENT 1: RECEIPT DISPATCH VIEW */}
                {activeTab === "receipt" && (
                  <div className="p-4 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    {/* Merchant Header in App */}
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <div className="size-9 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-300">
                            <Coffee className="size-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <h4 className="text-xs font-bold text-white">Artisan Roast Cafe</h4>
                              <ShieldCheck className="size-3 text-[#0094DA]" />
                            </div>
                            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              POS Terminal Active
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                          #RZ-8491
                        </span>
                      </div>

                      {/* Recipient Target */}
                      <div className="mt-3 rounded-xl bg-slate-900/80 p-2.5 border border-slate-800 flex items-center justify-between">
                        <div className="text-[11px]">
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-semibold">
                            Customer Destination
                          </span>
                          <span className="font-mono text-white font-medium">sarah.chen@gmail.com</span>
                        </div>
                        <span className="text-[10px] bg-[#0094DA]/20 text-[#0094DA] border border-[#0094DA]/30 font-semibold px-2 py-0.5 rounded-full">
                          Rizipt App User
                        </span>
                      </div>

                      {/* Itemized Order Breakdown */}
                      <div className="mt-3 rounded-2xl bg-[#141C2A] p-3 border border-slate-800/90 space-y-2 text-xs font-mono">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold pb-1 border-b border-slate-800/80 flex justify-between">
                          <span>Item Description</span>
                          <span>Price</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>2x Oat Honey Cortado</span>
                          <span className="font-semibold text-white">$11.00</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>1x Organic Avocado Tartine</span>
                          <span className="font-semibold text-white">$12.50</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>1x House Espresso Roast (12oz)</span>
                          <span className="font-semibold text-white">$16.50</span>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 space-y-1 text-[11px]">
                          <div className="flex justify-between text-slate-400">
                            <span>Subtotal</span>
                            <span>$40.00</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Sales Tax (8.25%)</span>
                            <span>$3.30</span>
                          </div>
                          <div className="flex justify-between text-base font-bold text-white pt-1">
                            <span>Total Due</span>
                            <span className="text-emerald-400">$43.30</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 font-medium">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        <span>Payment: Contactless Card · Completed</span>
                      </div>
                    </div>

                    {/* Dispatch Button */}
                    <div className="mt-4 pt-2">
                      <Button
                        type="button"
                        onClick={handleDispatchReceipt}
                        disabled={isReceiptSent}
                        className={cn(
                          "w-full rounded-2xl py-2.5 text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2",
                          isReceiptSent
                            ? "bg-emerald-600 hover:bg-emerald-600 text-white shadow-emerald-600/30 cursor-default"
                            : "bg-[#0094DA] hover:bg-[#007cb8] text-white shadow-[#0094DA]/30"
                        )}
                      >
                        {isReceiptSent ? (
                          <>
                            <Check className="size-4 stroke-3" />
                            Digital Receipt Dispatched!
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            Dispatch Digital Receipt
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 2: IN-APP COUPON PUBLISHING VIEW (DARK OBSIDIAN THEME) */}
                {activeTab === "coupon" && (
                  <div className="p-4 flex-1 flex flex-col justify-between text-white animate-in fade-in duration-200">
                    <div>
                      {/* Merchant Screen Header (No Back Button, Clean Context) */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-xl bg-[#0094DA]/15 border border-[#0094DA]/30 flex items-center justify-center text-[#0094DA]">
                            <Tag className="size-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white">Publish New Coupon</h4>
                            <span className="text-[10px] text-slate-400">Rizipt Deals Studio</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Feeds
                        </span>
                      </div>

                      {/* Header Title & Subtitle */}
                      <div className="mt-2.5">
                        <h3 className="text-base font-extrabold text-white tracking-tight leading-tight">
                          Create your <span className="text-[#0094DA]">store promotion</span>
                        </h3>
                        <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                          Set up your offer details and publish directly to local shopper feeds.
                        </p>
                      </div>

                      {/* Campaign Hero Image Banner */}
                      <div className="relative mt-2.5 h-24 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-md">
                        <Image
                          src="/images/zara_boutique.jpg"
                          alt="Summer Solstice Special"
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-2 right-2">
                          <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1.5 shadow-sm">
                            <Camera className="size-3 text-[#0094DA]" />
                            Cover Photo
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5">
                          <span className="text-[10px] font-bold text-white drop-shadow-xs">
                            Fashion &amp; Retail Special
                          </span>
                        </div>
                      </div>

                      {/* Form Details in Obsidian Dark Cards */}
                      <div className="mt-2.5 space-y-2">
                        {/* Offer Title */}
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                            Offer Title
                          </label>
                          <div className="rounded-xl bg-[#141C2A] border border-slate-800 px-3 py-1.5 text-xs font-semibold text-white shadow-inner">
                            Summer Solstice Special
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                            Description
                          </label>
                          <div className="rounded-xl bg-[#141C2A] border border-slate-800 px-3 py-1.5 text-[10px] leading-tight text-slate-300 shadow-inner">
                            Get 25% off all seasonal items during our mid-year celebration event. Limited time only!
                          </div>
                        </div>

                        {/* Discount % and Expiry Date */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                              Discount %
                            </label>
                            <div className="rounded-xl bg-[#141C2A] border border-slate-800 px-3 py-1.5 text-xs font-bold text-white flex justify-between items-center shadow-inner">
                              <span className="text-[#0094DA]">25</span>
                              <span className="text-slate-500 font-semibold text-[11px]">% OFF</span>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                              Expiry Date
                            </label>
                            <div className="rounded-xl bg-[#141C2A] border border-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-inner">
                              Oct 31, 2026
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button: Publish to Shoppers */}
                    <div className="mt-3 pt-1">
                      <Button
                        type="button"
                        onClick={handlePublishCoupon}
                        disabled={isCouponPublished}
                        className={cn(
                          "w-full rounded-2xl py-2.5 text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2",
                          isCouponPublished
                            ? "bg-emerald-600 hover:bg-emerald-600 text-white shadow-emerald-600/30 cursor-default"
                            : "bg-[#0094DA] hover:bg-[#007cb8] text-white shadow-[#0094DA]/30"
                        )}
                      >
                        {isCouponPublished ? (
                          <>
                            <Check className="size-4 stroke-3" />
                            Coupon Published Live!
                          </>
                        ) : (
                          <>
                            <Tag className="size-4" />
                            Publish Coupon to Shoppers
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Simulated Phone Home Indicator Bar */}
                <div className="relative pb-2 flex justify-center">
                  <div className="h-1 w-24 rounded-full bg-slate-700/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
