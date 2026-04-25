import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

interface HeroProps {
  isEmpty?: boolean;
}

export const Hero = ({ isEmpty }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-brand-offwhite overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-100/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-red-100 text-brand-red text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 leading-[1.1] mb-6">
              {isEmpty 
                ? "Tài liệu kỹ thuật & Tin tức năng lượng" 
                : "Thư viện kiến thức về giải pháp Pin Lithium công nghiệp"}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
              Cập nhật những xu hướng công nghệ mới nhất, hướng dẫn kỹ thuật chuyên sâu và các dự án năng lượng tiêu biểu từ đội ngũ kỹ sư PKG Battery.
            </p>
          </motion.div>

          {/* Search bar inside Hero as requested (secondary but functional) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-md relative"
          >
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Tìm kiến thức, dự án, tin tức..." 
                className="w-full bg-white border border-zinc-200 py-4 pl-12 pr-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-brand-red transition-colors" size={20} />
            </div>
            <div className="mt-3 flex gap-4 text-xs text-zinc-500 overflow-x-auto scrollbar-hide">
              <span className="whitespace-nowrap">Đang tìm kiếm nhiều:</span>
              <a href="#" className="whitespace-nowrap hover:text-brand-red underline">Pin xe nâng</a>
              <a href="#" className="whitespace-nowrap hover:text-brand-red underline">BMS công nghệ cao</a>
              <a href="#" className="whitespace-nowrap hover:text-brand-red underline">Bảo trì pin</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
