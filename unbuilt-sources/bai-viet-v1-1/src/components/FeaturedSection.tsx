import { Article } from '../types';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedSectionProps {
  articles: Article[];
}

export default function FeaturedSection({ articles }: FeaturedSectionProps) {
  const main = articles[0];
  const secondary = articles.slice(1, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main Featured */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:col-span-8 group relative overflow-hidden"
        >
          <div className="aspect-[16/10] lg:aspect-auto h-full min-h-[500px] overflow-hidden">
             <img 
               src={main.image} 
               alt={main.title} 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-pkg-charcoal/90 via-pkg-charcoal/20 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-pkg-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Nổi bật</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {main.readTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] mb-6 hover:text-pkg-red transition-colors cursor-pointer">
              {main.title}
            </h2>
            <p className="text-gray-300 text-lg line-clamp-2 mb-8 hidden md:block">
              {main.summary}
            </p>
            <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group/btn">
              Xem chi tiết <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Side Featured */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="space-y-4 border-l-2 border-pkg-red pl-6 py-2">
            <h3 className="font-display font-bold text-2xl uppercase tracking-tighter">Xu hướng B2B</h3>
            <p className="text-sm text-gray-500 font-medium">Cập nhật công nghệ lưu trữ cho doanh nghiệp 2024</p>
          </div>

          {secondary.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-5">
                 <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-pkg-red uppercase tracking-widest">{article.category}</span>
                <h4 className="text-xl font-display font-bold leading-tight group-hover:text-pkg-red transition-colors">
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
