"use client";

import * as React from "react";
import {
  Store,
  Send,
  Radio,
  CheckCircle,
  Mail,
  Receipt,
  Users,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MerchantSection() {
  const [customerEmail, setCustomerEmail] = React.useState("sarah.chen@example.com");
  const [promoTitle, setPromoTitle] = React.useState("WEEKEND25");
  const [discountPercent, setDiscountPercent] = React.useState("25");
  const [radiusMiles, setRadiusMiles] = React.useState("5");

  const handleSendInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Digital receipt sent successfully!", {
      description: `Itemized invoice dispatched to ${customerEmail}. Zero paper wasted.`,
    });
  };

  const handleBroadcastPromo = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Promo ${promoTitle} is now live!`, {
      description: `Broadcasting ${discountPercent}% discount to ~4,800 active Rzipt users within ${radiusMiles} miles.`,
    });
  };

  return (
    <section id="merchants" className="py-20 md:py-28 bg-[#0B0F17] border-t border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <Store className="size-3.5" />
            <span>Built For Store Owners & Freelancers</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Grow Your Business With Zero Paper
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you run a bustling cafe, an independent boutique, or a freelance consultancy, Rizipt equips you with high-speed digital tools to delight clients.
          </p>
        </div>

        {/* Split Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Instant Digital Invoicing */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#111827]/75 p-6 sm:p-8 backdrop-blur-md hover:border-[#0094DA]/40 transition-all duration-300">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0094DA]/15 text-[#0094DA] mb-6 border border-[#0094DA]/25">
                <Receipt className="size-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Instant Digital Invoicing
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Generate itemized, IRS-compliant digital receipts in seconds. Deliver directly to your customer&apos;s phone via SMS or email—eliminating paper rolls, thermal ink toxins, and lost slips.
              </p>

              {/* Interactive Invoicing Preview Card */}
              <div className="mt-8 rounded-2xl bg-[#161F30] border border-slate-800 p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-white">Quick Receipt Dispatcher</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Invoice #RZ-9941</span>
                </div>

                <div className="mt-4 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <span>1x Branding Consultation (2hr)</span>
                    <span className="font-semibold text-white">$250.00</span>
                  </div>
                  <div className="flex justify-between text-slate-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <span>1x Typography Assets Pack</span>
                    <span className="font-semibold text-white">$45.00</span>
                  </div>
                </div>

                <form onSubmit={handleSendInvoice} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Customer Email or Phone
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 size-4 text-slate-400" />
                      <Input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="client@company.com"
                        className="pl-9 text-xs rounded-xl bg-[#111827] border-slate-700/80 text-white"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-[#0094DA] hover:bg-[#007cb8] text-white py-2 text-xs font-semibold shadow-md shadow-[#0094DA]/25"
                  >
                    <Send className="size-3.5 mr-1.5" />
                    Dispatch Digital Receipt
                  </Button>
                </form>
              </div>
            </div>

            {/* Benefit Checkmarks */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> 0% Transaction Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> Auto-Tax Classification
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> Export to QuickBooks
              </span>
            </div>
          </div>

          {/* Card 2: Direct-to-Customer Promo Hub */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#111827]/75 p-6 sm:p-8 backdrop-blur-md hover:border-[#0094DA]/40 transition-all duration-300">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0094DA]/15 text-[#0094DA] mb-6 border border-[#0094DA]/25">
                <Radio className="size-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Direct-to-Customer Promo Hub
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Publish targeted flash discounts that instantly reach active Rizipt users in your local neighborhood. Drive immediate foot traffic with zero ad-agency middlemen.
              </p>

              {/* Interactive Broadcast Simulator */}
              <div className="mt-8 rounded-2xl bg-[#161F30] border border-slate-800 p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#0094DA] animate-ping" />
                    <span className="text-xs font-bold text-white">Local Promo Broadcast</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Live Radius: {radiusMiles} mi
                  </span>
                </div>

                <form onSubmit={handleBroadcastPromo} className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Promo Voucher Code
                      </label>
                      <Input
                        value={promoTitle}
                        onChange={(e) => setPromoTitle(e.target.value.toUpperCase())}
                        className="text-xs uppercase font-mono rounded-xl bg-[#111827] border-slate-700/80 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Discount Value (%)
                      </label>
                      <Input
                        type="number"
                        min="5"
                        max="80"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(e.target.value)}
                        className="text-xs rounded-xl bg-[#111827] border-slate-700/80 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Geo-Target Radius: {radiusMiles} Miles
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={radiusMiles}
                      onChange={(e) => setRadiusMiles(e.target.value)}
                      className="w-full accent-[#0094DA] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>1 mi (Walking)</span>
                      <span>10 mi (City)</span>
                      <span>20 mi (Metro)</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#0094DA]/10 p-2.5 text-[11px] text-cyan-300 border border-[#0094DA]/20 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5" />
                      Estimated Shoppers in Range:
                    </span>
                    <strong className="font-bold text-white">~{Number(radiusMiles) * 960} users</strong>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-[#0094DA] hover:bg-[#007cb8] text-white py-2 text-xs font-semibold shadow-md shadow-[#0094DA]/25"
                  >
                    <Zap className="size-3.5 mr-1.5" />
                    Launch Targeted Campaign
                  </Button>
                </form>
              </div>
            </div>

            {/* Benefit Checkmarks */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> Real-Time Analytics
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> Zero Pay-Per-Click Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-[#0094DA]" /> 1-Click Repeat Campaigns
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
