import React from 'react';
import { Article } from '../types';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const typeLabels: Record<string, string> = {
    technical: 'Kỹ thuật',
    news: 'Tin tức',
    project: 'Dự án',
    oem: 'OEM/ODM'
  };

  const typeColors: Record<string, string> = {
    technical: 'bg-blue-50 text-blue-600',
    news: 'bg-green-50 text-green-600',
    project: 'bg-orange-50 text-orange-600',
    oem: 'bg-purple-50 text-purple-600'
  };

  if (featured) {
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden bg-white border border-zinc-200 shadow-xl rounded-sm transition-all"
      >
        <div className="relative h-64 lg:h-full overflow-hidden bg-zinc-200">
          {article.thumbnail ? (
            <img 
              src={article.thumbnail} 
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-400 font-medium">
              PKG BATTERY
            </div>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg ${typeColors[article.type] || 'bg-zinc-100'}`}>
              {typeLabels[article.type]}
            </span>
            <span className="px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
              Nổi bật
            </span>
          </div>
        </div>
        
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-xs text-zinc-500 mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.publishDate}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
          </div>
          <h2 className="text-2xl lg:text-4xl font-display font-bold text-zinc-900 mb-6 group-hover:text-brand-red transition-colors leading-tight">
            {article.title}
          </h2>
          <p className="text-zinc-600 text-base lg:text-lg mb-8 line-clamp-3 leading-relaxed">
            {article.summary || "Bấm vào để đọc chi tiết về các giải pháp năng lượng công nghiệp tiên tiến của PKG Battery."}
          </p>
          <div className="mt-auto flex items-center justify-between">
            {article.author && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500 overflow-hidden">
                  {article.author.avatar ? <img src={article.author.avatar} alt={article.author.name} /> : <User size={20} />}
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">{article.author.name}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">{article.author.role}</div>
                </div>
              </div>
            )}
            <button className="flex items-center gap-2 text-brand-red font-bold text-sm hover:translate-x-1 transition-transform">
              XEM CHI TIẾT <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group flex flex-col bg-white border border-zinc-200 rounded-sm overflow-hidden h-full shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden bg-zinc-200">
        {article.thumbnail ? (
          <img 
            src={article.thumbnail} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-50 text-zinc-300 font-bold text-xl tracking-tighter">
            PKG
          </div>
        )}
        <span className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-sm ${typeColors[article.type] || 'bg-zinc-100 text-zinc-600'}`}>
          {typeLabels[article.type]}
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-3">
           <span className="flex items-center gap-1"><Calendar size={12} /> {article.publishDate}</span>
           <span>•</span>
           <span>{article.readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-zinc-600 text-sm mb-6 line-clamp-2 flex-grow">
          {article.summary || "Nội dung đang được cập nhật..."}
        </p>
        <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
              <User size={14} />
            </div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              {article.author?.name || "PKG Editor"}
            </span>
          </div>
          <ArrowRight size={16} className="text-zinc-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};
