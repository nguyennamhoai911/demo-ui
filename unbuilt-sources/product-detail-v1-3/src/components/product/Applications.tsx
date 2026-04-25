/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const apps = [
  {
    id: "warehouse",
    title: "Kho Vận & Logistics",
    desc: "Tối ưu hóa thời gian chạy liên tục cho đội xe nâng tải trọng lớn trong các trung tâm phân phối.",
    image: "Warehouse Environment"
  },
  {
    id: "factory",
    title: "Nhà Máy Sản Xuất",
    desc: "Cung cấp năng lượng ổn định cho xe điện kéo hàng, AGV trong dây chuyền sản xuất tự động.",
    image: "Factory Floor"
  },
  {
    id: "cold-storage",
    title: "Kho Lạnh",
    desc: "Khả năng chịu nhiệt độ âm sâu vượt trội, không giảm dung lượng đột ngột như ắc quy truyền thống.",
    image: "Cold Storage Facility"
  },
  {
    id: "agv",
    title: "AGV / AMR / Robot",
    desc: "Kích thước tùy chỉnh linh hoạt, tích hợp giao tiếp CAN-bus/RS485 với hệ thống điều khiển thông minh.",
    image: "Autonomous Mobile Robots"
  }
];

export default function Applications() {
  const [active, setActive] = useState(apps[0]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-pkg-red font-bold text-sm tracking-[0.2em] uppercase mb-4">Versatility</span>
          <h2 className="text-5xl font-extrabold text-pkg-graphite leading-tight">Ứng dụng đa lĩnh vực</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* List switcher */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            {apps.map((app) => (
              <button
                key={app.id}
                onMouseEnter={() => setActive(app)}
                className={`text-left p-8 rounded-xl transition-all duration-300 border-l-4 ${
                  active.id === app.id 
                    ? "bg-pkg-grey border-pkg-red translate-x-2" 
                    : "bg-transparent border-transparent grayscale opacity-50 hover:opacity-100 hover:bg-gray-50"
                }`}
              >
                <h4 className={`text-xl font-bold mb-2 transition-colors ${active.id === app.id ? "text-pkg-red" : "text-pkg-graphite"}`}>
                  {app.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {app.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Visual Display */}
          <div className="lg:w-2/3 h-[600px] rounded-3xl overflow-hidden relative shadow-2xl group">
             <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-pkg-graphite flex items-center justify-center"
                >
                   {/* Placeholder for real application images */}
                   <div className="absolute inset-0 bg-linear-to-t from-pkg-graphite/80 to-transparent z-10" />
                   <div className="z-0 text-[200px] font-black text-white/5 whitespace-nowrap uppercase tracking-tighter select-none">
                      {active.id}
                   </div>
                   
                   <div className="relative z-20 text-center p-12">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                         <h3 className="text-4xl font-bold text-white mb-4">{active.title}</h3>
                         <p className="text-white/60 text-lg font-light max-w-lg mx-auto">{active.image}</p>
                      </motion.div>
                   </div>
                </motion.div>
             </AnimatePresence>
             
             {/* Interaction hint */}
             <div className="absolute bottom-10 right-10 z-30">
                <div className="glass-card px-4 py-2 rounded-full text-xs font-bold text-gray-800 flex items-center space-x-2">
                   <div className="w-2 h-2 rounded-full bg-pkg-red animate-pulse" />
                   <span>Cấu hình tùy chỉnh theo xe</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
