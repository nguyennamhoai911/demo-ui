import { PRODUCT } from "./data";

export function TechSnapshot() {
  return (
    <section className="bg-neutral-950 text-white relative overflow-hidden">
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
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(closest-side, rgba(225,28,43,0.6), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Technical Snapshot</div>
            <h2 className="mt-3 text-white" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              7 thông số chính của PKGFF-24230V1
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
            Tổng quan thông số kỹ thuật trọng yếu cho kỹ sư vận hành lựa chọn nhanh — chi tiết đầy đủ ở bảng phía dưới.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 border-t border-l border-white/10">
          {PRODUCT.specs.map((s, i) => (
            <div key={i} className="border-r border-b border-white/10 p-5 lg:p-6 relative group hover:bg-white/[0.03] transition">
              <div className="text-[10px] text-neutral-500 tracking-widest uppercase">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-white" style={{ fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.value}
                </span>
                {s.unit && <span className="text-neutral-400 text-sm">{s.unit}</span>}
              </div>
              <div className="mt-3 h-px w-8 bg-[#E11C2B]" />
              <div className="mt-3 text-neutral-400 text-xs tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
