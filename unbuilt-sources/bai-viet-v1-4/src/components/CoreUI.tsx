
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Search, Globe, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Header ---
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-rose-600 flex items-center justify-center font-bold text-white text-xl rounded-sm">P</div>
          <div className="flex flex-col leading-tight">
            <span className={cn("font-bold text-lg tracking-tight", isScrolled ? "text-gray-900" : "text-gray-900")}>PKG BATTERY</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-rose-600 uppercase">Power Solutions</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {['Sản phẩm', 'Giải pháp', 'Kiến thức', 'Dự án', 'Về chúng tôi'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={cn(
                "hover:text-rose-600 transition-colors relative group",
                item === 'Kiến thức' ? "text-rose-600" : "text-gray-800"
              )}
            >
              {item}
              {item === 'Kiến thức' && (
                <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-200 pr-4 mr-2">
            <Globe size={14} className="text-gray-400" />
            <span className="text-rose-600">VI</span>
            <span>/</span>
            <span className="hover:text-gray-900 cursor-pointer transition-colors">EN</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 text-xs font-bold hover:bg-rose-600 transition-all active:scale-95">
            <PhoneCall size={14} />
            LIÊN HỆ TƯ VẤN
          </button>
          <button 
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-rose-600 flex items-center justify-center font-bold text-white rounded-sm">P</div>
                <span className="font-bold">PKG BATTERY</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {['Sản phẩm', 'Giải pháp', 'Kiến thức', 'Dự án', 'Về chúng tôi'].map(item => (
                <a key={item} href="#" className="flex justify-between items-center border-b border-gray-100 pb-4">
                  {item}
                  <ChevronRight size={20} className="text-rose-600" />
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <button className="w-full bg-rose-600 text-white py-4 font-bold rounded-sm flex items-center justify-center gap-2">
                <PhoneCall size={18} />
                LIÊN HỆ TƯ VẤN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --- Hero ---
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decors */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,#e11d480a_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-50/30 rounded-full blur-3xl -z-10 animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-bold tracking-widest uppercase mb-6 rounded-full">
              <span className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-ping" />
              KNOWLEDGE CENTER
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              TRUNG TÂM KIẾN THỨC <br />
              <span className="text-rose-600">PIN CÔNG NGHIỆP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Cập nhật chuyên sâu về công nghệ Lithium, tin tức doanh nghiệp và giải pháp năng lượng tối ưu dành riêng cho thị trường công nghiệp B2B Việt Nam.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
