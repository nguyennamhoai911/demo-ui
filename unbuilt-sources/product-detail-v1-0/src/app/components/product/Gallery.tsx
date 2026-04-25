import { Play, ZoomIn } from "lucide-react";
import { PRODUCT } from "./data";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Gallery({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Gallery chi tiết</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Sản phẩm dưới mọi góc nhìn
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
            Click vào bất kỳ ảnh nào để mở lightbox độ phân giải cao. Ảnh kỹ thuật, lắp đặt thực tế và video vận hành.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PRODUCT.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => onOpen(i)}
              className="group relative aspect-square overflow-hidden border border-neutral-200 bg-neutral-50"
            >
              <ImageWithFallback
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 text-neutral-900 px-2 py-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              {g.type === "video" ? (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#E11C2B] text-white">
                    <Play className="w-5 h-5" fill="white" />
                  </span>
                </span>
              ) : (
                <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 bg-white/90 text-neutral-900 opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn className="w-4 h-4" />
                </span>
              )}
              <span className="absolute bottom-3 left-3 right-12 text-[11px] text-white opacity-0 group-hover:opacity-100 transition truncate">
                {g.alt}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
