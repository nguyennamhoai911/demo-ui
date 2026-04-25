/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Download, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck, 
  Factory, 
  Wrench, 
  FileText, 
  Phone,
  MessageSquare,
  Globe,
  Settings
} from 'lucide-react';

// --- Types & CMS Context ---
type ContentType = 'Technical Guide' | 'Case Study' | 'Download' | 'Company News' | 'OEM/ODM';

interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  type: ContentType;
  image: string;
  date: string;
  readTime?: string;
  featured?: boolean;
}

const CATEGORIES = [
  'Tất cả',
  'Pin xe nâng',
  'AGV / Robot',
  'Lưu trữ năng lượng',
  'OEM / ODM',
  'Kiến thức kỹ thuật',
  'Case Study',
  'Tài liệu'
];

const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Pin Lithium xe nâng: Giải pháp tối ưu tăng hiệu suất cho nhà vận hành kho vận',
    summary: 'Phân tích chi tiết về lợi ích kinh tế và vận hành khi chuyển đổi từ pin chì-axit sang công nghệ Lithium-ion trong các kho hàng hiện đại.',
    category: 'Pin xe nâng',
    type: 'Technical Guide',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    date: '24/04/2026',
    readTime: '8 phút đọc',
    featured: true
  },
  {
    id: '2',
    title: 'Hệ thống Pin AGV cho dây chuyền sản xuất tự động hóa tại Hải Dương',
    summary: 'Cách PKG Battery thiết kế giải pháp năng lượng liên tục cho đội ngũ robot AGV vận hành 24/7 không cần giám sát.',
    category: 'AGV / Robot',
    type: 'Case Study',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    date: '20/04/2026',
    readTime: '5 phút đọc'
  },
  {
    id: '3',
    title: 'Quy trình kiểm soát chất lượng (QC) nghiêm ngặt tại nhà máy PKG',
    summary: 'Bên trong phòng Lab của PKG: Cách chúng tôi đảm bảo mỗi cell pin đều đạt chuẩn công nghiệp trước khi đóng pack.',
    category: 'Kiến thức kỹ thuật',
    type: 'OEM/ODM',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    date: '18/04/2026',
    readTime: '10 phút đọc'
  },
  {
    id: '4',
    title: 'Catalog Giải pháp Pin Công nghiệp 2026 (PDF)',
    summary: 'Tải xuống bảng thông số kỹ thuật đầy đủ các dòng pin lithium dành cho xe nâng và hệ thống lưu trữ năng lượng.',
    category: 'Tài liệu',
    type: 'Download',
    image: 'https://images.unsplash.com/photo-1618044619489-114d603a6498?auto=format&fit=crop&q=80&w=600',
    date: '15/04/2026'
  },
  {
    id: '5',
    title: 'So sánh Pin Lithium vs Chì-Axit: Tính toán bài toán ROI thực tế',
    summary: 'Đừng chỉ nhìn vào giá mua. Hãy nhìn vào tổng chi phí sở hữu (TCO) trong 5 năm để thấy sự khác biệt về kinh tế.',
    category: 'Kiến thức kỹ thuật',
    type: 'Technical Guide',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600',
    date: '12/04/2026',
    readTime: '12 phút đọc'
  }
];

// --- Components ---

