/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Menu, 
  X,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Award,
  Zap,
  TrendingUp,
  Boxes
} from 'lucide-react';

// --- Types ---

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

// --- Mock Data ---

const ARTICLES: Article[] = [
  {
    id: '1',
    category: 'Kiến thức kỹ thuật',
    title: 'Pin Lithium xe nâng là gì? Giải pháp tối ưu cho kho vận hiện đại',
    excerpt: 'Tìm hiểu về cấu tạo, nguyên lý hoạt động và lý do tại sao các doanh nghiệp kho vận đang chuyển dịch mạnh mẽ sang pin Lithium-ion.',
    date: '12/05/2026',
    author: 'PKG Battery',
    readTime: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '2',
    category: 'Dự án bàn giao',
    title: 'PKG Battery bàn giao hệ thống pin cho doanh nghiệp Logistics hàng đầu tại Bình Dương',
    excerpt: 'Dự án cung cấp hơn 100 bộ pin Lithium xe nâng công suất lớn, hỗ trợ vận hành 3 ca liên tục không gián đoạn.',
    date: '10/05/2026',
    author: 'Đội ngũ dự án',
    readTime: '3 phút đọc',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Kiến thức kỹ thuật',
    title: 'So sánh pin Lithium và ắc quy Chì-Axit: Khi nào nên đầu tư?',
    excerpt: 'Phân tích chi tiết về chi phí TCO (Total Cost of Ownership) giữa hai loại lưu trữ năng lượng phổ biến nhất hiện nay.',
    date: '08/05/2026',
    author: 'Kỹ thuật viên PKG',
    readTime: '8 phút đọc',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'Tin doanh nghiệp',
    title: 'PKG Battery ký kết hợp tác chiến lược với đối tác OEM từ Hàn Quốc',
    excerpt: 'Mở rộng khả năng cung ứng và chuyển giao công nghệ BMS tiên tiến nhất cho thị trường Việt Nam.',
    date: '05/05/2026',
    author: 'Phó Giám đốc KD',
    readTime: '4 phút đọc',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    category: 'AGV / Robot',
    title: 'Giải pháp pin thông minh cho hệ thống kho tự động AGV',
    excerpt: 'Công nghệ sạc nhanh (Fast Charging) và tích hơp giao tiếp CAN bus giúp robot hoạt động tối ưu hiệu suất.',
    date: '01/05/2026',
    author: 'PKG R&D',
    readTime: '6 phút đọc',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    category: 'Xe nâng',
    title: 'Cách chọn pin phù hợp cho xe nâng điện của bạn',
    excerpt: 'Hướng dẫn lựa chọn dung lượng (Ah) và điện áp (V) phù hợp với cường độ làm việc của nhà máy.',
    date: '28/04/2026',
    author: 'Tư vấn kỹ thuật',
    readTime: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1586864387917-f53ab4663efc?auto=format&fit=crop&q=80&w=800'
  }
];

