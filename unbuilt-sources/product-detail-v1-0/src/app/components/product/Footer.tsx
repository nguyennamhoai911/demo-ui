export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#E11C2B] text-white" style={{ fontWeight: 700 }}>P</span>
            <span className="tracking-[0.18em] text-white" style={{ fontWeight: 600 }}>PKG BATTERY</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Pin lithium công nghiệp cho xe nâng, kho vận và hệ thống lưu trữ năng lượng. Thiết kế và lắp ráp tại Việt Nam.
          </p>
        </div>
        {[
          { title: "Sản phẩm", items: ["Pin xe nâng", "Pin AGV", "Pin ESS", "Pin tuỳ biến"] },
          { title: "Doanh nghiệp", items: ["Về PKG", "Nhà máy", "Tin tức", "Tuyển dụng"] },
          { title: "Liên hệ", items: ["1900 0000", "sales@pkgbattery.vn", "Zalo OA", "Đặt lịch tham quan"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="text-white text-xs tracking-[0.2em] uppercase">{c.title}</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span>© 2026 PKG Battery JSC. All rights reserved.</span>
          <span>CE · UN38.3 · IEC 62619</span>
        </div>
      </div>
    </footer>
  );
}
