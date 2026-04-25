import React, { useState, useEffect } from 'react';
import { 
  Battery, 
  Zap, 
  Clock, 
  Maximize2, 
  Weight, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ChevronDown, 
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Info,
  Truck,
  Building2,
  Package,
  ArrowLeftRight,
  FileText,
  FileBox,
  History,
  LayoutGrid,
  ZoomIn,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Mock Data ---

const PRODUCT_DATA = {
  id: 'PKGFF-24230V1',
  category: 'Pin lithium cho xe nâng điện',
  name: 'Bình ắc quy pin lithium cho xe nâng điện 24V 230Ah',
  description: 'Giải pháp pin lithium công nghiệp cho xe nâng vận hành ổn định, sạc nhanh và giảm chi phí bảo trì.',
  mainSpecs: [
    { label: 'Mã sản phẩm', value: 'PKGFF-24230V1', icon: <Info className="w-5 h-5 text-red-600" /> },
    { label: 'Dung lượng', value: '230 Ah', icon: <Battery className="w-5 h-5 text-red-600" /> },
    { label: 'Năng lượng', value: '5.8 kWh', icon: <Zap className="w-5 h-5 text-red-600" /> },
    { label: 'Điện áp', value: '25.6 V', icon: <Zap className="w-5 h-5 text-red-600" /> },
    { label: 'Thời gian sạc', value: '2 – 4 giờ', icon: <Clock className="w-5 h-5 text-red-600" /> },
    { label: 'Kích thước', value: '630 × 175 × 450 mm', icon: <Maximize2 className="w-5 h-5 text-red-600" /> },
    { label: 'Khối lượng', value: '~54 kg', icon: <Weight className="w-5 h-5 text-red-600" /> },
  ],
  benefits: [
    'Sạc nhanh trong 2–4 giờ',
    'Không cần châm nước định kỳ',
    'BMS bảo vệ thông minh',
    'Điện áp ổn định khi vận hành',
    'Giảm downtime cho đội xe',
    'Phù hợp môi trường công nghiệp',
  ],
  applications: [
    { label: 'Xe nâng điện', icon: <Truck className="w-6 h-6" /> },
    { label: 'Kho vận', icon: <Package className="w-6 h-6" /> },
    { label: 'Nhà máy', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Logistics', icon: <Truck className="w-6 h-6" /> },
    { label: 'Thay thế ắc quy chì', icon: <ArrowLeftRight className="w-6 h-6" /> },
  ],
  gallery: [
    { url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1590674852885-ce120538166d?q=80&w=1000&auto=format&fit=crop', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1549464049-74e6451e0892?q=80&w=1000&auto=format&fit=crop', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop', type: 'video' },
  ],
  fullSpecs: [
    { group: 'Thông số điện', items: [
      { key: 'Điện áp định mức', value: '25.6 V' },
      { key: 'Dung lượng định mức', value: '230 Ah' },
      { key: 'Năng lượng lưu trữ', value: '5.8 kWh' },
      { key: 'Điện áp sạc tối đa', value: '29.2 V' },
      { key: 'Điện áp cắt xả', value: '20.0 V' },
      { key: 'Dòng sạc đề xuất', value: '115 A (0.5C)' },
      { key: 'Dòng xả liên tục', value: '200 A' },
      { key: 'Dòng xả đỉnh (10s)', value: '450 A' },
    ]},
    { group: 'Cơ khí & Kích thước', items: [
      { key: 'Kích thước (DxRxC)', value: '630 × 175 × 450 mm' },
      { key: 'Khối lượng', value: '54 kg' },
      { key: 'Vật liệu vỏ', value: 'Thép carbon sơn tĩnh điện' },
      { key: 'Cổng kết nối', value: 'Anderson REMA DIN 160/320' },
      { key: 'Màn hình hiển thị', value: 'LCD hiển thị dung lượng & lỗi' },
    ]},
    { group: 'Môi trường & Tuổi thọ', items: [
      { key: 'Nhiệt độ hoạt động (Xả)', value: '-20°C đến 60°C' },
      { key: 'Nhiệt độ hoạt động (Sạc)', value: '0°C đến 45°C' },
      { key: 'Số chu kỳ (DOD 80%)', value: '> 3500 chu kỳ' },
      { key: 'Tiêu chuẩn an toàn', value: 'UN38.3, CE, IEC62619' },
      { key: 'Cấp bảo vệ', value: 'IP54 (Tùy chọn IP67)' },
    ]}
  ],
  family: [
    { id: '1', name: '24V 150Ah', specs: '3.8 kWh', active: false },
    { id: '2', name: '24V 200Ah', specs: '5.1 kWh', active: false },
    { id: '3', name: '24V 230Ah', specs: '5.8 kWh', active: true },
    { id: '4', name: '24V 280Ah', specs: '7.1 kWh', active: false },
    { id: '5', name: '24V 340Ah', specs: '8.7 kWh', active: false },
  ],
  downloads: [
    { name: 'Catalogue Giải pháp Pin Lithium PKG', size: '4.2 MB', date: '2024-03' },
    { name: 'Technical Datasheet PKGFF-24230', size: '1.8 MB', date: '2024-02' },
    { name: 'User Manual & Maintenance Guide', size: '5.5 MB', date: '2024-01' },
    { name: 'Warranty Certificate & Terms', size: '0.9 MB', date: '2023-12' },
  ],
  warranty: {
    period: '5 Năm',
    hours: '10,000 giờ vận hành',
    support: 'Hỗ trợ kỹ thuật tận nơi 24/7',
    summary: 'Chế độ bảo hành đổi mới cho các lỗi tế bào pin (cell) và bo mạch điều khiển (BMS).'
  },
  related: [
    { name: 'Bình ắc quy 24V 280Ah', code: 'PKGFF-24280V1', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=300&auto=format&fit=crop' },
    { name: 'Bình ắc quy 24V 200Ah', code: 'PKGFF-24200V1', img: 'https://images.unsplash.com/photo-1590674852885-ce120538166d?q=80&w=300&auto=format&fit=crop' },
    { name: 'Bình ắc quy 48V 400Ah', code: 'PKGFF-48400V1', img: 'https://images.unsplash.com/photo-1549464049-74e6451e0892?q=80&w=300&auto=format&fit=crop' },
    { name: 'Màn hình hiển thị PKG LCD', code: 'PKG-DISP-01', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=300&auto=format&fit=crop' },
  ]
};

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100 ${className}`}>
    {children}
  </span>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg max-w-2xl ${light ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>}
    <div className="w-16 h-1 bg-red-600 mt-6"></div>
  </div>
);

export default function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* 13. Sticky CTA (Mobile) */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 z-[90] pointer-events-none px-4 pb-4">
        <div className="bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto flex gap-2">
            <a href="tel:0987654321" className="flex-1 bg-white/10 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs">
              <Phone size={14} /> GỌI ĐIỆN
            </a>
            <a href="https://zalo.me/0987654321" className="flex-1 bg-blue-500 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs">
               ZALO
            </a>
            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="flex-[1.5] bg-red-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs">
              <MessageSquare size={14} /> BÁO GIÁ
            </button>
        </div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="group relative">
                <div className="absolute inset-0 bg-red-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-11 h-11 bg-slate-950 font-black text-white flex items-center justify-center rounded overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                   PKG
                </div>
             </div>
             <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl italic tracking-tighter text-slate-900">BATTERY</span>
                <span className="text-[10px] font-bold text-red-600 tracking-widest uppercase">Lithium Solutions</span>
             </div>
          </div>
          <nav className="hidden lg:flex gap-10 items-center text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-red-600 transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-red-600 transition-colors">Giải pháp</a>
            <a href="#" className="hover:text-red-600 transition-colors">Kỹ thuật</a>
            <a href="#" className="hover:text-red-600 transition-colors">Liên hệ</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-4 group cursor-pointer">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hotline 24/7</span>
                <span className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors">0987.654.321</span>
            </div>
            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all transform active:scale-95 shadow-lg shadow-red-600/20">
               Nhận báo giá
            </button>
            <button className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-lg" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-white">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2"><div className="p-2 bg-slate-950 text-white font-bold rounded">PKG</div><span className="font-bold">BATTERY</span></div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-100 rounded-xl"><X size={24} /></button>
              </div>
              <nav className="flex flex-col gap-8 text-4xl font-black text-slate-950">
                <a href="#" onClick={() => setMobileMenuOpen(false)}>Sản phẩm</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)}>Giải pháp</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)}>Tin tức</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)}>Về PKG</a>
              </nav>
              <div className="mt-auto pb-10 space-y-4">
                <button className="w-full bg-red-600 text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3">Nhận báo giá <ArrowRight size={20} /></button>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 bg-slate-100 p-5 rounded-2xl flex items-center justify-center gap-2 font-bold"><Phone size={18} /> Gọi ngay</a>
                  <a href="#" className="flex-1 bg-slate-100 p-5 rounded-2xl flex items-center justify-center gap-2 font-bold">Zalo</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Section 1: Hero */}
        <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-28 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-slate-200"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                  <nav className="flex text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 gap-3 items-center">
                    <a href="#" className="hover:text-red-600 transition-colors">Sản phẩm</a>
                    <ChevronRight size={12} className="text-slate-300" />
                    <a href="#" className="hover:text-red-600 transition-colors">Xe nâng điện</a>
                    <ChevronRight size={12} className="text-slate-300" />
                    <span className="text-red-600">Chi tiết</span>
                  </nav>
                  <Badge className="mb-6">{PRODUCT_DATA.category}</Badge>
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                    {PRODUCT_DATA.name}
                  </h1>
                  <div className="inline-flex items-center gap-2 py-1.5 px-3 bg-slate-950 text-white rounded-md font-mono text-[10px] mb-8 uppercase tracking-[0.2em] shadow-lg shadow-black/10">
                     Model: {PRODUCT_DATA.id}
                  </div>
                  <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-12">
                    {PRODUCT_DATA.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-red-600 text-white rounded-xl font-black uppercase text-sm tracking-widest hover:bg-slate-900 transition-all flex items-center gap-4 group shadow-xl shadow-red-600/30">
                      Yêu cầu báo giá <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-black uppercase text-sm tracking-widest hover:border-red-600 transition-all">
                      Tư vấn kỹ thuật
                    </button>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5 relative">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="sticky top-32">
                   <div className="relative group">
                      <div className="absolute -inset-4 bg-red-600 opacity-[0.03] rounded-[40px] blur-2xl group-hover:opacity-[0.08] transition-opacity"></div>
                      <div className="relative aspect-square bg-white border border-slate-100 rounded-[32px] p-12 shadow-2xl flex items-center justify-center group/stage">
                         <img 
                           src={PRODUCT_DATA.gallery[activeImage].url} 
                           alt={PRODUCT_DATA.name} 
                           className="max-w-full max-h-full object-contain transition-all duration-700 group-hover/stage:scale-110 drop-shadow-2xl" 
                         />
                         
                         <div className="absolute bottom-6 right-6 flex gap-2">
                           <button className="bg-slate-900/10 backdrop-blur p-2.5 rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all"><ZoomIn size={18} /></button>
                           {PRODUCT_DATA.gallery[activeImage].type === 'video' && <div className="bg-red-600 text-white p-2.5 rounded-full"><Play size={18} fill="currentColor" /></div>}
                         </div>
                      </div>
                   </div>
                   
                   <div className="mt-8 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                      {PRODUCT_DATA.gallery.map((item, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => setActiveImage(idx)} 
                          className={`flex-shrink-0 w-20 h-20 rounded-2xl border-2 transition-all p-2 ${activeImage === idx ? 'border-red-600 bg-red-50' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                        >
                           <div className="w-full h-full relative">
                              <img src={item.url} className="w-full h-full object-cover rounded-lg" />
                              {item.type === 'video' && <div className="absolute inset-0 flex items-center justify-center text-white bg-black/20 rounded-lg"><Play size={16} fill="currentColor" /></div>}
                           </div>
                        </button>
                      ))}
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Snapshot */}
        <section className="bg-slate-950 py-16 text-white relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 items-start border-b border-white/5 pb-10">
                 {PRODUCT_DATA.mainSpecs.map((spec, idx) => (
                   <div key={idx} className="group">
                      <div className="flex items-center gap-2 mb-3">
                         <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-150 transition-transform"></div>
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{spec.label}</span>
                      </div>
                      <div className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">{spec.value}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 3 & 4: Benefits & Applications */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-24">
              {/* Benefits */}
              <div>
                <SectionHeading 
                  title="Lợi ích vượt trội" 
                  subtitle="Công nghệ Lithium vượt qua mọi giới hạn của ắc quy chì truyền thống." 
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  {PRODUCT_DATA.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-4 group transition-all hover:bg-white hover:shadow-xl shadow-slate-200/50"
                    >
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100">
                          <CheckCircle2 size={24} />
                       </div>
                       <span className="font-black text-slate-800 tracking-tight leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <SectionHeading 
                  title="Ứng dụng phù hợp" 
                  subtitle="Hoạt động ổn định trong mọi môi trường công nghiệp." 
                />
                <div className="flex flex-wrap gap-3">
                  {PRODUCT_DATA.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-slate-50 rounded-2xl group hover:border-red-600/30 transition-all cursor-default">
                       <div className="text-red-600 group-hover:scale-110 transition-transform">{app.icon}</div>
                       <span className="font-bold text-slate-600 group-hover:text-slate-900">{app.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Detailed Gallery (Grid) */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading title="Thư viện hình ảnh" subtitle="Góc nhìn chi tiết về cấu trúc và lắp đặt thực tế." />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {PRODUCT_DATA.gallery.map((item, idx) => (
                    <div key={idx} className="aspect-square bg-white rounded-2xl border border-slate-200 p-4 transition-all hover:shadow-2xl overflow-hidden group">
                       <img src={item.url} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 6: Flexible Body (Simulated) */}
        <section className="py-24 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" className="w-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-12 flex flex-col justify-end">
                       <h3 className="text-3xl font-black text-white">An toàn tuyệt đối</h3>
                       <p className="text-slate-300">Tích hợp cảm biến nhiệt độ & va chạm</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Vận hành bền bỉ với công nghệ sạc cơ hội (Opportunity Charging)</h3>
                    <p className="text-xl text-slate-500 leading-relaxed">Pin Lithium PKG cho phép sạc bất cứ khi nào xe nâng nghỉ giải lao, không gây hại cho tuổi thọ pin như các dòng ắc quy chì cũ.</p>
                    <ul className="space-y-4">
                       {['Hỗ trợ sạc nhanh lên tới 1C', 'Tự động ngắt khi đầy pin', 'Giao tiếp CANbus đồng bộ với xe'].map((item, i) => (
                         <li key={i} className="flex gap-3 font-bold text-slate-700">
                            <Zap size={20} className="text-red-600 mt-1" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 8: Family Selector */}
        <section className="py-24 bg-slate-950 text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading light title="Cùng dòng sản phẩm" subtitle="Lựa chọn dung lượng phù hợp với quy mô kho vận của bạn." />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 {PRODUCT_DATA.family.map((item) => (
                    <button key={item.id} className={`p-6 rounded-3xl border-2 transition-all text-center ${item.active ? 'bg-red-600 border-red-600 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:border-red-600/50 hover:text-white'}`}>
                       <Battery size={24} className="mx-auto mb-3" />
                       <div className="font-black text-lg">{item.name}</div>
                       <div className="text-xs font-bold opacity-60 uppercase">{item.specs}</div>
                    </button>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 9: Downloads */}
        <section className="py-24 border-b border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading title="Trung tâm tải về" subtitle="Tài liệu kỹ thuật và hướng dẫn vận hành chuyên nghiệp." />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {PRODUCT_DATA.downloads.map((file, idx) => (
                    <a key={idx} href="#" className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4 hover:border-red-600/30 transition-all group">
                       <FileText size={32} className="text-red-600" />
                       <div className="flex-1">
                          <div className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors">{file.name}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase">{file.size} • {file.date}</div>
                       </div>
                       <Download size={18} className="text-slate-300 group-hover:text-red-600" />
                    </a>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 10 & 11: Warranty & Related */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-12 gap-16">
                 <div className="lg:col-span-4 bg-slate-900 rounded-[40px] p-10 text-white">
                    <ShieldCheck size={48} className="text-red-600 mb-6" />
                    <h3 className="text-2xl font-black mb-4 tracking-tight">Chính sách bảo hành</h3>
                    <div className="text-5xl font-black text-red-600 mb-2">{PRODUCT_DATA.warranty.period}</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">HOẶC {PRODUCT_DATA.warranty.hours}</div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{PRODUCT_DATA.warranty.summary}</p>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hỗ trợ kỹ thuật</div>
                       <div className="text-lg font-black">{PRODUCT_DATA.warranty.support}</div>
                    </div>
                 </div>
                 <div className="lg:col-span-8">
                    <SectionHeading title="Sản phẩm liên quan" />
                    <div className="grid sm:grid-cols-2 gap-6">
                       {PRODUCT_DATA.related.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex gap-6 p-6 bg-white border border-slate-100 rounded-[32px] group hover:shadow-2xl transition-all">
                             <div className="w-24 h-24 bg-slate-50 rounded-2xl p-4 shrink-0"><img src={item.img} className="w-full h-full object-contain mix-blend-multiply" /></div>
                             <div className="flex flex-col justify-center">
                                <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">{item.code}</div>
                                <h4 className="font-black text-slate-900 group-hover:text-red-600 transition-colors leading-tight">{item.name}</h4>
                                <div className="mt-4 flex items-center gap-1 font-bold text-xs text-slate-400 group-hover:text-slate-900">Xem ngay <ArrowRight size={14} /></div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 7: Detailed Technical Table */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading 
                 title="Thông số kỹ thuật" 
                 subtitle="Dữ liệu chi tiết cho việc lắp đặt và tích hợp vào hệ thống xe nâng." 
              />
              <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-2xl">
                 <table className="w-full border-collapse text-left bg-white">
                    <thead>
                       <tr className="bg-slate-950 text-white">
                          <th className="py-6 px-8 text-xs font-black uppercase tracking-widest w-1/3">Hạng mục</th>
                          <th className="py-2 px-8 text-xs font-black uppercase tracking-widest">Giá trị</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {PRODUCT_DATA.fullSpecs.map((group, gIdx) => (
                         <React.Fragment key={gIdx}>
                            <tr className="bg-slate-100/50">
                               <td colSpan={2} className="py-4 px-8 text-[11px] font-black text-red-600 uppercase tracking-widest">
                                  {group.group}
                               </td>
                            </tr>
                            {group.items.map((item, iIdx) => (
                               <tr key={iIdx} className="hover:bg-slate-50 transition-colors">
                                  <td className="py-4 px-8 font-bold text-slate-500">{item.key}</td>
                                  <td className="py-4 px-8 font-black text-slate-900">{item.value}</td>
                               </tr>
                            ))}
                         </React.Fragment>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* Section 12: Contact Form */}
        <section id="contact-form" className="py-24 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
             <SectionHeading 
               light 
               title="Yêu cầu báo giá" 
               subtitle="Gửi thông tin nhu cầu vận hành, đội ngũ PKG sẽ tư vấn model phù hợp." 
             />
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 md:p-12 rounded-[40px]">
                <div className="md:col-span-1 text-slate-900 font-bold text-sm">Họ tên *<input type="text" className="w-full mt-2 p-4 bg-slate-50 border rounded-xl" /></div>
                <div className="md:col-span-1 text-slate-900 font-bold text-sm">Số điện thoại *<input type="tel" className="w-full mt-2 p-4 bg-slate-50 border rounded-xl" /></div>
                <div className="md:col-span-2 text-slate-900 font-bold text-sm">Thông tin nhu cầu<textarea rows={4} className="w-full mt-2 p-4 bg-slate-50 border rounded-xl"></textarea></div>
                <button type="button" className="md:col-span-2 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all">GỬI YÊU CẦU</button>
             </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-10 text-center border-t border-white/5 font-mono text-[10px] tracking-widest uppercase">
        © 2026 PKG BATTERY SOLUTIONS • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
