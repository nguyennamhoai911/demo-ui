import { Menu, Search, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pkg-red flex items-center justify-center font-black text-white text-xl">P</div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter leading-none">PKG BATTERY</span>
              <span className="text-[10px] font-mono tracking-widest text-[#999] leading-none mt-1">INDUSTRIAL ENERGY</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Sản phẩm', 'Giải pháp', 'Kỹ thuật', 'Về chúng tôi', 'Tin tức'].map((item) => (
              <a key={item} href="#" className="font-semibold text-sm hover:text-pkg-red transition-colors tracking-tight uppercase">
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="p-2 text-gray-400 hover:text-pkg-red transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-bold text-gray-400 leading-none">HOTLINE</div>
                <div className="text-sm font-black tracking-tight leading-none mt-1">1900 60XX</div>
              </div>
              <div className="w-10 h-10 bg-pkg-gray rounded-sm flex items-center justify-center">
                <Phone className="w-5 h-5 text-pkg-red" />
              </div>
            </div>
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
