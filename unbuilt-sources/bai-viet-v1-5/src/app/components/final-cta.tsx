import { ArrowRight, MessageCircle, FileText, ShoppingBag } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-[#F7F7F5] border-t border-black/5 overflow-hidden">
      <div
        className="absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(226,35,26,0.18), transparent)" }}
      />
      <div className="relative max-w-[1320px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#E2231A]" style={{ fontWeight: 500 }}>
              Sẵn sàng tư vấn
            </div>
            <h2
              className="mt-3 text-[#0B0B0F] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", lineHeight: 1.05, fontWeight: 600 }}
            >
              Bạn đang tìm giải pháp pin
              <br />
              cho doanh nghiệp?
            </h2>
            <p
              className="mt-5 max-w-[560px] text-[#3A3A45]"
              style={{ fontSize: 16.5, lineHeight: 1.6 }}
            >
              Đội ngũ kỹ sư PKG sẽ làm việc cùng bạn từ khảo sát hiện trạng, lựa chọn pack,
              triển khai thử nghiệm cho đến vận hành dài hạn. Phản hồi trong vòng 24 giờ.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#E2231A] text-white text-sm hover:bg-[#0B0B0F] transition-colors shadow-[0_8px_24px_rgba(226,35,26,0.25)]"
              >
                <MessageCircle className="w-4 h-4" /> Liên hệ tư vấn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white border border-black/15 text-[#0B0B0F] text-sm hover:border-[#0B0B0F] transition-colors"
              >
                <FileText className="w-4 h-4" /> Gửi yêu cầu báo giá
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-[#0B0B0F] text-sm hover:text-[#E2231A] transition-colors"
              >
                <ShoppingBag className="w-4 h-4" /> Xem sản phẩm <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form className="bg-white rounded-2xl border border-black/8 p-6 lg:p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#717182]">
                Form liên hệ nhanh
              </div>
              <div className="mt-1 text-[#0B0B0F]" style={{ fontSize: 18, fontWeight: 600 }}>
                Để PKG liên hệ lại
              </div>
              <div className="mt-5 space-y-3">
                <input
                  className="w-full h-11 px-4 rounded-lg bg-[#F7F7F5] border border-transparent focus:border-[#0B0B0F] focus:bg-white outline-none text-[14px] transition"
                  placeholder="Họ và tên"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="h-11 px-4 rounded-lg bg-[#F7F7F5] border border-transparent focus:border-[#0B0B0F] focus:bg-white outline-none text-[14px] transition"
                    placeholder="Số điện thoại"
                  />
                  <input
                    className="h-11 px-4 rounded-lg bg-[#F7F7F5] border border-transparent focus:border-[#0B0B0F] focus:bg-white outline-none text-[14px] transition"
                    placeholder="Email công ty"
                  />
                </div>
                <select className="w-full h-11 px-4 rounded-lg bg-[#F7F7F5] border border-transparent focus:border-[#0B0B0F] focus:bg-white outline-none text-[14px] text-[#3A3A45] transition">
                  <option>Nhu cầu quan tâm</option>
                  <option>Pin xe nâng</option>
                  <option>AGV / Robot</option>
                  <option>OEM / ODM</option>
                  <option>Lưu trữ năng lượng</option>
                </select>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-transparent focus:border-[#0B0B0F] focus:bg-white outline-none text-[14px] resize-none transition"
                  placeholder="Mô tả ngắn nhu cầu của bạn"
                />
              </div>
              <button
                type="button"
                className="mt-5 w-full h-12 rounded-full bg-[#0B0B0F] text-white text-sm hover:bg-[#E2231A] transition-colors inline-flex items-center justify-center gap-2"
              >
                Gửi yêu cầu <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 text-[11px] text-[#9A9AA8] text-center">
                Bằng việc gửi, bạn đồng ý với chính sách bảo mật của PKG Battery.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
