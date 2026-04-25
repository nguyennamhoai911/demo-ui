import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseStudySection() {
  const cases = [
    {
      title: "Hệ thống Pin cho đội xe nâng 50 chiếc tại Kho vận Hateco",
      company: "Hateco Logistics",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop",
      result: "+120% Thời gian vận hành"
    },
    {
      title: "Giải pháp Pin AGV tùy chỉnh cho nhà máy linh kiện Samsung SEVT",
      company: "Samsung SEVT",
      image: "https://images.unsplash.com/photo-1558444479-c8482432b795?q=80&w=2070&auto=format&fit=crop",
      result: "Hoàn vốn trong 18 tháng"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-pkg-red text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Real Impact</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-[0.9]">Dự án thực tiễn</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[600px] overflow-hidden"
            >
               <img 
                 src={item.image} 
                 alt={item.title} 
                 className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pkg-charcoal via-pkg-charcoal/20 to-transparent opacity-90" />
               
               <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-pkg-red bg-white px-3 py-1">{item.result}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">{item.company}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-8 group-hover:text-pkg-red transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b border-white pb-2 hover:text-pkg-red hover:border-pkg-red transition-all">
                    Xem Case Study <ArrowUpRight className="w-5 h-5" />
                  </button>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
