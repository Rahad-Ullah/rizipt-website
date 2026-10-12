/**
 * Centralized Store Links & Smart Download Configuration.
 * These can be configured via environment variables or loaded from your admin dashboard API.
 */
export const APP_LINKS = {
  // Apple App Store link (replace with your production Apple Store link or env var)
  appStore:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/app/rizipt/id0000000000",

  // Google Play Store link (replace with your production Play Store link or env var)
  playStore:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps/details?id=com.rizipt.app",

  // Base Site URL for universal smart redirect
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://rizipt.com",
};

/**
 * Returns the universal smart QR code link that detects device on scan.
 */
export function getSmartDownloadUrl(): string {
  // In development, window.location.origin can be used if on client side
  if (typeof window !== "undefined" && window.location.origin) {
    return `${window.location.origin}/download`;
  }
  return `${APP_LINKS.siteUrl}/download`;
}
