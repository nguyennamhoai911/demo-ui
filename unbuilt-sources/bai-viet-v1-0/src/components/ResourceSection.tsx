import { FileText, Download, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function ResourceSection() {
  const resources = [
    {
      title: "Catalog Pin Xe Nâng PKG 2026",
      desc: "Chi tiết các dòng pin lithium cho xe nâng 1.5 - 5 tấn.",
      type: "PDF | 8.5 MB",
      tag: "Catalog"
    },
    {
      title: "Hồ sơ năng lực PKG Battery",
      desc: "Giới thiệu quy mô sản xuất, chứng chỉ và khách hàng B2B.",
      type: "PDF | 12 MB",
      tag: "Company Profile"
    },
    {
      title: "Datasheet Dòng Pin AGV/Robot",
      desc: "Thông số kỹ thuật cell pin, BMS và giao thức truyền thông.",
      type: "PDF | 4.2 MB",
      tag: "Technical Data"
    }
  ];

  return (
    <section id="resources" className="bg-charcoal py-24 mb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full red-gradient-glow opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-brand-red"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Resources</span>
            </div>
            <h2 className="text-4xl text-white font-display font-black leading-tight mb-8">
              TÀI LIỆU <br />
              KỸ THUẬT CHUYÊN SÂU
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              Thư viện tài liệu kỹ thuật dành riêng cho đối tác, kỹ sư và bộ phận mua hàng. 
              Tất cả tài liệu đều được cập nhật theo tiêu chuẩn mới nhất của PKG.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-brand-red" />
                <span>Cập nhật liên tục 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-brand-red" />
                <span>Download miễn phí cho B2B</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle2 size={16} className="text-brand-red" />
                <span>Yêu cầu bản in qua bưu điện</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((res, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all group flex flex-col justify-between h-[280px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-brand-red/10 rounded-sm">
                        <FileText className="text-brand-red" size={24} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                        {res.tag}
                      </span>
                    </div>
                    <h3 className="text-xl text-white font-display font-bold leading-tight mb-3">
                      {res.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[10px] text-gray-500 font-medium uppercase">{res.type}</span>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-red group-hover:text-white transition-colors">
                      Tải Tài Liệu
                      <Download size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
              
              <div className="bg-brand-red p-8 rounded-sm flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-brand-red-dark transition-all">
                <h3 className="text-xl text-white font-display font-black uppercase leading-tight mb-4">
                  Bạn cần tài liệu <br /> theo yêu cầu riêng?
                </h3>
                <p className="text-white/80 text-sm font-light mb-6">
                  Đội ngũ kỹ thuật PKG sẽ cung cấp Datasheet chi tiết cho từng model tùy chỉnh.
                </p>
                <button className="bg-white text-brand-red px-8 py-3 text-xs font-black uppercase tracking-widest rounded-sm shadow-xl">
                  Gửi Yêu Cầu
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