const Tag = ({ type }: { type: ContentType }) => {
  const styles: Record<ContentType, string> = {
    'Technical Guide': 'bg-pkg-charcoal text-white',
    'Case Study': 'bg-pkg-red text-white font-bold',
    'Download': 'bg-blue-600 text-white',
    'Company News': 'bg-gray-200 text-gray-800',
    'OEM/ODM': 'bg-amber-600 text-white'
  };

  return (
    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${styles[type]}`}>
      {type === 'Download' && <Download className="inline-block w-3 h-3 mr-1 mb-0.5" />}
      {type}
    </span>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1 group">
              <span className={isScrolled ? 'text-pkg-red' : 'text-pkg-red'}>PKG</span>
              <span className={isScrolled ? 'text-pkg-charcoal' : 'text-white'}>BATTERY</span>
              <div className="w-2 h-2 bg-pkg-red rounded-full group-hover:animate-ping"></div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {['Sản phẩm', 'Giải pháp', 'Kiến thức', 'Về chúng tôi'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`hover:text-pkg-red transition-colors ${
                    isScrolled ? 'text-pkg-charcoal' : 'text-white'
                  } ${item === 'Kiến thức' ? 'text-pkg-red' : ''}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className={`hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
              isScrolled ? 'text-pkg-charcoal' : 'text-white'
            }`}>
              <Globe className="w-4 h-4" />
              <span>VI</span>
              <span className="opacity-30">/</span>
              <span className="opacity-50">EN</span>
            </div>
            <button className="bg-pkg-red text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-pkg-charcoal transition-all shadow-lg shadow-pkg-red/20 active:scale-95">
              Nhận tư vấn
            </button>
            <button 
              className={`lg:hidden ${isScrolled ? 'text-pkg-charcoal' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-pkg-charcoal text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="PKG Factory"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pkg-charcoal/80 via-transparent to-pkg-charcoal"></div>
          <div className="absolute inset-0 technical-grid opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-pkg-red text-sm font-black tracking-[0.5em] mb-4 uppercase">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none italic uppercase">
              Trung tâm Kiến thức <br/><span className="text-pkg-red">Pin Công nghiệp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
              Kiến thức kỹ thuật, giải pháp ứng dụng và tài liệu chuyên sâu dành cho doanh nghiệp từ nhà sản xuất PKG Battery.
            </p>

            <div className="relative max-w-2xl mx-auto group">
              <input 
                type="text" 
                placeholder="Tìm kiếm giải pháp, tài liệu..."
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-sm text-lg outline-none focus:bg-white focus:text-pkg-charcoal transition-all group-hover:border-pkg-red/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <Search className="text-gray-400" />
                <button className="hidden md:block bg-pkg-red px-6 py-2 rounded-sm text-xs font-bold font-mono tracking-tighter group-active:scale-95 transition-transform">SEARCH</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK TOPIC BAR */}
      <div className="sticky top-[68px] md:top-[80px] z-40 bg-white border-b border-gray-100 overflow-x-auto no-scrollbar shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center h-16 whitespace-nowrap gap-8">
          <span className="text-xs font-black uppercase text-gray-400 border-r pr-8 h-8 flex items-center">Chủ đề:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-bold transition-all px-2 relative h-full flex items-center ${
                activeCategory === cat ? 'text-pkg-red' : 'text-gray-500 hover:text-pkg-charcoal'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-pkg-red"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED CONTENT (Editorial Style) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                Nội dung <span className="text-pkg-red">Nổi bật</span>
              </h2>
              <div className="w-20 h-2 bg-pkg-red mt-4"></div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400">
              <span className="text-pkg-charcoal underline">Popular</span>
              <span>Newest</span>
              <span>Trending</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative overflow-hidden aspect-video bg-gray-100 mb-6">
                <img 
                  src={ARTICLES[0].image} 
                  alt={ARTICLES[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <Tag type={ARTICLES[0].type} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pkg-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <span>{ARTICLES[0].category}</span>
                  <span>•</span>
                  <span>{ARTICLES[0].date}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-pkg-red transition-colors leading-tight">
                  {ARTICLES[0].title}
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl line-clamp-2 font-medium">
                  {ARTICLES[0].summary}
                </p>
                <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Đọc ngay <ArrowUpRight className="w-4 h-4 text-pkg-red" />
                </button>
              </div>
            </div>

            {/* Sidebar Secondary Articles */}
            <div className="lg:col-span-4 space-y-12">
              {[ARTICLES[1], ARTICLES[2], ARTICLES[3]].map((article) => (
                <div key={article.id} className="group cursor-pointer flex gap-6">
                  <div className="w-24 h-24 shrink-0 overflow-hidden bg-gray-100">
                    <img 
                      src={article.image} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      alt="" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Tag type={article.type} />
                    </div>
                    <h4 className="text-sm md:text-base font-bold leading-snug group-hover:text-pkg-red transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{article.date}</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-pkg-charcoal p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <Settings className="w-10 h-10 text-pkg-red mb-4 animate-spin-slow" />
                  <h4 className="text-xl font-black mb-2 italic">Tư vấn kỹ thuật OEM?</h4>
                  <p className="text-sm text-gray-400 mb-6">Đội ngũ kỹ sư PKG hỗ trợ thiết kế pack pin theo yêu cầu đặc thù của doanh nghiệp.</p>
                  <button className="text-xs font-bold border-b border-pkg-red pb-1 hover:text-pkg-red flex items-center gap-2">
                    LIÊN HỆ KỸ SƯ <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-[-20px] right-[-20px] opacity-10">
                  <Zap className="w-40 h-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST PROOF BAND */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Factory className="w-8 h-8 text-pkg-red mb-4" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Cơ sở sản xuất</span>
            <span className="text-sm font-bold">100% Nhà máy Việt Nam</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-pkg-red mb-4" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Chất lượng</span>
            <span className="text-sm font-bold">Tiêu chuẩn Công nghiệp</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Wrench className="w-8 h-8 text-pkg-red mb-4" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Dịch vụ</span>
            <span className="text-sm font-bold">Hỗ trợ kỹ thuật 24/7</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings className="w-8 h-8 text-pkg-red mb-4" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Tùy biến</span>
            <span className="text-sm font-bold">Linh hoạt OEM / ODM</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ARTICLES.concat(ARTICLES).map((article, idx) => (
              <motion.div 
                key={article.id + idx}
                whileHover={{ y: -5 }}
                className="group cursor-pointer border-b border-gray-100 pb-8"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <Tag type={article.type} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-pkg-red transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 font-medium">
                    {article.summary}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 italic">{article.readTime}</span>
                    <ChevronRight className="w-4 h-4 text-pkg-red transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="bg-pkg-charcoal text-white px-12 py-4 text-xs font-black tracking-[0.3em] uppercase hover:bg-pkg-red transition-all active:scale-95 shadow-xl shadow-black/10">
              Xem thêm nội dung
            </button>
          </div>
        </div>
      </section>

      {/* RESOURCE CENTER (Lead Magnet Zone) */}
      <section className="py-24 bg-pkg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-pkg-red text-sm font-black tracking-widest uppercase">Thư viện tài liệu</span>
            <h2 className="text-4xl md:text-6xl text-white font-black italic tracking-tighter uppercase leading-none">
              Tài liệu kỹ thuật <br/> <span className="text-pkg-red italic opacity-80">Chuyên sâu</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl font-medium">
              Chúng tôi cung cấp miễn phí các bộ tài liệu, bảng thông số kỹ thuật và hướng dẫn vận hành pin lithium chuẩn công nghiệp.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-pkg-red/50 transition-colors cursor-pointer">
                <FileText className="w-8 h-8 text-pkg-red mb-4" />
                <h4 className="text-white font-bold mb-4">Catalog Pin Lithium Xe Nâng</h4>
                <button className="text-[10px] font-black tracking-widest text-pkg-red uppercase flex items-center gap-2">
                  Tải xuống (2.4MB) <Download className="w-3 h-3 " />
                </button>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between group hover:border-pkg-red/50 transition-colors cursor-pointer">
                <Settings className="w-8 h-8 text-pkg-red mb-4" />
                <h4 className="text-white font-bold mb-4">Hướng dẫn vận hành hệ thống</h4>
                <button className="text-[10px] font-black tracking-widest text-pkg-red uppercase flex items-center gap-2">
                  Tải xuống (1.1MB) <Download className="w-3 h-3 " />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative z-10 bg-white p-12 shadow-2xl asymmetric-clip">
              <h3 className="text-2xl font-black text-pkg-charcoal mb-4 uppercase italic">Nhận tài liệu độc quyền</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium">Để lại thông tin để chúng tôi gửi bộ giải pháp ROI xe nâng và Catalog mới nhất 2026 qua Email.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Họ và tên của bạn" className="w-full border-b border-gray-200 py-3 outline-none focus:border-pkg-red text-sm" />
                <input type="email" placeholder="Email nhận tài liệu" className="w-full border-b border-gray-200 py-3 outline-none focus:border-pkg-red text-sm" />
                <button className="w-full bg-pkg-red text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-pkg-charcoal transition-all mt-4">
                  Gửi yêu cầu ngay
                </button>
              </form>
            </div>
            {/* Background elements */}
            <div className="absolute top-[-40px] right-[-40px] w-48 h-48 bg-pkg-red/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Zap className="w-16 h-16 text-pkg-red mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">
            Bạn đang tìm giải pháp <br/> Pin cho doanh nghiệp?
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
            Hãy để đội ngũ chuyên gia của PKG Battery tư vấn phương án kỹ thuật và tài chính tối ưu nhất cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-pkg-red text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> Gọi kỹ sư tư vấn
            </button>
            <button className="w-full sm:w-auto border-2 border-pkg-charcoal text-pkg-charcoal px-10 py-[18px] font-black uppercase tracking-widest text-sm hover:bg-pkg-charcoal hover:text-white transition-all flex items-center justify-center gap-3">
               Nhận báo giá ngay
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
             <div className="text-3xl font-black underline mb-6">PKG</div>
             <p className="text-sm text-gray-500 leading-relaxed font-medium">
               Nhà sản xuất pin công nghiệp hàng đầu Việt Nam. Chuyên giải pháp Lithium cho Xe nâng, AGV và Hệ thống lưu trợ năng lượng.
             </p>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest mb-6">Sản phẩm</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium lowercase">
              <li><a href="#" className="hover:text-pkg-red">Pin xe nâng Lithium</a></li>
              <li><a href="#" className="hover:text-pkg-red">Pin AGV / Robot</a></li>
              <li><a href="#" className="hover:text-pkg-red">Hệ thống ESS</a></li>
              <li><a href="#" className="hover:text-pkg-red">OEM Pack pin</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest mb-6">Knowledge</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium lowercase">
              <li><a href="#" className="hover:text-pkg-red">Technical Guides</a></li>
              <li><a href="#" className="hover:text-pkg-red">Success Stories</a></li>
              <li><a href="#" className="hover:text-pkg-red">QC Process</a></li>
              <li><a href="#" className="hover:text-pkg-red">Download Center</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase text-xs tracking-widest mb-6">Liên hệ</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>TP. Hồ Chí Minh, Việt Nam</li>
              <li>sales@pkgbattery.com.vn</li>
              <li>(+84) 9XX XXX XXX</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-gray-400 font-bold tracking-widest">© 2026 PKG BATTERY CO., LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
             <a href="#" className="text-xs text-gray-400 hover:text-pkg-red font-bold uppercase tracking-widest">Bảo mật</a>
             <a href="#" className="text-xs text-gray-400 hover:text-pkg-red font-bold uppercase tracking-widest">Điều khoản</a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t border-gray-100 flex p-3 gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <button className="flex-1 bg-gray-100 text-pkg-charcoal py-3 rounded-sm text-xs font-black uppercase flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4" /> Zalo
        </button>
        <button className="flex-2 bg-pkg-red text-white py-3 rounded-sm text-xs font-black uppercase flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Liên hệ tư vấn
        </button>
      </div>
    </div>
  );
}
