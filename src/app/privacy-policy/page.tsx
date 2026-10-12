import type { Metadata } from "next";
import { getLegalContent } from "@/lib/legal-content";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Rizipt collects, protects, encrypts, and handles your receipts and personal information with privacy-first on-device OCR.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default async function PrivacyPolicyPage() {
  const data = await getLegalContent("privacy");

  return <LegalPageLayout data={data} type="privacy" />;
}
