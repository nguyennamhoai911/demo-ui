import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sản phẩm', href: '#' },
    { name: 'Giải pháp', href: '#' },
    { name: 'Khách hàng', href: '#' },
    { name: 'Kiến thức', href: '#', active: true },
    { name: 'Giới thiệu', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-zinc-200' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-xl tracking-tighter">PKG</span>
          </div>
          <div className={`font-display font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-black' : 'text-zinc-900'}`}>
            BATTERY
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                link.active ? 'text-brand-red' : isScrolled ? 'text-zinc-600' : 'text-zinc-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`p-2 transition-colors ${isScrolled ? 'text-zinc-600 hover:text-black' : 'text-zinc-800 hover:text-brand-red'}`}>
            <Search size={20} />
          </button>
          <button className="bg-brand-red text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-red-700 transition-all active:scale-95 shadow-md shadow-red-500/20">
            LIÊN HỆ BÁO GIÁ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-zinc-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-base font-semibold py-2 ${
                    link.active ? 'text-brand-red' : 'text-zinc-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-100 flex flex-col gap-4">
                <button className="flex items-center gap-2 text-zinc-600 font-medium">
                  <Search size={20} />
                  Tìm kiếm bài viết
                </button>
                <button className="w-full bg-brand-red text-white py-3 rounded-sm font-bold">
                  LIÊN HỆ BÁO GIÁ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
