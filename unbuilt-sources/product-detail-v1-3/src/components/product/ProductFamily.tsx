/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";

const family = [
  { id: "150", name: "PKGFF-24150", capacity: 150, voltage: 24, size: "Compact" },
  { id: "200", name: "PKGFF-24200", capacity: 200, voltage: 24, size: "Standard" },
  { id: "230", name: "PKGFF-24230", capacity: 230, voltage: 24, size: "Long-range", active: true },
  { id: "280", name: "PKGFF-24280", capacity: 280, voltage: 24, size: "Max Power" },
  { id: "340", name: "PKGFF-24340", capacity: 340, voltage: 24, size: "Extended" },
];

export default function ProductFamily() {
  const [selected, setSelected] = useState("230");

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
           <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-pkg-red mb-2">Systems Scaling</div>
           <h2 className="text-4xl font-bold tracking-tight text-pkg-graphite">Product Family Lineup</h2>
        </div>

        <div className="relative">
           {/* Gradient Curve Visualization (Simplified) */}
           <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 z-0" />
           
           <div className="flex justify-between items-end relative z-10 py-12">
              {family.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className="flex flex-col items-center group relative"
                >
                   {/* Capacity node */}
                   <motion.div 
                     animate={{ 
                        scale: selected === item.id ? 1.2 : 1,
                        backgroundColor: selected === item.id ? "#D21E1E" : "#FFF" 
                     }}
                     className={`w-4 h-4 rounded-full border-2 border-pkg-red mb-8 transition-colors flex items-center justify-center`}
                   >
                      {selected === item.id && <div className="w-1 h-1 bg-white rounded-full" />}
                   </motion.div>

                   <div className={`transition-all duration-300 flex flex-col items-center ${selected === item.id ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"}`}>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">{item.size}</span>
                      <span className="text-lg font-bold text-pkg-graphite">{item.capacity}Ah</span>
                      <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded mt-2">{item.name}</span>
                   </div>

                   {/* Active highlight bar */}
                   {selected === item.id && (
                     <motion.div 
                        layoutId="activeTab"
                        className="absolute -top-1 w-full flex justify-center"
                     >
                        <div className="w-8 h-1 bg-pkg-red rounded-full" />
                     </motion.div>
                   )}
                </button>
              ))}
           </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
           <div className="px-6 py-2 bg-gray-50 rounded-full border border-gray-100 text-xs font-bold text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
              Tùy chọn: Tích hợp Module 4G theo dõi từ xa
           </div>
           <div className="px-6 py-2 bg-gray-50 rounded-full border border-gray-100 text-xs font-bold text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              Hỗ trợ: Sạc nhanh 1 giờ (Special request)
           </div>
        </div>
      </div>
    </section>
  );
}
