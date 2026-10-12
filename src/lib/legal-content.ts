/**
 * Legal Content Data Model & Fetching Helper
 * Supports fetching dynamic HTML strings from remote server APIs
 * with complete formal fallback content.
 */

export interface LegalContentData {
  title: string;
  content: string;
  lastUpdated: string;
  version: string;
}

export const DEFAULT_PRIVACY_POLICY_HTML = `
<h2>1. Introduction & Overview</h2>
<p>
  Welcome to Rizipt (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are committed to protecting your personal privacy and safeguarding your financial records. This Privacy Policy outlines our practices concerning the collection, use, processing, and disclosure of your information when you use the Rizipt mobile applications, website (<a href="https://rizipt.com">https://rizipt.com</a>), and associated services (collectively, the &ldquo;Service&rdquo;).
</p>
<p>
  By downloading, accessing, or using Rizipt, you acknowledge and agree to the data collection and usage practices described in this policy. If you do not agree with our policies, please discontinue using our Service immediately.
</p>

<h2>2. Information We Collect</h2>
<p>We collect information to provide, maintain, and optimize our on-device optical character recognition (OCR), expense organization, and partner merchant coupon matching services.</p>

<h3>A. Information You Provide to Us</h3>
<ul>
  <li><strong>Account Credentials:</strong> Name, email address, password, and mobile phone number provided upon registration.</li>
  <li><strong>Scanned Receipt Images & Data:</strong> High-resolution camera captures of physical receipts, merchant names, line items, transaction dates, tax totals, and currency values extracted during scanning.</li>
  <li><strong>User Communications:</strong> Feedback, inquiries, and customer support messages you transmit to us.</li>
</ul>

<h3>B. Information Collected Automatically</h3>
<ul>
  <li><strong>Device & Usage Data:</strong> Device model, operating system version (iOS/Android), unique device identifiers, IP address, and application interaction metrics.</li>
  <li><strong>Location Information:</strong> With your permission, approximate or precise location coordinates to discover nearby retail merchants and active partner discounts.</li>
</ul>

<h2>3. How We Process Receipt Data (Privacy-First Architecture)</h2>
<p>
  Rizipt utilizes an advanced on-device neural OCR framework. Where supported by your mobile hardware:
</p>
<blockquote>
  <strong>Privacy By Design:</strong> Primary character recognition and receipt line-item parsing execute directly on your device before synchronization. Your raw receipt scans are encrypted both in transit (TLS 1.3) and at rest (AES-256) when stored in your secure personal vault.
</blockquote>
<p>
  We do <em>not</em> sell your raw receipt scans or itemized consumer purchase histories to third-party data brokers or advertising networks.
</p>

<h2>4. How We Use Your Information</h2>
<p>We process collected information for the following operational purposes:</p>
<ol>
  <li>To parse, organize, and categorize receipt records into custom folders (e.g., Taxes, Deductibles, Business Expenses).</li>
  <li>To match verified merchant discount vouchers and flash savings relevant to stores you frequent.</li>
  <li>To allow merchants using Rizipt POS to dispatch verified digital receipts directly to your in-app wallet.</li>
  <li>To troubleshoot app stability, maintain uptime, and defend against fraudulent activities.</li>
</ol>

<h2>5. Information Sharing and Disclosure</h2>
<p>We strictly limit third-party disclosures to the following circumstances:</p>
<ul>
  <li><strong>Verified Partner Merchants:</strong> When you voluntarily redeem an in-app promotion code or digital coupon at checkout, the merchant receives confirmation of voucher validity.</li>
  <li><strong>Infrastructure Providers:</strong> Trusted cloud hosting, database, and telemetry providers bound by strict confidentiality and data protection agreements.</li>
  <li><strong>Legal Compliance:</strong> When compelled by subpoena, court order, or applicable law to protect life, property, or legal rights.</li>
</ul>

<h2>6. Data Retention and Security Controls</h2>
<p>
  We retain your receipt archives for as long as your account remains active or as required by law for tax compliance records. You retain full control over your records at all times.
</p>
<table>
  <thead>
    <tr>
      <th>Data Category</th>
      <th>Storage Duration</th>
      <th>Encryption Standard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Receipt Scans & Metadata</td>
      <td>Until User Deletion</td>
      <td>AES-256 at rest</td>
    </tr>
    <tr>
      <td>Account Identity</td>
      <td>Active Account Lifetime</td>
      <td>Bcrypt / TLS 1.3</td>
    </tr>
    <tr>
      <td>Redeemed Promo Tokens</td>
      <td>180 Days Verification Window</td>
      <td>SHA-256 Hashed</td>
    </tr>
  </tbody>
</table>

<h2>7. Your Rights and Choices</h2>
<p>Depending on your jurisdiction (including GDPR, UK GDPR, and CCPA/CPRA regulations), you have the right to:</p>
<ul>
  <li>Access and export your itemized receipt history in standard formats (CSV, JSON, PDF).</li>
  <li>Correct inaccurate profile information or manually adjust OCR extracted values.</li>
  <li>Request permanent deletion of your account and all associated receipt records.</li>
  <li>Revoke camera or location permissions at any time via device settings.</li>
</ul>

<h2>8. Contact Our Data Protection Team</h2>
<p>
  If you have questions, feedback, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer at:
</p>
<p>
  <strong>Email:</strong> <a href="mailto:privacy@rizipt.com">privacy@rizipt.com</a><br />
  <strong>Support Desk:</strong> <a href="mailto:support@rizipt.com">support@rizipt.com</a><br />
  <strong>Office:</strong> Rizipt Technologies Inc., Legal & Privacy Compliance Department
</p>
`;

