import { Factory, Wrench, BadgeCheck, Handshake, Truck } from "lucide-react";

const ITEMS = [
  { icon: Factory, label: "Nhà sản xuất pin công nghiệp tại Việt Nam" },
  { icon: Wrench, label: "Hỗ trợ OEM / ODM linh hoạt" },
  { icon: BadgeCheck, label: "Tư vấn kỹ thuật chuyên sâu" },
  { icon: Truck, label: "Dự án B2B thực tế đã bàn giao" },
  { icon: Handshake, label: "Đồng hành lâu dài cùng doanh nghiệp" },
];

export function TrustStrip() {
  return (
    <section className="bg-[#0B0B0F] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(226,35,26,0.25), transparent)" }}
      />
      <div className="relative max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E2231A] flex-shrink-0">
                <item.icon className="w-4.5 h-4.5" strokeWidth={1.6} />
              </div>
              <div className="text-[13px] leading-snug text-white/80" style={{ fontWeight: 400 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
