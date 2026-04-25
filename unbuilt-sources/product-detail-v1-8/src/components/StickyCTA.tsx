import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <CTAButton icon={<Phone />} label="Gọi điện" color="bg-pkg-graphite" />
        <CTAButton icon={<MessageCircle />} label="Zalo" color="bg-[#0068FF]" />
        <CTAButton icon={<FileText />} label="Báo giá" color="bg-pkg-red" pulse />
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 p-3 flex gap-2"
          >
            <a href="tel:#" className="flex-1 py-3 bg-pkg-graphite text-white font-bold rounded-sm flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Gọi ngay
            </a>
            <a href="#" className="flex-1 py-3 bg-[#0068FF] text-white font-bold rounded-sm flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Zalo
            </a>
            <a href="#contact" className="flex-[1.5] py-3 bg-pkg-red text-white font-bold rounded-sm flex items-center justify-center gap-2 overflow-hidden relative">
              <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_2s_infinite]"></div>
              <FileText className="w-5 h-5" /> Nhận báo giá
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CTAButton({ icon, label, color, pulse }: { icon: React.ReactNode, label: string, color: string, pulse?: boolean }) {
  return (
    <button className={`${color} p-4 text-white rounded-full shadow-xl hover:scale-110 transition-all group relative flex items-center gap-0 hover:gap-3 hover:pr-6 overflow-hidden max-w-[56px] hover:max-w-[200px]`}>
      <div className="flex-shrink-0">{icon}</div>
      <span className="font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase text-xs tracking-widest">{label}</span>
      {pulse && <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-20 -z-10"></div>}
    </button>
  );
}
