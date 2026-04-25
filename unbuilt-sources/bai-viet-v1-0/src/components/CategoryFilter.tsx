import { useState } from "react";
import { motion } from "motion/react";

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const categories = [
    "Tất cả",
    "Pin xe nâng",
    "Pin AGV / Robot",
    "Lưu trữ năng lượng",
    "Xe điện du lịch",
    "OEM / ODM",
    "Kiến thức kỹ thuật",
    "Dự án thực tế",
    "Tin công ty",
    "Tài liệu / Catalog",
  ];

  return (
    <div id="category-filter" className="sticky top-20 z-30 bg-off-white/80 backdrop-blur-md border-b border-gray-100 mb-12">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-10 py-5 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative py-1 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeCategory === cat ? "text-brand-red" : "text-gray-400 hover:text-charcoal"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="active-cat-underline"
                  className="absolute -bottom-5 left-0 w-full h-[3px] bg-brand-red"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
