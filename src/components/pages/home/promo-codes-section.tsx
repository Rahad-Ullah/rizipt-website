"use client";

import * as React from "react";
import {
  Tag,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PromoCode {
  id: string;
  merchant: string;
  category: "Food & Dining" | "Retail" | "Tech" | "Supermarket";
  code: string;
  discount: string;
  description: string;
  minSpend: string;
  expires: string;
  verified: string;
  usesToday: number;
  popular?: boolean;
}

const PROMO_CODES: PromoCode[] = [
  {
    id: "promo-1",
    merchant: "Blue Bottle Coffee",
    category: "Food & Dining",
    code: "COFFEE20",
    discount: "20% OFF",
    description: "Save 20% on any pour-over or whole bean coffee bag purchase.",
    minSpend: "Min. $15 spend",
    expires: "Expires in 5 days",
    verified: "Verified 12m ago",
    usesToday: 842,
    popular: true,
  },
  {
    id: "promo-2",
    merchant: "Trader Joe's Express",
    category: "Supermarket",
    code: "GROCERY15",
    discount: "$15 OFF",
    description: "Get $15 off organic groceries and fresh produce orders over $75.",
    minSpend: "Min. $75 spend",
    expires: "Expires end of month",
    verified: "Verified 2m ago",
    usesToday: 1420,
    popular: true,
  },
  {
    id: "promo-3",
    merchant: "Anker Tech Gear",
    category: "Tech",
    code: "TECHSPRING",
    discount: "25% OFF",
    description: "Save 25% on ultra-fast GaN chargers, cables, and power banks.",
    minSpend: "Min. $40 spend",
    expires: "Expires Oct 28",
    verified: "Verified 1h ago",
    usesToday: 512,
  },
  {
    id: "promo-4",
    merchant: "Sweetgreen Salads",
    category: "Food & Dining",
    code: "SWEETBITE",
    discount: "$5 OFF",
    description: "Warm grain bowls and seasonal harvest greens.",
    minSpend: "Min. $20 spend",
    expires: "Valid all week",
    verified: "Verified 24m ago",
    usesToday: 934,
  },
  {
    id: "promo-5",
    merchant: "Nordic Apparel",
    category: "Retail",
    code: "RETAIL30",
    discount: "30% OFF",
    description: "Autumn outerwear, Merino wool knitwear, and accessories.",
    minSpend: "Min. $90 spend",
    expires: "Limited quantity",
    verified: "Verified 45m ago",
    usesToday: 388,
  },
  {
    id: "promo-6",
    merchant: "Target Fresh Market",
    category: "Supermarket",
    code: "TARGETSAVE",
    discount: "10% CASHBACK",
    description: "Instant 10% digital credit applied upon scanning receipt in Rzipt.",
    minSpend: "No min spend",
    expires: "Ongoing partner",
    verified: "Official Partner",
    usesToday: 2190,
    popular: true,
  },
];

const CATEGORIES = [
  "All",
  "Food & Dining",
  "Supermarket",
  "Tech",
  "Retail",
] as const;

export function PromoCodesSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const filteredPromos = React.useMemo(() => {
    if (selectedCategory === "All") return PROMO_CODES;
    return PROMO_CODES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleCopyCode = async (code: string, merchant: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast.success("Promo code copied to clipboard!", {
        description: `Use code ${code} at ${merchant} during checkout.`,
      });
      setTimeout(() => setCopiedCode(null), 2500);
    } catch {
      toast.info(`Promo code: ${code}`);
    }
  };

  return (
    <section id="promos" className="py-20 md:py-28 bg-[#0B0F17] border-t border-slate-800/80 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0094DA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0094DA] border border-[#0094DA]/20">
            <Tag className="size-3.5" />
            <span>Verified Savings Feed</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Live Merchant Promo Codes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Exclusive discounts delivered straight from local merchants and national brands. Copy code with 1 click or scan your receipt for automatic redemption.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 select-none",
                selectedCategory === cat
                  ? "bg-[#0094DA] text-white shadow-md shadow-[#0094DA]/30 scale-105"
                  : "bg-[#111827] text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromos.map((promo) => {
            const isCopied = copiedCode === promo.code;

            return (
              <div
                key={promo.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#111827]/75 border border-slate-800/90 p-6 shadow-xl backdrop-blur-md hover:border-[#0094DA]/50 hover:shadow-[#0094DA]/10 transition-all duration-300"
              >
                {/* Popular pill */}
                {promo.popular && (
                  <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-bold shadow-md">
                    <Flame className="size-3 fill-slate-950" />
                    <span>Popular Deal</span>
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {promo.category}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {promo.merchant}
                      </h3>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-xl bg-[#0094DA]/15 px-2.5 py-1 text-xs font-extrabold text-[#0094DA] border border-[#0094DA]/30">
                      {promo.discount}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {promo.description}
                  </p>

                  {/* Metadata */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
                    <span className="font-medium text-slate-300">{promo.minSpend}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3 text-slate-500" />
                      {promo.expires}
                    </span>
                  </div>
                </div>

                {/* Bottom Promo Code Pill & Copy Button */}
                <div className="mt-6 flex items-center justify-between gap-2 rounded-xl bg-slate-950/80 p-2 border border-slate-800">
                  <div className="flex items-center gap-2 pl-2 overflow-hidden">
                    <Tag className="size-3.5 text-[#0094DA] shrink-0" />
                    <code className="font-mono text-xs font-bold tracking-wider text-white truncate">
                      {promo.code}
                    </code>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleCopyCode(promo.code, promo.merchant)}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all shrink-0",
                      isCopied
                        ? "bg-emerald-600 hover:bg-emerald-600 text-white"
                        : "bg-[#0094DA] hover:bg-[#007cb8] text-white"
                    )}
                  >
                    {isCopied ? (
                      <span className="flex items-center gap-1">
                        <Check className="size-3.5" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="size-3.5" />
                        <span>Copy Code</span>
                      </span>
                    )}
                  </Button>
                </div>

                {/* Verification line */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="size-3" />
                    {promo.verified}
                  </span>
                  <span>{promo.usesToday.toLocaleString()} redeemed today</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
