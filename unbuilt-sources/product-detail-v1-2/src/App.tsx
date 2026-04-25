/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation, StickyCTA, Footer } from "./components/Layout";
import { Hero, SpecDashboard, Gallery, ValueProp } from "./components/Sections";
import { Applications, TechSafety, DetailedSpecs, ProductFamily, Downloads, ContactForm } from "./components/DeepDetails";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pkg-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navigation />
      <StickyCTA />

      <main>
        <Hero />
        <SpecDashboard />
        <ValueProp />
        <Applications />
        <Gallery />
        <TechSafety />
        <DetailedSpecs />
        <ProductFamily />
        <Downloads />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

