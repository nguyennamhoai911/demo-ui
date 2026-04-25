import { Article } from '../types';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleCardProps {
  key?: string | number;
  article: Article;
  layout?: 'grid' | 'row' | 'compact';
}

export default function ArticleCard({ article, layout = 'grid' }: ArticleCardProps) {
  if (layout === 'row') {
    return (
      <motion.div 
        whileHover={{ x: 10 }}
        className="group flex flex-col md:flex-row gap-8 py-10 border-b border-gray-100 items-center"
      >
        <div className="w-full md:w-1/3 aspect-[16/10] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-pkg-red">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>
          <h3 className="text-3xl font-display font-bold leading-tight group-hover:text-pkg-red transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed max-w-2xl">
            {article.summary}
          </p>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] pt-2">
            Đọc tiếp <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group flex flex-col space-y-5"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
          {article.category}
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1">
             {article.readTime}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold leading-snug group-hover:text-pkg-red transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {article.summary}
        </p>
      </div>
    </motion.div>
  );
}
