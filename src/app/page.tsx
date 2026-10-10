import { Navbar, Footer } from "@/components/common";
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
    <div className="flex min-h-screen flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#0094DA]/30 selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ScanExtractionDemo />
        <PromoCodesSection />
        <MerchantSection />
        <TestimonialsSection />
        <DownloadCTASection />
      </main>
      <Footer />
    </div>
  );
}
