import React from 'react';
import { CATEGORIES } from '../types';
import { motion } from 'motion/react';

interface CategoryTabsProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export const CategoryTabs = ({ activeId, onSelect }: CategoryTabsProps) => {
  return (
    <div className="sticky top-[72px] z-40 bg-zinc-50 border-b border-zinc-200 shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`relative py-5 px-6 text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeId === cat.id ? 'text-brand-red' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              {cat.name}
              {activeId === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
