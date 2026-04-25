/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, FileText, Shield, Award, Settings } from "lucide-react";

const resources = [
  { name: "Technical Datasheet", size: "1.2 MB", type: "PDF", icon: <FileText className="w-5 h-5" /> },
  { name: "Product Catalogue 2024", size: "8.5 MB", type: "PDF", icon: <Award className="w-5 h-5" /> },
  { name: "Installation Manual", size: "3.4 MB", type: "PDF", icon: <Settings className="w-5 h-5" /> },
  { name: "Warranty Policy (5 Years)", size: "0.8 MB", type: "PDF", icon: <Shield className="w-5 h-5" /> },
];

export default function Documentation() {
  return (
    <section className="py-24 bg-pkg-grey">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-12">
          <span className="text-pkg-red font-bold text-sm tracking-[0.2em] uppercase mb-4">Resources</span>
          <h2 className="text-4xl font-extrabold text-pkg-graphite">Documentation Center</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((res, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-between group hover:border-pkg-red/30 transition-all cursor-pointer"
            >
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pkg-grey rounded-lg flex items-center justify-center text-gray-400 group-hover:text-pkg-red group-hover:bg-pkg-red/5 transition-all">
                     {res.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-pkg-graphite text-lg">{res.name}</h4>
                    <p className="text-xs text-gray-400 font-medium uppercase">{res.type} • {res.size}</p>
                  </div>
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-pkg-red group-hover:text-white transition-all">
                  <Download className="w-4 h-4" />
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center text-center">
            <p className="text-gray-400 text-sm mb-4">Bạn chưa tìm thấy tài liệu cần thiết?</p>
            <button className="text-pkg-red font-bold text-sm hover:underline flex items-center">
               Yêu cầu tài liệu kỹ thuật riêng cho Model xe nâng của bạn
            </button>
        </div>
      </div>
    </section>
  );
}
