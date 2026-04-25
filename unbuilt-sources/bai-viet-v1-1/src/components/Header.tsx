import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-gray-100" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm">
            <span className="text-white font-display font-bold text-xl">P</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-xl tracking-tighter">PKG BATTERY</span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-gray-500">INDUSTRIAL SOLUTIONS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {["Sản phẩm", "Giải pháp", "Kiến thức", "Về chúng tôi"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={cn(
                "text-sm font-medium uppercase tracking-wider hover:text-pkg-red transition-colors",
                item === "Kiến thức" ? "text-pkg-red" : "text-pkg-charcoal"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium border-r border-gray-200 pr-6">
            <Globe className="w-4 h-4" />
            <span className="cursor-pointer hover:text-pkg-red">VI</span>
            <span className="text-gray-300">|</span>
            <span className="cursor-pointer hover:text-pkg-red">EN</span>
          </div>
          
          <button className="hidden sm:flex items-center gap-2 bg-pkg-charcoal text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-pkg-red transition-all group">
            <PhoneCall className="w-4 h-4 group-hover:animate-bounce" />
            Nhận tư vấn
          </button>

          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
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
            className="fixed inset-0 bg-white z-[60] p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {["Sản phẩm", "Giải pháp", "Kiến thức", "Dự án", "Về chúng tôi", "Liên hệ"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-3xl font-display font-bold uppercase tracking-tight hover:text-pkg-red"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="absolute bottom-12 left-8 right-8">
               <button className="w-full bg-pkg-red text-white py-4 font-bold text-lg rounded-sm uppercase tracking-widest">
                 Yêu cầu báo giá
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
