import { Search, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 overflow-hidden technical-grid min-h-[70vh] flex items-center">
      {/* Background visual elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-charcoal/5 rounded-full blur-[80px] -z-10" />
      
      {/* Abstract Battery Pattern Overlay (Decorative) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 100 H700 V700 H100 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M200 100 V700 M300 100 V700 M400 100 V700 M500 100 V700 M600 100 V700" stroke="currentColor" strokeWidth="1" />
          <path d="M100 200 H700 M100 300 H700 M100 400 H700 M100 500 H700 M100 600 H700" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-red"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Knowledge Center</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.95] mb-8 text-charcoal">
              TRUNG TÂM KIẾN THỨC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-charcoal">
                PIN CÔNG NGHIỆP
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mb-12 leading-relaxed">
              Cập nhật kiến thức kỹ thuật, giải pháp ứng dụng, dự án thực tế và tài liệu chuyên sâu 
              từ đội ngũ chuyên gia hàng đầu tại <span className="text-charcoal font-bold">PKG Battery</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:w-[500px] group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
                </div>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Tìm kiếm bài viết, tài liệu, dự án..."
                  className="w-full bg-white border border-gray-200 py-5 pl-14 pr-6 rounded-sm outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all text-sm font-medium shadow-sm"
                />
              </div>
              
              <button id="cta-hero" className="flex items-center justify-center gap-3 w-full md:w-auto bg-charcoal hover:bg-black text-white px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded-sm group">
                Xem Tài Liệu Kỹ Thuật
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-charcoal">150+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Bài viết kỹ thuật</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-charcoal">45+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Dự án thực tế</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-charcoal">12+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tài liệu chuyên sâu</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
