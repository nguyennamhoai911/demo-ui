import { useState } from 'react';
import { CATEGORIES } from '../types';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function FilterBar() {
  const [active, setActive] = useState("Tất cả");

  return (
    <div className="sticky top-[86px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 mb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-6 custom-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative text-sm font-semibold whitespace-nowrap uppercase tracking-widest transition-all duration-300",
                active === cat ? "text-pkg-red" : "text-gray-400 hover:text-pkg-charcoal"
              )}
            >
              {cat}
              {active === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-6 left-0 right-0 h-[2px] bg-pkg-red"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
