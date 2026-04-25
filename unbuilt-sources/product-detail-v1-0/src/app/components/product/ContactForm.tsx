import { useState } from "react";
import { ShieldCheck, Clock, MessageCircle, Phone, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-neutral-950 text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(225,28,43,0.6), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Liên hệ báo giá</div>
            <h2 className="mt-3" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Cần tư vấn cấu hình pin phù hợp cho thiết bị của bạn?
            </h2>
            <p className="mt-5 text-neutral-300 leading-relaxed max-w-md">
              Gửi thông tin xe hoặc nhu cầu vận hành, đội ngũ kỹ thuật PKG sẽ tư vấn model pin phù hợp và phương án thay thế tối ưu.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#E11C2B]" /> Thông tin được bảo mật, không chia sẻ với bên thứ ba.
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <Clock className="w-4 h-4 text-[#E11C2B]" /> Phản hồi trong vòng 4 giờ làm việc.
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MessageCircle className="w-4 h-4 text-[#E11C2B]" /> Hoặc Zalo / Hotline 24/7 cho đơn hàng dự án.
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <a href="tel:19000000" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white px-4 h-12 transition">
                <Phone className="w-4 h-4" /> 1900 0000
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white px-4 h-12 transition">
                <MessageCircle className="w-4 h-4" /> Zalo OA
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white text-neutral-900 p-7 lg:p-10 border border-white/10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E11C2B]/10 text-[#E11C2B]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="mt-5" style={{ fontSize: "1.4rem", fontWeight: 600 }}>Đã nhận yêu cầu của bạn</h3>
                <p className="mt-3 text-neutral-600 max-w-sm mx-auto">
                  Đội kỹ thuật PKG sẽ liên hệ trong 4 giờ làm việc để tư vấn model pin phù hợp.
                </p>
                <button onClick={() => setSubmitted(false)} type="button" className="mt-6 inline-flex items-center gap-2 text-sm text-[#E11C2B] hover:underline">
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <>
                <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">Form liên hệ</div>
                <h3 className="mt-2" style={{ fontSize: "1.3rem", fontWeight: 600 }}>Thông tin yêu cầu báo giá</h3>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Họ tên *" placeholder="Nguyễn Văn A" />
                  <Field label="Số điện thoại *" placeholder="09xx xxx xxx" type="tel" />
                  <Field label="Email" placeholder="ban@congty.com" type="email" />
                  <Field label="Công ty" placeholder="Tên doanh nghiệp" />
                  <Field label="Loại thiết bị / model xe" placeholder="VD: Toyota 8FB25, 24V" />
                  <Field label="Số lượng" placeholder="VD: 6 pin" />
                  <div className="sm:col-span-2">
                    <Field label="Nhu cầu sử dụng" placeholder="Vận hành 2 ca, kho lạnh −10°C…" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs tracking-wider uppercase text-neutral-500">Ghi chú</label>
                    <textarea
                      rows={3}
                      placeholder="Yêu cầu thêm về lắp đặt, sạc, đào tạo…"
                      className="mt-2 w-full bg-neutral-50 border border-neutral-200 px-4 py-3 outline-none focus:border-[#E11C2B] transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#E11C2B] hover:bg-[#c2161f] text-white h-12 transition"
                >
                  <Send className="w-4 h-4" /> Gửi yêu cầu báo giá
                </button>
                <p className="mt-3 text-xs text-neutral-500 text-center">
                  Bằng việc gửi form, bạn đồng ý với <a href="#" className="underline">chính sách bảo mật</a> của PKG Battery.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs tracking-wider uppercase text-neutral-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-neutral-50 border border-neutral-200 px-4 h-11 outline-none focus:border-[#E11C2B] transition"
      />
    </div>
  );
}
