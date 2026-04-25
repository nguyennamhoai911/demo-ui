/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Copy, Check } from "lucide-react";
import { useState } from "react";

const specGroups = [
  {
    category: "Electrical System",
    items: [
      { name: "Model Name", value: "PKGFF-24230V1" },
      { name: "Nominal Voltage", value: "25.6 V" },
      { name: "Capacity", value: "230 Ah" },
      { name: "Total Energy", value: "5.8 kWh" },
      { name: "Peak Discharge (10s)", value: "500 A" },
      { name: "Standard Discharge", value: "100 A" }
    ]
  },
  {
    category: "Charging Parameters",
    items: [
      { name: "Charge Voltage", value: "28.8 V" },
      { name: "Standard Charge Current", value: "50 A" },
      { name: "Max Charge Current", value: "100 A" },
      { name: "Charge Temperature", value: "0°C to 55°C" }
    ]
  },
  {
    category: "Mechanical & Physical",
    items: [
      { name: "Dimensions", value: "630 × 175 × 450 mm" },
      { name: "Weight", value: "54 kg" },
      { name: "Housing Material", value: "Carbon Steel (Powder Coated)" },
      { name: "Cooling Method", value: "Natural Cooling" },
      { name: "IP Rating", value: "IP65 / IP67 Optional" }
    ]
  }
];

export default function Specifications() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = specGroups.map(g => `${g.category}\n` + g.items.map(i => `${i.name}: ${i.value}`).join('\n')).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-white" id="specifications">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
             <span className="text-pkg-red font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Deep Data Analysis</span>
             <h2 className="text-4xl lg:text-[64px] font-bold text-pkg-graphite leading-[0.9] tracking-tighter mb-4">Technical<br />Specifications</h2>
          </div>
          
          <div className="flex gap-4">
             <button 
               onClick={copyToClipboard}
               className="px-6 py-3 border border-gray-200 rounded-lg flex items-center text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
             >
               {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
               {copied ? "Đã sao chép" : "Copy Specifications"}
             </button>
             <button className="px-6 py-3 bg-pkg-graphite text-white rounded-lg flex items-center text-sm font-bold hover:bg-black transition-all active:scale-95">
               <FileText className="w-4 h-4 mr-2" />
               Tải Datasheet (PDF)
             </button>
          </div>
        </div>

        <div className="space-y-16">
          {specGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
               <div className="flex items-center mb-6 space-x-4">
                  <h3 className="text-xl font-bold text-pkg-graphite whitespace-nowrap">{group.category}</h3>
                  <div className="h-px w-full bg-gray-100" />
               </div>
               
               <div className="grid lg:grid-cols-2 gap-x-12 gap-y-1">
                   {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-center py-4 border-b border-gray-100 group transition-colors hover:bg-gray-50 px-2 rounded-sm">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.name}</span>
                       <span className="text-sm font-bold text-pkg-graphite group-hover:text-pkg-red transition-colors">{item.value}</span>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-pkg-grey rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                 <FileText className="w-6 h-6 text-pkg-red" />
              </div>
              <div>
                 <h4 className="font-bold text-pkg-graphite">Cần thiết kế cấu hình riêng?</h4>
                 <p className="text-sm text-gray-500">Đội ngũ kỹ sư PKG hỗ trợ thiết kế vỏ tray và cấu hình theo yêu cầu của từng hãng xe.</p>
              </div>
           </div>
           <button className="px-8 py-3 bg-pkg-red text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-pkg-red/20 active:scale-95">
              Liên hệ tư vấn kỹ thuật
           </button>
        </div>
      </div>
    </section>
  );
}
