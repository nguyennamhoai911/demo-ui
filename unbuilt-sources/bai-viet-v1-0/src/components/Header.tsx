import { useState, useEffect } from "react";
import { Search, Globe, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sản phẩm", href: "#" },
    { name: "Giải pháp", href: "#" },
    { name: "Kiến thức", href: "#", active: true },
    { name: "Tài liệu", href: "#" },
    { name: "Về PKG", href: "#" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-header py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl tracking-tighter">PKG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-charcoal font-bold tracking-tight text-lg leading-none">BATTERY</span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase font-medium">Power Solutions</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-all relative ${
                link.active ? "text-brand-red" : "text-charcoal hover:text-brand-red"
              }`}
            >
              {link.name}
              {link.active && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-red"
                />
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button id="search-toggle" className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <Search size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer group">
            <Globe size={16} className="text-gray-500 group-hover:text-brand-red transition-colors" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-700">VI</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          <button id="cta-header" className="bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-all shadow-lg shadow-brand-red/10 cursor-pointer">
            Nhận Tư Vấn
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-charcoal hover:bg-gray-100 rounded-sm cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold tracking-tight text-charcoal uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <button className="w-full bg-brand-red text-white py-4 font-bold uppercase tracking-widest rounded-sm">
                Nhận Tư Vấn Kỹ Thuật
              </button>
              <div className="flex justify-center gap-6">
                <span className="text-sm font-bold border-b-2 border-brand-red">VIỆT NAM</span>
                <span className="text-sm font-bold text-gray-400">ENGLISH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
