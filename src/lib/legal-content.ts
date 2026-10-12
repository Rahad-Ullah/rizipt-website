/**
 * Legal Content Data Model & Fetching Helper
 * Matches the backend API endpoint: GET {{BASE_URL_v1}}/disclaimers/:type
 * Cached using Next.js ISR with revalidate: 3600 (at least 1 hour).
 */

export type LegalDisclaimerType = "privacy_policy" | "terms_of_service";

export interface LegalDisclaimerData {
  _id?: string;
  type: LegalDisclaimerType;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  formattedDate?: string;
}

export interface DisclaimerApiResponse {
  success: boolean;
  message?: string;
  data: {
    _id?: string;
    type: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
  } | null;
}

export const DEFAULT_PRIVACY_POLICY_HTML = `
<h1>Privacy Policy</h1>
<p>
  At Rizipt (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting your personal financial records. We collect and use your information only when necessary to provide, maintain, and improve our services. We take reasonable steps to protect your personal information and do not share it with third parties except when required to provide our services or comply with applicable laws.
</p>

<h2>1. Information We Collect</h2>
<p>We collect information to provide, maintain, and optimize our on-device optical character recognition (OCR), expense organization, and partner merchant coupon matching services:</p>

<h3>A. Information You Provide</h3>
<ul>
  <li><strong>Account Information:</strong> Name, email address, password, and contact details provided upon sign up.</li>
  <li><strong>Receipt Scans & Extracted Records:</strong> Digital photos of physical receipts, store names, itemized line items, dates, and total amounts parsed during scanning.</li>
  <li><strong>Communications:</strong> Messages and feedback sent to our customer care or compliance team.</li>
</ul>

<h3>B. Information Collected Automatically</h3>
<ul>
  <li><strong>Device Information:</strong> Operating system (iOS/Android), device model, IP address, and application performance metrics.</li>
  <li><strong>Location (Optional):</strong> Approximate location data if enabled, used to surface verified discounts from merchants near you.</li>
</ul>

<h2>2. How We Process Receipt Data (Privacy By Design)</h2>
<blockquote>
  <strong>On-Device First:</strong> Optical character recognition processes directly on your mobile device where supported. Scanned receipt archives are encrypted using industry-standard AES-256 at rest and TLS 1.3 in transit.
</blockquote>
<p>
  We do <strong>not</strong> sell your raw receipt scans or itemized consumer purchase histories to third-party data brokers or advertising networks.
</p>

<h2>3. How We Use Your Data</h2>
<ol>
  <li>To parse, organize, and categorize receipt records into custom folders (e.g., Taxes, Deductibles, Business Expenses).</li>
  <li>To match verified partner promotions, discount vouchers, and flash savings relevant to your favorite retail brands.</li>
  <li>To facilitate paperless digital receipt issuance from partner merchant point-of-sale systems.</li>
  <li>To maintain platform stability, uptime, and fraud defense.</li>
</ol>

<h2>4. Data Retention & Your Rights</h2>
<p>
  You retain full control over your receipts at all times. You have the right to access, export, or permanently delete your stored records and account through the application settings or by contacting our Data Protection Officer.
</p>

<h2>5. Contact Us</h2>
<p>
  If you have questions regarding this Privacy Policy or your personal information, please reach out to us at:
</p>
<p>
  <strong>Email:</strong> <a href="mailto:privacy@rizipt.com">privacy@rizipt.com</a><br />
  <strong>Support:</strong> <a href="mailto:support@rizipt.com">support@rizipt.com</a><br />
  <strong>Website:</strong> <a href="https://rizipt.com">https://rizipt.com</a>
</p>
`;

