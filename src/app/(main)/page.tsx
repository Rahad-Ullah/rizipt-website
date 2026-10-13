import {
  HeroSection,
  ScanExtractionDemo,
  PromoCodesSection,
  MerchantSection,
  TestimonialsSection,
  DownloadCTASection,
} from "@/components/pages/home";
import { getAppLinks } from "@/lib/app-links";

export default async function Home() {
  const appLinks = await getAppLinks();

  return (
    <div>
      <HeroSection appLinks={appLinks} />
      <ScanExtractionDemo />
      <PromoCodesSection />
      <MerchantSection />
      <TestimonialsSection />
      <DownloadCTASection appLinks={appLinks} />
    </div>
  );
}
