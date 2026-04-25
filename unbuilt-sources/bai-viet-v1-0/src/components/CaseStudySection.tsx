import { ArrowRight, Box } from "lucide-react";
import { motion } from "motion/react";

export function CaseStudySection() {
  const cases = [
    {
      title: "Giải pháp Pin Li-ion cho hệ thống xe nâng Linde tại kho lạnh KCN Tân Tạo",
      industry: "Logistics",
      solution: "Lithium 80V 500Ah",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Quy trình thiết kế Pack Pin OEM cho Robot Tự Hành AGV tại nhà máy Ô tô",
      industry: "Manufacturing",
      solution: "Tùy chỉnh 48V 100Ah",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="case-studies" className="container mx-auto px-6 mb-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brand-red"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Case Studies</span>
          </div>
          <h2 className="text-4xl font-display font-black leading-none mb-4">Dự Án Thực Tế</h2>
          <p className="text-gray-500 font-light">
            Khám phá cách các giải pháp pin của PKG giúp tối ưu hóa vận hành cho doanh nghiệp B2B.
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-charcoal border-b border-brand-red pb-1">
          Xem tất cả dự án
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cases.map((cs, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-sm h-[500px]"
          >
            <img 
              src={cs.image} 
              alt={cs.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-1">
                  <Box size={12} />
                  {cs.solution}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl text-white font-display font-black leading-tight mb-6">
                {cs.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Xem Chi Tiết Dự Án
                <ArrowRight size={14} className="text-brand-red" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
