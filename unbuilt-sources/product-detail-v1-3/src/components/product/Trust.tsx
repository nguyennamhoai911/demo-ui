/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const partners = ["TOTO", "VinFast", "Samsung", "Logitech", "Hyosung", "Shopee"];

export default function Trust() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gray-400 font-bold text-xs tracking-[0.4em] uppercase mb-8 italic">Trusted by Global Enterprises</span>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 grayscale group hover:grayscale-0 transition-all">
             {partners.map((p, i) => (
               <span key={i} className="text-2xl font-black text-pkg-graphite transition-all hover:scale-110 cursor-default hover:text-pkg-red">
                 {p}
               </span>
             ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mt-24">
           <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-black text-pkg-red mb-4">15k+</div>
              <p className="text-sm font-bold text-pkg-graphite uppercase tracking-widest mb-2">Systems Active</p>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">Hơn 15,000 bộ pin PKG đang vận hành tại các nhà máy trên toàn quốc.</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-black text-pkg-red mb-4">63</div>
              <p className="text-sm font-bold text-pkg-graphite uppercase tracking-widest mb-2">Provinces Support</p>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">Mạng lưới hỗ trợ kỹ thuật phủ sóng 63 tỉnh thành Việt Nam.</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-black text-pkg-red mb-4">&lt; 24h</div>
              <p className="text-sm font-bold text-pkg-graphite uppercase tracking-widest mb-2">Response Time</p>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">Cam kết phản hồi và xử lý sự cố trong vòng 24 giờ làm việc.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
