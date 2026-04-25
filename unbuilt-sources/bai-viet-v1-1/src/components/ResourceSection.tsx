import { FileText, Download, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ResourceSection() {
  const resources = [
    { title: "Company Profile 2024", type: "PDF", size: "4.5 MB", color: "bg-blue-50" },
    { title: "Pin Lithium Xe Nâng - Technical Spec", type: "DATASHEET", size: "1.2 MB", color: "bg-red-50" },
    { title: "Giải pháp Pin cho AGV & Robot", type: "BROCHURE", size: "3.8 MB", color: "bg-gray-100" },
    { title: "Hướng dẫn bảo trì Pin Lithium", type: "GUIDE", size: "2.1 MB", color: "bg-amber-50" },
  ];

  return (
    <section className="bg-pkg-gray py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-pkg-red text-[10px] font-bold uppercase tracking-[0.3em]">Kho tài liệu</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">Tải xuống tài liệu chuyên ngành</h2>
            <p className="text-gray-500 font-medium">Hệ thống Datasheet, Catalog và hướng dẫn kỹ thuật chuẩn hóa để hỗ trợ bộ phận kỹ thuật và mua hàng tra cứu nhanh chóng.</p>
          </div>
          <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-pkg-charcoal pb-2 hover:text-pkg-red hover:border-pkg-red transition-all group">
            Tất cả tài liệu <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 border border-gray-100 hover:border-pkg-red transition-colors group flex flex-col justify-between h-[280px]"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-pkg-gray flex items-center justify-center group-hover:bg-pkg-red transition-colors">
                  <FileText className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{res.type} • {res.size}</span>
                  <h4 className="text-xl font-display font-bold leading-tight mt-2">{res.title}</h4>
                </div>
              </div>
              <button className="flex items-center justify-between w-full border-t border-gray-100 pt-6 group-hover:text-pkg-red transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">Download Now</span>
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
