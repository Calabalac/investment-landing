import { HeroSection } from "@/components/sections/hero";
import { WhyInvestSection } from "@/components/sections/why-invest";
import { ROICalculatorSection } from "@/components/sections/roi-calculator";
import { DeveloperTrustSection } from "@/components/sections/developer-trust";
import { DirectPurchaseSection } from "@/components/sections/direct-purchase";
import { InstallmentSection } from "@/components/sections/installment";
import { TargetAudienceSection } from "@/components/sections/target-audience";
import { InfoTabsSection } from "@/components/sections/info-tabs";
import { LeadFormSection } from "@/components/sections/lead-form";
import { StickyCTA } from "@/components/sections/sticky-cta";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0 relative">
      <HeroSection />
      <WhyInvestSection />
      <ROICalculatorSection />
      <DeveloperTrustSection />
      <DirectPurchaseSection />
      <InstallmentSection />
      <TargetAudienceSection />
      <InfoTabsSection />
      <LeadFormSection />
      <StickyCTA />
    </main>
  );
}
