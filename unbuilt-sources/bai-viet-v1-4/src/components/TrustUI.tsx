
import { motion } from 'motion/react';
import { Mail, Phone, ChevronRight, LayoutGrid, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

// --- Case Study Section ---
export function CaseStudySection() {
  const cases = [
    { title: 'Kho vận lạnh', metric: 'IP67 Rated', label: 'Tiêu chuẩn', img: 'https://images.unsplash.com/photo-1549463013-176f9efc5980?auto=format&fit=crop&q=80' },
    { title: 'Sản xuất Robot', metric: '24/7 Power', label: 'Hiệu năng', img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80' },
    { title: 'Logistics', metric: '4.5hr+ Saved', label: 'Thời gian', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80' },
  ];

  return (
    <section className="bg-gray-900 py-24 my-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">DỰ ÁN THỰC TẾ</h2>
            <p className="text-gray-400 text-lg">
              Minh chứng cho năng lực thực thi và chất lượng giải pháp năng lượng mà PKG Battery đã triển khai cho các tập đoàn lớn.
            </p>
          </div>
          <button className="flex items-center gap-2 text-rose-600 font-bold border-b border-rose-600 pb-1 hover:gap-4 transition-all uppercase tracking-widest text-xs">
            XEM TẤT CẢ DỰ ÁN <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] bg-gray-800 overflow-hidden"
            >
              <img src={cs.img} alt={cs.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex flex-col">
                    <span className="text-rose-600 text-3xl font-bold mb-1">{cs.metric}</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">{cs.label}</span>
                    <h4 className="text-xl font-bold text-white group-hover:text-rose-600 transition-colors">{cs.title}</h4>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Topic Clusters ---
export function TopicClusters() {
  const topics = [
    { title: 'Vận hành xe nâng', description: 'Tối ưu hiệu suất kho vận bằng công nghệ mới.', count: '12 bài viết', icon: <Zap size={20} /> },
    { title: 'Kỹ thuật pin lithium', description: 'Đi sâu vào các thông số chuyên dụng & cấu tạo.', count: '08 bài viết', icon: <LayoutGrid size={20} /> },
    { title: 'Quản trị doanh nghiệp', description: 'Bài toán chi phí & lợi ích đầu tư dài hạn.', count: '05 bài viết', icon: <Mail size={20} /> },
  ];

  return (
    <section className="container mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
        {topics.map((t, i) => (
          <div key={i} className="bg-white p-10 hover:bg-gray-50 transition-all group">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 flex items-center justify-center rounded-sm mb-8 group-hover:bg-rose-600 group-hover:text-white transition-all">
              {t.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{t.description}</p>
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="group-hover:text-rose-600 transition-colors uppercase">Khám phá ngay</span>
              <span>{t.count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Final CTA ---
export function FinalCTA() {
  return (
    <section className="relative container mx-auto px-6 mb-20 overflow-hidden">
      <div className="bg-gray-950 p-12 md:p-20 relative">
        {/* Background circuit lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-px bg-rose-600" />
           <div className="absolute top-10 right-10 w-px h-full bg-rose-600/50" />
           <div className="absolute bottom-10 left-10 w-px h-full bg-rose-600/50" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              BẮT ĐẦU CHUYỂN ĐỔI <br />
              <span className="text-rose-600">NĂNG LƯỢNG SẠCH</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Đội ngũ chuyên gia kỹ thuật của PKG Battery luôn sẵn sàng giải đáp thắc mắc và tư vấn giải pháp phù hợp với quy mô doanh nghiệp bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-600 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-gray-950 transition-all flex items-center gap-2">
                Liên hệ ngay <ChevronRight size={16} />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all">
                Gửi yêu cầu báo giá
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Hỗ trợ khẩn cấp</h4>
             <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-all">
                      <Phone size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Hotline 24/7</div>
                      <div className="text-white font-bold text-xl tracking-tight">1900 123 456</div>
                   </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-all">
                      <Mail size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Phòng dự án</div>
                      <div className="text-white font-bold text-xl tracking-tight">project@pkgbattery.com.vn</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
