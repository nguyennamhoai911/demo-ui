import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { FeaturedContent } from "./components/featured-content";
import { TrustStrip } from "./components/trust-strip";
import { ContentStream } from "./components/content-stream";
import { TopicClusters } from "./components/topic-clusters";
import { CaseStudies } from "./components/case-studies";
import { FinalCTA } from "./components/final-cta";
import { SiteFooter } from "./components/site-footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0F]">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedContent />
        <TrustStrip />
        <ContentStream />
        <TopicClusters />
        <CaseStudies />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
