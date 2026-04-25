import { motion } from 'motion/react';
import { Search, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pkg-gray/50 -z-10" />
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-pkg-red/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 border border-pkg-red text-pkg-red text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
                Knowledge Hub
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.95] mb-8">
                TRUNG TÂM <br />
                <span className="text-pkg-red">KIẾN THỨC</span> <br />
                PIN CÔNG NGHIỆP
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Tài liệu kỹ thuật, nghiên cứu ứng dụng thực tế và cập nhật công nghệ mới nhất trong ngành năng lượng công nghiệp từ đội ngũ chuyên gia R&D của PKG Battery.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm chủ đề, sản phẩm..." 
                  className="w-full bg-white border-b-2 border-pkg-charcoal py-4 pl-12 focus:outline-none focus:border-pkg-red transition-all font-medium"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-pkg-red transition-colors" />
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex-1 flex items-center justify-center gap-3 border border-pkg-charcoal py-4 px-6 hover:bg-pkg-charcoal hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                  <FileDown className="w-5 h-5" />
                  Xem Catalog PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-8 overflow-hidden"
        >
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Năng lực thực tế:</span>
           <div className="flex gap-12 grayscale opacity-40">
              <span className="font-display font-bold text-xl">CE</span>
              <span className="font-display font-bold text-xl">UL</span>
              <span className="font-display font-bold text-xl">ISO 9001</span>
              <span className="font-display font-bold text-xl">IEC</span>
              <span className="font-display font-bold text-xl">RoHS</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
