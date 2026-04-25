import { CheckCircle2, ChevronRight } from 'lucide-react';
import { SAMPLE_PRODUCT } from '../constants';
import { motion } from 'motion/react';

export default function KeyFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-12 bg-pkg-red"></div>
              <h2 className="text-3xl font-bold">Lợi ích nổi bật</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {SAMPLE_PRODUCT.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-pkg-red transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pkg-graphite text-lg mb-1">{benefit.title}</h3>
                    {benefit.description && <p className="text-gray-500 text-sm">{benefit.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-12 bg-pkg-red"></div>
              <h2 className="text-3xl font-bold">Ứng dụng</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {SAMPLE_PRODUCT.applications.map((app, index) => (
                <div 
                  key={index}
                  className="px-6 py-4 bg-pkg-gray border border-gray-100 rounded flex items-center justify-between group hover:border-pkg-red transition-all min-w-[200px]"
                >
                  <span className="font-medium text-gray-700">{app}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-pkg-red transition-colors" />
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-pkg-red/5 border-l-4 border-pkg-red">
              <h4 className="font-bold mb-2">Tư vấn thay thế pin chì-axit?</h4>
              <p className="text-gray-600 mb-4">Chúng tôi hỗ trợ chuyển đổi toàn diện cho hệ thống xe nâng có sẵn.</p>
              <button className="text-pkg-red font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Xem quy trình chuyển đổi <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
