import { motion } from "motion/react";
import { ChevronRight, Zap, Battery, Shield, Clock, Hash, Activity, Maximize, Weight } from "lucide-react";
import { PRODUCT_DATA, PRODUCT_GALLERY } from "../constants";

const iconsMap: Record<string, any> = {
  Hash, Battery, Zap, Activity, Clock, Maximize, Weight
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden industrial-grid bg-pkg-gray/30">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pkg-red/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-pkg-red" />
            <span className="text-pkg-red font-bold uppercase tracking-widest text-xs">{PRODUCT_DATA.category}</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-pkg-black leading-[1.1] mb-6">
            {PRODUCT_DATA.name}
          </h1>
          
          <p className="text-lg text-pkg-dark-gray/80 mb-10 max-w-lg leading-relaxed">
            {PRODUCT_DATA.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-pkg-red text-white px-8 py-4 rounded-sm font-bold shadow-lg shadow-pkg-red/20 hover:bg-pkg-black transition-all flex items-center gap-3 group">
              Yêu cầu báo giá <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-pkg-black border border-pkg-gray px-8 py-4 rounded-sm font-bold hover:border-pkg-red hover:text-pkg-red transition-all">
              Tư vấn kỹ thuật
            </button>
          </div>
          
          <p className="text-xs text-pkg-dark-gray/50 italic">
            * PKG tư vấn cấu hình theo model xe, tải trọng và thời gian vận hành thực tế.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          {/* Subtle light effect behind product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-[120px] -z-10 opacity-30" />
          
          <img 
            src="https://images.unsplash.com/photo-1590634149298-385011e74092?q=80&w=1200&auto=format&fit=crop" 
            alt="PKG Battery Unit"
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl relative z-10"
          />
          
          {/* Floating technical callout */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-panel py-4 px-6 rounded-lg hidden md:block z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pkg-red/10 rounded-full flex items-center justify-center text-pkg-red">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-pkg-dark-gray/60 uppercase font-bold tracking-wider">Tiêu chuẩn</div>
                <div className="font-display font-bold text-pkg-black">IP65 Industrial</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function SpecDashboard() {
  return (
    <section className="relative -mt-10 z-30 px-6">
      <div className="max-w-7xl mx-auto glass-panel rounded-xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-x divide-pkg-gray/50">
          {PRODUCT_DATA.specs.map((spec, index) => {
            const Icon = iconsMap[spec.icon] || Hash;
            return (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 flex flex-col justify-between hover:bg-pkg-gray/30 transition-colors group"
              >
                <Icon className="w-5 h-5 text-pkg-red/40 group-hover:text-pkg-red transition-colors mb-4" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-pkg-dark-gray/40 mb-1 tracking-widest">{spec.label}</div>
                  <div className="font-display font-bold text-xl text-pkg-black">{spec.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Ảnh thực tế & Chi tiết</h2>
            <p className="text-pkg-dark-gray/60">Góc nhìn cận cảnh về thiết kế, cổng kết nối và ứng dụng vận hành của bộ pin PKGFF-24230V1.</p>
          </div>
          <div className="flex gap-2 p-1 bg-pkg-gray rounded-sm">
            {["Sản phẩm", "Lắp đặt", "Kích thước", "Video"].map((tab, i) => (
              <button key={tab} className={`px-4 py-2 text-sm font-bold rounded-sm transition-all ${i === 0 ? "bg-white text-pkg-red shadow-sm" : "hover:text-pkg-red"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 h-[600px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-lg group">
            <img 
              src={PRODUCT_GALLERY[0].url} 
              alt={PRODUCT_GALLERY[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
               <span className="text-white font-medium">{PRODUCT_GALLERY[0].title}</span>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {PRODUCT_GALLERY.slice(1, 3).map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg group">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValueProp() {
  return (
    <section className="py-24 bg-pkg-black text-white relative overflow-hidden">
       {/* Background graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-pkg-red/30 transform skew-x-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
              Tâm điểm của <span className="text-pkg-red text-glow-red">Năng suất</span> công nghiệp
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              PKGFF-24230V1 không chỉ là một bộ pin, đó là động lực đằng sau hoạt động logistics thông suốt của bạn. Thiết kế tinh gọn, hiệu quả vượt trội.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {PRODUCT_DATA.benefits.map((benefit, i) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-bold text-pkg-red mb-2">{benefit.title}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-pkg-dark-gray/30 rounded-3xl overflow-hidden border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
                alt="Industrial context"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pkg-red/20 to-transparent pointer-events-none" />
              
              {/* Central badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-8 glass-panel rounded-full w-48 h-48 flex flex-col justify-center items-center backdrop-blur-xl bg-pkg-black/40 border-pkg-red/30">
                <Zap className="text-pkg-red w-8 h-8 mb-2" />
                <div className="text-3xl font-bold text-white">LiFePO4</div>
                <div className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Standard Safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
