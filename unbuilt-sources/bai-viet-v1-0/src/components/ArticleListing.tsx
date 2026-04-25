import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";

export function ArticleListing() {
  const articles = [
    {
      title: "Cách chọn dung lượng Pin lithium phù hợp cho xe nâng 3 tấn",
      category: "Kiến thức kỹ thuật",
      excerpt: "Việc lựa chọn sai dung lượng không chỉ gây lãng phí mà còn ảnh hưởng đến tuổi thọ của hệ thống sạc và pin. Xem hướng dẫn tính toán từ kỹ sư PKG.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      date: "24/04/2026",
      readTime: "6 phút",
      type: "standard"
    },
    {
      title: "PKG Battery đồng hành cùng đối tác OEM trong dự án Robot Logistics",
      category: "Dự án thực tế",
      excerpt: "Giải pháp thiết kế pack pin lithium siêu mỏng tích hợp BMS thông minh cho hệ thống AGV vận hành 24/7 tại nhà máy linh kiện điện tử.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
      date: "22/04/2026",
      readTime: "10 phút",
      type: "row"
    },
    {
      title: "Pin Lithium PKG đạt chứng nhận tiêu chuẩn chống cháy nổ quốc tế",
      category: "Tin công ty",
      excerpt: "Bước tiến quan trọng trong việc khẳng định chất lượng và độ an toàn của sản phẩm PKG tại thị trường Đông Nam Á.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
      date: "20/04/2026",
      readTime: "4 phút",
      type: "standard"
    },
    {
      title: "Bảo trì Pin Lithium: 5 sai lầm thường gặp làm giảm tuổi thọ pin",
      category: "Kiến thức kỹ thuật",
      excerpt: "Mặc dù pin lithium ít cần bảo trì, nhưng việc sạc và lưu kho sai cách vẫn có thể gây hư hỏng cell pin nghiêm trọng.",
      image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=600",
      date: "18/04/2026",
      readTime: "7 phút",
      type: "standard"
    },
    {
      title: "Dự án lưu trữ năng lượng ESS 200kWh tại kho lạnh KCN Hiệp Phước",
      category: "Case study",
      excerpt: "Tối ưu hóa chi phí điện năng vào giờ cao điểm bằng hệ thống lưu trữ pin lithium PKG tích hợp Inverter công nghiệp.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600",
      date: "15/04/2026",
      readTime: "15 phút",
      type: "row"
    }
  ];

  return (
    <section id="article-listing" className="container mx-auto px-6 mb-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-display font-black leading-none mb-4">Mới cập nhật</h2>
          <p className="text-gray-500 font-light">
            Theo dõi những bài viết mới nhất về công nghệ, xu hướng và các dự án triển khai thực tế của PKG Battery.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Sắp xếp:</span>
          <select className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none cursor-pointer">
            <option>Mới nhất</option>
            <option>Xem nhiều nhất</option>
            <option>Theo chuyên mục</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {articles.map((article, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % 3) * 0.1 }}
            viewport={{ once: true }}
            className={`group cursor-pointer ${
              article.type === "row" 
                ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 rounded-sm shadow-sm border border-transparent hover:border-brand-red/20 transition-all" 
                : "grid grid-cols-1 md:grid-cols-12 gap-8"
            }`}
          >
            {/* Image Section */}
            <div className={`overflow-hidden rounded-sm ${article.type === "row" ? "h-full" : "md:col-span-4 aspect-[4/3]"}`}>
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className={`${article.type === "row" ? "" : "md:col-span-8 flex flex-col justify-center"}`}>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-red">
                  <Tag size={12} />
                  {article.category}
                </span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                  <Calendar size={12} />
                  {article.date}
                </span>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className={`font-display font-bold leading-tight group-hover:text-brand-red transition-all ${article.type === "row" ? "text-3xl mb-4" : "text-2xl mb-3"}`}>
                {article.title}
              </h3>

              <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                {article.excerpt}
              </p>

              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-charcoal group-hover:gap-4 transition-all">
                  Đọc ngay
                  <ArrowRight size={14} className="text-brand-red" />
                </button>
              </div>
            </div>
            
            {article.type !== "row" && <div className="md:col-span-12 h-[1px] bg-gray-100 mt-4 group-last:hidden"></div>}
          </motion.article>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="bg-white border border-gray-200 hover:border-brand-red text-charcoal px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all rounded-sm shadow-sm group">
          Tải thêm bài viết
        </button>
      </div>
    </section>
  );
}
