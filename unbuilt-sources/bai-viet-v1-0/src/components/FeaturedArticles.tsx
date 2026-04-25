import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";

export function FeaturedArticles() {
  const featured = {
    title: "Pin lithium xe nâng: Giải pháp tối ưu cho nhà máy và kho vận hiện đại",
    excerpt: "Khám phá cách công nghệ Pin Lithium ion đang thay đổi hiệu năng vận hành và giảm chi phí bảo trì cho các hệ thống xe nâng điện trong môi trường công nghiệp khắt khe.",
    category: "Kiến thức kỹ thuật",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    readTime: "8 phút",
    date: "25/04/2026"
  };

  const trending = [
    {
      title: "So sánh Pin Lithium và Ắc quy Chì Axit cho xe nâng: Đâu là lựa chọn kinh tế?",
      category: "So sánh",
      readTime: "12 phút"
    },
    {
      title: "Quy trình PKG Battery thiết kế pack pin OEM/ODM chuẩn quốc tế",
      category: "Sản xuất",
      readTime: "15 phút"
    },
    {
      title: "Ứng dụng Pin AGV trong nhà máy tự động hóa hoàn toàn",
      category: "Giải pháp",
      readTime: "10 phút"
    }
  ];

  return (
    <section id="featured-articles" className="container mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Featured */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-8 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[16/9] mb-8">
            <img 
              src={featured.image} 
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm">
                Nổi bật
              </span>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-brand-red uppercase tracking-widest">{featured.category}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock size={12} />
                <span>{featured.readTime} đọc</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1] mb-6 group-hover:text-brand-red transition-colors">
              {featured.title}
            </h2>
            
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
              {featured.excerpt}
            </p>
            
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal border-b-2 border-brand-red pb-1 group-hover:gap-4 transition-all">
              Đọc Bài Viết
              <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Sidebar Trending/Secondary */}
        <div className="lg:col-span-4 border-l border-gray-100 pl-4 lg:pl-10">
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Đang được quan tâm</h3>
          </div>
          
          <div className="flex flex-col gap-12">
            {trending.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category}</span>
                  <div className="w-4 h-[1px] bg-gray-200"></div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{item.readTime}</span>
                </div>
                <h4 className="text-xl font-display font-bold leading-tight group-hover:text-brand-red transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-charcoal text-white rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-red">Tải Catalog</h5>
            <p className="text-sm font-light text-gray-400 mb-6 leading-relaxed">
              Nhận bộ tài liệu kỹ thuật đầy đủ về các dòng Pin Lithium PKG 2026.
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b border-brand-red pb-1 hover:gap-3 transition-all">
              Tải ngay (PDF)
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
