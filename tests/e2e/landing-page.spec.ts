import { test, expect } from '@playwright/test';

test.describe('Rizipt Landing Page Smoke & Content Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has valid document title, metadata, and single main landmark', async ({ page }) => {
    // 1. Title verification
    await expect(page).toHaveTitle(/Rizipt/i);

    // 2. Accessibility & layout structure: exactly one <main> element
    const mainLandmark = page.getByRole('main');
    await expect(mainLandmark).toHaveCount(1);
    await expect(mainLandmark).toBeVisible();
  });

  test('renders hero headline, early access badge, and store download triggers', async ({ page }) => {
    // 1. Verify Hero Headline
    const heroHeading = page.getByRole('heading', {
      name: /scan smarter\.\s+save faster\.\s+manage every receipt\./i,
      level: 1,
    });
    await expect(heroHeading).toBeVisible();

    // 2. Verify Early Access Badge
    await expect(page.getByText(/available on ios & android/i)).toBeVisible();
    await expect(page.getByText(/join early access/i)).toBeVisible();

    // 3. Verify App Store & Google Play download badges in Hero
    const heroSection = page.locator('section').first();
    const appStoreBtn = heroSection.getByRole('link', { name: /app store/i });
    const playStoreBtn = heroSection.getByRole('link', { name: /google play/i });
    await expect(appStoreBtn).toBeVisible();
    await expect(playStoreBtn).toBeVisible();

    // 4. Verify OCR Highlights in Hero
    await expect(heroSection.getByText(/0\.3s on-device ocr/i)).toBeVisible();
    await expect(heroSection.getByText(/organized folders/i)).toBeVisible();
    await expect(heroSection.getByText(/zero paper waste/i)).toBeVisible();
  });

  test('displays hero interactive receipt scanning mockup with extracted totals', async ({ page }) => {
    // Neural engine receipt card preview
    await expect(page.getByText(/ai camera scanner/i)).toBeVisible();
    await expect(page.getByText(/trader joe's/i).first()).toBeVisible();
    await expect(page.getByText(/cold brew coffee/i).first()).toBeVisible();
    await expect(page.getByText(/total extracted/i).first()).toBeVisible();
    await expect(page.getByText(/\$42\.80/).first()).toBeVisible();
  });

  test('navbar anchor links navigate smoothly to target sections', async ({ page }) => {
    const navLinks = [
      { name: /features/i, targetId: '#features' },
      { name: /for merchants/i, targetId: '#merchants' },
      { name: /reviews/i, targetId: '#reviews' },
    ];

    const navbar = page.getByRole('banner');
    await expect(navbar).toBeVisible();

    for (const link of navLinks) {
      const navElement = navbar.getByRole('navigation').getByRole('link', { name: link.name });
      if (await navElement.isVisible()) {
        await navElement.click();
        await expect(page.locator(link.targetId)).toBeVisible();
      }
    }

    // High-visibility download button in navbar
    const navDownloadBtn = navbar.getByRole('link', { name: /download app/i });
    if (await navDownloadBtn.isVisible()) {
      await navDownloadBtn.click();
      await expect(page.locator('#download')).toBeVisible();
    }
  });

  test('supports mobile menu navigation drawer on smaller viewports', async ({ page }) => {
    // Resize viewport to mobile screen dimensions
    await page.setViewportSize({ width: 375, height: 667 });

    const toggleButton = page.getByRole('button', { name: /toggle navigation menu/i });
    await expect(toggleButton).toBeVisible();

    // Open mobile navigation menu
    await toggleButton.click();

    // Mobile drawer should display links
    const mobileFeaturesLink = page.getByRole('link', { name: /^features$/i });
    await expect(mobileFeaturesLink).toBeVisible();

    // Clicking link navigates to target section and closes drawer
    await mobileFeaturesLink.click();
    await expect(page.locator('#features')).toBeVisible();
  });

  test('interacts with AI receipt scanner workflow simulation', async ({ page }) => {
    const scannerSection = page.locator('#features');
    await expect(scannerSection).toBeVisible();

    // Header & milestone steps exist
    await expect(scannerSection.getByRole('heading', { name: /snap any receipt/i })).toBeVisible();
    await expect(scannerSection.getByText(/step 01 • scan/i)).toBeVisible();
    await expect(scannerSection.getByText(/step 02 • extract/i)).toBeVisible();
    await expect(scannerSection.getByText(/step 03 • save/i)).toBeVisible();

    // Interactive re-scan trigger
    const reScanBtn = scannerSection.getByRole('button', { name: /trigger camera re-scan/i });
    await expect(reScanBtn).toBeVisible();
    await reScanBtn.click();

    // Sonner toast notification should appear
    await expect(page.getByText(/scanning receipt/i)).toBeVisible();
  });

  test('interacts with merchant promo codes selector and voucher redemption', async ({ page }) => {
    const promoSection = page.locator('#promos');
    await expect(promoSection).toBeVisible();

    // Merchant tabs exist
    const zaraBtn = promoSection.getByRole('button', { name: /zara/i });
    const blueBottleBtn = promoSection.getByRole('button', { name: /blue bottle coffee/i });
    const sweetgreenBtn = promoSection.getByRole('button', { name: /sweetgreen/i });

    await expect(zaraBtn).toBeVisible();
    await expect(blueBottleBtn).toBeVisible();
    await expect(sweetgreenBtn).toBeVisible();

    // Switch to Blue Bottle Coffee deal
    await blueBottleBtn.click();
    await expect(promoSection.getByText(/save 20% on any pour-over coffee/i)).toBeVisible();

    // Switch to Sweetgreen deal
    await sweetgreenBtn.click();
    await expect(promoSection.getByText(/enjoy \$5 off fresh harvest bowls/i)).toBeVisible();

    // Switch back to Zara and click Redeem Now
    await zaraBtn.click();
    const redeemBtn = promoSection.getByRole('button', { name: /redeem now/i });
    await expect(redeemBtn).toBeVisible();
    await redeemBtn.click();

    // Voucher code activated feedback
    await expect(promoSection.getByText(/voucher activated/i)).toBeVisible();
  });

  test('interacts with merchant toolkit tabs and POS receipt dispatch', async ({ page }) => {
    const merchantSection = page.locator('#merchants');
    await expect(merchantSection).toBeVisible();

    // Section title
    await expect(
      merchantSection.getByRole('heading', { name: /stop wasting paper rolls/i })
    ).toBeVisible();

    // Verify receipt dispatcher demo contents
    await expect(merchantSection.getByText(/customer destination/i)).toBeVisible();
    await expect(merchantSection.getByText(/sarah\.chen@gmail\.com/i)).toBeVisible();

    // Interactive Dispatch Receipt button
    const dispatchBtn = merchantSection.getByRole('button', { name: /dispatch digital receipt/i });
    await expect(dispatchBtn).toBeVisible();
    await dispatchBtn.click();

    // Toast notification fires
    await expect(page.getByText(/digital receipt.*dispatched/i).first()).toBeVisible();

    // Switch tab to Publish Coupon
    const publishTab = merchantSection.getByRole('button', { name: /publish coupon/i }).first();
    if (await publishTab.isVisible()) {
      await publishTab.click();
      await expect(merchantSection.getByText(/summer solstice special/i)).toBeVisible();
    }
  });

  test('displays community testimonials and performance benchmark cards', async ({ page }) => {
    const reviewsSection = page.locator('#reviews');
    await expect(reviewsSection).toBeVisible();

    // Benchmark statistics
    await expect(reviewsSection.getByText(/< 0\.3s/)).toBeVisible();
    await expect(reviewsSection.getByText(/99\.8%/)).toBeVisible();
    await expect(reviewsSection.getByText(/100%/)).toBeVisible();

    // Real community testimonials
    await expect(reviewsSection.getByText(/elena rostova/i)).toBeVisible();
    await expect(reviewsSection.getByText(/marcus vance/i)).toBeVisible();
    await expect(reviewsSection.getByText(/chloe dupont/i)).toBeVisible();
  });

  test('displays download CTA section with dynamic QR code', async ({ page }) => {
    const downloadSection = page.locator('#download');
    await expect(downloadSection).toBeVisible();

    // Headline
    await expect(
      downloadSection.getByRole('heading', { name: /ready to go paperless/i })
    ).toBeVisible();

    // Download badges
    await expect(downloadSection.getByRole('link', { name: /app store/i })).toBeVisible();
    await expect(downloadSection.getByRole('link', { name: /google play/i })).toBeVisible();

    // Smart QR Code and instructions
    await expect(downloadSection.getByText(/scan with phone camera/i)).toBeVisible();

    // Micro trust bullets
    await expect(downloadSection.getByText(/100% free forever/i)).toBeVisible();
    await expect(downloadSection.getByText(/no credit card required/i)).toBeVisible();
  });

  test('footer contains branding, download buttons, copyright notice, and legal links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Brand and description
    await expect(footer.getByText(/your smart receipt organizer/i)).toBeVisible();
    await expect(footer.getByRole('link', { name: /app store/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /google play/i })).toBeVisible();

    // Copyright notice
    await expect(footer).toContainText('Rizipt. All rights reserved.');

    // Essential legal links
    const privacyLink = footer.getByRole('link', { name: /privacy policy/i });
    const termsLink = footer.getByRole('link', { name: /terms of service/i });

    await expect(privacyLink).toBeVisible();
    await expect(termsLink).toBeVisible();
  });

  test('defaults to light mode theme and allows switching via navbar toggle button', async ({ page }) => {
    // 1. Verify default theme is light mode
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);

    // 2. Locate the visible theme toggle button in navbar
    const themeToggle = page
      .getByRole('banner')
      .getByRole('button', { name: /switch to dark theme/i })
      .filter({ visible: true });
    await expect(themeToggle).toBeVisible();

    // 3. Click to switch to dark mode
    await themeToggle.click();
    await expect(html).toHaveClass(/dark/);

    // 4. Button label should now indicate switching to light theme
    const themeToggleLight = page
      .getByRole('banner')
      .getByRole('button', { name: /switch to light theme/i })
      .filter({ visible: true });
    await expect(themeToggleLight).toBeVisible();

    // 5. Click again to switch back to light mode
    await themeToggleLight.click();
    await expect(html).not.toHaveClass(/dark/);
  });
});
