import { test, expect } from '@playwright/test';

test.describe('Rizipt Legal Pages & Disclaimers Verification', () => {
  test('privacy policy page loads and displays core clauses', async ({ page }) => {
    await page.goto('/privacy-policy');

    // Heading verification
    const heading = page.getByRole('heading', { name: /privacy policy/i, level: 1 }).first();
    await expect(heading).toBeVisible();

    // Policy badge
    await expect(page.getByText(/official rizipt legal policy/i)).toBeVisible();

    // Print button exists
    await expect(page.getByRole('button', { name: /print/i })).toBeVisible();

    // Core privacy statement
    await expect(page.getByText(/we respect your privacy/i).first()).toBeVisible();

    // Back to Home link
    const homeLink = page.getByRole('link', { name: /back to home/i });
    await expect(homeLink).toBeVisible();
  });

  test('terms of service page loads and displays core platform terms', async ({ page }) => {
    await page.goto('/terms-of-service');

    // Heading verification
    const heading = page.getByRole('heading', { name: /terms of service/i, level: 1 }).first();
    await expect(heading).toBeVisible();

    // Policy badge
    await expect(page.getByText(/official rizipt legal terms/i)).toBeVisible();

    // Print button exists
    await expect(page.getByRole('button', { name: /print/i })).toBeVisible();

    // Core terms content
    await expect(
      page.getByText(/the rizipt platform/i).or(page.getByText(/acceptable use/i)).first()
    ).toBeVisible();

    // Back to Home link
    const homeLink = page.getByRole('link', { name: /back to home/i });
    await expect(homeLink).toBeVisible();
  });

  test('alias routes /privacy and /terms redirect to canonical paths', async ({ page }) => {
    // /privacy -> /privacy-policy
    await page.goto('/privacy');
    await expect(page).toHaveURL(/\/privacy-policy$/);
    await expect(page.getByRole('heading', { name: /privacy policy/i, level: 1 }).first()).toBeVisible();

    // /terms -> /terms-of-service
    await page.goto('/terms');
    await expect(page).toHaveURL(/\/terms-of-service$/);
    await expect(page.getByRole('heading', { name: /terms of service/i, level: 1 }).first()).toBeVisible();
  });
});
