
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Article, CATEGORIES } from '../constants';
import { cn } from '../lib/utils';

// --- Filter Bar ---
export function FilterBar({ activeId, onSelect }: { activeId: string, onSelect: (id: string) => void }) {
  return (
    <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 mb-8 py-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={cn(
                "whitespace-nowrap px-6 py-2.5 text-sm font-bold transition-all border-b-2 rounded-t-sm",
                activeId === cat.id 
                  ? "border-rose-600 text-rose-600 bg-rose-50" 
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Article Card ---
interface ArticleCardProps {
  article: Article;
  layout?: 'standard' | 'compact' | 'featured';
}

export function ArticleCard({ article, layout = 'standard' }: ArticleCardProps) {
  const isFeatured = layout === 'featured';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col bg-white overflow-hidden",
        isFeatured ? "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" : "border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 p-1"
      )}
    >
      {/* Image Wrap */}
      <div className={cn(
        "relative overflow-hidden aspect-[16/9] bg-gray-100",
        isFeatured ? "aspect-[4/3] lg:aspect-video" : ""
      )}>
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md",
            article.type === 'technical' ? "bg-gray-900/80" : 
            article.type === 'news' ? "bg-rose-600/80" : "bg-emerald-600/80"
          )}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn("flex flex-col", isFeatured ? "justify-center py-4" : "p-6 pt-5")}>
        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <div className="flex items-center gap-1.5"><Calendar size={12} className="mb-0.5" /> {article.date}</div>
          <div className="flex items-center gap-1.5"><Clock size={12} className="mb-0.5" /> {article.readTime}</div>
        </div>

        <h3 className={cn(
          "font-bold text-gray-900 group-hover:text-rose-600 transition-colors mb-4 line-clamp-2 leading-tight",
          isFeatured ? "text-3xl md:text-5xl" : "text-xl"
        )}>
          {article.title}
        </h3>

        <p className={cn(
          "text-gray-600 mb-6 line-clamp-3 leading-relaxed",
          isFeatured ? "text-lg" : "text-sm"
        )}>
          {article.excerpt}
        </p>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-widest group-hover:gap-4 transition-all"
        >
          {isFeatured ? "Xem chi tiết bài viết" : "Đọc thêm"} 
          <ChevronRight size={14} className="text-rose-600" />
        </a>
      </div>

      {isFeatured && <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />}
    </motion.div>
  );
}

// --- Featured Section ---
export function FeaturedGrid({ articles }: { articles: Article[] }) {
  const featured = articles[0];
  const side = articles.slice(1, 4);

  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">NỔI BẬT HÔM NAY</h2>
        <div className="flex-grow h-px bg-gray-100" />
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        <div className="xl:col-span-2">
          {featured && <ArticleCard article={featured} layout="featured" />}
        </div>
        <div className="flex flex-col gap-8">
           <h4 className="text-xs font-bold text-rose-600 tracking-widest uppercase mb-2">Đừng bỏ lỡ</h4>
           {side.map(art => (
             <div key={art.id} className="group border-b border-gray-100 pb-6 last:border-0">
               <div className="flex gap-4 items-center">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none bg-gray-50 px-2 py-1">{art.category}</span>
                  <span className="text-[10px] font-medium text-gray-300">• {art.date}</span>
               </div>
               <h5 className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors mt-3 line-clamp-2 leading-snug">
                 {art.title}
               </h5>
               <a href="#" className="mt-3 flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-rose-600 transition-all opacity-0 group-hover:opacity-100">
                XEM BÀI VIẾT <ArrowUpRight size={12} />
               </a>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
