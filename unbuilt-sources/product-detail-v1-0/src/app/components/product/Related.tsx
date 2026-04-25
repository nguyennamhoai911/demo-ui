import { ArrowUpRight } from "lucide-react";
import { PRODUCT } from "./data";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Related() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Sản phẩm liên quan</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Có thể bạn cũng quan tâm
            </h2>
          </div>
          <a href="#" className="text-sm text-neutral-700 hover:text-[#E11C2B] inline-flex items-center gap-1">
            Xem toàn bộ catalogue <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCT.related.map((p) => (
            <a key={p.name} href="#" className="group bg-white border border-neutral-200 hover:border-neutral-900 transition flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <ImageWithFallback src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="text-[10px] tracking-widest uppercase bg-neutral-900 text-white px-2 py-1">{p.v}</span>
                  <span className="text-[10px] tracking-widest uppercase bg-white border border-neutral-200 text-neutral-800 px-2 py-1">{p.ah}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-neutral-900" style={{ fontWeight: 500 }}>{p.name}</div>
                <div className="text-sm text-neutral-600 mt-1">{p.desc}</div>
                <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-neutral-700 group-hover:text-[#E11C2B]">
                  Xem chi tiết <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
