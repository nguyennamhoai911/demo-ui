import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const NAV = [
  { label: "Sản phẩm", hasMenu: true },
  { label: "Giải pháp", hasMenu: true },
  { label: "Dự án" },
  { label: "Kiến thức", active: true },
  { label: "Về PKG" },
  { label: "Liên hệ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-md bg-[#E2231A] flex items-center justify-center shadow-[0_4px_14px_rgba(226,35,26,0.35)]">
            <span className="text-white tracking-tight" style={{ fontWeight: 700, fontSize: 14 }}>
              PKG
            </span>
            <div className="absolute -inset-px rounded-md ring-1 ring-white/10" />
          </div>
          <div className="leading-none hidden sm:block">
            <div className="text-[#0B0B0F] tracking-tight" style={{ fontWeight: 600, fontSize: 15 }}>
              PKG Battery
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#717182] mt-0.5">
              Industrial Power Solutions
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.label}
              className={`relative px-3.5 py-2 text-sm flex items-center gap-1 transition-colors ${
                item.active ? "text-[#0B0B0F]" : "text-[#3A3A45] hover:text-[#0B0B0F]"
              }`}
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              {item.active && (
                <span className="absolute left-3.5 right-3.5 -bottom-px h-[2px] bg-[#E2231A]" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center text-xs text-[#3A3A45] mr-2">
            <button className="px-2 py-1 text-[#0B0B0F]">VI</button>
            <span className="text-black/15">|</span>
            <button className="px-2 py-1 text-[#717182] hover:text-[#0B0B0F]">EN</button>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-[#0B0B0F] text-white text-[13px] hover:bg-[#E2231A] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Liên hệ tư vấn
          </a>
          <button
            className="lg:hidden w-10 h-10 -mr-2 flex items-center justify-center text-[#0B0B0F]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <div className="px-5 py-4 flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.label}
                className={`text-left py-3 border-b border-black/5 text-sm flex items-center justify-between ${
                  n.active ? "text-[#E2231A]" : "text-[#0B0B0F]"
                }`}
              >
                {n.label}
                {n.hasMenu && <ChevronDown className="w-4 h-4 opacity-50" />}
              </button>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center h-11 rounded-full bg-[#E2231A] text-white text-sm"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
