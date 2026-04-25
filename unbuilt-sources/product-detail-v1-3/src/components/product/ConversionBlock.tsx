/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, Zap } from "lucide-react";

export default function ConversionBlock() {
  return (
    <section className="py-24 bg-white" id="rfq">
      <div className="container mx-auto px-6">
        <div className="bg-pkg-graphite rounded-[40px] overflow-hidden relative shadow-2xl">
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-pkg-red/20 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pkg-red/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-12 lg:p-20 text-white">
               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pkg-red/20 border border-pkg-red/30 text-pkg-red text-xs font-bold mb-8 uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-pkg-red" />
                  <span>Start your upgrade</span>
               </div>
               <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tighter">
                 Cần cấu hình pin phù hợp cho sản xuất?
               </h2>
               <p className="text-white/50 text-lg font-light mb-10">
                 Gửi model xe và nhu cầu vận hành, đội ngũ kỹ sư PKG sẽ tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
               </p>
               
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-pkg-red font-bold mb-2">Trụ sở chính</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light">Khu công nghiệp VSIP II-A, Bình Dương, Việt Nam</p>
                  </div>
                  <div>
                    <h4 className="text-pkg-red font-bold mb-2">Hỗ trợ 24/7</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light">Hotline: 1900 xxxx<br />Email: technical@pkg.com.vn</p>
                  </div>
               </div>
            </div>

            <div className="p-12 lg:p-20 bg-white/5 backdrop-blur-sm border-l border-white/10">
               <form className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                       <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Họ và tên</label>
                       <input type="text" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="flex flex-col space-y-2">
                       <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Số điện thoại</label>
                       <input type="tel" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all" placeholder="090 123 xxxx" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Email công ty</label>
                    <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all" placeholder="email@company.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                       <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Model xe nâng</label>
                       <input type="text" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all" placeholder="Toyota / Komatsu / ..." />
                    </div>
                    <div className="flex flex-col space-y-2">
                       <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Số lượng</label>
                       <input type="number" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all" placeholder="1" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-1">Nhu cầu cụ thể</label>
                    <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pkg-red transition-all min-h-[100px]" placeholder="Yêu cầu cấu hình tray sắt, sạc nhanh..." />
                  </div>

                  <button className="w-full py-4 bg-pkg-red text-white font-bold rounded-lg flex items-center justify-center group hover:bg-red-700 transition-all shadow-lg shadow-pkg-red/20 active:scale-95">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Nhận báo giá kỹ thuật
                  </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
