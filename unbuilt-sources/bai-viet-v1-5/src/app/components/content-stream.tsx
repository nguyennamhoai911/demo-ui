import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";

type Article = {
  type: string;
  title: string;
  excerpt?: string;
  img: string;
  date: string;
  read: string;
};

const KNOWLEDGE: Article[] = [
  {
    type: "Kiến thức kỹ thuật",
    title: "So sánh pin lithium và pin chì axit cho xe nâng",
    excerpt:
      "Phân tích thực tế về tuổi thọ, chu kỳ sạc, chi phí vận hành và hiệu suất theo từng mô hình kho vận.",
    img: "https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "21.04.2026",
    read: "10 phút",
  },
  {
    type: "Kiến thức kỹ thuật",
    title: "Tuổi thọ pin lithium công nghiệp & yếu tố ảnh hưởng",
    excerpt:
      "Cách nhiệt độ vận hành, chu kỳ DOD và quy trình sạc tác động đến vòng đời thực tế của pack lithium.",
    img: "https://images.unsplash.com/photo-1591964006776-90b32e88f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "17.04.2026",
    read: "9 phút",
  },
  {
    type: "Kiến thức kỹ thuật",
    title: "Bảo trì pin xe nâng đúng cách để tối ưu tuổi thọ",
    excerpt:
      "Checklist bảo trì hàng tuần và hàng tháng, kết hợp dữ liệu BMS để phát hiện sớm bất thường.",
    img: "https://images.unsplash.com/photo-1619641805634-b867f535071c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "12.04.2026",
    read: "7 phút",
  },
];

const NEWS: Article[] = [
  {
    type: "Tin doanh nghiệp",
    title: "PKG mở rộng dây chuyền pack lithium giai đoạn 2",
    excerpt: "Nâng công suất lắp ráp pack lên 2x phục vụ thị trường xe nâng và AGV trong nước.",
    img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "19.04.2026",
    read: "4 phút",
  },
  {
    type: "Tin doanh nghiệp",
    title: "Đón tiếp đoàn đối tác Hàn Quốc tham quan nhà máy",
    excerpt: "Khảo sát năng lực sản xuất pack OEM và lộ trình hợp tác phân phối khu vực Đông Nam Á.",
    img: "https://images.unsplash.com/photo-1661263989552-d82526d03b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "15.04.2026",
    read: "3 phút",
  },
  {
    type: "Tin doanh nghiệp",
    title: "PKG đạt chứng nhận hệ thống quản lý chất lượng mới",
    excerpt: "Hoàn tất audit và mở rộng chứng nhận chất lượng cho dòng pack lithium công nghiệp.",
    img: "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "08.04.2026",
    read: "5 phút",
  },
];

function ArticleCard({ a }: { a: Article }) {
  return (
    <a href="#" className="group flex flex-col">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F1F1ED]">
        <ImageWithFallback
          src={a.img}
          alt=""
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="h-6 px-2 inline-flex items-center rounded-md bg-white/95 backdrop-blur text-[10px] uppercase tracking-[0.16em] text-[#0B0B0F]">
            {a.type}
          </span>
        </div>
      </div>
      <h4
        className="mt-4 text-[#0B0B0F] tracking-tight group-hover:text-[#E2231A] transition-colors"
        style={{ fontSize: 18, lineHeight: 1.3, fontWeight: 500 }}
      >
        {a.title}
      </h4>
      {a.excerpt && (
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#717182] line-clamp-2">
          {a.excerpt}
        </p>
      )}
      <div className="mt-3 flex items-center justify-between text-[11px] text-[#9A9AA8]">
        <span>
          {a.date} · {a.read}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0B0F] opacity-0 group-hover:opacity-100 transition" />
      </div>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap mb-8 lg:mb-10">
      <div className="max-w-[640px]">
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#E2231A]" style={{ fontWeight: 500 }}>
          {eyebrow}
        </div>
        <h2
          className="mt-2 text-[#0B0B0F] tracking-tight"
          style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1.15, fontWeight: 600 }}
        >
          {title}
        </h2>
        {desc && <p className="mt-3 text-[14.5px] text-[#717182]">{desc}</p>}
      </div>
      <a
        href="#"
        className="text-[13px] text-[#0B0B0F] hover:text-[#E2231A] inline-flex items-center gap-1.5 border-b border-[#0B0B0F]/20 pb-0.5"
      >
        Xem tất cả <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export function ContentStream() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleLoad = () => {
    if (done) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 900);
  };

  return (
    <section id="stream" className="bg-[#FAFAF7] border-t border-black/5">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <SectionHeader
          eyebrow="Góc kỹ thuật"
          title="Kiến thức nổi bật cho kỹ sư & quản lý vận hành"
          desc="Bài viết chuyên sâu được biên soạn từ đội ngũ kỹ sư PKG, dựa trên dự án triển khai thực tế tại Việt Nam."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {KNOWLEDGE.map((a) => (
            <ArticleCard key={a.title} a={a} />
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <SectionHeader
            eyebrow="Hoạt động doanh nghiệp"
            title="Tin tức & cập nhật từ PKG Battery"
            desc="Hợp tác chiến lược, mở rộng năng lực sản xuất, sự kiện ngành và hoạt động bàn giao dự án."
          />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <a href="#" className="lg:col-span-7 group">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0B0B0F]">
                <ImageWithFallback
                  src={NEWS[0].img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="h-7 px-2.5 inline-flex items-center rounded-full bg-[#E2231A] text-white text-[11px] uppercase tracking-wider">
                    {NEWS[0].type}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 lg:inset-x-7 lg:bottom-7 text-white">
                  <h3
                    className="tracking-tight"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", lineHeight: 1.2, fontWeight: 600 }}
                  >
                    {NEWS[0].title}
                  </h3>
                  <p className="mt-2 text-white/80 text-[13.5px] max-w-[520px]">{NEWS[0].excerpt}</p>
                  <div className="mt-3 text-[12px] text-white/70">
                    {NEWS[0].date} · {NEWS[0].read}
                  </div>
                </div>
              </div>
            </a>
            <div className="lg:col-span-5 flex flex-col divide-y divide-black/8">
              {NEWS.slice(1).map((a) => (
                <a key={a.title} href="#" className="group flex gap-5 items-start py-5 first:pt-0">
                  <div className="relative w-[120px] sm:w-[160px] aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 bg-[#F1F1ED]">
                    <ImageWithFallback
                      src={a.img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#E2231A]" style={{ fontWeight: 500 }}>
                      {a.type}
                    </span>
                    <h4
                      className="mt-1.5 text-[#0B0B0F] group-hover:text-[#E2231A] transition-colors"
                      style={{ fontSize: 16, lineHeight: 1.3, fontWeight: 500 }}
                    >
                      {a.title}
                    </h4>
                    <div className="mt-2 text-[11px] text-[#9A9AA8]">
                      {a.date} · {a.read}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 flex flex-col items-center">
          <button
            onClick={handleLoad}
            disabled={loading || done}
            className={`inline-flex items-center gap-2 h-12 px-7 rounded-full border text-[13px] transition-all ${
              done
                ? "bg-transparent border-black/15 text-[#9A9AA8] cursor-default"
                : "bg-white border-black/15 text-[#0B0B0F] hover:border-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Đang tải thêm...
              </>
            ) : done ? (
              "Bạn đã xem hết bài viết"
            ) : (
              <>
                Xem thêm bài viết <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <div className="mt-3 text-[12px] text-[#9A9AA8]">
            Hiển thị 6 / 128 bài viết
          </div>
        </div>
      </div>
    </section>
  );
}
