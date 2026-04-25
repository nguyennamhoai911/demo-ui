/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  FileText, 
  ShieldCheck, 
  Download, 
  Settings, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Maximize2,
  CheckCircle2,
  Truck,
  Zap,
  Clock,
  Database
} from 'lucide-react';
import { 
  Product, 
  TechnicalSnapshot, 
  SpecGroup, 
  ProductOption, 
  DownloadFile, 
  RelatedProduct 
} from './types';

// Mock Data
const sampleProduct: Product = {
  id: 'pkg-24230',
  sku: 'PKGFF-24230V1',
  name: 'Bình ắc quy pin lithium cho xe nâng điện 24V 230Ah',
  category: 'Pin lithium cho xe nâng điện',
  shortDescription: 'Giải pháp pin lithium công nghiệp cho xe nâng vận hành ổn định, sạc nhanh và giảm chi phí bảo trì.',
  mainImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000&h=1000',
  gallery: [
    { url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000&h=1000', type: 'image', thumbnail: '' },
    { url: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1000&h=1000', type: 'image', thumbnail: '' },
    { url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000&h=1000', type: 'image', thumbnail: '' },
    { url: 'https://images.unsplash.com/photo-1548338385-b1695420956b?auto=format&fit=crop&q=80&w=1000&h=1000', type: 'image', thumbnail: '' }
  ],
  snapshot: [
    { label: 'Mã sản phẩm', value: 'PKGFF-24230V1' },
    { label: 'Dung lượng', value: '230', unit: 'Ah' },
    { label: 'Năng lượng', value: '5.8', unit: 'kWh' },
    { label: 'Điện áp', value: '25.6', unit: 'V' },
    { label: 'Thời gian sạc', value: '2 – 4', unit: 'giờ' },
    { label: 'Kích thước', value: '630 × 175 × 450', unit: 'mm' },
    { label: 'Khối lượng', value: '~54', unit: 'kg' }
  ],
  benefits: [
    'Sạc nhanh trong 2–4 giờ',
    'Không cần châm nước định kỳ',
    'BMS bảo vệ thông minh',
    'Điện áp ổn định khi vận hành',
    'Giảm downtime cho đội xe',
    'Phù hợp môi trường công nghiệp'
  ],
  applications: [
    'Xe nâng điện',
    'Kho vận',
    'Nhà máy',
    'Logistics',
    'Thay thế ắc quy chì'
  ],
  options: [
    { id: '150', label: '24V 150Ah', isActive: false },
    { id: '200', label: '24V 200Ah', isActive: false },
    { id: '230', label: '24V 230Ah', isActive: true },
    { id: '280', label: '24V 280Ah', isActive: false },
    { id: '340', label: '24V 340Ah', isActive: false }
  ],
  specs: [
    {
      groupName: 'Thông số điện học',
      items: [
        { label: 'Dung lượng định mức', value: '230 Ah' },
        { label: 'Năng lượng lưu trữ', value: '5.8 kWh' },
        { label: 'Định mức điện áp', value: '25.6 V' },
        { label: 'Dải điện áp hoạt động', value: '20.0 V – 28.8 V' },
        { label: 'Dòng sạc tối đa', value: '100 A' },
        { label: 'Dòng xả tối đa', value: '200 A' }
      ]
    },
    {
      groupName: 'Thông số vật lý',
      items: [
        { label: 'Kích thước (D×R×C)', value: '630 × 175 × 450 mm' },
        { label: 'Khối lượng', value: '54 kg' },
        { label: 'Chất liệu vỏ', value: 'Thép sơn tĩnh điện' },
        { label: 'Tiêu chuẩn bảo vệ', value: 'IP54 / IP65' }
      ]
    }
  ],
  downloads: [
    { name: 'Catalogue Sản phẩm PKG Battery', format: 'PDF', size: '2.4 MB', url: '#' },
    { name: 'Data Sheet PKGFF-24230V1', format: 'PDF', size: '1.1 MB', url: '#' },
    { name: 'Hướng dẫn sử dụng & Bảo trì', format: 'PDF', size: '3.8 MB', url: '#' }
  ],
  warranty: 'Bảo hành chính hãng 5 năm hoặc 10,000 giờ vận hành (tùy điều kiện nào đến trước). Hỗ trợ kỹ thuật 24/7.',
  relatedProducts: [
    { id: '1', name: 'Pin lithium 24V 150Ah', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=500&h=500', sku: 'PKGFF-24150', mainSpec: '150Ah / 3.8kWh' },
    { id: '2', name: 'Pin lithium 48V 400Ah', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=500&h=500', sku: 'PKGFF-48400', mainSpec: '400Ah / 19.2kWh' },
    { id: '3', name: 'Pin lithium 80V 500Ah', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=500&h=500', sku: 'PKGFF-80500', mainSpec: '500Ah / 40kWh' }
  ]
};

// Components
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-pkg-red flex items-center justify-center text-white font-bold text-xl rounded">PKG</div>
        <span className="font-display font-bold text-xl tracking-tight hidden sm:block">BATTERY</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-pkg-red">Sản phẩm</a>
        <a href="#" className="hover:text-pkg-red transition-colors">Giải pháp</a>
        <a href="#" className="hover:text-pkg-red transition-colors">Hỗ trợ</a>
        <a href="#" className="hover:text-pkg-red transition-colors">Về chúng tôi</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="tel:0123456789" className="hidden lg:flex items-center gap-2 bg-pkg-gray px-4 py-2 rounded-full text-sm font-semibold">
          <Phone size={16} className="text-pkg-red" />
          0123 456 789
        </a>
        <button className="bg-pkg-red text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all">
          Báo giá ngay
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ product }: { product: Product }) => {
  const [activeImg, setActiveImg] = useState(product.gallery[0].url);

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 technical-grid pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-pkg-red uppercase mb-4">
              <span className="w-8 h-px bg-pkg-red" />
              {product.category}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {product.name}
            </h1>
            <p className="text-gray-500 text-lg mb-2 font-mono">{product.sku}</p>
            <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
              {product.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-pkg-red text-white h-14 px-8 rounded-lg font-bold flex items-center justify-center gap-2 group hover:gap-3 transition-all">
                Yêu cầu báo giá
                <ArrowRight size={20} />
              </button>
              <button className="bg-white border border-gray-200 h-14 px-8 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                Tư vấn kỹ thuật
              </button>
              <button className="bg-[#0068FF] text-white h-14 px-8 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                <MessageCircle size={20} />
                Nhắn Zalo
              </button>
            </div>
          </div>

          {/* Right Product Image Stage */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative aspect-square max-w-[600px] mx-auto group">
              {/* Background Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pkg-gray rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white rounded-3xl border border-gray-100 product-stage-shadow relative overflow-hidden">
                <motion.img 
                  key={activeImg}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={activeImg} 
                  alt={product.name}
                  className="w-full h-full object-contain p-8 red-glow"
                />
                <button className="absolute bottom-4 right-4 p-3 bg-white/80 backdrop-blur rounded-full border border-gray-100 hover:bg-white transition-all shadow-sm">
                  <Maximize2 size={18} />
                </button>
              </div>
              
              {/* Thumbnail Mini-Gallery */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.gallery.map((media, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImg(media.url)}
                    className={`w-14 h-14 rounded-lg bg-white border-2 overflow-hidden transition-all ${activeImg === media.url ? 'border-pkg-red scale-110' : 'border-white hover:border-gray-200'}`}
                  >
                    <img src={media.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnicalDashboard = ({ snapshot }: { snapshot: TechnicalSnapshot[] }) => (
  <section className="bg-pkg-graphite py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {snapshot.map((item, idx) => (
          <div key={idx} className={`flex flex-col ${idx === 0 ? 'col-span-2 lg:col-span-1' : ''}`}>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl lg:text-3xl font-display font-bold text-white leading-none">{item.value}</span>
              {item.unit && <span className="text-xs font-mono text-pkg-red font-bold uppercase">{item.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = ({ benefits }: { benefits: string[] }) => (
  <section className="py-24 bg-pkg-gray">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Lợi ích nổi bật</h2>
        <div className="w-16 h-1 bg-pkg-red" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex gap-4 items-start group">
            <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-pkg-red group-hover:border-pkg-red transition-all">
              <CheckCircle2 size={24} className="text-pkg-red group-hover:text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Ưu việt {idx + 1}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Applications = ({ apps }: { apps: string[] }) => (
  <section className="py-24 flex overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6">Ứng dụng phù hợp</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Dòng pin PKG Lithium được thiết kế riêng cho các môi trường công nghiệp khắc nghiệt, đòi hỏi cường độ vận hành cao.
          </p>
          <div className="flex flex-wrap gap-3">
            {apps.map((app, idx) => (
              <span key={idx} className="px-4 py-2 bg-pkg-gray rounded-full text-sm font-semibold border border-gray-100">
                {app}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-white rounded-2xl border border-gray-100 product-stage-shadow overflow-hidden group">
              <img 
                src={`https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600&h=600&sig=${i}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                alt="Ứng dụng" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TechnicalSpecs = ({ specs }: { specs: SpecGroup[] }) => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Thông số kỹ thuật chi tiết</h2>
        <p className="text-gray-500">Cấu hình kỹ thuật đầy đủ cho model PKGFF-24230V1</p>
      </div>
      
      <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        {specs.map((group, idx) => (
          <div key={idx} className={idx > 0 ? 'border-t border-gray-100' : ''}>
            <div className="bg-pkg-gray px-6 py-4 font-bold text-sm uppercase tracking-wider text-gray-500">
              {group.groupName}
            </div>
            <div className="divide-y divide-gray-50">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="flex justify-between items-center px-6 py-4 text-sm group hover:bg-gray-50 transition-colors">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="font-bold text-pkg-graphite">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button className="flex items-center gap-2 text-pkg-red font-bold text-sm hover:underline">
          <Download size={16} />
          Tải PDF Specs
        </button>
        <div className="w-px h-4 bg-gray-200 mt-0.5" />
        <button className="flex items-center gap-2 text-gray-500 font-bold text-sm hover:underline">
          <FileText size={16} />
          Copy Specifications
        </button>
      </div>
    </div>
  </section>
);

const FamilySelector = ({ options }: { options: ProductOption[] }) => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Tùy chọn dung lượng cùng dòng</h2>
          <p className="text-gray-500 text-sm italic">*Chọn model khác để xem chi tiết thông số.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {options.map((opt) => (
            <button 
              key={opt.id}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all border ${opt.isActive ? 'bg-pkg-red text-white border-pkg-red shadow-lg shadow-red-500/20' : 'bg-white text-gray-500 border-gray-200 hover:border-pkg-red color-pkg-red'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DownloadCenter = ({ downloads }: { downloads: DownloadFile[] }) => (
  <section className="py-24 bg-pkg-gray">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6">Tài liệu kỹ thuật</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Tải về đầy đủ các tài liệu cần thiết để hiểu rõ hơn về sản phẩm và phương án lắp đặt.
          </p>
          <div className="p-6 bg-white rounded-2xl border border-gray-200">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="text-pkg-red" size={20} />
              Cam kết chất lượng
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Mọi sản phẩm PKG Battery đều đạt chuẩn quốc tế và trải qua quy trình kiểm nghiệm nghiêm ngặt của đội ngũ kỹ thuật.
            </p>
          </div>
        </div>
        <div className="flex-1 grid gap-4">
          {downloads.map((file, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pkg-gray rounded flex items-center justify-center text-pkg-red group-hover:bg-pkg-red group-hover:text-white transition-all">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold">{file.name}</h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{file.format} • {file.size}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold hover:text-pkg-red transition-colors">
                Tải xuống
                <Download size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const RelatedProducts = ({ products }: { products: RelatedProduct[] }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Sản phẩm liên quan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div className="aspect-square bg-pkg-gray rounded-2xl overflow-hidden mb-6 relative">
              <img src={p.image} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" alt={p.name} />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-gray-400">{p.sku}</span>
              <span className="text-xs font-bold px-2 py-1 bg-pkg-red text-white rounded uppercase">{p.mainSpec}</span>
            </div>
            <h3 className="text-xl font-bold group-hover:text-pkg-red transition-colors mb-4">{p.name}</h3>
            <button className="flex items-center gap-2 text-sm font-bold text-pkg-red">
              Xem chi tiết <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-24 bg-pkg-graphite relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-pkg-red/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-6">Cần tư vấn cấu hình pin phù hợp cho thiết bị của bạn?</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Gửi thông tin xe hoặc nhu cầu vận hành, đội ngũ kỹ thuật PKG sẽ tư vấn model pin phù hợp và phương án thay thế tối ưu.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-pkg-red shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Hotline 24/7</p>
                <p className="text-white font-bold text-xl">0123 456 789</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#0068FF] shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Zalo Technical Team</p>
                <p className="text-white font-bold text-xl">zalo.me/pkgbattery</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl">
            <form className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Họ tên</label>
                <input type="text" className="w-full h-12 bg-pkg-gray border border-transparent rounded-lg px-4 focus:bg-white focus:border-pkg-red transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Số điện thoại</label>
                <input type="tel" className="w-full h-12 bg-pkg-gray border border-transparent rounded-lg px-4 focus:bg-white focus:border-pkg-red transition-all outline-none" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Model xe / Thiết bị</label>
                <input type="text" className="w-full h-12 bg-pkg-gray border border-transparent rounded-lg px-4 focus:bg-white focus:border-pkg-red transition-all outline-none" placeholder="VD: Toyota 7FBE15" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Yêu cầu tư vấn</label>
                <textarea className="w-full h-32 bg-pkg-gray border border-transparent rounded-lg p-4 focus:bg-white focus:border-pkg-red transition-all outline-none resize-none" placeholder="Mô tả nhu cầu sử dụng của bạn..." />
              </div>
              <button type="submit" className="sm:col-span-2 h-14 bg-pkg-red text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-red-500/20 transition-all">
                Gửi yêu cầu báo giá
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-pkg-red flex items-center justify-center text-white font-bold text-xl rounded">PKG</div>
            <span className="font-display font-bold text-xl tracking-tight">BATTERY</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            PKG Battery là đơn vị dẫn đầu trong giải pháp lưu trữ năng lượng lithium công nghiệp tại Việt Nam.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-pkg-gray rounded-full flex items-center justify-center text-gray-400 hover:text-pkg-red transition-colors cursor-pointer"><div className="w-5 h-5 bg-current rounded-sm opacity-20"/></div>
            <div className="w-10 h-10 bg-pkg-gray rounded-full flex items-center justify-center text-gray-400 hover:text-pkg-red transition-colors cursor-pointer"><div className="w-5 h-5 bg-current rounded-sm opacity-20"/></div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Sản phẩm</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pkg-red">Pin xe nâng điện</a></li>
            <li><a href="#" className="hover:text-pkg-red">Pin lưu trữ ESS</a></li>
            <li><a href="#" className="hover:text-pkg-red">Pin xe golf & AGV</a></li>
            <li><a href="#" className="hover:text-pkg-red">Giải pháp BMS</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Công ty</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pkg-red">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-pkg-red">Dự án thực tế</a></li>
            <li><a href="#" className="hover:text-pkg-red">Tin tức công nghệ</a></li>
            <li><a href="#" className="hover:text-pkg-red">Tuyển dụng</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex gap-3"><Phone size={16} className="text-pkg-red shrink-0" /> 0123 456 789</li>
            <li className="flex gap-3"><FileText size={16} className="text-pkg-red shrink-0" /> contact@pkgbattery.com</li>
            <li className="flex gap-3"><Truck size={16} className="text-pkg-red shrink-0" /> KCN Hiệp Phước, Nhà Bè, TP. HCM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <p>© 2024 PKG BATTERY. CO., LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const MobileStickyCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 p-3 grid grid-cols-3 gap-2">
    <button className="flex flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase text-gray-500">
      <Phone size={18} className="text-pkg-red" />
      Gọi điện
    </button>
    <button className="flex flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase text-gray-500">
      <MessageCircle size={18} className="text-[#0068FF]" />
      Zalo
    </button>
    <button className="bg-pkg-red text-white flex items-center justify-center gap-2 rounded-lg py-3 text-xs font-bold">
      Nhận báo giá
    </button>
  </div>
);

const FlexibleContent = () => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-8">Công nghệ Lithium Iron Phosphate (LiFePO4) tiên tiến</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          PKG Battery sử dụng lõi cell LiFePO4 chất lượng cao, mang lại mật độ năng lượng lớn và độ an toàn tuyệt đối trong vận hành kho bãi. So với ắc quy chì truyền thống, giải pháp của chúng tôi giúp doanh nghiệp tiết kiệm đến 40% chi phí vận hành trong 5 năm.
        </p>
        
        <div className="my-12 rounded-3xl overflow-hidden bg-pkg-graphite relative aspect-video flex items-center justify-center group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            alt="Factory" 
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-pkg-red flex items-center justify-center text-white shadow-xl shadow-red-500/40 group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <span className="mt-4 text-white font-bold uppercase tracking-widest text-sm">Xem video giới thiệu công nghệ</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-12">
          <div>
            <h3 className="text-xl font-bold mb-4">An toàn & Thông minh</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hệ thống quản lý pin (BMS) được phát triển riêng bởi PKG, giám sát liên tục tình trạng từng cell pin, ngăn ngừa các rủi ro về quá nhiệt, quá tải hay ngắn mạch. Dữ liệu vận hành được lưu giữ và có thể truy xuất qua cổng giao tiếp thông minh.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hiệu suất vượt trội</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hiệu suất xả sâu lên tới 90% (DoD) giúp xe nâng hoạt động xuyên suốt cả ca làm việc mà không bị giảm lực kéo khi pin yếu. Khả năng sạc tranh thủ (opportunity charging) trong giờ nghỉ 15–30 phút giúp kéo dài thời gian sử dụng đáng kể.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero product={sampleProduct} />
      <TechnicalDashboard snapshot={sampleProduct.snapshot} />
      <FamilySelector options={sampleProduct.options} />
      <Benefits benefits={sampleProduct.benefits} />
      <Applications apps={sampleProduct.applications} />
      <FlexibleContent />
      <TechnicalSpecs specs={sampleProduct.specs} />
      <DownloadCenter downloads={sampleProduct.downloads} />
      
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Chính sách bảo hành</h2>
          <div className="p-8 bg-pkg-gray rounded-2xl border-l-4 border-pkg-red">
            <p className="text-gray-700 leading-relaxed font-medium">
              {sampleProduct.warranty}
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="flex gap-2 text-sm text-gray-500 items-center font-bold">
                <ShieldCheck size={18} className="text-pkg-red" />
                Lỗi 1 đổi 1 trong 12 tháng đầu
              </div>
              <div className="flex gap-2 text-sm text-gray-500 items-center font-bold">
                <Truck size={18} className="text-pkg-red" />
                Bảo trì tận nơi trong 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={sampleProduct.relatedProducts} />
      <ContactSection />
      <Footer />
      <MobileStickyCTA />
      
      {/* Spacer for sticky bottom nav on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
