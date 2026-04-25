import { Phone, MessageCircle, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#E11C2B] text-white tracking-tight" style={{ fontWeight: 700 }}>
              P
            </span>
            <span className="tracking-[0.18em] text-neutral-900" style={{ fontWeight: 600 }}>PKG BATTERY</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-neutral-700">
            <a href="#" className="hover:text-[#E11C2B]">Sản phẩm</a>
            <a href="#" className="hover:text-[#E11C2B]">Giải pháp</a>
            <a href="#" className="hover:text-[#E11C2B]">Công nghệ</a>
            <a href="#" className="hover:text-[#E11C2B]">Dự án</a>
            <a href="#" className="hover:text-[#E11C2B]">Tin tức</a>
            <a href="#" className="hover:text-[#E11C2B]">Liên hệ</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a href="tel:19000000" className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-[#E11C2B]">
            <Phone className="w-4 h-4" /> 1900 0000
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#E11C2B] text-white px-4 h-10 hover:bg-[#c2161f] transition text-sm">
            <MessageCircle className="w-4 h-4" /> Yêu cầu báo giá
          </a>
          <button className="lg:hidden p-2 text-neutral-700"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  );
}
