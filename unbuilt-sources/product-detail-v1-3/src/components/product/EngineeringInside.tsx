/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const parts = [
  { name: "Grade A Cells", pos: "top-1/4 left-1/4", desc: "Premium LFP cells from world-class suppliers" },
  { name: "Master BMS", pos: "top-1/2 right-1/4", desc: "AI-optimized state-of-charge calculation" },
  { name: "Thermal Shield", pos: "bottom-1/4 left-1/3", desc: "Multi-layer insulation for fire prevention" },
  { name: "Heavy Housing", pos: "bottom-1/3 right-1/3", desc: "4mm powder-coated steel structural casing" },
];

export default function EngineeringInside() {
  return (
    <section className="py-32 bg-pkg-graphite relative overflow-hidden text-white">
      {/* Decorative rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-pkg-red/10 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pkg-red font-black tracking-[0.5em] uppercase text-xs mb-4"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Sức mạnh từ bên trong
          </motion.h2>
          <p className="text-white/40 max-w-2xl font-light text-lg">
            Hợp tác cùng các chuyên gia hàng đầu để tạo nên những bộ pin lithium bền bỉ nhất thế giới.
            Chi tiết đến từng cell pin và từng dòng lệnh trong BMS.
          </p>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Main Visual Center (Conceptual Battery Explosion View) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-4xl relative"
          >
             {/* Battery Core Visual Placeholder */}
             <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-tr from-pkg-red/10 to-transparent" />
                <div className="z-10 flex flex-col items-center">
                   <div className="w-64 h-32 bg-white/10 rounded-lg border border-white/20 animate-pulse flex items-center justify-center">
                      <span className="text-white/20 font-black tracking-tighter text-4xl">CORE V3</span>
                   </div>
                   <div className="mt-8 flex gap-4">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-12 h-20 bg-pkg-red/20 border border-pkg-red/40 rounded-sm" />
                      ))}
                   </div>
                </div>
                
                {/* Scanline animation */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent h-20 w-full animate-scan" style={{ top: '-100%' }} />
             </div>

             {/* Callouts */}
             {parts.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.2) }}
                  className={`absolute ${part.pos} hidden lg:block`}
                >
                   <div className="flex flex-col items-start group">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-pkg-red shadow-[0_0_15px_rgba(210,30,30,0.8)]" />
                        <div className="h-px w-24 bg-pkg-red/30" />
                        <span className="font-bold text-sm tracking-widest uppercase">{part.name}</span>
                      </div>
                      <div className="ml-5 mt-2 pl-4 border-l border-white/10">
                         <p className="text-xs text-white/40 font-medium">{part.desc}</p>
                      </div>
                   </div>
                </motion.div>
             ))}
          </motion.div>
        </div>

        <div className="mt-20 grid lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
           {[
             { label: "IP Rating", value: "IP67", sub: "Dust & Water proof" },
             { label: "Cell Lifecycle", value: "6000+", sub: "80% DoD capacity" },
             { label: "Connectivity", value: "IoT/4G", sub: "Cloud Monitoring" },
             { label: "Stability", value: "±0.1V", sub: "Voltage variance" },
           ].map((item, i) => (
             <div key={i} className="p-10 flex flex-col items-center">
               <span className="text-[10px] uppercase font-bold text-white/30 tracking-[0.3em] mb-4">{item.label}</span>
               <span className="text-3xl font-black mb-1">{item.value}</span>
               <span className="text-xs text-white/20 italic">{item.sub}</span>
             </div>
           ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          from { transform: translateY(0); }
          to { transform: translateY(800px); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
