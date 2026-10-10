### Task: Build Modern Dark-Themed Landing Page for "Rizipt" Mobile App

#### 1. Tech Stack & Version Constraints
- Framework: Next.js 16.3.8 (App Router)
- React: React 19.3.0
- Component Library: shadcn/ui
- Styling: Tailwind CSS (Strict Dark Theme default)
- Icons: Lucide React
- Architecture: Standalone deployment mode (`output: 'standalone'` in `next.config.ts`)
- Data Strategy: 100% static mockups, cards, and UI screenshots (zero dynamic API calls or DB dependencies)

#### 2. Brand Identity & Design System (Dark Mode First)
- Primary Accent: `#0094DA` (Rizipt Electric Cerulean)
- Primary Accent Hover: `#007cb8`
- Surface Palette:
  - Base Background: `#0B0F17` (Deep Obsidian / Slate 950)
  - Card & Container Surface: `#111827` / `#161F30` (Rich Navy Slate)
  - Card Borders: `border-slate-800` / `border-slate-700/60`
  - Subtle Glows: Radials with `#0094DA` at 8%–15% opacity
- Typography Scale & Colors:
  - Hero H1: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white`
  - Section H2: `text-3xl sm:text-4xl font-bold tracking-tight text-white`
  - Subheadings: `text-lg sm:text-xl text-slate-400 font-normal leading-relaxed`
  - Body & Captions: `text-sm sm:text-base text-slate-300`
- Component Consistency:
  - Buttons: shadcn `Button` variants styled with `bg-[#0094DA] text-white hover:bg-[#007cb8]`
  - Cards: `rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md shadow-xl`
  - Badges: Pill-shaped badges with `bg-[#0094DA]/10 text-[#0094DA] border-[#0094DA]/20`

#### 3. Core App Showcase Sections
Build the following modular components inside `src/components/landing/`:

1. `Navbar.tsx` (Clean & Minimalist):
   - Logo: "Rizipt" text with sleek receipt glyph in `#0094DA`.
   - Simple desktop links: `#features`, `#merchants`, `#reviews`.
   - Action: Single high-visibility "Download App" button targeting `#download`.

2. `HeroSection.tsx`:
   - Headline: "Scan Smarter. Save Faster. Manage Every Receipt."
   - Subhead: "Your digital receipt organizer with on-device AI extraction, merchant deals, and paperless business invoicing."
   - Direct download badges: Apple App Store & Google Play store buttons with dark glassmorphism styling.
   - Launch badge: "Newly Launched • Available on iOS & Android • Join Early Access".
   - Hero Mockup: High-fidelity CSS/SVG mobile device mockup displaying an in-app receipt scanning camera overlay with highlighted line-item boxes in `#0094DA`.

3. `FeatureShowcaseSection.tsx` (#features):
   - Static 2-column or 3-column feature showcase highlighting:
     1. Instant Camera Scan & AI Extraction: Visual card depicting OCR lines (Merchant, Date, Items, Tax, Total) extracted into a clean in-app receipt slip.
     2. Pre-Save Adjustments: Screenshot card showing tap-to-edit line items before final storage.
     3. Active Promo Code Feed: Visual mockup showing merchant coupon cards ("COFFEE20", "STORE15") with copy badges.

4. `MerchantSection.tsx` (#merchants):
   - Dedicated section spotlighting the B2B side:
     - Digital Invoicing: Visual mockup of a generated invoice receipt dispatched to customer email in one tap.
     - Store Promo Broadcasts: Mockup of merchant console publishing deals visible to nearby shoppers.
   - Highlight badge: "Zero paper waste. 100% digital records."

5. `TestimonialsSection.tsx` (#reviews):
   - Clean 3-card grid with early adopter & beta tester reviews:
     - "No more shoeboxes of crumpled receipts at tax time." — Beta Tester
     - "Sending digital receipts straight from my phone saves paper and printing costs." — Early Adopter
     - "I grab active promo codes before checking out and save receipts into categorized folders." — First-Wave User
   - Genuine performance benchmark cards: < 0.3s OCR speed, 99.8% precision, 100% paperless, Free starter plan.

6. `DownloadCTASection.tsx` (#download):
   - Dark gradient card with a subtle `#0094DA` glow backdrop.
   - Main call: "Ready to go paperless and never lose a receipt?"
   - Dual App Store & Google Play buttons.
   - Desktop QR code frame: "Scan with your phone camera to download instantly".

7. `Footer.tsx` (Simplified & Focused):
   - Top row: Minimal brand lockup alongside compact download store badges.
   - Bottom row: Copyright notice (`© 2026 Rizipt. All rights reserved.`) and essential policy routes:
     - `Privacy Policy`
     - `Terms of Service`
     - `Contact Support`

#### 4. Execution Steps
1. Verify `next.config.ts` has `output: 'standalone'`.
2. Apply dark base styles (`bg-[#0B0F17] text-slate-100`) to `src/app/layout.tsx` and `globals.css`.
3. Set brand color alias `brand: { DEFAULT: '#0094DA', hover: '#007cb8' }` in Tailwind configuration.
4. Build each section component in `src/components/landing/` using pure static mockups, SVGs, and shadcn primitives.
5. Assemble all components in `src/app/page.tsx`.
6. Run `npm run build` to confirm zero lint or TypeScript compilation errors.