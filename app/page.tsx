import HeroSection from "@/components/home/hero-section";
// import { DemoSection } from "@/components/home/demo-section";
import { DocumentJourneySection } from '@/components/home/document-journey-section';
import { PricingSection } from '@/components/home/pricing-section';

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <HeroSection />
      {/* <DemoSection /> */}
      <DocumentJourneySection/>
      <PricingSection />
      {/* <CTASection/> */}
    </div>
  );
}
