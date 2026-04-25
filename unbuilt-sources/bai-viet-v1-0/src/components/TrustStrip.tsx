import { motion } from "motion/react";
import { Factory, ShieldCheck, Zap, Award } from "lucide-react";

export function TrustStrip() {
  const stats = [
    {
      icon: <Factory size={24} />,
      label: "Công suất sản xuất",
      value: "500MWH+",
      sub: "Mỗi năm"
    },
    {
      icon: <ShieldCheck size={24} />,
      label: "Tiêu chuẩn kỹ thuật",
      value: "ISO / CE",
      sub: "Chứng chỉ quốc tế"
    },
    {
      icon: <Zap size={24} />,
      label: "Đối tác tin cậy",
      value: "1000+",
      sub: "Doanh nghiệp B2B"
    },
    {
      icon: <Award size={24} />,
      label: "Kinh nghiệm",
      value: "10 NĂM",
      sub: "Quy mô sản xuất"
    }
  ];

  return (
    <section id="trust-strip" className="bg-white border-y border-gray-100 py-16 mb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
        <Factory size={200} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="text-brand-red mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-display font-black text-charcoal mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
