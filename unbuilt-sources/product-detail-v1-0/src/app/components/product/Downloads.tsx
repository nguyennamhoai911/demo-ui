import { FileText, Download } from "lucide-react";
import { PRODUCT } from "./data";

export function Downloads() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Tài liệu kỹ thuật</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Document center
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
            Toàn bộ catalogue, datasheet, manual và chứng nhận có sẵn để tải về — không yêu cầu đăng ký.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRODUCT.files.map((f) => (
            <a
              key={f.name}
              href="#"
              className="group flex items-center gap-4 p-5 bg-white border border-neutral-200 hover:border-neutral-900 transition"
            >
              <div className="relative w-12 h-14 bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center">
                <FileText className="w-5 h-5 text-neutral-700" />
                <span className="text-[9px] tracking-widest text-[#E11C2B] mt-1" style={{ fontWeight: 600 }}>
                  {f.format}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-neutral-900 truncate" style={{ fontWeight: 500 }}>{f.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {f.format} · {f.size}
                </div>
              </div>
              <Download className="w-4 h-4 text-neutral-400 group-hover:text-[#E11C2B] transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
