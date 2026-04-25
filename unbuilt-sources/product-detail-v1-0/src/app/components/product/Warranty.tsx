import { useState } from "react";
import { ShieldCheck, Plus, Minus, Phone } from "lucide-react";
import { PRODUCT } from "./data";

export function Warranty() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Chính sách bảo hành</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Cam kết kỹ thuật & bảo hành minh bạch
            </h2>

            <div className="mt-8 border border-neutral-200 p-6 bg-neutral-50">
              <ShieldCheck className="w-7 h-7 text-[#E11C2B]" />
              <div className="mt-4 text-neutral-900" style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}>
                36 <span className="text-base text-neutral-500" style={{ fontWeight: 400 }}>tháng</span>
              </div>
              <div className="mt-2 text-sm text-neutral-600">hoặc 4.000 chu kỳ ở 80% DOD</div>
              <a href="tel:19000000" className="mt-6 inline-flex items-center gap-2 text-sm text-[#E11C2B]">
                <Phone className="w-4 h-4" /> Hotline kỹ thuật 1900 0000
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-200">
            {PRODUCT.warranty.map((w, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-neutral-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[#E11C2B] text-xs tracking-widest" style={{ fontWeight: 600 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-neutral-900" style={{ fontSize: "1.05rem", fontWeight: 500 }}>{w.q}</span>
                    </span>
                    <span className="inline-flex items-center justify-center w-8 h-8 border border-neutral-300 text-neutral-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <p className="pb-5 pl-12 pr-4 text-neutral-600 leading-relaxed text-sm">{w.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
