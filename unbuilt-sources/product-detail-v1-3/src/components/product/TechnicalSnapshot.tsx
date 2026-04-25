/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const stats = [
  { label: "Dung lượng thực", value: "230", unit: "Ah", sub: "Standard capacity" },
  { label: "Năng lượng lưu trữ", value: "5.8", unit: "kWh", sub: "Available energy" },
  { label: "Điện áp danh định", value: "25.6", unit: "V", sub: "Standard voltage" },
  { label: "Thời gian sạc", value: "2–4", unit: "h", sub: "Rapid charging" },
];

export default function TechnicalSnapshot() {
  return (
    <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-pkg-red mb-2">Engineering Dashboard</div>
          <h2 className="text-4xl font-bold tracking-tight text-pkg-graphite">Technical Core Specs</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-sm">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group cursor-default"
            >
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-pkg-red transition-colors">
                {stat.label}
              </span>
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-6xl lg:text-7xl font-light italic text-pkg-graphite tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xl font-bold uppercase text-pkg-red not-italic ml-1">
                  {stat.unit}
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium italic">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
             <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-pkg-red font-bold text-xs">
                01
             </div>
             <div>
                <h4 className="font-bold mb-1 text-pkg-graphite">Industrial Cells</h4>
                <p className="text-sm text-gray-500 font-light">Grade A LFP cells with massive lifecycle capacity.</p>
             </div>
          </div>
          <div className="flex items-start space-x-4">
             <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-pkg-red font-bold text-xs">
                02
             </div>
             <div>
                <h4 className="font-bold mb-1 text-pkg-graphite">Smart BMS v4</h4>
                <p className="text-sm text-gray-500 font-light">Active balancing and real-time thermal management.</p>
             </div>
          </div>
          <div className="flex items-start space-x-4">
             <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-pkg-red font-bold text-xs">
                03
             </div>
             <div>
                <h4 className="font-bold mb-1 text-pkg-graphite">Rapid Connect</h4>
                <p className="text-sm text-gray-500 font-light">Full compatibility with original forklift OEM interfaces.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
