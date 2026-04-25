import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, FileText, Menu, X, ChevronRight } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl tracking-tighter">PKG</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-pkg-black">BATTERY</span>
            <span className="text-[10px] tracking-widest text-pkg-dark-gray/60 uppercase">Industrial Power</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium hover:text-pkg-red transition-colors">Sản phẩm</a>
          <a href="#" className="font-medium hover:text-pkg-red transition-colors">Giải pháp</a>
          <a href="#" className="font-medium hover:text-pkg-red transition-colors">Dự án</a>
          <a href="#" className="font-medium hover:text-pkg-red transition-colors">Tài liệu</a>
          <button className="bg-pkg-black text-white px-6 py-2 rounded-sm font-medium hover:bg-pkg-red transition-all flex items-center gap-2 group">
            Báo giá <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export function StickyCTA() {
  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
        <CTAButton icon={<Phone />} label="Hotline" color="bg-pkg-black" />
        <CTAButton icon={<MessageCircle />} label="Zalo" color="bg-[#0068FF]" />
        <CTAButton icon={<FileText />} label="Báo giá" color="bg-pkg-red" />
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden grid grid-cols-3 bg-white border-t border-pkg-gray">
        <MobileCTAItem icon={<Phone className="w-5 h-5" />} label="Gọi điện" />
        <MobileCTAItem icon={<MessageCircle className="w-5 h-5 text-[#0068FF]" />} label="Zalo" />
        <MobileCTAItem icon={<FileText className="w-5 h-5 text-pkg-red" />} label="Báo giá" />
      </div>
    </>
  );
}

function CTAButton({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05, x: -5 }}
      className={`${color} text-white p-4 rounded-lg shadow-xl flex items-center gap-3 overflow-hidden group min-w-[60px] hover:min-w-[160px] transition-all duration-300 ease-in-out relative`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">{label}</span>
    </motion.button>
  );
}

function MobileCTAItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center py-3 gap-1 active:bg-pkg-gray transition-colors">
      {icon}
      <span className="text-[10px] font-bold uppercase text-pkg-dark-gray">{label}</span>
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-pkg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl tracking-tighter">PKG</span>
            </div>
            <span className="font-display font-bold text-2xl">BATTERY</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Nhà cung cấp giải pháp lưu trữ năng lượng chuyên nghiệp. Chúng tôi tập trung vào công nghệ lithium an toàn, hiệu suất cao cho công nghiệp.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pkg-red hover:border-pkg-red transition-all cursor-pointer">
               <Phone className="w-4 h-4" />
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pkg-red hover:border-pkg-red transition-all cursor-pointer">
               <MessageCircle className="w-4 h-4" />
             </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Sản phẩm</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe nâng điện</a></li>
            <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe golf</a></li>
            <li><a href="#" className="hover:text-pkg-red transition-colors">Pin Robot AGV/AMR</a></li>
            <li><a href="#" className="hover:text-pkg-red transition-colors">Hệ thống lưu trữ ESS</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Hotline: 09xx xxx xxx</li>
            <li>Email: info@pkgbattery.com</li>
            <li>Địa chỉ: Khu công nghiệp, TP. HCM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© 2026 PKG Battery. Toàn quyền bảo lưu.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
        </div>
      </div>
    </footer>
  );
}
