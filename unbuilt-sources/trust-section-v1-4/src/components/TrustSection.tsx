import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { partners, Partner } from '../partnersData';
import { BackgroundEffect } from './BackgroundEffect';
import { PartnerLogo } from './PartnerLogo';

export const TrustSection = () => {
  const [activePartner, setActivePartner] = useState<Partner>(partners[0]);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const currentPartner = partners.find(p => p.id === hoveredPartner) || activePartner;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base">
      <BackgroundEffect />

      <div className="relative z-10 w-full h-screen max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT SIDE: DETAIL PANEL (Sleek Interface Style) */}
        <div className="w-full lg:w-[420px] shrink-0 flex flex-col justify-between py-12 lg:py-20 px-8 lg:px-14 border-b lg:border-b-0 lg:border-r border-black/5 bg-bg-base/80 backdrop-blur-md relative z-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-5 h-[1px] bg-brand-red flex-shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
                Partnerships & Impact
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-dark mb-6"
            >
              The Global<br />Trust Circle.
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[15px] leading-relaxed text-black/60 font-light max-w-sm"
            >
              Collaborating with industry pioneers to redefine the digital landscape. We build tools for those who dare to build the future.
            </motion.p>
          </div>

          {/* ACTIVE PARTNER DETAILS (Sleek Interface Style) */}
          <div className="mt-12 lg:mt-auto pt-10 border-t border-black/[0.08]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPartner.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-neutral-dark uppercase">
                    {currentPartner.name}
                  </h3>
                  <span className="text-xs font-semibold text-brand-red">
                    {currentPartner.year}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-black/40 font-bold">Industry</span>
                      <span className="text-[13px] font-medium text-neutral-dark">{currentPartner.industry.split(' & ')[0]}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-black/40 font-bold">Scope</span>
                      <span className="text-[13px] font-medium text-neutral-dark truncate">{currentPartner.scope[0]}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-black/40 font-bold">Status</span>
                      <span className="text-[13px] font-medium text-neutral-dark">{currentPartner.status}</span>
                   </div>
                </div>

                {/* Dot Navigation Indicator */}
                <div className="flex gap-2 mt-10">
                   {partners.map((p) => (
                     <motion.div 
                        key={p.id}
                        animate={{ 
                          width: currentPartner.id === p.id ? 24 : 6,
                          backgroundColor: currentPartner.id === p.id ? '#E11D48' : 'rgba(0,0,0,0.1)'
                        }}
                        className="h-[6px] rounded-full transition-colors duration-300"
                     />
                   ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE: LOGO GRID (Sleek Interface Style) */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-4xl">
            {partners.map((partner, index) => (
              <motion.button
                key={partner.id}
                onClick={() => setActivePartner(partner)}
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className={`relative aspect-[1.5/1] bg-white border flex items-center justify-center p-6 transition-all duration-400 cursor-pointer overflow-hidden ${
                  activePartner.id === partner.id 
                    ? 'border-brand-red shadow-[0_20px_40px_rgba(0,0,0,0.05)] scale-105 z-20' 
                    : 'border-black/5 hover:border-black/10'
                }`}
              >
                <div className={`w-full transition-all duration-300 ${
                   activePartner.id === partner.id || hoveredPartner === partner.id ? 'opacity-100 grayscale-0' : 'opacity-25 grayscale'
                }`}>
                  <PartnerLogo 
                    partner={partner} 
                    isActive={activePartner.id === partner.id}
                    isHovered={hoveredPartner === partner.id}
                  />
                </div>

                {/* Optional: Design theme has big text logos, but our components use SVG. 
                    I'll keep SVG for premium feel but apply the grayscale/opacity logic from the theme. */}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
