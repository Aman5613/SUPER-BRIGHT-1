import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { LogoLoopSection } from "../components/LogoLoopSection";
import { CountUpSection } from "../components/CountUpSection";
import { CertificatesSection } from "../components/CertificatesSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <LogoLoopSection />
      <CountUpSection />
      <CertificatesSection />
    </>
  );
}