export const DEFAULT_TERMS_OF_SERVICE_HTML = `
<h1>Terms of Service</h1>
<p>
  These Terms of Service constitute a legally binding agreement between you and Rizipt Technologies Inc. (&ldquo;Rizipt&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), governing your access to and use of the Rizipt mobile applications, website (<a href="https://rizipt.com">https://rizipt.com</a>), and related features.
</p>

<h2>1. The Rizipt Platform</h2>
<p>
  Rizipt provides smart digital document tools including on-device AI receipt capture, expense categorization, and smart coupon discovery. By using the platform, you agree to comply with all terms and applicable laws.
</p>

<h2>2. User Accounts & Security</h2>
<p>
  When creating an account with Rizipt, you agree to provide truthful and complete information, safeguard your credentials, and notify us immediately of any unauthorized access at <a href="mailto:support@rizipt.com">support@rizipt.com</a>.
</p>

<h2>3. Acceptable Use Policy</h2>
<p>You agree not to:</p>
<ul>
  <li>Upload forged, fraudulent, counterfeit, or unlawfully obtained receipts.</li>
  <li>Manipulate coupon redemption counters, reverse-engineer promo codes, or attempt unauthorized API exploits.</li>
  <li>Interfere with, disable, or tamper with the security infrastructure or server integrity of the Service.</li>
  <li>Use automated crawlers, scrapers, or bots to harvest data from the platform.</li>
</ul>

<h2>4. Merchant Promotions & In-App Deals</h2>
<blockquote>
  <strong>Partner Offers:</strong> Partner promotions and discount vouchers surfaced in Rizipt are subject to terms and expiration dates set by individual retail merchants. Rizipt facilitates discovery but does not warrant the merchant's underlying physical goods or services.
</blockquote>

<h2>5. Intellectual Property</h2>
<p>
  The Rizipt name, logos, product design, software code, and mobile interfaces are the exclusive intellectual property of Rizipt Technologies Inc. You retain ownership of the personal receipt photographs and documents you upload.
</p>

<h2>6. Disclaimers & Limitation of Liability</h2>
<p>
  The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. While our OCR engine delivers high recognition precision, we encourage users to verify critical tax totals prior to filing official tax returns.
</p>

<h2>7. Contact Information</h2>
<p>
  For legal inquiries regarding these Terms of Service, contact:
</p>
<p>
  <strong>Legal Department:</strong> <a href="mailto:legal@rizipt.com">legal@rizipt.com</a><br />
  <strong>Customer Support:</strong> <a href="mailto:support@rizipt.com">support@rizipt.com</a>
</p>
`;

/**
 * Format ISO date string to readable format e.g. "August 30, 2026"
 */
function formatDate(dateString?: string): string {
  if (!dateString) return "October 12, 2026";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "October 12, 2026";
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "October 12, 2026";
  }
}

/**
 * Fetch legal disclaimer from backend API with Next.js 1-hour ISR cache.
 * Matches endpoint: GET {{BASE_URL}}/disclaimers/:type
 * type: "privacy_policy" | "terms_of_service"
 */
export async function getLegalDisclaimer(
  type: LegalDisclaimerType
): Promise<LegalDisclaimerData> {
  const isPrivacy = type === "privacy_policy";
  const fallbackHtml = isPrivacy
    ? DEFAULT_PRIVACY_POLICY_HTML
    : DEFAULT_TERMS_OF_SERVICE_HTML;

  // Check possible backend base URL environment variables
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "";

  if (rawBaseUrl) {
    try {
      // Normalize base URL without trailing slash
      const cleanBase = rawBaseUrl.replace(/\/+$/, "");
      const endpoint = `${cleanBase}/disclaimers/${type}`;

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        // Cache for at least 1 hour (3600 seconds)
        next: {
          revalidate: 3600,
          tags: ["disclaimers", `disclaimer-${type}`],
        },
      });

      if (res.ok) {
        const json: DisclaimerApiResponse = await res.json();
        if (json?.success && json?.data?.content) {
          return {
            _id: json.data._id,
            type,
            content: json.data.content,
            createdAt: json.data.createdAt,
            updatedAt: json.data.updatedAt,
            formattedDate: formatDate(json.data.updatedAt || json.data.createdAt),
          };
        }
      }
    } catch (err) {
      console.warn(`[getLegalDisclaimer] Error fetching ${type} from backend:`, err);
    }
  }

  // Graceful fallback with formal legal document content
  return {
    type,
    content: fallbackHtml,
    formattedDate: "August 30, 2026",
  };
}
