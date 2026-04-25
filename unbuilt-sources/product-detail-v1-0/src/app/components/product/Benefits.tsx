import { PRODUCT } from "./data";

export function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Lợi ích nổi bật</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Vì sao đội vận hành chọn pin lithium PKG?
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Mỗi cell, mỗi mạch BMS đều được PKG kiểm tra trên dây chuyền 100% trước khi xuất xưởng. Chúng tôi không chỉ bán pin — chúng tôi cam kết uptime cho đội xe của bạn.
            </p>
          </div>

          <ol className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {PRODUCT.benefits.map((b, i) => (
              <li key={i} className="grid grid-cols-[64px_1fr] gap-6 py-6 group">
                <div className="text-[#E11C2B] tracking-tight" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-neutral-900" style={{ fontSize: "1.15rem", fontWeight: 500 }}>
                    {b.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
