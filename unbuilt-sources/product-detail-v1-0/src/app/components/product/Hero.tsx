import { useState } from "react";
import { ChevronRight, Maximize2, MessageCircle, Phone, Play } from "lucide-react";
import { PRODUCT } from "./data";
import { ProductStage } from "./ProductStage";
import { TechGrid } from "./TechGrid";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero({ onOpenLightbox }: { onOpenLightbox: (i: number) => void }) {
  const [active, setActive] = useState(0);
  const item = PRODUCT.gallery[active];

  return (
    <section className="relative bg-white overflow-hidden border-b border-neutral-200">
      <TechGrid />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-20"
        style={{ background: "radial-gradient(closest-side, rgba(225,28,43,0.5), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <a href="#" className="hover:text-[#E11C2B]">Trang chủ</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-[#E11C2B]">Sản phẩm</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-[#E11C2B]">Pin lithium xe nâng</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-neutral-900">PKGFF-24230V1</span>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E11C2B]/30 bg-[#E11C2B]/5 text-[#E11C2B] px-3 h-8 text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-[#E11C2B] rounded-full" />
              {PRODUCT.category}
            </div>

            <h1 className="mt-5 text-neutral-900 leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              {PRODUCT.name}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-sm">
              <span className="text-neutral-500">Mã sản phẩm</span>
              <span className="px-2 py-1 bg-neutral-900 text-white tracking-wider" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                {PRODUCT.sku}
              </span>
            </div>

            <p className="mt-6 text-neutral-600 max-w-xl leading-relaxed" style={{ fontSize: "1.05rem" }}>
              {PRODUCT.shortDesc}
            </p>

            {/* Quick KPIs */}
            <div className="mt-8 grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 max-w-md">
              {[
                ["230", "Ah"],
                ["5.8", "kWh"],
                ["25.6", "V"],
              ].map(([v, u]) => (
                <div key={v} className="bg-white p-4">
                  <div className="text-neutral-900" style={{ fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.02em" }}>{v}</div>
                  <div className="text-xs text-neutral-500 tracking-wider uppercase mt-1">{u}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#E11C2B] hover:bg-[#c2161f] text-white px-6 h-12 transition">
                <MessageCircle className="w-4 h-4" /> Yêu cầu báo giá
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-6 h-12 transition">
                <Phone className="w-4 h-4" /> Tư vấn kỹ thuật
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 hover:border-neutral-900 px-6 h-12 transition">
                <MessageCircle className="w-4 h-4" /> Nhắn Zalo
              </a>
            </div>
          </div>

          {/* Right: product image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative">
              <ProductStage src={item.src} alt={item.alt} />
              <button
                onClick={() => onOpenLightbox(active)}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-neutral-200 px-3 h-9 text-xs text-neutral-700 hover:border-[#E11C2B] hover:text-[#E11C2B] transition"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Toàn màn hình
              </button>
            </div>
            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              {PRODUCT.gallery.slice(0, 5).map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square overflow-hidden border transition ${
                    i === active ? "border-[#E11C2B]" : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <ImageWithFallback src={g.src} alt={g.alt} className="w-full h-full object-cover" />
                  {g.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-4 h-4 text-white" fill="white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
