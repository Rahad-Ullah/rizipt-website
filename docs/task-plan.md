### Task: Build Modern Landing Page for "Rzipt" Mobile App

#### 1. Tech Stack & Version Constraints
- Framework: Next.js 16.3.8 (App Router)
- React: React 19.3.0
- Component Library: shadcn/ui (New York style, slate base)
- Styling: Tailwind CSS (with primary brand color `#0094DA`)
- Icons: Lucide React
- Architecture: Standalone deployment mode (`output: 'standalone'` in `next.config.ts`)

#### 2. Brand Identity & Design System
- Primary Color: `#0094DA` (Rzipt Blue)
- Primary Hover: `#007cb8`
- Primary Foreground: `#ffffff`
- Background: Clean white `#ffffff` with subtle neutral slate section backdrops (`bg-slate-50/60`) and soft border lines (`border-slate-200/80`).
- Typography Scale:
  - Hero H1: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900`
  - Section H2: `text-3xl sm:text-4xl font-bold tracking-tight text-slate-900`
  - Subheadings: `text-lg sm:text-xl text-slate-600 font-normal leading-relaxed`
  - Body: `text-sm sm:text-base text-slate-600`
- Component Consistency:
  - All buttons must use shadcn `Button` variants or styled App Store download badge components.
  - Cards must use consistent radius (`rounded-2xl`), subtle drop shadows (`shadow-sm hover:shadow-md transition-all`), and 1px borders (`border-slate-200`).

#### 3. Core App Value Propositions & Sections
Build the following modular components inside `src/components/landing/`:

1. `Navbar.tsx`:
   - Modern brand logo with customized receipt glyph in `#0094DA`.
   - Links: `#features`, `#promos`, `#merchants`, `#reviews`.
   - Action: "Get App" button linking smoothly to download CTA.

2. `HeroSection.tsx`:
   - Main Headline: "Scan Smarter. Save Faster. Manage Every Receipt."
   - Subhead emphasizing instant AI receipt scanning, live merchant promo codes, and paperless invoices.
   - Dual download badges: Apple App Store and Google Play (high-fidelity SVGs/badges).
   - Rating badge: "★ 4.9 on iOS & Android • Trusted by 25k+ users".
   - Right/Bottom Visual: Mobile device frame displaying an AI-scanned receipt with editable line items.

3. `ScanExtractionDemo.tsx` (#features):
   - Interactive preview component illustrating the 3-step scan loop:
     1. Camera capture with edge-detection overlay.
     2. AI parser detecting Store Name, Date, Tax, and Total with high-confidence badges.
     3. Editable preview card where users can click to edit details before saving.

4. `PromoCodesSection.tsx` (#promos):
   - Curated cards of verified active merchant discounts (e.g., "COFFEE20", "GROCERY15", "TECHSPRING").
   - Interactive "Copy Code" button using shadcn Toast ("Code copied to clipboard!").
   - Filter chips: All, Food & Dining, Retail, Tech, Supermarket.

5. `MerchantSection.tsx` (#merchants):
   - Highlight section for store owners and freelancers.
   - Split grid showcasing:
     - "Instant Digital Invoicing": Generate itemized receipts and send directly to customer email with zero paper waste.
     - "Direct-to-Customer Promo Hub": Publish custom discounts that instantly pop up in nearby users' feeds.

6. `TestimonialsSection.tsx` (#reviews):
   - 3-column card grid with verified reviews from both shoppers and store owners.
   - User avatars, star ratings, roles (e.g., "Small Cafe Owner", "Freelance Consultant", "Everyday Shopper").

7. `DownloadCTASection.tsx`:
   - High-contrast card with `#0094DA` gradient accents.
   - Headline: "Ready to go paperless and never lose a receipt?"
   - Direct App Store & Play Store buttons, plus a QR code placeholder for desktop visitors to scan with their phone.

8. `Footer.tsx`:
   - Brand lockup, copyright, privacy policy, terms of service, and social links.

#### 4. Execution Steps
1. Verify `next.config.ts` has `output: 'standalone'`.
2. Configure Tailwind CSS color extensions with `brand: { DEFAULT: '#0094DA', hover: '#007cb8' }`.
3. Install and configure required shadcn/ui components (`button`, `badge`, `card`, `input`, `toast`/`sonner`).
4. Assemble sections sequentially with semantic HTML, clean TypeScript interfaces, and responsive breakpoints.
5. Run `npm run build` to confirm zero lint or TypeScript errors.