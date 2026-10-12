/**
 * Centralized Store Links & Settings Configuration.
 * Fetches dynamic mobile app links from GET {{BASE_URL}}/settings
 * with 1-hour ISR revalidation caching, matching legal content fetching.
 */

export interface MobileAppLinkSettings {
  googlePlay?: string;
  appleStore?: string;
}

export interface ContactInfoSettings {
  phone?: {
    countryCode?: string;
    number?: string;
  };
  whatsApp?: {
    countryCode?: string;
    number?: string;
  };
  location?: {
    type?: string;
    coordinates?: number[];
  };
  email?: string;
  address?: string;
}

export interface SocialLinkSettings {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface SettingsData {
  contactInfo?: ContactInfoSettings;
  mobileAppLink?: MobileAppLinkSettings;
  socialLink?: SocialLinkSettings;
}

export interface SettingsApiResponse {
  success: boolean;
  message?: string;
  data?: SettingsData | null;
}

export const DEFAULT_APP_LINKS = {
  appStore:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/app/rizipt/id123456789",
  playStore:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps/details?id=com.rizipt.app",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://rizipt.com",
};

// Backwards-compatible export for static/client usage
export const APP_LINKS = DEFAULT_APP_LINKS;

/**
 * Fetch general platform settings from backend API.
 * Endpoint: GET {{BASE_URL}}/settings
 * Cached for 1 hour (3600 seconds) via Next.js ISR.
 */
export async function getAppSettings(): Promise<SettingsData | null> {
  const baseApiUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "";

  if (baseApiUrl) {
    try {
      const endpoint = `${baseApiUrl}/settings`;
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        // Cache for at least 1 hour (3600 seconds)
        next: {
          revalidate: 3600,
          tags: ["settings"],
        },
      });

      if (res.ok) {
        const json: SettingsApiResponse = await res.json();
        if (json?.success && json?.data) {
          return json.data;
        }
      }
    } catch (err) {
      console.warn("[getAppSettings] Error fetching settings from backend:", err);
    }
  }

  return null;
}

/**
 * Dynamically resolves the latest mobile app store links.
 * Reads from backend /settings with 1-hour cache, falling back to default links.
 */
export async function getAppLinks(): Promise<{
  appStore: string;
  playStore: string;
  siteUrl: string;
}> {
  const settings = await getAppSettings();

  const appStore =
    settings?.mobileAppLink?.appleStore ||
    DEFAULT_APP_LINKS.appStore;

  const playStore =
    settings?.mobileAppLink?.googlePlay ||
    DEFAULT_APP_LINKS.playStore;

  return {
    appStore,
    playStore,
    siteUrl: DEFAULT_APP_LINKS.siteUrl,
  };
}

/**
 * Returns the universal smart QR code link that detects device on scan.
 */
export function getSmartDownloadUrl(): string {
  if (typeof window !== "undefined" && window.location.origin) {
    return `${window.location.origin}/download`;
  }
  return `${DEFAULT_APP_LINKS.siteUrl}/download`;
}
