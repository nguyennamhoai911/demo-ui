import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface PartnerLogo {
  name: string;
  path: JSX.Element;
  year?: string;
  category?: string;
}

const partnerLogos: PartnerLogo[] = [
  {
    name: "Stripe",
    category: "Thanh toán",
    year: "2024",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 12.5c-2.9 0-4.8 1.5-4.8 3.9 0 1.9 1.4 3.2 4 3.8l1.3.3c1.5.4 2.2.9 2.2 1.7 0 1-1 1.6-2.6 1.6-1.7 0-3.1-.6-4.2-1.5l-2 2.9c1.5 1.3 3.7 2.1 6.2 2.1 3.2 0 5.3-1.5 5.3-4 0-2-1.5-3.3-4.1-3.9l-1.3-.3c-1.3-.3-2-.8-2-1.6 0-1 .9-1.5 2.3-1.5 1.5 0 2.8.5 3.8 1.3l1.9-2.9c-1.4-1.2-3.3-1.9-5.5-1.9zM15 13h-3v-3.5h-3V13h-2v2.5h2v6c0 2.4 1 3.5 4 3.5.9 0 1.7-.2 2.3-.4v-2.6c-.5.2-1 .3-1.5.3-.9 0-1.3-.4-1.3-1.3v-5.5h3V13zm51 0h-3v-3.5h-3V13h-2v2.5h2v6c0 2.4 1 3.5 4 3.5.9 0 1.7-.2 2.3-.4v-2.6c-.5.2-1 .3-1.5.3-.9 0-1.3-.4-1.3-1.3v-5.5h3V13zm12 12.5V13h-3v1.5c-.8-1.1-2.1-1.7-3.7-1.7-3.2 0-5.8 2.6-5.8 6.2s2.6 6.2 5.8 6.2c1.6 0 2.9-.6 3.7-1.7v1.5h3zm-3-6.2c0 2-1.4 3.4-3.3 3.4s-3.3-1.4-3.3-3.4 1.4-3.4 3.3-3.4 3.3 1.4 3.3 3.4zM29.8 12.8c-3.5 0-6.3 2.6-6.3 6.2s2.8 6.2 6.3 6.2c1.8 0 3.5-.6 4.8-1.8l-1.7-2.1c-.8.7-1.9 1.1-3 1.1-1.5 0-2.8-.7-3.2-2.3h9.2c0-.3.1-.7.1-1.1 0-3.6-2.4-6.2-6.2-6.2zm-3.1 5.1c.3-1.4 1.4-2.3 3.1-2.3s2.7.9 2.9 2.3h-6zM87.8 12.8c-1.6 0-2.9.6-3.7 1.7V13h-3v12.5h3v-7c0-1.8 1-2.8 2.5-2.8s2.3.9 2.3 2.6v7.2h3v-7.8c0-3-1.6-4.7-4.1-4.7zM100 13h-3v12.5h3V13zm-1.5-5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM38 12.8c-1.8 0-3.2.7-4 1.8V13h-3v17.5h3v-6.3c.8 1 2.2 1.7 4 1.7 3.2 0 5.8-2.6 5.8-6.2s-2.6-6.2-5.8-6.2zm-.3 9.7c-1.9 0-3.3-1.4-3.3-3.4s1.4-3.4 3.3-3.4 3.3 1.4 3.3 3.4-1.4 3.4-3.3 3.4z"/>
      </svg>
    ),
  },
  {
    name: "Vercel",
    category: "Infrastructure",
    year: "2025",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10l20 35H40L60 10z"/>
      </svg>
    ),
  },
  {
    name: "Shopify",
    category: "E-commerce",
    year: "2023",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 12c-.5 0-1 .1-1.4.3-.1-.2-.2-.5-.4-.7-.6-.8-1.5-1.2-2.5-1.2h-.2c-.2-.3-.5-.6-.8-.8-1.1-.9-2.5-1.3-4-1.1-3.2.4-6.3 3.7-7 7.3-.5-.2-1-.3-1.4-.3-2.5-.1-3.8 2-3.8 3.8 0 .3 0 .6.1 1l2.6 15.5c.2 1.2 1.1 2.1 2.3 2.1h17.4c1.2 0 2.2-.9 2.3-2.1l2.6-15.5c.1-.3.1-.7.1-1 0-1.8-1.3-3.9-3.8-3.8zm-7.5-2c.3 0 .5 0 .7.1v.6c0 1.4-.1 3.3-.6 5-.5-1.5-1.4-2.7-2.6-3.5.3-1.2 1.3-2.2 2.5-2.2zm-2.3-2c.5 0 .9.1 1.3.4-.8.8-1.4 2-1.7 3.3-.7-.3-1.4-.5-2.1-.6.6-1.7 1.6-3.1 2.5-3.1zm-4.4 8.8c.7 0 1.4.1 2.1.3.6.2 1.2.5 1.7.9.5.4.9.9 1.2 1.5.3.6.5 1.3.5 2 0 .5-.1 1-.2 1.5-.2.5-.4.9-.7 1.3-.3.4-.7.7-1.1.9-.4.2-.9.3-1.4.3-.7 0-1.3-.2-1.8-.5-.5-.3-1-.8-1.3-1.4l-1 5.9h-2.3l1.9-11.3c.2-.1.5-.2.8-.3.6-.2 1-.3 1.6-.3zm13.5 13.2h-2.3l.7-4.3c.1-.5.1-1 .1-1.4 0-.7-.1-1.3-.4-1.8-.3-.5-.7-.9-1.2-1.2-.5-.3-1.1-.4-1.7-.4-.5 0-1 .1-1.4.2-.4.1-.7.2-1 .4l-.5 2.9c.2-.2.5-.3.8-.4.3-.1.7-.2 1-.2.5 0 .9.1 1.2.4.3.3.4.7.4 1.2 0 .2 0 .5-.1.8l-1 5.8zm5.5-13.2c-.5 0-1 .1-1.4.3-.4.2-.8.5-1.1.9-.3.4-.5.8-.7 1.3-.1.5-.2 1-.2 1.5 0 .7.1 1.3.4 1.9.3.6.7 1 1.2 1.4.5.3 1.1.5 1.8.5.5 0 1-.1 1.4-.3.4-.2.8-.5 1.1-.9.3-.4.5-.8.7-1.3.1-.5.2-1 .2-1.5 0-.7-.2-1.4-.5-2-.3-.6-.7-1.1-1.2-1.5-.5-.4-1.1-.6-1.7-.9-.7-.2-1.4-.3-2-.3z"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "Productivity",
    year: "2024",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 10h-8l-12 15v-15h-5v30h5v-13l11 13h9l-14-15 14-15zm20 0h-18v5h6.5v25h5v-25h6.5v-5zm15 0h-5v30h5v-30zm25 15c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm-5 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm20-15h-5v30h5v-13l11 13h9l-14-15 14-15h-9l-11 13v-13z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Design",
    year: "2025",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="25" r="6"/>
        <path d="M52 13h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6v-12zm0 12h6c3.3 0 6 2.7 6 6s-2.7 6-6 6c-3.3 0-6-2.7-6-6v-6zm0-24h6c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6V1z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    category: "Media",
    year: "2023",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M48 20c3-2 9-3 12-3s9 1 12 3m-22 5c2.5-1.5 7-2 10-2s7.5.5 10 2m-18 5c2-1 5-1.5 8-1.5s6 .5 8 1.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    category: "Communication",
    year: "2024",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="10" width="6" height="6" rx="2"/>
        <rect x="45" y="19" width="6" height="14" rx="2"/>
        <rect x="54" y="19" width="6" height="6" rx="2"/>
        <rect x="63" y="19" width="6" height="14" rx="2"/>
        <rect x="63" y="10" width="6" height="6" rx="2"/>
        <rect x="54" y="27" width="6" height="6" rx="2"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Developer Tools",
    year: "2025",
    path: (
      <svg viewBox="0 0 120 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 8c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.3 2.2 3.3 1.6 4.1 1.2.1-1 .5-1.6.9-2-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.3-.6-1.6.1-3.4 0 0 1.2-.4 3.8 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.6-1.8 3.8-1.4 3.8-1.4.7 1.8.2 3 .1 3.4.9 1 1.4 2.3 1.4 3.8 0 5.5-3.3 6.6-6.4 7 .5.4.9 1.3.9 2.6v3.8c0 .4.3.8 1 .7 5.6-1.9 9.6-7.1 9.6-13.3 0-7.7-6.3-14-14-14z"/>
      </svg>
    ),
  },
];

