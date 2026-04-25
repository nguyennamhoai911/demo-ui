import { useState } from "react";
import { PRODUCT } from "./data";
import { Copy, Download, Check } from "lucide-react";

export function SpecsTable() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = PRODUCT.specsTable
      .map((g) => `[${g.group}]\n` + g.rows.map((r) => `${r[0]}\t${r[1]}`).join("\n"))
      .join("\n\n");
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#E11C2B] uppercase">/ Bảng thông số kỹ thuật</div>
            <h2 className="mt-3 text-neutral-900" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Datasheet đầy đủ PKGFF-24230V1
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-900 px-4 h-11 text-sm transition"
            >
              {copied ? <Check className="w-4 h-4 text-[#E11C2B]" /> : <Copy className="w-4 h-4" />}
              {copied ? "Đã copy" : "Copy specs"}
            </button>
            <a href="#" className="inline-flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800 px-4 h-11 text-sm transition">
              <Download className="w-4 h-4" /> Tải PDF
            </a>
          </div>
        </div>

        {/* Desktop / tablet table */}
        <div className="hidden md:block bg-white border border-neutral-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              {PRODUCT.specsTable.map((group, gi) => (
                <tbody key={group.group}>
                  <tr className="bg-neutral-900 text-white">
                    <th colSpan={2} className="text-left px-6 py-3 tracking-wider uppercase text-xs">
                      <span className="text-[#E11C2B] mr-3">{String(gi + 1).padStart(2, "0")}</span>
                      {group.group}
                    </th>
                  </tr>
                  {group.rows.map((r, ri) => (
                    <tr key={ri} className={ri % 2 ? "bg-neutral-50/60" : "bg-white"}>
                      <td className="px-6 py-3.5 text-neutral-600 w-1/2 border-b border-neutral-100">{r[0]}</td>
                      <td className="px-6 py-3.5 text-neutral-900 border-b border-neutral-100" style={{ fontWeight: 500 }}>
                        {r[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* Mobile accordion-style */}
        <div className="md:hidden space-y-4">
          {PRODUCT.specsTable.map((group) => (
            <details key={group.group} className="group bg-white border border-neutral-200" open>
              <summary className="cursor-pointer list-none px-5 h-12 flex items-center justify-between bg-neutral-900 text-white text-xs tracking-wider uppercase">
                {group.group}
                <span className="group-open:rotate-180 transition">▾</span>
              </summary>
              <div className="divide-y divide-neutral-100">
                {group.rows.map((r, i) => (
                  <div key={i} className="grid grid-cols-2 px-5 py-3 text-sm">
                    <span className="text-neutral-600">{r[0]}</span>
                    <span className="text-neutral-900 text-right" style={{ fontWeight: 500 }}>{r[1]}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
