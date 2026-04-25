/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CategoryFilter } from "./components/CategoryFilter";
import { FeaturedArticles } from "./components/FeaturedArticles";
import { TrustStrip } from "./components/TrustStrip";
import { ArticleListing } from "./components/ArticleListing";
import { ResourceSection } from "./components/ResourceSection";
import { CaseStudySection } from "./components/CaseStudySection";
import { CTASection, Footer } from "./components/CTASection";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-red selection:text-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <CategoryFilter />
        
        {/* Visual Anchor for Section Flow */}
        <div className="relative">
          <FeaturedArticles />
          <TrustStrip />
          <ArticleListing />
          <ResourceSection />
          <CaseStudySection />
        </div>
        
        <CTASection />
      </main>

      <Footer />
      
      {/* Dynamic CTA Button for Mobile/Scroll (Optional but helpful for B2B) */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3">
        <a 
          href="https://zalo.me" 
          target="_blank" 
          rel="no-referrer"
          className="w-14 h-14 bg-[#0180C7] flex items-center justify-center rounded-full text-white shadow-xl hover:scale-110 transition-transform"
        >
          <span className="font-bold text-xs">ZALO</span>
        </a>
        <button className="w-14 h-14 bg-brand-red flex items-center justify-center rounded-full text-white shadow-xl hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </button>
      </div>
    </div>
  );
}