const InfiniteMarquee = ({ logos }: { logos: PartnerLogo[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, -100, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });

    return controls.stop;
  }, [x]);

  const xTransform = useTransform(x, (value) => `${value}%`);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-16 will-change-transform"
        style={{ x: xTransform }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 relative group cursor-pointer"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-32 h-16 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              {logo.path}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 8,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            >
              <div className="text-xs text-black/60">{logo.category}</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const BackgroundPattern = () => {
  const time = useMotionValue(0);

  useEffect(() => {
    const controls = animate(time, 360, {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    });

    return controls.stop;
  }, [time]);

  const rotate = useTransform(time, (v) => v);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.03) 0%, transparent 70%)",
          rotate,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-black/5"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-black/5"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-red-500/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white/40 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white/60 to-transparent" />
    </div>
  );
};

export default function PartnerLogosSection() {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center py-32">
      <BackgroundPattern />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-black/40">
                Đối tác
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-px bg-red-600 mt-2 origin-left"
              />
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-black mb-6 leading-[1.1]">
              Được tin tưởng bởi
              <br />
              <span className="text-black/40">những thương hiệu</span>
              <br />
              tiên phong
            </h2>

            <p className="text-lg text-black/50 leading-relaxed max-w-xl">
              Chúng tôi tự hào đồng hành cùng các tổ chức hàng đầu,
              kiến tạo những giá trị bền vững và định hình tương lai.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <InfiniteMarquee logos={partnerLogos} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-8 pt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-medium text-black mb-1">50+</div>
              <div className="text-sm text-black/40 tracking-wide">Thương hiệu</div>
            </div>
            <div className="w-px h-12 bg-black/10" />
            <div className="text-center">
              <div className="text-4xl font-medium text-black mb-1">15</div>
              <div className="text-sm text-black/40 tracking-wide">Quốc gia</div>
            </div>
            <div className="w-px h-12 bg-black/10" />
            <div className="text-center">
              <div className="text-4xl font-medium text-black mb-1">3 năm</div>
              <div className="text-sm text-black/40 tracking-wide">Hợp tác trung bình</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
