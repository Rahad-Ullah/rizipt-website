import type { Metadata } from "next";
import { getLegalContent } from "@/lib/legal-content";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms, conditions, acceptable use rules, and merchant guidelines governing your use of Rizipt applications and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default async function TermsOfServicePage() {
  const data = await getLegalContent("terms");

  return <LegalPageLayout data={data} type="terms" />;
}
