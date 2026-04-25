import { useState } from "react";
import { PRODUCT } from "./data";
import { Truck, Boxes, Factory, Snowflake, Battery } from "lucide-react";

const ICONS = [Truck, Boxes, Factory, Snowflake, Battery];

export function Applications() {
  const [active, setActive] = useState(0);
  const item = PRODUCT.applications[active];
  const Icon = ICONS[active] ?? Truck;

  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Ứng dụng phù hợp</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Nơi PKGFF-24230V1 đang vận hành
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">
          {/* Selector */}
          <div className="flex flex-col">
            {PRODUCT.applications.map((a, i) => {
              const I = ICONS[i] ?? Truck;
              const isActive = i === active;
              return (
                <button
                  key={a.name}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 text-left py-5 border-b border-neutral-200 transition ${
                    isActive ? "" : "hover:pl-2"
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-10 h-10 border transition ${
                    isActive ? "bg-[#E11C2B] border-[#E11C2B] text-white" : "border-neutral-300 text-neutral-700"
                  }`}>
                    <I className="w-4 h-4" />
                  </span>
                  <span className={`flex-1 transition ${isActive ? "text-neutral-900" : "text-neutral-600"}`} style={{ fontSize: "1.05rem", fontWeight: 500 }}>
                    {a.name}
                  </span>
                  <span className={`text-xs tracking-widest ${isActive ? "text-[#E11C2B]" : "text-neutral-400"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="relative bg-white border border-neutral-200 p-8 lg:p-10 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15,15,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,20,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-900 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-neutral-900" style={{ fontSize: "1.6rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                {item.name}
              </h3>
              <p className="mt-3 text-neutral-600 max-w-md leading-relaxed">{item.desc}</p>

              <div className="mt-8 grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
                {[
                  ["230Ah", "Dung lượng đề xuất"],
                  ["2–4h", "Sạc nhanh"],
                  ["10y", "Tuổi thọ"],
                ].map(([v, l]) => (
                  <div key={v} className="bg-white p-4">
                    <div className="text-neutral-900" style={{ fontWeight: 600 }}>{v}</div>
                    <div className="text-xs text-neutral-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Opportunity charging", "Drop-in replacement", "Multi-shift", "BMS CAN bus"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 border border-neutral-300 text-neutral-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
