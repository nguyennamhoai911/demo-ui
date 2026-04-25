import { SAMPLE_PRODUCT } from '../constants';
import { motion } from 'motion/react';

export default function TechSnapshot() {
  return (
    <section className="bg-pkg-graphite py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-12">
          {SAMPLE_PRODUCT.snapshot.map((spec, index) => (
            <motion.div 
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-1/2 md:w-1/3 lg:w-auto px-4 flex flex-col items-center lg:items-start text-center lg:text-left border-white/5 last:border-0 lg:border-r"
            >
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-widest">
                {spec.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-bold font-sans">
                  {spec.value}
                </span>
                {spec.unit && (
                  <span className="text-pkg-red font-semibold text-lg">{spec.unit}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
