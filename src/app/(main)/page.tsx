import {
  HeroSection,
  ScanExtractionDemo,
  PromoCodesSection,
  MerchantSection,
  TestimonialsSection,
  DownloadCTASection,
} from "@/components/pages/home";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScanExtractionDemo />
      <PromoCodesSection />
      <MerchantSection />
      <TestimonialsSection />
      <DownloadCTASection />
    </main>
  );
}
