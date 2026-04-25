/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare, Mail, Layers } from "lucide-react";

export default function StickyBar() {
  return (
    <>
      {/* Desktop Side Bar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4 pr-6 pointer-events-none">
        <div className="flex flex-col space-y-2 pointer-events-auto">
           {[
             { icon: <Phone className="w-5 h-5" />, label: "Hotline", color: "bg-pkg-graphite hover:bg-black" },
             { icon: <MessageSquare className="w-5 h-5" />, label: "Zalo", color: "bg-blue-600 hover:bg-blue-700" },
             { icon: <Mail className="w-5 h-5" />, label: "Email", color: "bg-pkg-red hover:bg-red-700" },
           ].map((item, i) => (
             <div key={i} className="group flex items-center justify-end">
                <span className="mr-3 px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-black uppercase tracking-widest text-pkg-graphite opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  {item.label}
                </span>
                <button className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xl transition-all hover:scale-110 active:scale-95 ${item.color}`}>
                   {item.icon}
                </button>
             </div>
           ))}
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 grid grid-cols-3 gap-3">
         <button className="flex flex-col items-center justify-center py-2 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-600">
            <Phone className="w-5 h-5 mb-1" />
            GOI NGAY
         </button>
         <button className="flex flex-col items-center justify-center py-2 bg-blue-50 rounded-xl text-[10px] font-bold text-blue-600">
            <MessageSquare className="w-5 h-5 mb-1" />
            ZALO
         </button>
         <button className="flex flex-col items-center justify-center py-2 bg-pkg-red rounded-xl text-[10px] font-bold text-white shadow-lg shadow-pkg-red/20 col-span-1">
            <Layers className="w-5 h-5 mb-1" />
            NHẬN BÁO GIÁ
         </button>
      </div>
    </>
  );
}
