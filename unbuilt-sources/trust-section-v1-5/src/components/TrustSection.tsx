import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Zap, Waves, Cpu, Globe, Infinity, Layout, ShieldCheck, Flame, Layers } from 'lucide-react';

const LOGOS = [
  { id: 1, icon: Target, name: 'Precision' },
  { id: 2, icon: Zap, name: 'Kinetic' },
  { id: 3, icon: Waves, name: 'Flow' },
  { id: 4, icon: Cpu, name: 'Neural' },
  { id: 5, icon: Globe, name: 'Atlas' },
  { id: 6, icon: Infinity, name: 'Möbius' },
  { id: 7, icon: Layout, name: 'Grid' },
  { id: 8, icon: ShieldCheck, name: 'Fortify' },
  { id: 9, icon: Flame, name: 'Ignis' },
  { id: 10, icon: Layers, name: 'Stack' },
];

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      {/* Fine Grid */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Noise / Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Floating Nodes */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-200/30 blur-[140px] rounded-full"
      />
    </div>
  );
};

interface LogoItemProps {
  icon: React.ElementType;
  name: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ icon: Icon, name }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.05 }}
    className="flex items-center gap-3 px-12 py-6 grayscale transition-all duration-500 hover:grayscale-0 group cursor-pointer"
  >
    <div className="relative">
      <Icon className="w-8 h-8 text-premium-dark transition-colors duration-500 group-hover:text-brand-red" strokeWidth={1.5} />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        className="absolute -inset-2 bg-brand-red/5 rounded-full -z-10"
      />
    </div>
    <span className="text-sm font-display font-semibold tracking-wider text-premium-gray/60 transition-colors duration-500 group-hover:text-premium-dark uppercase">
      {name}
    </span>
  </motion.div>
);

const MarqueeRow = ({ direction = 1, speed = 40 }: { direction?: 1 | -1, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden mask-edges py-8">
      <motion.div 
        animate={{ x: direction === 1 ? [0, -100 + '%'] : [-100 + '%', 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap shrink-0"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-nowrap shrink-0">
            {LOGOS.map((logo) => (
              <LogoItem key={logo.id} icon={logo.icon} name={logo.name} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TrustSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-ivory overflow-hidden py-24 lg:py-32">
      <BackgroundPattern />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-20 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="w-8 h-[1px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.3em] text-brand-red uppercase">Verified Excellence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-premium-dark"
            >
              Building the future <br /> 
              <span className="text-premium-gray/40">with global leaders.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-xs"
          >
            <p className="text-lg text-premium-gray leading-relaxed font-light">
              We collaborate with visionary brands to create digital experiences that set new industry standards. Quality is our only metric.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee System */}
      <div className="relative w-full space-y-4">
        <MarqueeRow direction={1} speed={50} />
        <MarqueeRow direction={-1} speed={60} />
        
        {/* Subtle decorative line */}
        <div className="container mx-auto px-6 lg:px-12 mt-12">
           <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-[1px] bg-gradient-to-right from-transparent via-slate-200 to-transparent" 
           />
        </div>
      </div>

      {/* Bottom Subtle Trust Stat */}
      <div className="container mx-auto px-6 lg:px-12 mt-16 flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-24 opacity-40">
        {[
          { label: 'Total Partnerships', value: '450+' },
          { label: 'Industry Awards', value: '124' },
          { label: 'Global Offices', value: '12' }
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <span className="text-2xl font-display font-bold text-premium-dark">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-premium-gray">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
