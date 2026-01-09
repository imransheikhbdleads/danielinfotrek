import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import VideoSection from "@/components/landing/VideoSection";
import CarouselSection from "@/components/landing/CarouselSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ContentMapSection from "@/components/landing/ContentMapSection";
import PdfViewerSection from "@/components/landing/PdfViewerSection";
import FaqSection from "@/components/landing/FaqSection";
import PricingSection from "@/components/landing/PricingSection";
import OrderCtaSection from "@/components/landing/OrderCtaSection";
import MobileBottomCta from "@/components/landing/MobileBottomCta";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustStrip />
      <VideoSection />
      <CarouselSection />
      <BenefitsSection />
      <ContentMapSection />
      <PdfViewerSection />
      <FaqSection />
      <PricingSection />
      <OrderCtaSection />
      <Footer />
      <MobileBottomCta />
    </main>
  );
};

export default Index;
