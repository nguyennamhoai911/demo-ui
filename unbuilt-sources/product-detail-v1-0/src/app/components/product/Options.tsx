import { ArrowUpRight } from "lucide-react";
import { PRODUCT } from "./data";

export function Options() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Cùng dòng sản phẩm</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Family pin lithium 24V cho xe nâng
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
            Chọn dung lượng phù hợp với chu kỳ vận hành. Cùng kích thước khoang ắc quy, cùng hệ BMS, dễ dàng nâng cấp khi tải thay đổi.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-3">
          {PRODUCT.options.map((o) => (
            <div
              key={o.name}
              className={`relative border p-5 transition group ${
                o.current
                  ? "border-[#E11C2B] bg-[#E11C2B]/[0.03]"
                  : "border-neutral-200 hover:border-neutral-900 bg-white"
              }`}
            >
              {o.current && (
                <span className="absolute -top-px left-0 inline-flex items-center bg-[#E11C2B] text-white text-[10px] tracking-widest uppercase px-2 py-1">
                  Đang xem
                </span>
              )}
              <div className="text-xs text-neutral-500 tracking-wider uppercase mt-3">{o.name}</div>
              <div className="mt-3 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
                {o.label}
              </div>
              <div className="mt-4 space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between"><span>Năng lượng</span><span className="text-neutral-900">{o.energy}</span></div>
                <div className="flex justify-between"><span>Khối lượng</span><span className="text-neutral-900">{o.weight}</span></div>
              </div>
              <a
                href="#"
                className={`mt-5 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase transition ${
                  o.current ? "text-[#E11C2B]" : "text-neutral-700 group-hover:text-[#E11C2B]"
                }`}
              >
                Xem chi tiết <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
