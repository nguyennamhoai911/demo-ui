import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-pkg-charcoal py-24 lg:py-32 overflow-hidden">
      {/* Decorative blurred red circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pkg-red/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Nâng cấp năng lượng <br /> cho <span className="text-pkg-red">doanh nghiệp</span> của bạn
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Đội ngũ chuyên gia kỹ thuật của PKG Battery luôn sẵn sàng tư vấn giải pháp tối ưu nhất cho nhà máy và hệ thống logistics của bạn.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-pkg-red text-white py-5 px-10 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-white hover:text-pkg-red transition-all group">
              Gọi tư vấn ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-white/20 text-white py-5 px-10 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-4 hover:border-white transition-all bg-white/5 backdrop-blur-sm">
              <MessageSquare className="w-5 h-5" /> Chat qua Zalo
            </button>
          </div>

          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-12 border-t border-white/5">
             <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
                <Mail className="w-5 h-5 text-pkg-red" />
                info@pkgbattery.com.vn
             </div>
             <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Hỗ trợ kỹ thuật 24/7
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
