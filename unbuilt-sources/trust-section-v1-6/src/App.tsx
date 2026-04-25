/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Globe, Zap, Shield, Cpu, Layers, Palette, Workflow } from 'lucide-react';

const PARTNERS = [
  { name: "Nebula", industry: "Cloud Tech", year: "2024", icon: <Globe className="w-10 h-10" /> },
  { name: "Aether", industry: "Motion Des", year: "2023", icon: <Zap className="w-10 h-10" /> },
  { name: "Vortex", industry: "AI R&D", year: "2024", icon: <Cpu className="w-10 h-10" /> },
  { name: "Zenith", industry: "Luxury Lab", year: "2022", icon: <Layers className="w-10 h-10" /> },
  { name: "Titan", industry: "Fintech", year: "2024", icon: <Shield className="w-10 h-10" /> },
  { name: "Prism", industry: "Creative", year: "2023", icon: <Palette className="w-10 h-10" /> },
  { name: "Flux", industry: "Logistics", year: "2024", icon: <Workflow className="w-10 h-10" /> },
  { name: "Nova", industry: "Space Tech", year: "2025", icon: <ArrowUpRight className="w-10 h-10" /> },
];

const LogoCard = ({ partner }: { partner: typeof PARTNERS[0] }) => {
  return (
    <motion.div 
      id={`partner-${partner.name.toLowerCase()}`}
      className="group relative flex flex-col items-center justify-center min-w-[280px] h-[180px] px-12 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:bg-white border-r border-white/5"
      whileHover={{ scale: 1 }}
    >
      {/* Background Pulse Detail (Magazine Style - subtle red bar) */}
      <div className="absolute left-0 top-0 w-[2px] h-0 bg-brand-red group-hover:h-full transition-all duration-500" />
      
      {/* Brand Icon & Name */}
      <div className="relative z-10 flex flex-col items-center gap-4 transition-colors duration-500 group-hover:text-black">
        <div className="transition-opacity duration-500">
          {partner.icon}
        </div>
        <span className="text-xl font-bold tracking-widest uppercase">
          {partner.name}
        </span>
      </div>

      {/* Hover Info Reveal */}
      <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-red">
        {partner.industry}
      </div>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const marqueeScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1]);

  return (
    <div id="partner-section-root" className="relative min-h-screen bg-premium-black overflow-hidden selection:bg-brand-red selection:text-white text-white">
      <div className="noise-overlay" />
      
      {/* Editorial Decorative Line */}
      <header className="absolute top-0 left-0 w-full p-12 flex justify-between items-end z-20">
        <div className="flex flex-col">
          <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Volume 01</span>
          <div className="h-[1px] w-12 bg-brand-red"></div>
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] opacity-40 font-medium">
          Strategic Partnerships & Collaborations
        </div>
      </header>

      <main ref={containerRef} className="relative z-10 py-32 lg:pt-64 lg:pb-32 px-6 lg:px-24">
        
        {/* Editorial Layout Header */}
        <section id="trust-header" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 lg:mb-40 items-start">
          <motion.div 
            style={{ opacity: headingOpacity }}
            className="lg:col-span-7"
          >
            <h1 className="text-6xl lg:text-[110px] font-light tracking-tighter leading-[0.85] text-white">
              Trusted by <br />
              <span className="italic font-serif opacity-95 text-gray-200">Visionary</span> <br />
              Brands.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 lg:pt-12"
          >
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm tracking-wide">
              WE COLLABORATE WITH GLOBAL LEADERS TO REDEFINE THE BOUNDARIES OF DIGITAL EXCELLENCE AND HIGH-PERFORMANCE ENGINEERING THROUGH STRATEGIC DESIGN.
            </p>
          </motion.div>
        </section>

        {/* High-End Marquee Section */}
        <motion.section 
          id="marquee-showcase"
          style={{ scale: marqueeScale }}
          className="relative -mx-6 lg:-mx-24 space-y-0 border-y border-white/10"
        >
          {/* Row 1: Forward */}
          <div className="overflow-hidden py-0 bg-transparent">
            <div className="animate-marquee">
              {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <LogoCard key={`row1-${idx}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Row 2: Backward (Slower) */}
          <div className="overflow-hidden py-0 border-t border-white/10 bg-transparent">
            <div className="animate-marquee-reverse">
              {[...PARTNERS.reverse(), ...PARTNERS].map((partner, idx) => (
                <LogoCard key={`row2-${idx}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Gradient Fades for Marquee edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-premium-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-premium-black to-transparent z-20 pointer-events-none" />
        </motion.section>

        {/* Footer Accent Text */}
        <footer id="section-footer" className="mt-24 lg:mt-32 flex flex-row justify-between items-center border-t border-white/10 pt-12 gap-8">
          <div className="flex gap-16">
             <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Region</div>
              <div className="text-[11px] font-bold uppercase tracking-wider">Global Operations</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Recognition</div>
              <div className="text-[11px] font-bold uppercase tracking-wider">Agency of the Year</div>
            </div>
          </div>
          
          <div className="flex gap-4">
             <div className="px-6 h-10 border border-white/20 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest cursor-pointer hover:bg-white hover:text-black transition-all">
                Case Studies
             </div>
          </div>
        </footer>

      </main>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 opacity-[0.02] pointer-events-none hidden lg:block">
         <span className="text-[380px] font-bold tracking-tighter text-white select-none italic">PARTNERS</span>
      </div>
    </div>
  );
}
