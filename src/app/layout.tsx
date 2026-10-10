import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rizipt.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" },
    { media: "(prefers-color-scheme: light)", color: "#0094DA" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rizipt | Scan Smarter. Save Faster. Manage Every Receipt.",
    template: "%s | Rizipt",
  },
  description:
    "AI-powered receipt scanner & smart merchant promo code platform. Scan paper receipts in 0.3s with on-device OCR, track expenses neatly in custom folders, and unlock verified in-app deals.",
  applicationName: "Rizipt",
  authors: [{ name: "Rizipt Technologies", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "receipt scanner app",
    "AI receipt scanner",
    "digital receipts",
    "paperless receipt tracker",
    "expense tracker app",
    "smart coupon discovery",
    "merchant promo codes",
    "OCR receipt scanner",
    "business expense management",
    "tax deduction receipts",
    "Rizipt app",
  ],
  creator: "Rizipt",
  publisher: "Rizipt Technologies",
  category: "finance",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rizipt",
    title: "Rizipt | Scan Smarter. Save Faster. Manage Every Receipt.",
    description:
      "Transform paper receipts into itemized digital records in under a second. Unlock exclusive merchant promotions and organize finances with zero hassle.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizipt - AI Receipt Scanner & Smart Merchant Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizipt | Scan Smarter. Save Faster. Manage Every Receipt.",
    description:
      "AI receipt scanning in 0.3s, instant tax categorization, and verified merchant coupons.",
    creator: "@riziptapp",
    site: "@riziptapp",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Rizipt",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Rich Structured Data (Schema.org JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#application`,
      "name": "Rizipt",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "FinanceApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "14820",
        "bestRating": "5",
        "worstRating": "1",
      },
      "description":
        "AI-powered receipt scanner and smart merchant promo code platform. Scan receipts in 0.3s with on-device OCR, track expenses neatly, and unlock verified in-app deals.",
      "image": `${siteUrl}/og-image.png`,
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Rizipt Technologies",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "sameAs": [
        "https://twitter.com/riziptapp",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Rizipt",
      "description": "AI Receipt Scanner & Smart Merchant Promo Codes",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "dark",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        "scroll-smooth"
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#0094DA]/30 selection:text-white">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
