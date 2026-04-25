import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <PartnersSection />
    </div>
  );
}

function PartnersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full">
        {/* Editorial Header */}
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium">
                    Trusted Partners
                  </span>
                  <div className="h-px w-12 bg-red-600 mt-4" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] font-medium">
                  Được tin tưởng bởi những<br />
                  <span className="text-white/40">thương hiệu</span><br />
                  <span className="italic font-light">tiên phong</span>
                </h2>
                <p className="text-base md:text-lg text-white/50 max-w-md leading-relaxed">
                  Đồng hành cùng các tổ chức hàng đầu trong việc định hình tương lai số.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 flex items-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Marquee Layers */}
        <div className="space-y-12 md:space-y-16">
          <MarqueeRow logos={partnerLogos.slice(0, 8)} speed={40} direction="left" delay={0} />
          <MarqueeRow logos={partnerLogos.slice(8, 16)} speed={50} direction="right" delay={0.15} />
          <MarqueeRow logos={partnerLogos.slice(0, 8).reverse()} speed={45} direction="left" delay={0.3} />
        </div>

        {/* Bottom spacing */}
        <div className="h-32 md:h-48" />
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}

interface MarqueeRowProps {
  logos: typeof partnerLogos;
  speed: number;
  direction: 'left' | 'right';
  delay: number;
}

function MarqueeRow({ logos, speed, direction, delay }: MarqueeRowProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(marqueeRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={marqueeRef}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-16 md:gap-24"
          style={{
            animation: `marquee-${direction} ${speed}s linear infinite`,
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <LogoCard key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </motion.div>
  );
}

interface LogoCardProps {
  logo: {
    name: string;
    year?: string;
    type?: string;
  };
}

function LogoCard({ logo }: LogoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative px-8 py-12 md:px-12 md:py-16">
        {/* Logo container */}
        <div className="relative">
          {/* Hover line accent */}
          <motion.div
            className="absolute -top-4 left-0 h-px bg-red-600 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Logo text */}
          <motion.div
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/20 select-none transition-all duration-500 ease-out"
            animate={{
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)',
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {logo.name}
          </motion.div>

          {/* Hover info reveal */}
          <motion.div
            className="absolute -bottom-8 left-0 text-xs tracking-wider uppercase text-red-600/80 font-medium overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {logo.year && <span>{logo.year}</span>}
            {logo.year && logo.type && <span className="mx-2 text-white/20">·</span>}
            {logo.type && <span>{logo.type}</span>}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Premium partner data
const partnerLogos = [
  { name: 'VERCEL', year: '2024', type: 'Technology' },
  { name: 'STRIPE', year: '2023', type: 'Platform' },
  { name: 'NOTION', year: '2024', type: 'Enterprise' },
  { name: 'FIGMA', year: '2023', type: 'Design' },
  { name: 'LINEAR', year: '2024', type: 'Software' },
  { name: 'OPENAI', year: '2024', type: 'AI' },
  { name: 'ANTHROPIC', year: '2024', type: 'AI' },
  { name: 'SPOTIFY', year: '2023', type: 'Media' },
  { name: 'NETFLIX', year: '2023', type: 'Streaming' },
  { name: 'AIRBNB', year: '2024', type: 'Travel' },
  { name: 'UBER', year: '2023', type: 'Mobility' },
  { name: 'TESLA', year: '2024', type: 'Automotive' },
  { name: 'APPLE', year: '2023', type: 'Technology' },
  { name: 'GOOGLE', year: '2024', type: 'Technology' },
  { name: 'META', year: '2024', type: 'Social' },
  { name: 'ADOBE', year: '2023', type: 'Creative' },
];
