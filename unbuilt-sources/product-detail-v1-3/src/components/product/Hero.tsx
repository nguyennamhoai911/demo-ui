/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 bg-white">
      {/* Industrial grid & dots */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-pkg-red/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter">Series FF</span>
              <span className="text-pkg-red text-[10px] font-bold tracking-widest uppercase">Electric Forklift Specialized</span>
            </div>
            
            <h1 className="text-[80px] lg:text-[112px] font-bold leading-[0.85] tracking-[-0.04em] text-pkg-graphite">
              PKGFF<br/>
              <span className="text-gray-200">24230V1</span>
            </h1>
            
            <p className="max-w-md text-lg text-gray-500 font-light leading-relaxed">
              Advanced Lithium-ion powertrain engineered for high-intensity logistics operations. 
              Zero maintenance, rapid charge-and-go technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <button className="bg-pkg-red text-white px-8 py-5 text-sm font-bold uppercase tracking-widest shadow-xl shadow-red-200/50 hover:bg-black transition-all active:scale-95">
                Request RFQ Quote
              </button>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Technical Line</span>
                <span className="text-lg font-bold text-pkg-graphite">+84 24 3999 XXXX</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Manufacturing</div>
                <div className="text-sm font-bold text-pkg-graphite">ISO 9001:2015 Cert.</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Warranty</div>
                <div className="text-sm font-bold text-pkg-graphite">5-Year Performance</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">OEM Partners</div>
                <div className="text-sm font-bold text-pkg-graphite">Linde, Yale, Toyota</div>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              {/* Product Placeholder Visual */}
              <div className="relative w-[85%] h-[85%]">
                {/* Visual shadow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/10 blur-[40px] rounded-full" />
                
                {/* Main Product Render Placeholder */}
                <div className="w-full h-full bg-linear-to-tr from-gray-100 to-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center relative group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-pkg-red/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  {/* Mock Battery Case */}
                  <div className="w-64 h-80 bg-pkg-graphite rounded-xl relative flex flex-col items-center p-6 shadow-2xl">
                     <div className="w-full h-2 rounded-full bg-pkg-red mb-8 animate-pulse" />
                     <div className="flex-1 w-full border border-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-4xl font-black text-gray-800 tracking-tighter">PKG</span>
                     </div>
                     <div className="mt-4 flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="w-2 h-2 rounded-full bg-gray-700" />
                        <div className="w-2 h-2 rounded-full bg-gray-700" />
                     </div>
                  </div>

                  <div className="absolute bottom-12 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] font-black text-gray-300">Advanced Industrial Series</p>
                  </div>
                </div>

                {/* Floating Indicators */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Battery Status</p>
                      <p className="text-sm font-bold text-gray-800">Operational Peak</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
