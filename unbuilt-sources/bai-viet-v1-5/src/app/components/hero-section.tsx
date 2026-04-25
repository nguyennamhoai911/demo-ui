import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, Sparkles } from "lucide-react";

const CHIPS = [
  "Pin xe nâng",
  "AGV / Robot",
  "OEM / ODM",
  "Lưu trữ năng lượng",
  "Bảo trì pin",
];

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#F7F7F5]">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(226,35,26,0.18), transparent)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-white border border-black/10 text-[11px] uppercase tracking-[0.18em] text-[#3A3A45]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2231A]" />
              Knowledge Hub · Cập nhật hàng tuần
            </div>

            <h1
              className="mt-6 text-[#0B0B0F] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)", lineHeight: 1.05, fontWeight: 600 }}
            >
              Trung tâm kiến thức
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">pin công nghiệp</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[6px] bg-[#E2231A]/15" />
              </span>{" "}
              <span className="text-[#717182]">PKG Battery.</span>
            </h1>

            <p
              className="mt-6 max-w-[560px] text-[#3A3A45]"
              style={{ fontSize: 17, lineHeight: 1.6 }}
            >
              Cập nhật kiến thức kỹ thuật, hoạt động doanh nghiệp và giải pháp thực tế từ
              đội ngũ kỹ sư và nhà máy của PKG — nơi pin lithium, AGV và OEM được thiết kế
              cho doanh nghiệp Việt Nam.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {CHIPS.map((c, i) => (
                <button
                  key={c}
                  className={`h-9 px-4 rounded-full border text-[13px] transition-all ${
                    i === 0
                      ? "bg-[#0B0B0F] text-white border-[#0B0B0F]"
                      : "bg-white text-[#3A3A45] border-black/10 hover:border-[#0B0B0F] hover:text-[#0B0B0F]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#stream"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#E2231A] text-white text-sm hover:bg-[#0B0B0F] transition-colors shadow-[0_8px_24px_rgba(226,35,26,0.25)]"
              >
                Khám phá kiến thức
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 h-12 px-2 text-sm text-[#0B0B0F] border-b border-[#0B0B0F]/30 hover:border-[#E2231A] hover:text-[#E2231A] transition-colors"
              >
                Xem dự án thực tế
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-[#0B0B0F]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Nhà máy PKG Battery"
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 h-7 inline-flex items-center rounded-full bg-white/90 backdrop-blur text-[11px] tracking-wider uppercase text-[#0B0B0F]">
                  Nhà máy PKG · Hưng Yên
                </span>
                <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#E2231A]" />
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">
                  Featured story
                </div>
                <div className="mt-1.5" style={{ fontSize: 20, lineHeight: 1.25, fontWeight: 500 }}>
                  Mở rộng năng lực sản xuất pack lithium 2026
                </div>
              </div>
            </div>

            <div className="hidden lg:flex absolute -left-12 bottom-10 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-black/5 p-4 gap-3 items-center w-[260px]">
              <div className="w-12 h-12 rounded-xl bg-[#E2231A]/10 flex items-center justify-center text-[#E2231A]" style={{ fontWeight: 600 }}>
                12+
              </div>
              <div className="text-xs leading-snug text-[#3A3A45]">
                <div className="text-[#0B0B0F]" style={{ fontWeight: 500 }}>Năm kinh nghiệm</div>
                triển khai pin công nghiệp B2B tại Việt Nam.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 rounded-2xl overflow-hidden border border-black/8">
          {[
            { k: "120+", v: "Dự án B2B đã bàn giao" },
            { k: "35MWh", v: "Tổng dung lượng triển khai" },
            { k: "8", v: "Dòng pack OEM tiêu chuẩn" },
            { k: "24/7", v: "Hỗ trợ kỹ thuật toàn quốc" },
          ].map((s) => (
            <div key={s.v} className="bg-[#F7F7F5] px-5 lg:px-7 py-5 lg:py-7">
              <div className="text-[#0B0B0F] tracking-tight" style={{ fontSize: 28, fontWeight: 600 }}>
                {s.k}
              </div>
              <div className="mt-1 text-xs lg:text-[13px] text-[#717182]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
