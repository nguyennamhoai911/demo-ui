import { motion } from 'motion/react';
import { ChevronRight, MessageCircle, Phone, Download } from 'lucide-react';
import { SAMPLE_PRODUCT } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden tech-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Left */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
                <span>Sản phẩm</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-pkg-red">{SAMPLE_PRODUCT.category}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-pkg-graphite mb-4 leading-[1.1]">
                {SAMPLE_PRODUCT.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-pkg-graphite text-white text-xs font-mono tracking-widest rounded">
                  {SAMPLE_PRODUCT.id}
                </span>
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <span className="text-sm font-medium text-gray-600">Industrial Grade Lithium</span>
              </div>

              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                {SAMPLE_PRODUCT.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-pkg-red hover:bg-pkg-red-dark text-white font-semibold rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-pkg-red/20 inline-flex items-center gap-2">
                  Yêu cầu báo giá
                </button>
                <div className="flex gap-3">
                  <button className="p-4 border border-gray-200 hover:border-pkg-red hover:text-pkg-red transition-colors rounded-sm bg-white shadow-sm flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Tư vấn</span>
                  </button>
                  <button className="p-4 border border-gray-200 hover:border-[#0068FF] hover:text-[#0068FF] transition-colors rounded-sm bg-white shadow-sm flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">Zalo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Visual Right */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto"
            >
              {/* Product Stage */}
              <div className="absolute inset-0 bg-white rounded-2xl red-glow border border-gray-100 flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={SAMPLE_PRODUCT.images[0]}
                  alt={SAMPLE_PRODUCT.name}
                  className="w-full h-full object-contain product-shadow hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Elements */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-pkg-red animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-pkg-red opacity-50"></div>
                </div>
              </div>

              {/* Technical Indicator */}
              <div className="absolute -bottom-6 -left-6 bg-pkg-graphite text-white p-6 rounded-lg shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold font-mono">24V</div>
                  <div className="h-8 w-[1px] bg-white/20"></div>
                  <div className="text-sm font-mono opacity-80 leading-tight">
                    VOLTAGE<br />RATING
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
