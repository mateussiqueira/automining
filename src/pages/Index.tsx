import { HeroSection } from "@/components/HeroSection";
import { ProofBar } from "@/components/ProofBar";
import { PainCalculator } from "@/components/PainCalculator";
import { SolutionShowcase } from "@/components/SolutionShowcase";
import { RoiGuarantee } from "@/components/RoiGuarantee";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { WhyUsModal } from "@/components/WhyUsModal";
import { useEffect } from "react";

const Index = () => {
  // Atualizar título e meta tags para SEO
  useEffect(() => {
    document.title = "Automining NEXT — Corte 35% dos Custos da Sua Mina em 90 Dias";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Software de Business Process Intelligence que garante ROI na mineração em apenas 90 dias. Redução de 35% nos custos garantida ou seu dinheiro de volta.");
    }
  }, []);

  return (
    <div className="bg-am-bg-dark text-am-neutral-100 overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Proof Bar - Client Logos */}
      <ProofBar />
      
      {/* Pain Calculator - Cost of Inaction */}
      <PainCalculator />
      
      {/* Solution Showcase - Before/After */}
      <SolutionShowcase />
      
      {/* ROI Guarantee Section */}
      <RoiGuarantee />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating "Why Us" CTA Button & Modal */}
      <WhyUsModal />
    </div>
  );
};

export default Index;
