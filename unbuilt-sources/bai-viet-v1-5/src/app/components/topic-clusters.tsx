import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Battery, Bot, Cpu, Zap, Wrench } from "lucide-react";

const CLUSTERS = [
  {
    icon: Battery,
    name: "Pin xe nâng",
    intro: "Lithium thay thế chì axit, tối ưu vận hành kho bãi và logistics.",
    articles: [
      "Cách chọn pin xe nâng phù hợp ngành hàng",
      "ROI pin lithium so với chì axit sau 24 tháng",
      "Quy trình thay thế pin xe nâng không gián đoạn",
    ],
    img: "https://images.unsplash.com/photo-1763665814546-27c2c003317e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
  },
  {
    icon: Bot,
    name: "AGV / Robot",
    intro: "Battery pack cho AGV, AMR và robot công nghiệp tốc độ cao.",
    articles: [
      "Pin AGV hoạt động ra sao trong dây chuyền 24/7",
      "Lựa chọn pack pin cho AGV tải nặng",
      "Tích hợp BMS với hệ điều khiển AGV",
    ],
    img: "https://images.unsplash.com/photo-1697057914230-320d7c251f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
  },
  {
    icon: Cpu,
    name: "OEM / ODM",
    intro: "Thiết kế pack pin riêng cho thiết bị công nghiệp & năng lượng.",
    articles: [
      "Quy trình OEM battery pack tại PKG",
      "Tài liệu kỹ thuật cần chuẩn bị khi đặt hàng OEM",
      "Tùy chỉnh BMS theo yêu cầu khách hàng",
    ],
    img: "https://images.unsplash.com/photo-1600428235269-c326df6361fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
  },
  {
    icon: Zap,
    name: "Lưu trữ năng lượng",
    intro: "Hệ thống ESS cho nhà máy, tòa nhà và trạm sạc.",
    articles: [
      "ESS công nghiệp: thiết kế và vận hành",
      "Kết hợp pin lưu trữ với điện mặt trời mái nhà",
      "Trạm sạc: yêu cầu kỹ thuật cho doanh nghiệp",
    ],
    img: "https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
  },
  {
    icon: Wrench,
    name: "Bảo trì pin",
    intro: "Quy trình bảo trì giúp tối ưu tuổi thọ pack lithium.",
    articles: [
      "Checklist bảo trì pack lithium hàng tháng",
      "Đọc dữ liệu BMS để phát hiện cell yếu",
      "Bảo quản pin dài hạn đúng cách",
    ],
    img: "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
  },
];

export function TopicClusters() {
  return (
    <section className="bg-white border-t border-black/5">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10 lg:mb-14">
          <div className="max-w-[640px]">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#E2231A]" style={{ fontWeight: 500 }}>
              Topic clusters
            </div>
            <h2
              className="mt-2 text-[#0B0B0F] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)", lineHeight: 1.1, fontWeight: 600 }}
            >
              Kiến thức theo lĩnh vực ứng dụng
            </h2>
            <p className="mt-3 text-[14.5px] text-[#717182]">
              Lựa chọn nhóm chủ đề phù hợp với bài toán doanh nghiệp của bạn — từ pin xe nâng, AGV
              cho đến OEM và lưu trữ năng lượng.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden border border-black/8 self-start">
            {CLUSTERS.slice(0, 4).map((c) => (
              <div key={c.name} className="bg-white p-6 lg:p-7 flex flex-col group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B0B0F] text-white flex items-center justify-center group-hover:bg-[#E2231A] transition-colors">
                    <c.icon className="w-4.5 h-4.5" strokeWidth={1.6} />
                  </div>
                  <h3 className="tracking-tight text-[#0B0B0F]" style={{ fontSize: 17, fontWeight: 600 }}>
                    {c.name}
                  </h3>
                </div>
                <p className="mt-3 text-[13.5px] text-[#717182] leading-relaxed">{c.intro}</p>
                <ul className="mt-4 space-y-2.5 flex-1">
                  {c.articles.map((a) => (
                    <li key={a}>
                      <a
                        href="#"
                        className="flex items-start gap-2 text-[13.5px] text-[#3A3A45] hover:text-[#E2231A] transition-colors"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E2231A] flex-shrink-0" />
                        {a}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-5 text-[12.5px] text-[#0B0B0F] inline-flex items-center gap-1.5 hover:text-[#E2231A] transition-colors"
                >
                  Xem tất cả bài viết <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden bg-[#0B0B0F] min-h-[380px]">
              <ImageWithFallback
                src={CLUSTERS[4].img}
                alt=""
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="absolute inset-0 p-7 lg:p-9 flex flex-col text-white">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#E2231A] flex items-center justify-center">
                    <Wrench className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">
                    Cluster nổi bật
                  </div>
                </div>
                <h3
                  className="mt-auto tracking-tight"
                  style={{ fontSize: 28, lineHeight: 1.15, fontWeight: 600 }}
                >
                  {CLUSTERS[4].name}
                </h3>
                <p className="mt-3 text-[14px] text-white/80 max-w-[360px]">{CLUSTERS[4].intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {CLUSTERS[4].articles.map((a) => (
                    <li key={a}>
                      <a
                        href="#"
                        className="flex items-start gap-2 text-[14px] text-white/90 hover:text-white"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E2231A] flex-shrink-0" />
                        {a}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white text-[#0B0B0F] text-[12.5px] w-fit hover:bg-[#E2231A] hover:text-white transition-colors"
                >
                  Xem tất cả <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
