import { useState } from 'react';
import { SAMPLE_PRODUCT } from '../constants';
import { Maximize2, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-pkg-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12 bg-pkg-red"></div>
            <h2 className="text-3xl font-bold">Hình ảnh chi tiết</h2>
          </div>
          <div className="text-gray-500 font-medium">
            {activeIndex + 1} / {SAMPLE_PRODUCT.images.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Visual */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[600px] bg-white rounded-sm border border-gray-100 flex items-center justify-center p-12 overflow-hidden shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={SAMPLE_PRODUCT.images[activeIndex]}
                  className="max-w-full max-h-full object-contain product-shadow"
                  alt="Product Detail"
                />
              </AnimatePresence>
              
              <button className="absolute bottom-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                <Maximize2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible">
            {SAMPLE_PRODUCT.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 relative w-24 h-24 lg:w-full lg:h-40 rounded-sm border-2 overflow-hidden transition-all group ${
                  activeIndex === index ? 'border-pkg-red' : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Thumb" />
                {index === 2 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
