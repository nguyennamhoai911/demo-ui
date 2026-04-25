/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Zap, Droplets, Clock, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-pkg-red" />,
    title: "Sạc nhanh vượt trội",
    desc: "Sạc đầy trong 2-4 giờ (thay vì 8-12 giờ của ắc quy chì). Cho phép sạc tranh thủ trong giờ nghỉ."
  },
  {
    icon: <Droplets className="w-6 h-6 text-pkg-red" />,
    title: "Không bảo trì, không châm nước",
    desc: "Loại bỏ hoàn toàn rủi ro rò rỉ axit và chi phí nhân công bảo trì định kỳ."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-pkg-red" />,
    title: "Tuổi thọ gấp 3-4 lần",
    desc: "Hơn 4,000 chu kỳ sạc-xả, giúp giảm tổng chi phí sở hữu (TCO) dài hạn cho doanh nghiệp."
  },
  {
    icon: <Clock className="w-6 h-6 text-pkg-red" />,
    title: "Tăng thời gian vận hành",
    desc: "Hiệu suất xả đến 95% (so với 50% của ắc quy chì) giúp xe chạy lâu hơn trong một ca."
  }
];

export default function WhyPkg() {
  return (
    <section className="py-24 bg-pkg-grey overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 relative group">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-9xl">
                 LITHIUM
              </div>
              <div className="absolute bottom-10 left-10 z-20 text-white max-w-sm">
                <h3 className="text-3xl font-bold mb-4">Nâng cấp từ Ắc quy chì sang Lithium là nâng cấp hiệu suất vận hành</h3>
                <p className="text-white/70 font-light">Giải pháp năng lượng thông minh giúp tối ưu hóa chuỗi cung ứng và kho vận hiện đại.</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-pkg-red/30 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-pkg-red/30 z-0" />
          </motion.div>

          <div className="flex flex-col">
            <span className="text-pkg-red font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Efficiency & ROI</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-pkg-graphite mb-10 leading-[0.9] tracking-tighter">Tại sao nên chọn<br /><span className="text-gray-300">PKG Battery?</span></h2>
            
            <div className="grid gap-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border border-transparent hover:border-pkg-red/10 transition-all hover:bg-white/80 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-pkg-graphite mb-1 group-hover:text-pkg-red transition-colors">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex items-center space-x-4 p-4 border border-pkg-red/20 rounded-lg bg-pkg-red/5">
               <ShieldCheck className="w-8 h-8 text-pkg-red" />
               <p className="text-sm text-pkg-red/80 font-medium">
                 Tất cả sản phẩm đều đi kèm gói bảo hiểm cháy nổ và hỗ trợ kỹ thuật 24/7 trực tiếp từ nhà máy.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
