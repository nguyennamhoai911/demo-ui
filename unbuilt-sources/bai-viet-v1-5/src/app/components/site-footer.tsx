import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const COLS = [
  {
    title: "Sản phẩm",
    items: ["Pin lithium xe nâng", "Pin AGV / Robot", "Pin xe điện du lịch", "Lưu trữ năng lượng", "Trạm sạc", "OEM / ODM"],
  },
  {
    title: "Giải pháp",
    items: ["Logistics & Kho vận", "Sản xuất & Nhà máy", "Năng lượng tái tạo", "Khu công nghiệp"],
  },
  {
    title: "Tài nguyên",
    items: ["Kiến thức kỹ thuật", "Tin doanh nghiệp", "Dự án thực tế", "Tải catalogue"],
  },
];

const LATEST = [
  "PKG mở rộng dây chuyền pack lithium giai đoạn 2",
  "Bàn giao 36 pack lithium cho nhà máy Bắc Ninh",
  "PKG tham gia Vietnam Manufacturing Expo 2026",
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B0B0F] text-white">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-md bg-[#E2231A] flex items-center justify-center">
                <span style={{ fontWeight: 700, fontSize: 14 }}>PKG</span>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>PKG Battery</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 mt-0.5">
                  Industrial Power Solutions
                </div>
              </div>
            </div>
            <p className="mt-5 text-[13.5px] text-white/65 leading-relaxed max-w-[340px]">
              Nhà sản xuất pin công nghiệp B2B tại Việt Nam. Thiết kế, sản xuất và bàn giao
              giải pháp pin lithium cho doanh nghiệp.
            </p>

            <div className="mt-7 space-y-3 text-[13px] text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E2231A]" />
                Nhà máy: KCN Phố Nối A, Hưng Yên, Việt Nam
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E2231A]" /> 1900 0000
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E2231A]" /> sales@pkgbattery.vn
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-[13.5px] text-white/85 hover:text-[#E2231A] transition-colors">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
              Cập nhật mới
            </div>
            <ul className="space-y-3">
              {LATEST.map((l) => (
                <li key={l}>
                  <a href="#" className="group flex items-start gap-2 text-[13px] text-white/85 hover:text-white">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#E2231A] flex-shrink-0" />
                    <span className="leading-snug">{l}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-[12px] text-white/55">
          <div>© 2026 PKG Battery JSC. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="lg:hidden fixed bottom-4 inset-x-4 z-40 h-12 rounded-full bg-[#E2231A] text-white text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(226,35,26,0.4)]"
      >
        <Phone className="w-4 h-4" /> Gọi tư vấn · Zalo · Liên hệ
      </a>
    </footer>
  );
}
