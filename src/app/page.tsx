import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreview from "@/components/home/AboutPreview";
import BranchesPreview from "@/components/home/BranchesPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <BranchesPreview />
      <CTASection />
    </>
  );
}
