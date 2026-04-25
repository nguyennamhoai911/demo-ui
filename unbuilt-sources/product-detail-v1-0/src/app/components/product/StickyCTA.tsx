import { Phone, MessageCircle, Send } from "lucide-react";

export function StickyCTA() {
  return (
    <>
      {/* Desktop side rail */}
      <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-30 flex-col gap-2">
        <a href="#contact" className="group inline-flex items-center gap-2 bg-[#E11C2B] hover:bg-[#c2161f] text-white px-4 h-11 shadow-lg shadow-[#E11C2B]/20 transition">
          <Send className="w-4 h-4" /> <span className="text-sm">Báo giá</span>
        </a>
        <a href="tel:19000000" className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-4 h-11 transition">
          <Phone className="w-4 h-4" /> <span className="text-sm">Hotline</span>
        </a>
        <a href="#" className="inline-flex items-center gap-2 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 px-4 h-11 transition">
          <MessageCircle className="w-4 h-4" /> <span className="text-sm">Zalo</span>
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-neutral-200 grid grid-cols-3">
        <a href="tel:19000000" className="flex flex-col items-center justify-center gap-1 py-2.5 text-neutral-800 border-r border-neutral-200">
          <Phone className="w-4 h-4" /> <span className="text-[11px]">Gọi</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center gap-1 py-2.5 text-neutral-800 border-r border-neutral-200">
          <MessageCircle className="w-4 h-4" /> <span className="text-[11px]">Zalo</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#E11C2B] text-white">
          <Send className="w-4 h-4" /> <span className="text-[11px]">Báo giá</span>
        </a>
      </div>
    </>
  );
}