export const DEFAULT_TERMS_OF_SERVICE_HTML = `
<h2>1. Acceptance of Terms</h2>
<p>
  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and Rizipt Technologies Inc. (&ldquo;Rizipt&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), governing your access to and use of the Rizipt mobile applications, website (<a href="https://rizipt.com">https://rizipt.com</a>), and related features (the &ldquo;Service&rdquo;).
</p>
<p>
  By registering an account, scanning receipts, or accessing the Service, you signify that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
</p>

<h2>2. The Rizipt Platform</h2>
<p>
  Rizipt provides consumers and merchants with intelligent digital document tools:
</p>
<ul>
  <li><strong>On-Device Receipt Scanning:</strong> Capturing, parsing, and categorizing paper slips into structured expense records.</li>
  <li><strong>Smart Coupon Discovery:</strong> Browsing and claiming partner merchant promotions, vouchers, and discounts.</li>
  <li><strong>Merchant Dispatch Tools:</strong> Allowing business owners to generate and deliver paperless digital receipts directly to customer devices.</li>
</ul>

<h2>3. User Accounts and Security</h2>
<p>
  To utilize advanced features of Rizipt, you may be required to create an account. You agree to:
</p>
<ol>
  <li>Provide accurate, current, and complete registration information.</li>
  <li>Maintain the confidentiality of your credentials and account password.</li>
  <li>Promptly notify us at <a href="mailto:support@rizipt.com">support@rizipt.com</a> upon discovering any unauthorized account access.</li>
</ol>
<p>
  You remain solely responsible for all activities occurring under your registered user profile.
</p>

<h2>4. Acceptable Use Policy</h2>
<p>When accessing or using Rizipt, you agree that you will <strong>NOT</strong>:</p>
<ul>
  <li>Upload forged, fraudulent, counterfeit, or unlawfully obtained receipts.</li>
  <li>Manipulate coupon redemption counters, reverse-engineer promo codes, or attempt unauthorized API exploits.</li>
  <li>Interfere with, disable, or tamper with the security infrastructure or server integrity of the Service.</li>
  <li>Use automated crawlers, scrapers, or bots to harvest data from the platform.</li>
</ul>

<h2>5. Merchant Promotions and Partner Deals</h2>
<blockquote>
  <strong>Voucher Terms:</strong> Partner merchant promotions, discount percentages, and coupon availability surfaced within the Rizipt Deals feed are subject to terms and expiration dates set by individual retail merchants. Rizipt facilitates discovery but does not manufacture or warrant the merchant's underlying physical goods or services.
</blockquote>
<p>
  In the event of a dispute regarding a merchant&apos;s fulfillment of an offer, Rizipt will act in good faith to assist in verifying coupon validity, but liability remains with the publishing merchant.
</p>

<h2>6. Intellectual Property Rights</h2>
<p>
  All rights, titles, and interests in the Rizipt platform, including software code, brand trademarks (&ldquo;Rizipt&rdquo;), logos, interface designs, and algorithms, are and shall remain the exclusive property of Rizipt Technologies Inc.
</p>
<p>
  You retain ownership of the raw personal photographs and documents you upload, granting Rizipt a limited, non-exclusive license solely to process and display them to you in connection with providing the Service.
</p>

<h2>7. Disclaimers of Warranties</h2>
<p>
  The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. While our on-device OCR engine achieves industry-leading recognition accuracy, Rizipt does not warrant that OCR line-item extractions will be 100% error-free in all lighting or print conditions. You are encouraged to review critical tax figures prior to submitting official returns.
</p>

<h2>8. Limitation of Liability</h2>
<p>
  To the maximum extent permitted by applicable law, in no event shall Rizipt, its directors, employees, or partners be liable for any indirect, punitive, incidental, special, or consequential damages resulting from your use of or inability to use the Service.
</p>

<h2>9. Termination</h2>
<p>
  You may close your account at any time through the in-app settings menu. Rizipt reserves the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activities.
</p>

<h2>10. Governing Law & Dispute Resolution</h2>
<p>
  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Rizipt Technologies Inc. is registered, without regard to its conflict of law principles.
</p>

<h2>11. Contact Information</h2>
<p>
  For questions, legal notices, or inquiries regarding these Terms of Service, please reach out to:
</p>
<p>
  <strong>Legal Department:</strong> <a href="mailto:legal@rizipt.com">legal@rizipt.com</a><br />
  <strong>Customer Care:</strong> <a href="mailto:support@rizipt.com">support@rizipt.com</a><br />
  <strong>Website:</strong> <a href="https://rizipt.com">https://rizipt.com</a>
</p>
`;

