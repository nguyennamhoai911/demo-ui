import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    industry: "Logistics · Kho lạnh",
    title: "Giải pháp pin lithium cho đội xe nâng kho lạnh -25°C",
    client: "Công ty kho vận miền Bắc",
    metrics: [
      { k: "32", v: "Xe nâng triển khai" },
      { k: "−18%", v: "Chi phí năng lượng" },
      { k: "3x", v: "Tuổi thọ vs chì axit" },
    ],
    img: "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    industry: "Sản xuất · AGV line",
    title: "AGV battery cho dây chuyền lắp ráp điện tử",
    client: "Nhà máy điện tử Bắc Ninh",
    metrics: [
      { k: "120", v: "AGV vận hành 24/7" },
      { k: "0", v: "Sự cố trong 12 tháng" },
      { k: "98%", v: "Uptime vận hành" },
    ],
    img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    industry: "OEM · Thiết bị công nghiệp",
    title: "Battery pack tùy chỉnh cho thiết bị đo lường công nghiệp",
    client: "Đối tác OEM Hàn Quốc",
    metrics: [
      { k: "8", v: "Dòng pack OEM" },
      { k: "12 tuần", v: "Thời gian phát triển" },
      { k: "IP67", v: "Chuẩn bảo vệ" },
    ],
    img: "https://images.unsplash.com/photo-1742899273038-67ff67477663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
];

export function CaseStudies() {
  return (
    <section id="projects" className="bg-[#0B0B0F] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-[640px]">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#E2231A]" style={{ fontWeight: 500 }}>
              Dự án thực tế
            </div>
            <h2
              className="mt-2 tracking-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)", lineHeight: 1.1, fontWeight: 600 }}
            >
              Khách hàng B2B đã đồng hành cùng PKG
            </h2>
            <p className="mt-3 text-[14.5px] text-white/70">
              Mỗi dự án là một bài toán kỹ thuật riêng. Đây là cách PKG triển khai pin công nghiệp
              tại các môi trường vận hành thật.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/10 border border-white/15 hover:bg-white hover:text-[#0B0B0F] text-[13px] transition-colors"
          >
            Xem tất cả dự án <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {CASES.map((c, idx) => (
            <a
              href="#"
              key={c.title}
              className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col ${
                idx === 0 ? "lg:row-span-2 lg:flex-row lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${idx === 0 ? "lg:w-1/2 aspect-[4/3] lg:aspect-auto" : "aspect-[16/10]"} bg-[#0B0B0F]`}
              >
                <ImageWithFallback
                  src={c.img}
                  alt=""
                  className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 h-7 px-2.5 inline-flex items-center rounded-full bg-white/95 text-[#0B0B0F] text-[10.5px] uppercase tracking-[0.16em]">
                  {c.industry}
                </span>
              </div>
              <div className={`p-6 lg:p-7 flex flex-col flex-1 ${idx === 0 ? "lg:p-9" : ""}`}>
                <div className="text-[12px] text-white/60">{c.client}</div>
                <h3
                  className="mt-2 tracking-tight text-white group-hover:text-[#E2231A] transition-colors"
                  style={{
                    fontSize: idx === 0 ? 24 : 18,
                    lineHeight: 1.25,
                    fontWeight: 600,
                  }}
                >
                  {c.title}
                </h3>
                <div className={`mt-auto pt-6 grid grid-cols-3 gap-3 border-t border-white/10`}>
                  {c.metrics.map((m) => (
                    <div key={m.v}>
                      <div className="text-white tracking-tight" style={{ fontSize: idx === 0 ? 22 : 18, fontWeight: 600 }}>
                        {m.k}
                      </div>
                      <div className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-white/55 leading-snug">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
