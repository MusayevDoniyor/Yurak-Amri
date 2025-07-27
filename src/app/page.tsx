import HeroSection from "@/components/HeroSection";
import VideoPhotoBanner from "@/components/VideoPhotoBanner";
import PortfolioSection from "@/components/PortfolioSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <HeroSection />
      <VideoPhotoBanner />
      <PortfolioSection />
      <StatisticsSection />
      <TestimonialsSection />
      <DonationSection />
      <Footer />
    </main>
  );
}