const CATEGORIES = [
  'Tất cả',
  'Kiến thức kỹ thuật',
  'Tin doanh nghiệp',
  'Dự án bàn giao',
  'Xe nâng',
  'AGV / Robot',
  'OEM / ODM'
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pkg-red flex items-center justify-center rounded-sm">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter">
            PKG <span className="text-pkg-red">BATTERY</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Sản phẩm', 'Giải pháp', 'Kiến thức', 'Về PKG', 'Liên hệ'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-sm font-medium hover:text-pkg-red transition-colors ${item === 'Kiến thức' ? 'text-pkg-red' : 'text-pkg-dark-gray'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-pkg-black text-white px-5 py-2 text-sm font-medium rounded-sm hover:bg-pkg-red transition-all cursor-pointer">
            Gửi yêu cầu báo giá
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-pkg-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Sản phẩm', 'Giải pháp', 'Kiến thức', 'Về PKG', 'Liên hệ'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium border-b border-gray-50 pb-2">{item}</a>
            ))}
            <button className="bg-pkg-red text-white py-4 font-bold rounded-sm mt-2">
              Liên hệ tư vấn
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeaturedCard = ({ article }: { article: Article }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-sm bg-pkg-black mb-12"
    >
      <div className="grid md:grid-cols-2 min-h-[450px]">
        <div className="relative overflow-hidden h-64 md:h-auto">
          <img 
            src={article.image} 
            alt={article.title} 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pkg-black/60 to-transparent"></div>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center bg-pkg-black text-white relative">
          <div className="mb-4 inline-flex items-center gap-2 text-pkg-red font-bold text-xs uppercase tracking-widest">
            <div className="w-8 h-[2px] bg-pkg-red"></div>
            Bài viết nổi bật
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-display font-medium">
            {article.title}
          </h2>
          <p className="text-gray-400 text-lg mb-8 line-clamp-3 leading-relaxed max-w-xl">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2"><Calendar size={16} /> {article.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</div>
            <div className="flex items-center gap-2"><User size={16} /> {article.author}</div>
          </div>
          <div>
            <button className="inline-flex items-center gap-3 bg-white text-pkg-black px-8 py-4 font-bold rounded-sm hover:bg-pkg-red hover:text-white transition-all group/btn cursor-pointer">
              Đọc bài viết <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col bg-white border border-gray-100 rounded-sm hover:shadow-xl transition-all h-full"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pkg-black">
          {article.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-4 font-semibold uppercase tracking-wide">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-xl mb-3 font-display font-semibold text-pkg-black leading-snug group-hover:text-pkg-red transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-bold text-pkg-black group-hover:gap-4 transition-all">
            Xem chi tiết <ChevronRight size={16} className="text-pkg-red" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARTICLES.filter(article => {
    const matchesCat = activeCategory === 'Tất cả' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = ARTICLES.find(a => a.isFeatured);
  const remaining = filteredArticles.filter(a => !a.isFeatured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden flex items-center industrial-grid">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-pkg-red/10 px-4 py-2 text-pkg-red mb-6 rounded-full"
            >
              <TrendingUp size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Knowledge Hub</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-balance font-display font-bold uppercase"
            >
              TRUNG TÂM KIẾN THỨC <br />
              <span className="text-pkg-red">PIN CÔNG NGHIỆP</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl text-balance font-light"
            >
              Góc nhìn từ nhà sản xuất pin công nghiệp hàng đầu Việt Nam. <br className="hidden md:block" />
              Cập nhật kiến thức kỹ thuật, ứng dụng thực tế và hoạt động mới nhất từ PKG Battery.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-pkg-black text-white px-8 py-4 font-bold rounded-sm hover:bg-pkg-red transition-all cursor-pointer">
                Khám phá nội dung
              </button>
              <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm kiến thức..." 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 outline-none focus:border-pkg-red transition-colors text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-pkg-red/5 -skew-x-12 translate-x-1/2 z-0 hidden lg:block"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border-2 border-pkg-red/10 rounded-full z-0"></div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-y border-gray-100 sticky top-16 z-40 shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 py-4 whitespace-nowrap min-w-max">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-bold uppercase tracking-wider relative py-2 transition-colors cursor-pointer ${activeCategory === cat ? 'text-pkg-red' : 'text-gray-400 hover:text-pkg-black'}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-[1px] left-0 right-0 h-1 bg-pkg-red" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Listing */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Featured is only shown when on 'Tất cả' or no active filter for first page */}
        {(activeCategory === 'Tất cả' || activeCategory === featured?.category) && featured && !searchQuery && (
          <div key={featured.id}>
            <FeaturedCard article={featured} />
          </div>
        )}

        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-display mb-2 uppercase italic tracking-tighter">
              {activeCategory === 'Tất cả' ? 'Mới cập nhật' : activeCategory}
            </h2>
            <div className="w-20 h-1 bg-pkg-red"></div>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Hiển thị {filteredArticles.length} bài viết
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remaining.map((article, idx) => (
              <div key={article.id}>
                <ArticleCard article={article} index={idx} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border-2 border-dashed border-gray-100 rounded-sm">
            <div className="mb-4 inline-block p-6 bg-gray-50 rounded-full text-gray-300">
              <Search size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Chưa có nội dung phù hợp</h3>
            <p className="text-gray-500">Vui lòng thử từ khóa hoặc chuyên mục khác.</p>
            <button 
              onClick={() => { setActiveCategory('Tất cả'); setSearchQuery(''); }}
              className="mt-6 text-pkg-red font-bold underline"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}

        {/* Pagination Placeholder */}
        {filteredArticles.length > 0 && (
          <div className="mt-20 flex justify-center">
            <button className="group flex items-center gap-4 bg-transparent border-2 border-pkg-black px-10 py-4 font-bold hover:bg-pkg-black hover:text-white transition-all rounded-sm cursor-pointer">
              Xem thêm bài viết <TrendingUp size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </main>

      {/* Industrial Trust Signals (Bento Style) */}
      <section className="bg-pkg-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 p-8 bg-white border-l-4 border-pkg-red">
              <Boxes className="text-pkg-red mb-6" size={40} />
              <h3 className="text-2xl font-display mb-4">Năng lực sản xuất Việt Nam</h3>
              <p className="text-gray-600 leading-relaxed italic">
                “Chúng tôi làm chủ công nghệ từ thiết kế Hardware, Software BMS đến lắp ráp hoàn thiện Pack pin tại nhà máy Việt Nam, đảm bảo tiến độ và chất lượng chuẩn B2B.”
              </p>
            </div>
            <div className="p-8 bg-pkg-black text-white flex flex-col justify-between">
              <Award className="text-pkg-red mb-6" size={40} />
              <div>
                <h3 className="text-xl font-display mb-2">Đối tác tin cậy</h3>
                <p className="text-gray-400 text-sm">Hơn 500+ doanh nghiệp đã tin dùng giải pháp của PKG Battery.</p>
              </div>
            </div>
            <div className="p-8 bg-white border border-gray-200 flex flex-col justify-between">
              <Zap className="text-pkg-red mb-6" size={40} />
              <div>
                <h3 className="text-xl font-display mb-2">Tư vấn kỹ thuật</h3>
                <p className="text-gray-600 text-sm">Hỗ trợ khảo sát và tính toán TCO miễn phí cho dự án của bạn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-pkg-black group">
        <div className="absolute inset-0 opacity-10 industrial-grid group-hover:opacity-20 transition-opacity"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight italic uppercase">
              Bạn đang tìm giải pháp pin <br /> 
              <span className="text-pkg-red underline decoration-white/20 underline-offset-8">cho doanh nghiệp?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Đội ngũ PKG Battery sẵn sàng tư vấn giải pháp kỹ thuật và báo giá phù hợp nhất với nhu cầu vận hành thực tế của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="inline-flex items-center justify-center gap-3 bg-pkg-red text-white px-10 py-5 font-bold rounded-sm hover:scale-105 transition-all text-lg cursor-pointer">
                Liên hệ tư vấn ngay <Phone size={20} />
              </button>
              <button className="inline-flex items-center justify-center gap-3 bg-white text-pkg-black px-10 py-5 font-bold rounded-sm hover:bg-gray-100 transition-all text-lg cursor-pointer">
                Gửi yêu cầu báo giá <Mail size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-pkg-red flex items-center justify-center rounded-sm">
                  <Zap className="text-white fill-white" size={18} />
                </div>
                <span className="font-display font-bold text-xl tracking-tighter uppercase italic">
                  PKG <span className="text-pkg-red">BATTERY</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Nhà sản xuất pin lithium công nghiệp hàng đầu tại Việt Nam. Chuyên cung cấp giải pháp năng lượng cho xe nâng, AGV, Robot và hệ thống lưu trữ.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full hover:border-pkg-red hover:text-pkg-red transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full hover:border-pkg-red hover:text-pkg-red transition-all"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Sản phẩm</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin Lithium xe nâng</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin AGV / Robot</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Pin xe điện du lịch</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Trạm sạc công nghiệp</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Hệ thống lưu trữ ESS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Kiến thức</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-pkg-red transition-colors">Kiến thức kỹ thuật</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Dự án bàn giao</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Tin tức doanh nghiệp</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-pkg-red transition-colors">Tài liệu kỹ thuật</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex gap-3">
                  <Phone size={16} className="text-pkg-red shrink-0" />
                  <span>+84 123 456 789</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-pkg-red shrink-0" />
                  <span>contact@pkgbattery.vn</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-gray-50 rounded-sm">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-2">Đăng ký nhận tin</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Email của bạn" className="bg-white border border-gray-200 px-3 py-2 text-xs w-full focus:border-pkg-red outline-none" />
                  <button className="bg-pkg-black text-white p-2">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
            <p className="text-xs text-gray-400 font-medium">
              © 2026 PKG Battery. All rights reserved. Made for Industrial Excellence.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              <a href="#" className="hover:text-pkg-black transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-pkg-black transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-pkg-black transition-colors">Chính sách bảo hành</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
