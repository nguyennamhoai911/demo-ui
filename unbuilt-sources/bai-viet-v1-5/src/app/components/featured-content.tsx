import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const TABS = [
  "Tất cả",
  "Kiến thức kỹ thuật",
  "Tin doanh nghiệp",
  "Dự án bàn giao",
  "Xe nâng",
  "AGV / Robot",
  "OEM / ODM",
  "Mới cập nhật",
];

const SECONDARY = [
  {
    type: "Tin doanh nghiệp",
    typeColor: "#E2231A",
    title: "PKG ký kết hợp tác chiến lược với đối tác logistics miền Bắc",
    excerpt:
      "Mở rộng triển khai pin lithium cho đội xe nâng vận hành kho lạnh, hướng tới chuẩn hóa hệ thống năng lượng nội bộ.",
    img: "https://images.unsplash.com/photo-1645736315000-6f788915923b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "22.04.2026",
    read: "5 phút",
  },
  {
    type: "Kiến thức kỹ thuật",
    typeColor: "#0B0B0F",
    title: "BMS là gì? Vai trò trong vận hành pin lithium công nghiệp",
    excerpt:
      "Hiểu đúng cấu trúc Battery Management System: cân bằng cell, bảo vệ nhiệt, dữ liệu vận hành và bảo trì dự đoán.",
    img: "https://images.unsplash.com/photo-1742899273038-67ff67477663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "18.04.2026",
    read: "8 phút",
  },
];

const QUICK = [
  {
    tag: "Dự án",
    title: "Bàn giao 36 pack lithium cho nhà máy điện tử Bắc Ninh",
    date: "20.04.2026",
  },
  {
    tag: "Kỹ thuật",
    title: "Cách chọn dung lượng pin xe nâng theo ca vận hành",
    date: "16.04.2026",
  },
  {
    tag: "Tin tức",
    title: "PKG xuất hiện tại Vietnam Manufacturing Expo 2026",
    date: "14.04.2026",
  },
  {
    tag: "OEM",
    title: "Quy trình thiết kế battery pack riêng cho thiết bị công nghiệp",
    date: "10.04.2026",
  },
];

export function FeaturedContent() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-white border-t border-black/5">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-10 lg:pt-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#E2231A]" style={{ fontWeight: 500 }}>
              Bộ lọc nhanh
            </div>
            <h2 className="mt-2 text-[#0B0B0F] tracking-tight" style={{ fontSize: 26, fontWeight: 600 }}>
              Khám phá nội dung theo chủ đề
            </h2>
          </div>
          <div className="text-sm text-[#717182]">
            Tổng <span className="text-[#0B0B0F]">128 bài viết</span> · Cập nhật 22.04.2026
          </div>
        </div>

        <div className="mt-6 -mx-5 lg:mx-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-5 lg:px-0 min-w-max">
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => setActive(i)}
                className={`relative h-10 px-4 rounded-full border text-[13px] whitespace-nowrap transition ${
                  active === i
                    ? "bg-[#0B0B0F] text-white border-[#0B0B0F]"
                    : "bg-white text-[#3A3A45] border-black/10 hover:border-[#0B0B0F]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-10 lg:pt-12 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <a href="#" className="lg:col-span-7 group">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#0B0B0F]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="h-7 px-2.5 inline-flex items-center rounded-full bg-[#E2231A] text-white text-[11px] uppercase tracking-wider">
                  Featured
                </span>
                <span className="h-7 px-2.5 inline-flex items-center rounded-full bg-white/15 backdrop-blur text-white text-[11px] uppercase tracking-wider border border-white/15">
                  Kiến thức kỹ thuật
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5 lg:inset-x-8 lg:bottom-8 text-white">
                <h3
                  className="tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)", lineHeight: 1.15, fontWeight: 600 }}
                >
                  Pin lithium xe nâng: bài toán tổng chi phí sở hữu trong vận hành 3 ca
                </h3>
                <div className="mt-3 flex items-center gap-4 text-[13px] text-white/80">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12 phút đọc</span>
                  <span>22.04.2026</span>
                  <span className="hidden sm:inline-flex items-center gap-1 ml-auto opacity-0 group-hover:opacity-100 transition">
                    Đọc bài viết <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {SECONDARY.map((a) => (
              <a key={a.title} href="#" className="group flex gap-5 items-start">
                <div className="relative w-[140px] sm:w-[180px] aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-[#F1F1ED]">
                  <ImageWithFallback
                    src={a.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <span
                    className="inline-block text-[10px] uppercase tracking-[0.18em] mb-2"
                    style={{ color: a.typeColor, fontWeight: 500 }}
                  >
                    {a.type}
                  </span>
                  <h4
                    className="text-[#0B0B0F] tracking-tight group-hover:text-[#E2231A] transition-colors"
                    style={{ fontSize: 17, lineHeight: 1.3, fontWeight: 500 }}
                  >
                    {a.title}
                  </h4>
                  <p className="mt-2 text-[13px] text-[#717182] line-clamp-2">{a.excerpt}</p>
                  <div className="mt-2 text-[11px] text-[#9A9AA8] flex gap-3">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.read}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 lg:mt-16 border-t border-black/8 pt-8">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#717182]" style={{ fontWeight: 500 }}>
              Quick updates
            </div>
            <a href="#" className="text-[13px] text-[#0B0B0F] hover:text-[#E2231A] inline-flex items-center gap-1.5">
              Xem tất cả <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 rounded-xl overflow-hidden border border-black/8">
            {QUICK.map((q) => (
              <a key={q.title} href="#" className="bg-white p-5 hover:bg-[#FAFAF7] transition-colors group">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#E2231A]" style={{ fontWeight: 500 }}>
                  {q.tag}
                </div>
                <div className="mt-2 text-[#0B0B0F]" style={{ fontSize: 14.5, lineHeight: 1.4, fontWeight: 500 }}>
                  {q.title}
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#9A9AA8]">
                  <span>{q.date}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0F] opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
