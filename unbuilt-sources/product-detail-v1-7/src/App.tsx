/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Settings, 
  Download, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  Maximize2,
  Cpu,
  Truck,
  Factory,
  Warehouse,
  Boxes,
  MapPin,
  Mail,
  Copy
} from 'lucide-react';
import { mockProduct } from './mockProduct';
import { Product, SpecGroup } from './types';

// --- Header Component ---
const Header = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
    <div className="flex items-center gap-2">
      <div className="h-8 w-24 bg-pkg-red flex items-center justify-center text-white font-bold text-xl italic skew-x-[-12deg]">
        <span className="skew-x-[12deg]">PKG</span>
      </div>
      <div className="hidden md:block h-6 w-px bg-neutral-200 mx-4"></div>
      <p className="hidden md:block text-xs font-semibold uppercase tracking-wider text-neutral-400">Battery Solutions</p>
    </div>
    
    <nav className="hidden lg:flex items-center gap-8">
      {['Sản phẩm', 'Giải pháp', 'Kỹ thuật', 'Dự án', 'Về PKG', 'Liên hệ'].map((item) => (
        <a key={item} href="#" className="text-sm font-medium hover:text-pkg-red transition-colors">{item}</a>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      <a href="tel:0900000000" className="hidden sm:flex items-center gap-2 text-sm font-bold text-graphite hover:text-pkg-red transition-colors">
        <Phone size={16} /> 0900 000 000
      </a>
      <button className="bg-graphite text-white px-5 py-2 text-sm font-medium rounded-sm hover:bg-pkg-red transition-all cursor-pointer">
        Yêu cầu báo giá
      </button>
    </div>
  </header>
);

// --- Sub-components for Sections ---

const SectionTitle = ({ title, sub, dark = false }: { title: string, sub?: string, dark?: boolean }) => (
  <div className="mb-10">
    <div className="tech-line mb-3"></div>
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-white' : 'text-graphite'}`}>
      {title}
    </h2>
    {sub && <p className={`max-w-2xl text-lg ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{sub}</p>}
  </div>
);

export default function App() {
  const [product] = useState<Product>(mockProduct);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-pkg-red selection:text-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-3 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-neutral-400">
          <a href="#" className="hover:text-pkg-red">Trang chủ</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-pkg-red">{product.category}</a>
          <ChevronRight size={12} />
          <span className="text-graphite italic">{product.sku}</span>
        </div>
      </div>

      <main>
        {/* SECTION 1: HERO */}
        <section id="hero" className="py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full tech-grid opacity-30 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-pkg-red/10 text-pkg-red text-xs font-bold uppercase tracking-widest rounded-sm mb-6">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-neutral-500 font-mono text-sm mb-6 flex items-center gap-2">
                MODE: <span className="text-graphite font-bold bg-neutral-100 px-2 py-0.5">{product.sku}</span>
              </p>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
                {product.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="btn-primary flex-1 sm:flex-none">
                  Yêu cầu báo giá
                </button>
                <button className="btn-secondary flex-1 sm:flex-none">
                  <Phone size={18} /> Tư vấn kỹ thuật
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-[#0068FF] bg-blue-50 px-8 py-3 rounded-sm hover:bg-blue-100 transition-colors">
                  <MessageSquare size={18} /> Nhắn Zalo
                </button>
              </div>

              <div className="flex items-center gap-6 text-xs font-bold text-neutral-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-600" /> TƯ VẤN THEO MODEL XE</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-600" /> HỖ TRỢ KỸ THUẬT 24/7</span>
              </div>
            </motion.div>

            {/* Right Column: Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="product-stage aspect-square flex items-center justify-center bg-white p-12">
                <img 
                  src={product.gallery[activeGalleryIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                />
                <button className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-pkg-red hover:text-white transition-all">
                  <Maximize2 size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-3 mt-6">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`aspect-square border-2 transition-all ${activeGalleryIndex === idx ? 'border-pkg-red p-0.5' : 'border-neutral-100 p-2 hover:border-neutral-300'}`}
                  >
                    <img src={img} alt={`view-${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: TECHNICAL SNAPSHOT */}
        <section id="snapshot" className="bg-graphite py-12 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-neutral-800 border border-neutral-800">
              {product.snapshot.map((item, idx) => (
                <div key={idx} className="bg-graphite p-6 flex flex-col justify-between hover:bg-neutral-900 transition-colors group">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-8 block group-hover:text-pkg-red transition-colors">
                    {item.label}
                  </span>
                  <div>
                    <span className="text-3xl font-bold text-white block">
                      {item.value}
                    </span>
                    {item.unit && <span className="text-xs font-bold text-neutral-400 mt-1 uppercase">{item.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY BENEFITS */}
        <section id="benefits" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              title="Ưu điểm vượt trội" 
              sub="Tại sao các doanh nghiệp kho vận và nhà máy lựa chọn giải pháp pin lithium của PKG?" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-neutral-100 bg-neutral-50 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-pkg-red/5 -mr-6 -mt-6 rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
                  <div className="h-12 w-12 bg-pkg-red text-white flex items-center justify-center mb-6 relative z-10">
                    {idx === 0 ? <Zap size={24} /> : idx === 1 ? <ShieldCheck size={24} /> : idx === 2 ? <Cpu size={24} /> : <Clock size={24} />}
                  </div>
                  <h3 className="text-lg font-bold mb-3 relative z-10 group-hover:text-pkg-red transition-colors">{benefit.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 & 5: APPLICATIONS & COMPATIBILITY */}
        <section id="applications" className="py-24 px-6 md:px-12 bg-neutral-50 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionTitle title="Ứng dụng thực tế" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-neutral-100 group hover:border-pkg-red/30 transition-all">
                    <div className="h-10 w-10 flex-shrink-0 bg-neutral-100 text-neutral-400 flex items-center justify-center group-hover:bg-pkg-red group-hover:text-white transition-all">
                      {idx === 0 ? <Factory size={20} /> : idx === 1 ? <Warehouse size={20} /> : idx === 2 ? <Truck size={20} /> : <Boxes size={20} />}
                    </div>
                    <span className="font-semibold text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-graphite p-10 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                <ShieldCheck size={200} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="text-pkg-red" /> Độ tương thích & Lắp đặt
              </h3>
              <ul className="space-y-6">
                {product.compatibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 bg-pkg-red flex-shrink-0"></div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xs text-neutral-300 italic">
                  Chưa chắc model này phù hợp 100%? Gửi model xe để PKG kiểm tra chuyên sâu.
                </p>
                <button className="whitespace-nowrap text-xs font-bold text-pkg-red bg-white px-6 py-3 hover:bg-pkg-red hover:text-white transition-all">
                  KIỂM TRA TƯƠNG THÍCH
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: TECHNICAL SPECIFICATIONS */}
        <section id="specs" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionTitle 
                title="Thông số kỹ thuật chi tiết" 
                sub="Dữ liệu kỹ thuật chuẩn xác được kiểm định bởi phòng Lab của PKG." 
              />
              <div className="flex gap-3 mb-10">
                <button className="flex items-center gap-2 text-xs font-bold border border-neutral-200 px-4 py-2 hover:bg-neutral-50 transition-all">
                  <Download size={14} /> TẢI PDF
                </button>
                <button className="flex items-center gap-2 text-xs font-bold border border-neutral-200 px-4 py-2 hover:bg-neutral-50 transition-all">
                  <Copy size={14} /> SAO CHÉP
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {product.techSpecs.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pkg-red mb-4 pl-4 border-l-2 border-pkg-red">
                    {group.groupName}
                  </h3>
                  <div className="overflow-hidden border border-neutral-100 rounded-sm">
                    <table className="w-full text-sm text-left">
                      <tbody className="divide-y divide-neutral-100">
                        {group.specs.map((spec, specIdx) => (
                          <tr key={specIdx} className="hover:bg-neutral-50 transition-colors group">
                            <td className="w-1/3 py-4 px-6 font-medium text-neutral-600 bg-neutral-50/50 group-hover:text-graphite">{spec.key}</td>
                            <td className="py-4 px-6 font-bold text-graphite group-hover:text-pkg-red">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: PRODUCT FAMILY */}
        <section id="family" className="py-24 px-6 md:px-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Dòng sản phẩm cùng loại" sub="Lựa chọn dung lượng phù hợp nhất với nhu cầu vận hành của bạn." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
              {product.familyOptions.map((opt) => (
                <div key={opt.id} className={`p-8 ${opt.isActive ? 'bg-white ring-2 ring-pkg-red z-10' : 'bg-neutral-50 hover:bg-white'} transition-all cursor-pointer group`}>
                  <div className={`h-1 w-full absolute top-0 left-0 ${opt.isActive ? 'bg-pkg-red' : 'bg-transparent'}`}></div>
                  <h4 className="text-lg font-bold mb-6 flex justify-between items-center">
                    {opt.name}
                    {opt.isActive && <CheckCircle2 size={16} className="text-pkg-red" />}
                  </h4>
                  <div className="space-y-4 mb-8 text-sm">
                    <div className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="text-neutral-400">Dung lượng:</span>
                      <span className="font-bold">{opt.capacity}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="text-neutral-400">Năng lượng:</span>
                      <span className="font-bold">{opt.energy}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="text-neutral-400">Điện áp:</span>
                      <span className="font-bold">{opt.voltage}</span>
                    </div>
                  </div>
                  <button className={`w-full py-3 text-xs font-bold uppercase tracking-widest ${opt.isActive ? 'text-pkg-red cursor-default' : 'text-neutral-400 group-hover:text-pkg-red'}`}>
                    {opt.isActive ? 'ĐANG XEM' : 'XEM CHI TIẾT'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: DOWNLOAD CENTER */}
        <section id="downloads" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Trung tâm tài liệu" sub="Tài liệu chuyên dùng cho kỹ thuật, bộ phận mua hàng và đối tác OEM." />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.downloads.map((file, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 border border-neutral-100 hover:shadow-xl hover:border-pkg-red/20 transition-all group">
                  <div className="flex-shrink-0 h-14 w-14 bg-red-50 text-pkg-red flex items-center justify-center rounded-sm group-hover:bg-pkg-red group-hover:text-white transition-all">
                    <FileText size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm mb-1 truncate">{file.name}</h4>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase">{file.type} • {file.size}</p>
                  </div>
                  <a href={file.url} className="h-10 w-10 flex items-center justify-center border border-neutral-100 text-neutral-400 hover:text-pkg-red hover:border-pkg-red transition-all">
                    <Download size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section id="faq" className="py-24 px-6 md:px-12 bg-neutral-50">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Câu hỏi thường gặp" />
            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-neutral-100 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full py-5 px-6 text-left flex justify-between items-center group"
                  >
                    <span className="font-bold text-sm group-hover:text-pkg-red transition-colors">{faq.question}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-pkg-red' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-neutral-500 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-pkg-red/5 border border-pkg-red/10 text-center">
              <p className="text-sm text-neutral-600 mb-4">Vẫn còn thắc mắc về mặt kỹ thuật?</p>
              <button className="text-sm font-bold text-pkg-red hover:underline decoration-2 underline-offset-4">
                Chat Zalo với chuyên gia PKG
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 15: RFQ FORM */}
        <section id="rfq" className="py-24 px-6 md:px-12 bg-graphite relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full tech-grid opacity-5 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 p-20 opacity-5 pointer-events-none">
            <MapPin size={400} className="text-white" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <SectionTitle 
                title="Yêu cầu báo giá & Tư vấn" 
                sub="Gửi thông tin nhu cầu của bạn, đội ngũ kỹ thuật PKG sẽ phản hồi trong vòng 2 giờ làm việc." 
                dark={true}
              />
              
              <div className="space-y-10 mt-16">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-pkg-red text-white flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Hotline kinh doanh</p>
                    <p className="text-2xl font-bold text-white">0901 234 567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 bg-pkg-red text-white flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Email phòng dự án</p>
                    <p className="text-2xl font-bold text-white">sales@pkg-battery.vn</p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 max-w-sm">
                  <p className="text-xs text-neutral-400 italic">
                    "PKG tư vấn dựa trên model xe thực tế, kích thước khoang pin và nhu cầu vận hành liên tục (ca kíp) của khách hàng."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 shadow-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Họ và tên *</label>
                  <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Số điện thoại *</label>
                  <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors" placeholder="0901 234 ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Email</label>
                  <input type="email" className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Công ty</label>
                  <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors" placeholder="Tên doanh nghiệp..." />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Model xe nâng / Thiết bị sử dụng</label>
                  <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors" placeholder="Ví dụ: Toyota 8FB, Komatsu FB20..." />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase">Ghi chú nhu cầu (Số lượng, ca làm việc...)</label>
                  <textarea className="w-full border-b border-neutral-200 py-2 focus:border-pkg-red outline-none transition-colors min-h-[100px] resize-none" placeholder="Nhập thêm chi tiết nhu cầu vận hành của bạn..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="btn-primary w-full shadow-lg shadow-pkg-red/20 group">
                    GỬI YÊU CẦU BÁO GIÁ <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 border-t border-white/5 py-12 px-6 md:px-12 text-center text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="h-8 w-24 bg-white/10 flex items-center justify-center text-white/30 font-bold text-xl italic skew-x-[-12deg]">
            <span className="skew-x-[12deg]">PKG</span>
          </div>
          <p className="text-xs">© 2026 PKG Battery. Toàn quyền bảo lưu kiến trúc kỹ thuật và thương hiệu.</p>
          <div className="flex gap-6">
            {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Sơ đồ trang'].map(item => (
              <a key={item} href="#" className="text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Nav (Mobile) & Floating Action (Desktop) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-neutral-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-4 sm:hidden"
          >
            <div className="grid grid-cols-3 gap-3">
              <a href="tel:0901234567" className="flex flex-col items-center justify-center gap-1 bg-neutral-100 py-2 text-graphite rounded-sm">
                <Phone size={18} />
                <span className="text-[10px] font-bold uppercase">Gọi hotline</span>
              </a>
              <a href="https://zalo.me" className="flex flex-col items-center justify-center gap-1 bg-blue-50 py-2 text-[#0068FF] rounded-sm">
                <MessageSquare size={18} />
                <span className="text-[10px] font-bold uppercase">Chat Zalo</span>
              </a>
              <button className="flex flex-col items-center justify-center gap-1 bg-pkg-red py-2 text-white rounded-sm">
                <Zap size={18} />
                <span className="text-[10px] font-bold uppercase">Báo giá</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-3">
        <motion.button 
          whileHover={{ scale: 1.1, x: -5 }}
          className="h-14 w-14 bg-pkg-red text-white rounded-full flex items-center justify-center shadow-2xl shadow-pkg-red/50 cursor-pointer group relative"
        >
          <Phone size={24} />
          <span className="absolute right-full mr-4 bg-pkg-red text-white py-2 px-4 whitespace-nowrap text-xs font-bold rounded-sm scale-0 group-hover:scale-100 transition-transform origin-right shadow-xl">Gọi hotline: 0901 234 567</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, x: -5 }}
          className="h-14 w-14 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 cursor-pointer group relative"
        >
          <MessageSquare size={24} />
          <span className="absolute right-full mr-4 bg-[#0068FF] text-white py-2 px-4 whitespace-nowrap text-xs font-bold rounded-sm scale-0 group-hover:scale-100 transition-transform origin-right shadow-xl">Chat Zalo kỹ thuật</span>
        </motion.button>
      </div>
    </div>
  );
}