/**
 * Fetch legal document content from server or fall back to default formal HTML.
 * Handles server responses where HTML is inside a JSON string (e.g. { content: "..." } or { data: { content: "..." } }).
 */
export async function getLegalContent(
  type: "privacy" | "terms"
): Promise<LegalContentData> {
  const isPrivacy = type === "privacy";
  const defaultTitle = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const defaultHtml = isPrivacy
    ? DEFAULT_PRIVACY_POLICY_HTML
    : DEFAULT_TERMS_OF_SERVICE_HTML;

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL;

  if (apiUrl) {
    try {
      const endpoint = `${apiUrl}/legal/${type === "privacy" ? "privacy-policy" : "terms-of-service"}`;
      const res = await fetch(endpoint, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        const json = await res.json();
        // Support { content: "..." }, { data: { content: "..." } }, or direct string
        const htmlString =
          json?.content ||
          json?.data?.content ||
          (typeof json?.data === "string" ? json.data : null);

        if (htmlString && typeof htmlString === "string") {
          return {
            title: json?.title || json?.data?.title || defaultTitle,
            content: htmlString,
            lastUpdated:
              json?.updatedAt ||
              json?.data?.updatedAt ||
              "October 12, 2026",
            version: json?.version || json?.data?.version || "2.1",
          };
        }
      }
    } catch {
      // Gracefully fall back to local default HTML
    }
  }

  return {
    title: defaultTitle,
    content: defaultHtml,
    lastUpdated: "October 12, 2026",
    version: "2.1",
  };
}
