import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function BodyContent() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase mb-3">/ Câu chuyện sản phẩm</div>
        <h2 className="text-neutral-900 max-w-3xl" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Được thiết kế cho những kho vận hành 24/7, không có chỗ cho thời gian chết.
        </h2>

        {/* Editorial: large image with overlay */}
        <div className="mt-12 relative h-[420px] lg:h-[520px] overflow-hidden rounded-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763665814546-27c2c003317e?w=1600&h=900&fit=crop"
            alt="Xe nâng vận hành PKG Battery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(110deg, rgba(10,10,12,0.85) 0%, rgba(10,10,12,0.5) 45%, transparent 75%)" }}
          />
          <div className="relative h-full flex items-center">
            <div className="px-8 lg:px-14 max-w-2xl text-white">
              <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">Case study</div>
              <h3 className="mt-4" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                "Sau 9 tháng triển khai 12 pin PKGFF-24230V1, đội xe nâng giảm 38% downtime và bỏ hẳn phòng sạc ắc quy chì."
              </h3>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
                <span className="w-8 h-px bg-[#E11C2B]" />
                Trưởng phòng kỹ thuật, một trung tâm DC tại Bắc Ninh
              </div>
            </div>
          </div>
        </div>

        {/* Two columns: text + image */}
        <div className="mt-16 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <h3 className="text-neutral-900" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
              Drop-in replacement cho khoang ắc quy chì hiện hữu
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              PKGFF-24230V1 được thiết kế với kích thước 630 × 175 × 450 mm, vừa khít hầu hết khoang ắc quy chì 24V tiêu chuẩn — không cần đục, hàn hay cải tạo gầm xe. Chỉ cần thay pin và sạc tương thích, đội vận hành có thể làm việc ngay sau buổi sáng đầu tiên.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#E11C2B]" /> Tương thích các nhãn xe nâng 24V phổ biến.</li>
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#E11C2B]" /> Không cần phòng sạc thông gió, không acid mist.</li>
              <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#E11C2B]" /> BMS giao tiếp CAN bus với hệ thống quản lý đội xe.</li>
            </ul>
          </div>
          <div className="relative aspect-square w-full overflow-hidden border border-neutral-200">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1742899273038-67ff67477663?w=1000&h=1000&fit=crop"
              alt="Cấu trúc cell và BMS"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase bg-white/95 text-neutral-900 px-2 py-1">
              Internal view
            </span>
          </div>
        </div>

        {/* Quote block */}
        <div className="mt-16 relative bg-neutral-950 text-white p-10 lg:p-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-30"
            style={{ background: "radial-gradient(closest-side, rgba(225,28,43,0.6), transparent)" }}
          />
          <Quote className="w-10 h-10 text-[#E11C2B]" />
          <p className="mt-6 max-w-3xl" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 500, lineHeight: 1.4 }}>
            Mỗi pin PKG được kiểm tra 100% trên dây chuyền — từ điện trở nội, dung lượng thực, đến nhiệt động học cell. Chúng tôi chỉ giao những pin có thể chạy 4.000 chu kỳ thật, không phải con số trên catalogue.
          </p>
          <div className="mt-6 text-sm text-neutral-400">— Phòng QA, PKG Battery Factory</div>
        </div>
      </div>
    </section>
  );
}
