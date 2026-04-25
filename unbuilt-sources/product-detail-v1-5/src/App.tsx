import {
  Zap,
  Battery,
  ShieldCheck,
  Settings,
  ArrowRight,
  Download,
  Phone,
  MessageCircle,
  Clock,
  Weight,
  Layers,
  Cpu,
  Package,
  Wrench,
  Construction,
  Truck,
  Box,
  Cylinder,
  FileText,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Maximize2,
  LayoutGrid,
  Snowflake,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';

// --- Types ---

interface SpecGroup {
  title: string;
  specs: { label: string; value: string }[];
}

interface ProductModel {
  id: string;
  name: string;
  voltage: string;
  capacity: string;
  active?: boolean;
}

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) => {
  const baseStyles = 'px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 rounded-sm active:scale-95';
  const variants = {
    primary: 'bg-[#E31E24] text-white hover:bg-[#C1191F] shadow-lg shadow-red-500/20',
    secondary: 'bg-white text-black hover:bg-neutral-100',
    outline: 'border border-neutral-300 text-neutral-800 hover:border-black hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:text-black hover:bg-neutral-100',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionTitle = ({ subtitle, title, dark = false }: { subtitle: string; title: string; dark?: boolean }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`text-xs font-bold tracking-[0.2em] uppercase ${dark ? 'text-red-500' : 'text-[#E31E24]'} block mb-4`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-neutral-900'} max-w-2xl leading-[1.1]`}
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-neutral-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#E31E24] flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
            <Battery className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-black">PKG<span className="text-[#E31E24]">BATTERY</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {['Sản phẩm', 'Giải pháp', 'Công nghệ', 'Dự án', 'Về chúng tôi'].map((item) => (
            <a key={item} href="#" className="hover:text-[#E31E24] transition-colors">{item}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="py-2 px-4 text-xs font-bold">
            DOWNLOAD PDF
          </Button>
          <Button variant="primary" className="py-2 px-4 text-xs font-bold">
            BÁO GIÁ NGAY
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-medium uppercase text-sm">
              {['Sản phẩm', 'Giải pháp', 'Công nghệ', 'Dự án', 'Về chúng tôi'].map((item) => (
                <a key={item} href="#" className="py-2 border-b border-neutral-50">{item}</a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full justify-center">DOWNLOAD CATALOGUE</Button>
                <Button variant="primary" className="w-full justify-center">LIÊN HỆ</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#E31E24] text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-red-100">
            <Zap size={12} fill="currentColor" />
            Industrial Lithium Series
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1] tracking-tighter text-neutral-900 mb-6 drop-shadow-sm">
            PKGFF-24230V1 <br />
            <span className="text-[#E31E24]">24V 230Ah</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 mb-8 max-w-lg leading-relaxed font-light">
            Giải pháp pin Lithium thông minh cho xe nâng điện vận hành liên tục 3 ca. Tối ưu 30% chi phí vận hành.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 text-sm font-bold text-neutral-400">
            <span className="flex items-center gap-1"><CheckCircle2 className="text-green-500 w-4 h-4" /> ISO 9001:2015</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="text-green-500 w-4 h-4" /> Tiêu chuẩn CE</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="text-green-500 w-4 h-4" /> Bảo hành 5 năm</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="px-8 py-4 text-sm tracking-widest font-black uppercase overflow-hidden group">
              <span className="relative z-10">NHẬN BÁO GIÁ</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 justify-center">
                Tư vấn kỹ thuật
              </Button>
              <Button variant="outline" className="px-4 border-neutral-200">
                <MessageCircle size={20} className="text-[#E31E24]" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative px-12"
        >
          {/* Main Visual */}
          <div className="relative z-10 filter drop-shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1548610762-656041ec2694?q=80&w=1000&auto=format&fit=crop" 
              alt="PKG Battery Unit" 
              className="w-full h-auto object-contain mix-blend-multiply opacity-0" // Hidden real img to use div styled as battery
            />
            {/* Custom Battery Visual */}
            <div className="w-full aspect-[4/3] bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col group cursor-pointer border border-neutral-800">
               <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-transparent opacity-50" />
                  <div className="w-[80%] h-[70%] border-2 border-[#E31E24]/30 rounded-lg flex items-center justify-center">
                    <Battery className="w-32 h-32 text-[#E31E24] opacity-80" />
                  </div>
                  <div className="absolute top-8 right-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
               </div>
               <div className="h-16 bg-[#E31E24] px-8 flex items-center justify-between">
                  <span className="text-white font-black italic tracking-widest">PKG POWER</span>
                  <div className="flex gap-4">
                    <div className="w-8 h-1 bg-white/30 rounded-full" />
                    <div className="w-8 h-1 bg-white/30 rounded-full" />
                  </div>
               </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-red-600/5 blur-[120px] rounded-full -z-10" />
          </div>

          {/* Floating UI badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-4 -right-4 bg-white p-4 shadow-xl border border-neutral-100 rounded-lg z-20"
          >
            <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1">State of Health</div>
            <div className="text-xl font-black text-green-500">99.8%</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="absolute bottom-12 -left-8 bg-black p-4 shadow-xl border border-neutral-800 rounded-lg z-20 text-white"
          >
            <div className="flex items-center gap-3">
              <Cpu size={24} className="text-[#E31E24]" />
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-500">Smart BMS</div>
                <div className="text-xs font-bold">Cloud Monitoring</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickDecisionBar = () => {
  const stats = [
    { label: 'Capacity', value: '230Ah', icon: Battery },
    { label: 'Voltage', value: '25.6V', icon: Zap },
    { label: 'Energy', value: '5.8kWh', icon: Layers },
    { label: 'Charging', value: '2-4H', icon: Clock },
    { label: 'Weight', value: '~54kg', icon: Weight },
  ];

  return (
    <div className="container mx-auto px-6 -mt-10 relative z-30">
      <div className="bg-white border border-neutral-200 shadow-2xl grid grid-cols-2 md:grid-cols-5 divide-x divide-neutral-100 overflow-hidden rounded-xl">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 md:p-8 flex flex-col items-center justify-center hover:bg-neutral-50 transition-colors group">
            <stat.icon size={20} className="text-[#E31E24] mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-black text-black leading-none mb-1">{stat.value}</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Benefits = () => {
  const items = [
    { title: 'Tiết kiệm thời gian', desc: 'Sạc nhanh hoàn toàn trong 2 giờ, hỗ trợ sạc tranh thủ mọi giải thao tác.', icon: Clock },
    { title: 'Độ bền công nghiệp', desc: 'Trên 5,000 chu trình sạc (cycle), tuổi thọ gấp 3-4 lần ắc quy chì.', icon: ShieldCheck },
    { title: 'An toàn tuyệt đối', desc: 'Tích hợp BMS thông minh chống đoản mạch, quá nhiệt và cháy nổ.', icon: ShieldCheck },
    { title: 'Không bảo trì', desc: 'Không cần châm nước, không mùi axit, bảo vệ sức khỏe nhân sự.', icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle 
              subtitle="Performance Value"
              title="Khởi nguồn cho hiệu suất logistics hiện đại"
            />
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              Trong môi trường kho vận 24/7, mỗi phút downtime là một tổn thất lớn. Pin Lithium PKG được thiết kế để loại bỏ những hạn chế của công nghệ cũ, mang lại sự linh hoạt và sẵn sàng tối đa cho đội xe nâng của bạn.
            </p>
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-neutral-100 flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-black">{item.title}</h4>
                    <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-12 group">
              TÌM HIỂU GIẢI PHÁP CHUYỂN ĐỔI <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                alt="Warehouse operation" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl rounded-xl border border-neutral-100 hidden lg:block max-w-xs">
              <div className="text-[#E31E24] text-5xl font-black mb-2">-30%</div>
              <div className="text-sm font-bold text-neutral-900 leading-tight">Mức tiêu thụ năng lượng & Chi phí bảo trì hàng năm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1548610762-656041ec2694?q=80&w=1000", // Placeholder for actual battery
    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1000"
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Visual Showcase" title="Chất lượng sản xuất đỉnh cao trong từng chi tiết" />
        
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
             <div className="relative aspect-video bg-neutral-100 rounded-sm overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={active}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    src={images[active]} 
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/5" />
                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-black transition-all">
                  <Maximize2 size={24} />
                </button>
             </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
             {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActive(i)}
                  className={`relative aspect-video rounded-sm overflow-hidden border-2 transition-all ${active === i ? 'border-[#E31E24]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 ${active === i ? 'bg-[#E31E24]/10' : ''}`} />
                </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Applications = () => {
  const tabs = [
    { title: 'Kho vận (Logistics)', icon: Truck, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d' },
    { title: 'Nhà máy Sản xuất', icon: Construction, img: 'https://images.unsplash.com/photo-1565891741441-64926e441838' },
    { title: 'Kho lạnh (Cold Storage)', icon: Snowflake, img: 'https://images.unsplash.com/photo-1540339830205-0199241ceb48' },
    { title: 'Robot / AGV', icon: LayoutGrid, img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a' },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-neutral-50">
       <div className="container mx-auto px-6">
          <SectionTitle subtitle="Scenarios" title="Giải pháp tối ưu cho mọi loại hình công nghiệp" />
          
          <div className="flex flex-wrap gap-4 mb-12">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-8 py-4 flex items-center gap-3 font-bold text-sm tracking-widest uppercase transition-all border-b-2 ${activeTab === i ? 'border-[#E31E24] text-black bg-white shadow-lg' : 'border-transparent text-neutral-400 hover:text-black'}`}
              >
                <tab.icon size={20} />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-xl border border-neutral-100">
             <div className="overflow-hidden rounded-lg">
                <motion.img 
                  key={activeTab}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  src={`${tabs[activeTab].img}?auto=format&fit=crop&w=1000&q=80`} 
                  className="w-full aspect-video object-cover"
                />
             </div>
             <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-black mb-6 text-black uppercase tracking-tight">{tabs[activeTab].title}</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed text-lg italic">
                  "Hệ thống pin PKG giúp chúng tôi tiết kiệm thời gian sạc đáng kể, đảm bảo tiến độ logistics ngay cả trong những mùa cao điểm bận rộn nhất."
                </p>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-6 h-6 bg-green-50 text-green-600 flex items-center justify-center rounded-full"><CheckCircle2 size={14} /></div>
                      Khả năng chịu nhiệt từ -20°C đến 55°C
                   </div>
                   <div className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-6 h-6 bg-green-50 text-green-600 flex items-center justify-center rounded-full"><CheckCircle2 size={14} /></div>
                      Cấu hình vỏ thép chịu lực va đập cao
                   </div>
                </div>
                <Button variant="primary" className="mt-10 self-start">XEM CHI TIẾT USE-CASE</Button>
             </div>
          </div>
       </div>
    </section>
  );
};

const SmartEngineering = () => {
  return (
    <section className="py-32 bg-[#121212] text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E31E24]/5 blur-[200px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="bg-neutral-800 aspect-square rounded-3xl p-12 relative overflow-hidden flex items-center justify-center border border-neutral-700 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/20 to-transparent opacity-30" />
                <motion.div 
                   animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                   }}
                   transition={{ repeat: Infinity, duration: 6 }}
                   className="relative z-10"
                >
                  <Battery className="w-[80%] aspect-square mx-auto text-[#E31E24] opacity-80" />
                </motion.div>
                
                {/* HUD Elements */}
                <div className="absolute top-10 left-10 border-l border-t border-[#E31E24] p-4 text-[10px] uppercase font-black tracking-widest text-red-500">
                  SYSTEM CORE: V3.2
                </div>
                <div className="absolute bottom-10 right-10 border-r border-b border-[#E31E24] p-4 text-[10px] uppercase font-black tracking-widest text-red-500">
                  BMS ACTIVE :: 25.6V
                </div>
             </div>
          </div>
          <div>
            <SectionTitle 
              subtitle="Engineering Inside" 
              title="Công nghệ lõi nâng tầm đẳng cấp vận hành" 
              dark 
            />
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Tế bào Pin LiFePO4', desc: 'Sử dụng cell pin hạng A từ các nhà cung cấp hàng đầu thế giới.', icon: Layers },
                { title: 'Hệ thống Smart BMS', icon: Cpu, desc: 'Giám sát real-time, cân bằng điện năng và bảo vệ đa tầng.' },
                { title: 'Vỏ thép chịu lực', icon: Cylinder, desc: 'Thiết kế bền bỉ, chống rung lắc đặc biệt cho xe nâng hàng.' },
                { title: 'Cổng kết nối REMA', icon: Settings, desc: 'Tiêu chuẩn quốc tế, cắm và chạy (Plug & Play) dễ dàng.' },
              ].map((item, i) => (
                <div key={i} className="group">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-sm bg-neutral-800 flex items-center justify-center text-[#E31E24] transition-colors group-hover:bg-[#E31E24] group-hover:text-white">
                        <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                   </div>
                   <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-neutral-900 border border-neutral-800 rounded-sm">
                <h5 className="font-bold mb-4 text-[#E31E24] flex items-center gap-2">
                  <Wrench size={16} /> Technical Edge
                </h5>
                <ul className="text-sm space-y-3 text-neutral-400 font-medium">
                  <li>• Hỗ trợ Giao thức CANbus tích hợp linh hoạt</li>
                  <li>• Tính năng ngắt sạc thông minh khi đầy</li>
                  <li>• Quản lý nhiệt độ chủ động qua cảm biến điểm chạm</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnicalSpecs = () => {
  const groups: SpecGroup[] = [
    {
      title: 'Đặc tính Điện học',
      specs: [
        { label: 'Điện áp định mức', value: '25.6V' },
        { label: 'Dung lượng định mức', value: '230Ah' },
        { label: 'Năng lượng lưu trữ', value: '5.88 kWh' },
        { label: 'Loại tế bào (Cell type)', value: 'LiFePO4 Premium' },
      ]
    },
    {
      title: 'Sạc & Xả',
      specs: [
        { label: 'Dòng sạc chuẩn', value: '115A (0.5C)' },
        { label: 'Dòng sạc tối đa', value: '200A' },
        { label: 'Dòng xả định mức', value: '230A (1C)' },
        { label: 'Thời gian sạc đầy', value: '2 - 3 Giờ' },
      ]
    },
    {
      title: 'Cấu trúc Cơ khí',
      specs: [
        { label: 'Kích thước (D×R×C)', value: '630 × 175 × 450 mm' },
        { label: 'Trọng lượng tổng', value: '~54 kg' },
        { label: 'Vật liệu vỏ', value: 'Thép cán nguội (SPCC) 3mm' },
        { label: 'Cấp bảo vệ', value: 'IP65' },
      ]
    },
    {
      title: 'Môi trường & An toàn',
      specs: [
        { label: 'Nhiệt độ vận hành', value: '-20°C to 55°C' },
        { label: 'Nhiệt độ sạc', value: '0°C to 45°C' },
        { label: 'Tính năng bảo vệ', value: 'Quá áp, Thấp áp, Quá nhiệt, Đoản mạch' },
        { label: 'Giao tiếp (Comms)', value: 'CAN / RS485' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="specs">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionTitle subtitle="Full Specifications" title="Thông số kỹ thuật chi tiết" />
          <div className="flex gap-3 mb-4">
             <Button variant="outline" className="text-xs">COMPARE MODELS</Button>
             <Button variant="outline" className="text-xs"><Download size={14} /> EXPORT PDF</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
           {groups.map((group, i) => (
              <div key={i}>
                 <h4 className="text-xl font-black mb-6 text-black border-l-4 border-[#E31E24] pl-4 uppercase tracking-tighter">{group.title}</h4>
                 <div className="space-y-0">
                    {group.specs.map((spec, j) => (
                       <div key={j} className="flex justify-between py-4 border-b border-neutral-100 items-center hover:bg-neutral-50 px-2 transition-colors">
                          <span className="text-neutral-500 font-medium text-sm">{spec.label}</span>
                          <span className="text-black font-bold text-sm text-right">{spec.value}</span>
                       </div>
                    ))}
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ProductFamily = () => {
  const models: ProductModel[] = [
    { id: '1', name: 'PKGFF-24150', voltage: '24V', capacity: '150Ah' },
    { id: '2', name: 'PKGFF-24200', voltage: '24V', capacity: '200Ah' },
    { id: '3', name: 'PKGFF-24230V1', voltage: '24V', capacity: '230Ah', active: true },
    { id: '4', name: 'PKGFF-24280', voltage: '24V', capacity: '280Ah' },
    { id: '5', name: 'PKGFF-24340', voltage: '24V', capacity: '340Ah' },
  ];

  return (
    <section className="py-24 bg-neutral-100">
       <div className="container mx-auto px-6">
          <SectionTitle subtitle="Product Family" title="Các dòng model cùng dải điện áp" />
          
          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar">
            {models.map((m) => (
              <div 
                key={m.id} 
                className={`flex-shrink-0 w-64 p-8 rounded-sm transition-all cursor-pointer ${m.active ? 'bg-[#E31E24] text-white shadow-2xl scale-105' : 'bg-white border border-neutral-200 hover:border-[#E31E24]'}`}
              >
                <div className={`text-[10px] uppercase font-black tracking-widest mb-4 ${m.active ? 'text-white/60' : 'text-neutral-400'}`}>LITHIUM 24V</div>
                <div className="text-xl font-black mb-2">{m.capacity}</div>
                <div className={`text-base font-bold mb-8 ${m.active ? 'text-white' : 'text-neutral-900'}`}>{m.name}</div>
                <div className="h-px w-full bg-current opacity-20 mb-8" />
                <button className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${m.active ? 'text-white' : 'text-[#E31E24]'}`}>
                  CHI TIẾT <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

const DownloadCenter = () => {
  const files = [
    { name: 'Product Datasheet', size: '1.2 MB', ext: 'PDF' },
    { name: 'User Manual v2.0', size: '4.5 MB', ext: 'PDF' },
    { name: 'CE Certificate', size: '0.8 MB', ext: 'PDF' },
    { name: '2D/3D Drawings', size: '12 MB', ext: 'ZIP' },
    { name: 'Full Solutions Catalogue', size: '15 MB', ext: 'PDF' },
  ];

  return (
    <section className="py-24 bg-white">
       <div className="container mx-auto px-6">
          <SectionTitle subtitle="Resources" title="Tài liệu & Chứng nhận kỹ thuật" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, i) => (
              <div key={i} className="group p-6 border border-neutral-100 hover:border-[#E31E24] transition-all duration-300 flex items-center justify-between bg-neutral-50 rounded-sm shadow-sm hover:shadow-xl hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-neutral-200 text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-neutral-900 group-hover:text-[#E31E24]">{file.name}</div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400 mt-1">{file.ext} • {file.size}</div>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-[#E31E24] transition-colors p-2">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-24 bg-white border-y border-neutral-100">
       <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center">
             <div>
                <div className="text-6xl font-black text-neutral-900 mb-2">10+</div>
                <div className="text-sm uppercase tracking-widest font-black text-[#E31E24]">Năm kinh nghiệm</div>
             </div>
             <div>
                <div className="text-6xl font-black text-neutral-900 mb-2">5000+</div>
                <div className="text-sm uppercase tracking-widest font-black text-[#E31E24]">Dự án thành công</div>
             </div>
             <div>
                <div className="text-6xl font-black text-neutral-900 mb-2">24/7</div>
                <div className="text-sm uppercase tracking-widest font-black text-[#E31E24]">Hỗ trợ kỹ thuật</div>
             </div>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
             {/* Replace with actual partner/customer logos */}
             <div className="text-3xl font-black italic tracking-tighter">SIEMENS</div>
             <div className="text-3xl font-black italic tracking-tighter">TOYOTA</div>
             <div className="text-3xl font-black italic tracking-tighter">LINDE</div>
             <div className="text-3xl font-black italic tracking-tighter">HYSTER</div>
             <div className="text-3xl font-black italic tracking-tighter">JUNGHEINRICH</div>
          </div>
       </div>
    </section>
  );
};

const RFQSection = () => {
  return (
    <section className="py-32 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#E31E24]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
           <div>
              <SectionTitle 
                subtitle="Request a Quote" 
                title="Tư vấn giải pháp năng lượng tối ưu cho doanh nghiệp" 
                dark 
              />
              <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
                Đội ngũ kỹ sư của PKG sẽ phân tích kỹ thuật và gửi báo giá chi tiết dựa trên model xe nâng và nhu cầu vận hành thực tế của bạn.
              </p>
              
              <div className="space-y-8">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center text-[#E31E24] border border-neutral-800 rounded-full shadow-lg">
                       <Phone size={24} />
                    </div>
                    <div>
                       <div className="text-xs uppercase font-black text-neutral-500 mb-1">Hotline tư vấn</div>
                       <div className="text-2xl font-black text-white">090X.XXX.XXX</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center text-[#E31E24] border border-neutral-800 rounded-full shadow-lg">
                       <MessageCircle size={24} />
                    </div>
                    <div>
                       <div className="text-xs uppercase font-black text-neutral-500 mb-1">Hỗ trợ Zalo</div>
                       <div className="text-2xl font-black text-white">zalo.me/pkgbattery</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-sm shadow-2xl">
              <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Họ và tên *</label>
                       <input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm" placeholder="Nguyễn Văn A" />
                    </div>
                    <div>
                       <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Số điện thoại *</label>
                       <input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm" placeholder="0901 234 567" />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Tên công ty</label>
                    <input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm" placeholder="ABC Logistics Co., Ltd" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Model xe nâng</label>
                       <input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm" placeholder="Toyota 8FBE15" />
                    </div>
                    <div>
                       <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Số lượng cần tư vấn</label>
                       <input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm" placeholder="Ví dụ: 5 bộ" />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] uppercase font-black text-neutral-500 mb-2 block">Yêu cầu đặc biệt</label>
                    <textarea className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 outline-none focus:border-[#E31E24] transition-colors font-medium text-sm min-h-[100px]" placeholder="VD: Môi trường kho lạnh -25 độ..." />
                 </div>
                 <Button variant="primary" className="w-full justify-center py-4 text-sm font-black tracking-widest uppercase">
                    GỬI YÊU CẦU BÁO GIÁ
                 </Button>
                 <p className="text-[10px] text-center text-neutral-400 mt-4 leading-relaxed font-bold">
                    Chúng tôi cam kết phản hồi báo giá kỹ thuật trong vòng 4 - 8 giờ làm việc.
                 </p>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
           <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#E31E24] flex items-center justify-center rounded-sm">
                  <Battery className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-black">PKG<span className="text-[#E31E24]">BATTERY</span></span>
              </div>
              <p className="text-neutral-500 leading-relaxed mb-8 max-w-sm font-medium">
                Sản xuất và cung cấp giải pháp lưu trữ năng lượng Lithium cao cấp cho xe điện công nghiệp, AGV và hệ thống ESS công trình.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'LinkedIn', 'YouTube'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 bg-neutral-50 text-neutral-400 flex items-center justify-center rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
                    <span className="text-[10px] font-black">{s[0]}</span>
                  </a>
                ))}
              </div>
           </div>
           
           <div className="lg:col-span-2">
              <h5 className="font-black uppercase tracking-widest text-xs text-neutral-900 mb-6">Sản phẩm</h5>
              <ul className="space-y-4 text-sm font-bold text-neutral-500">
                <li><a href="#" className="hover:text-[#E31E24]">Lithium Forklift</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Lithium AGV</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Golf Cart Battery</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Trạm sạc nhanh</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">ESS Solutions</a></li>
              </ul>
           </div>

           <div className="lg:col-span-2">
              <h5 className="font-black uppercase tracking-widest text-xs text-neutral-900 mb-6">Tài liệu</h5>
              <ul className="space-y-4 text-sm font-bold text-neutral-500">
                <li><a href="#" className="hover:text-[#E31E24]">Catalogue 2024</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Tech Support</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Warranty Policy</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">BMS Guide</a></li>
                <li><a href="#" className="hover:text-[#E31E24]">Certifications</a></li>
              </ul>
           </div>

           <div className="lg:col-span-4">
              <h5 className="font-black uppercase tracking-widest text-xs text-neutral-900 mb-6">Trụ sở chính</h5>
              <div className="space-y-4 text-sm font-bold text-neutral-500">
                <p className="flex items-start gap-4">
                  <LayoutGrid size={18} className="mt-1 flex-shrink-0 text-[#E31E24]" />
                  <span>Khu công nghệ cao, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone size={18} className="flex-shrink-0 text-[#E31E24]" />
                  <span>090X.XXX.XXX</span>
                </p>
                <p className="flex items-center gap-4">
                  <FileText size={18} className="flex-shrink-0 text-[#E31E24]" />
                  <span>contact@pkgbattery.com</span>
                </p>
              </div>
           </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">© 2024 PKG BATTERY CO., LTD. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-neutral-400">
             <a href="#" className="hover:text-black">Privacy Policy</a>
             <a href="#" className="hover:text-black">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
   return (
      <>
         {/* Desktop side bar */}
         <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
            <button className="w-14 h-14 bg-white shadow-xl flex items-center justify-center rounded-full border border-neutral-100 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all group relative">
               <Phone size={22} />
               <div className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded-sm text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  GỌI TƯ VẤN
               </div>
            </button>
            <button className="w-14 h-14 bg-white shadow-xl flex items-center justify-center rounded-full border border-neutral-100 text-[#0068FF] hover:bg-[#0068FF] hover:text-white transition-all group relative">
               <MessageCircle size={22} />
               <div className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded-sm text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  NHẮN ZALO
               </div>
            </button>
            <button className="w-14 h-14 bg-[#E31E24] shadow-xl flex items-center justify-center rounded-full text-white hover:scale-110 transition-all group relative">
               <Zap size={22} />
               <div className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded-sm text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  NHẬN BÁO GIÁ
               </div>
            </button>
         </div>

         {/* Mobile bottom bar */}
         <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-100 z-50 lg:hidden p-4 grid grid-cols-3 gap-3">
            <Button variant="outline" className="justify-center px-0 py-2"><Phone size={18} /></Button>
            <Button variant="outline" className="justify-center px-0 py-2 text-[#0068FF]"><MessageCircle size={18} /></Button>
            <Button variant="primary" className="justify-center px-0 py-2 text-[10px] font-black tracking-tighter">BÁO GIÁ</Button>
         </div>
      </>
   );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E31E24] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <QuickDecisionBar />
        <Benefits />
        <GallerySection />
        <Applications />
        <SmartEngineering />
        <TechnicalSpecs />
        <ProductFamily />
        <DownloadCenter />
        <TrustSection />
        <RFQSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
