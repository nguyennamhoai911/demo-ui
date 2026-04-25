/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Battery, 
  Zap, 
  ShieldCheck, 
  Settings, 
  PhoneCall, 
  FileText, 
  Download, 
  Cpu, 
  Thermometer, 
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

// --- Types & Constants ---
const PRODUCT_DATA = {
  model: "PKGFF-24230V1",
  category: "Forklift Lithium Battery Series",
  shortDesc: "High-performance Lithium-ion Phosphate (LiFePO4) power system specifically engineered for electric forklifts and industrial material handling.",
  specs: [
    { label: "Nominal Capacity", value: "230", unit: "Ah", icon: <Battery size={20} /> },
    { label: "Nominal Voltage", value: "25.6", unit: "V", icon: <Zap size={20} /> },
    { label: "Energy Capacity", value: "5.8", unit: "kWh", icon: <Cpu size={20} /> },
    { label: "Charge Time", value: "2-4", unit: "Hours", icon: <Settings size={20} /> },
  ],
  detailedSpecs: [
    { 
      group: "Electrical Parameters", 
      items: [
        { name: "Chemistry", value: "LiFePO4 (LFP)" },
        { name: "Cycle Life", value: "> 4000 cycles @ 80% DOD" },
        { name: "Max Charge Voltage", value: "29.2V" },
        { name: "Standard Discharge", value: "100A (0.5C)" },
        { name: "Peak Discharge (10s)", value: "300A" },
      ]
    },
    { 
      group: "Mechanical Specs", 
      items: [
        { name: "Dimensions (L×W×H)", value: "630 × 175 × 450 mm" },
        { name: "Weight", value: "54 kg" },
        { name: "Case Material", value: "Industrial Powder Coated Steel" },
        { name: "Environmental Rating", value: "IP65 Waterproof" },
      ]
    },
    { 
      group: "Safe Operation", 
      items: [
        { name: "Charge Temp", value: "0°C to 55°C" },
        { name: "Discharge Temp", value: "-20°C to 60°C" },
        { name: "BMS Protection", value: "OVP, UVP, OTP, UTP, OCP, SCP" },
        { name: "Communication", value: "CANbus / RS485 / Bluetooth" },
      ]
    }
  ],
  docs: [
    { title: "Technical Datasheet", type: "PDF", size: "1.2 MB" },
    { title: "Installation Guide", type: "PDF", size: "4.5 MB" },
    { title: "BMS Manual v2.1", type: "PDF", size: "2.8 MB" },
    { title: "Maintenance Schedule", type: "PDF", size: "800 KB" },
  ]
};

// --- Sub-components ---

const Counter = ({ value, unit, duration = 2 }: { value: string, unit: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = parseFloat(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const current = progress * target;
      setDisplayValue(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div className="flex flex-col items-start leading-none">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-7xl font-display font-medium tracking-tighter tabular-nums">
          {displayValue.toFixed(target % 1 === 0 ? 0 : 1)}
        </span>
        <span className="text-xl md:text-2xl text-pkg-red font-display font-bold uppercase">{unit}</span>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-12 md:mb-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div className={`h-[2px] w-12 ${light ? 'bg-white/30' : 'bg-pkg-red'}`} />
        <span className={`font-display text-sm tracking-widest uppercase ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {subtitle}
        </span>
      </div>
      <h2 className={`text-4xl md:text-6xl max-w-4xl leading-tight ${light ? 'text-white' : 'text-pkg-dark'}`}>
        {title}
      </h2>
    </motion.div>
  </div>
);

// --- Main Section Components ---

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 px-6">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-pkg-grey/30" />
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-gradient-to-l from-pkg-red/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 bg-pkg-red text-white text-[10px] sm:text-xs font-display tracking-[0.2em] mb-6 uppercase">
              {PRODUCT_DATA.category}
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-8 translate-x-[-4px]">
              {PRODUCT_DATA.model}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
              {PRODUCT_DATA.shortDesc}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="pkg-button-primary" onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Technical Quote <ArrowRight size={18} />
              </button>
              <button className="pkg-button-outline">
                Download Specs <FileText size={18} />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-30">
              <div className="text-[10px] font-display uppercase tracking-widest text-gray-400">Trusted By:</div>
              <div className="text-sm font-display font-bold">TOYOTA</div>
              <div className="text-sm font-display font-bold">KOMATSU</div>
              <div className="text-sm font-display font-bold">LINDE</div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-6 relative h-[400px] md:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="absolute w-[80%] h-[20%] bg-black/10 blur-3xl bottom-[15%] rounded-full opacity-50" />
            
            <div className="relative w-full aspect-square flex items-center justify-center p-8 max-w-lg">
               <div className="absolute inset-0 bg-gradient-to-tr from-pkg-grey via-white to-pkg-grey border border-gray-100 shadow-2xl rounded-sm group overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  
                  <div className="relative z-10 w-[70%] h-[75%] bg-pkg-graphite border-2 border-white/5 shadow-inner flex flex-col p-4 rounded-sm">
                      <div className="w-full flex justify-between items-start">
                        <div className="flex gap-2">
                           <div className="w-8 h-8 rounded-full bg-pkg-red flex items-center justify-center text-white text-[8px] font-bold">+</div>
                           <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px] font-bold">-</div>
                        </div>
                        <div className="text-white/20 font-display text-[10px] tracking-widest">PKG INDUSTRIAL CORP</div>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center flex-col gap-2">
                        <div className="text-pkg-red font-display text-4xl italic font-black">PKG</div>
                        <div className="bg-pkg-red h-[1px] w-12" />
                        <div className="text-white/40 font-display text-[8px] tracking-[0.3em]">LITHIUM TECHNOLOGY</div>
                      </div>
                      
                      <div className="w-full flex justify-between items-end">
                        <div className="flex flex-col">
                           <div className="text-white/30 text-[8px] uppercase">Model</div>
                           <div className="text-white text-[10px] font-mono tracking-tighter">FF-24230V1</div>
                        </div>
                        <div className="w-12 h-1 bg-white/10 rounded-full" />
                      </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
               </div>
               
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 right-[-10%] glass-card p-4 rounded-sm hidden sm:block"
               >
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Efficiency</div>
                  <div className="text-xl font-display font-medium">98.5%</div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 left-[-10%] bg-white shadow-xl p-4 border-l-4 border-pkg-red rounded-sm hidden sm:block"
               >
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Warranty</div>
                  <div className="text-xl font-display font-medium text-pkg-red">5 YEARS</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechnicalSnapshot = () => {
  return (
    <section className="py-24 px-6 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {PRODUCT_DATA.specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-3 text-gray-400 mb-2 group-hover:text-pkg-red transition-colors">
                {spec.icon}
                <span className="text-[10px] md:text-xs font-display tracking-widest uppercase">{spec.label}</span>
              </div>
              <Counter value={spec.value} unit={spec.unit} />
              <div className="mt-4 h-[1px] w-8 bg-gray-200 group-hover:w-full transition-all duration-500 group-hover:bg-pkg-red" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { 
      title: "Opportunity Charging", 
      desc: "No more long cooldown periods or battery swapping. Charge during breaks to keep operations running 24/7.",
      icon: <Zap className="text-pkg-red" size={32} />
    },
    { 
      title: "Zero Maintenance", 
      desc: "Completely sealed system. No watering, no terminal cleaning, and no acidic fumes released in your facility.",
      icon: <Settings className="text-pkg-red" size={32} />
    },
    { 
      title: "Extended Service Life", 
      desc: "Grade-A LiFePO4 cells provide over 4,000 cycles, outlasting traditional lead-acid systems by 3-4 times.",
      icon: <ShieldCheck className="text-pkg-red" size={32} />
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Why Forward-Looking enterprises switch to lithium" 
          subtitle="Industrial Performance" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-pkg-dark/40 group-hover:bg-pkg-dark/10 transition-all duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
              alt="Industrial Warehouse" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute bottom-8 left-8 z-20 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-1 bg-pkg-red" />
                <span className="text-xs uppercase tracking-widest font-display">Optimization</span>
              </div>
              <p className="text-2xl font-display">Increase fleet uptime by up to 35%</p>
            </div>
          </div>
          
          <div className="space-y-12">
            {benefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-4 bg-pkg-grey rounded-sm shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EngineeringSection = () => {
  return (
    <section className="bg-pkg-dark py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <SectionHeader 
          title="The Intelligence Inside the Power" 
          subtitle="Engineering Authority" 
          light
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {[
                { icon: <Cpu />, title: "Master BMS", desc: "Integrated cloud-ready battery management system with real-time cell balancing." },
                { icon: <Layers />, title: "Thermal Management", desc: "Internal active heat dissipation system ensuring consistent performance." },
                { icon: <ShieldCheck />, title: "Rugged Housing", desc: "High-grade powder coated steel casing designed for extreme mechanical shocks." },
                { icon: <Thermometer />, title: "Grade-A LFP Cells", desc: "Optimized for safety and high power density using prismatic LiFePO4 technology." }
              ].map((tech, i) => (
                <div key={i} className="bg-pkg-dark p-8 group hover:bg-pkg-graphite transition-all duration-300">
                  <div className="text-pkg-red mb-6 scale-125 transition-transform group-hover:scale-150 origin-left">
                    {React.cloneElement(tech.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h4 className="text-lg mb-3 text-white">{tech.title}</h4>
                  <p className="text-sm text-gray-500">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative flex justify-center">
             <div className="w-full aspect-square max-w-sm border border-white/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-[4px] border-pkg-red/10 border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
                
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-64 h-80 bg-gradient-to-br from-pkg-graphite to-black border border-white/20 shadow-2xl flex flex-col items-center justify-center p-6"
                  >
                    <div className="text-pkg-red mb-6 animate-pulse"><Zap size={56} /></div>
                    <div className="text-white text-[10px] tracking-[0.4em] uppercase mb-2 opacity-40">Core tech</div>
                    <div className="text-white text-2xl font-display mb-8 text-center px-4 leading-tight">INTELLIGENT ENERGY SYSTEMS</div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                       <div className="text-[8px] text-gray-600 uppercase font-mono">BUS: CAN 2.0B</div>
                       <div className="text-[8px] text-gray-600 uppercase font-mono text-right">PROTO: RS485</div>
                    </div>
                  </motion.div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecTable = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="specs">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Technical Specifications" 
          subtitle="Precision Data" 
        />
        
        <div className="space-y-16">
          {PRODUCT_DATA.detailedSpecs.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-gray-100 pt-12"
            >
              <h3 className="text-lg font-display tracking-tight text-pkg-dark mb-10 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-pkg-red" />
                {group.group}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-12">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group border-b border-gray-50 flex items-center justify-between py-5 hover:bg-pkg-grey transition-all px-2">
                    <span className="text-gray-500 text-sm font-medium">{item.name}</span>
                    <span className="text-pkg-dark font-display font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center gap-8 justify-between p-10 bg-pkg-grey rounded-sm">
          <div className="flex items-center gap-6">
             <div className="p-4 bg-white rounded-full"><Download className="text-pkg-red" size={32} /></div>
             <div>
                <h4 className="text-xl font-display">Download Full Datasheet</h4>
                <p className="text-sm text-gray-500">Official technical system document package (v4.0)</p>
             </div>
          </div>
          <button className="pkg-button-outline !px-16 w-full md:w-auto bg-white border-none shadow-sm">
            Get Technical PDF
          </button>
        </div>
      </div>
    </section>
  );
};

const Documentation = () => {
  return (
    <section className="py-32 px-6 bg-pkg-grey/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Technical Resource Hub" 
          subtitle="Documentation Center" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_DATA.docs.map((doc, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 shadow-sm flex flex-col justify-between group cursor-pointer border-b-4 border-transparent hover:border-pkg-red transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-50 text-gray-400 group-hover:bg-pkg-red group-hover:text-white transition-colors rounded-sm">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] text-gray-300 font-display font-bold uppercase tracking-[0.2em]">{doc.type}</span>
                </div>
                <h4 className="text-base font-display mb-2 group-hover:text-pkg-red transition-colors">{doc.title}</h4>
                <div className="flex items-center gap-2">
                   <div className="w-4 h-[1px] bg-gray-200" />
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest">{doc.size}</p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between text-[11px] font-display uppercase tracking-widest text-pkg-red font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <span>View Document</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RFQForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 px-6 bg-white" id="rfq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeader 
            title="Request Technical Configuration" 
            subtitle="Next Steps" 
          />
          <p className="text-gray-500 -mt-10 max-w-lg mx-auto">Connect with our energy engineering team to tailor the FF-Series to your specific operational needs.</p>
        </div>
        
        <div className="bg-white border-[3px] border-pkg-dark p-8 md:p-16 shadow-[24px_24px_0px_0px_#E31E24] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pkg-grey -mr-16 -mt-16 rotate-45 group-hover:bg-pkg-red/10 transition-colors" />
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">Full Name *</label>
                  <input type="text" required className="border-b border-gray-200 py-3 focus:border-pkg-red outline-none transition-all font-display text-lg" placeholder="e.g. Nguyen Van A" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">Corperate Email *</label>
                  <input type="email" required className="border-b border-gray-200 py-3 focus:border-pkg-red outline-none transition-all font-display text-lg" placeholder="email@company.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
                  <input type="text" className="border-b border-gray-200 py-3 focus:border-pkg-red outline-none transition-all font-display text-lg" placeholder="+84 ..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">Company Name</label>
                  <input type="text" className="border-b border-gray-200 py-3 focus:border-pkg-red outline-none transition-all font-display text-lg" placeholder="Your Enterprise" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                   <label className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">Inquiry Details</label>
                   <textarea rows={4} className="border border-gray-100 p-4 bg-pkg-grey/20 focus:border-pkg-red outline-none transition-all font-display text-base resize-none" placeholder="Fleet size, vehicle model, working shifts..." />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="pkg-button-primary w-full md:w-auto !px-[60px] !py-5 text-base">
                    Send Technical Request <ArrowRight size={20} />
                  </button>
                  <div className="mt-8 flex items-center gap-4">
                     <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?u=pkg${i}`} alt="Avatar" className="w-full h-full grayscale" />
                          </div>
                        ))}
                     </div>
                     <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Engineering experts on standby</span>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100 shadow-inner">
                  <CheckCircle2 size={48} strokeWidth={1} />
                </div>
                <h3 className="text-4xl font-display mb-4 tracking-tight">Transmission Complete</h3>
                <p className="text-gray-500 mb-12 max-w-sm mx-auto text-lg">Your technical brief has been sent to our system engineers. We typically respond within 120 minutes during business hours.</p>
                <button onClick={() => setSubmitted(false)} className="bg-pkg-dark text-white px-8 py-3 rounded-sm font-display uppercase text-xs tracking-widest hover:bg-pkg-red transition-all">Submit Another Inquiry</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 px-6 sm:px-12 py-6 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <div className="text-3xl font-display font-black italic tracking-tighter text-pkg-dark group cursor-pointer">
            PKG<span className="text-pkg-red group-hover:animate-pulse">.</span>
          </div>
          <nav className="hidden xl:flex items-center gap-12">
            {['Series', 'Engineering', 'Ecosystem', 'Sustainability'].map(item => (
              <a key={item} href="#" className="text-[10px] uppercase font-display tracking-[0.25em] font-bold text-gray-500 hover:text-pkg-red transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-pkg-red transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-10">
           <div className="hidden lg:flex flex-col text-right">
              <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Contact Hotline</span>
              <span className="text-sm font-display font-black">+84 901 234 567</span>
           </div>
           <button className="pkg-button-primary !py-2 !px-6 text-[10px] hidden sm:flex">
             RFQ PORTAL
           </button>
        </div>
      </div>
    </header>
  );
};

const StickyAction = () => {
  return (
    <motion.div 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-pkg-dark text-white p-3 rounded-full shadow-[0_32px_64px_rgba(0,0,0,0.3)] border border-white/5 max-w-[90vw]"
    >
      <div className="hidden md:flex items-center gap-6 px-4 mr-2 border-r border-white/10">
         <div className="flex flex-col">
            <span className="text-[7px] text-gray-500 uppercase tracking-widest font-bold">Product</span>
            <span className="text-[11px] font-display font-bold">PKGFF-24230V1</span>
         </div>
         <div className="flex flex-col">
            <span className="text-[7px] text-gray-500 uppercase tracking-widest font-bold">Energy</span>
            <span className="text-[11px] font-display font-bold">5.8 KWH</span>
         </div>
      </div>
      
      <div className="flex items-center gap-2">
         <a href="tel:+84901234567" className="w-12 h-12 bg-white/10 hover:bg-pkg-red transition-all rounded-full flex items-center justify-center" title="Call Us">
           <PhoneCall size={18} />
         </a>
         <button className="hidden sm:flex items-center gap-2 h-12 bg-white/10 hover:bg-pkg-red transition-all rounded-full px-8 text-[10px] font-display font-bold uppercase tracking-widest">
           Connect Zalo
         </button>
         <button 
           onClick={() => document.getElementById('rfq')?.scrollIntoView({ behavior: 'smooth' })}
           className="bg-pkg-red hover:bg-white hover:text-pkg-dark h-12 px-10 rounded-full text-[10px] font-display font-bold uppercase tracking-widest transition-all"
         >
           Get Technical Quote
         </button>
      </div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="bg-pkg-dark pt-32 pb-48 px-6 text-white text-center md:text-left relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pkg-red/5 blur-[120px] -mr-64 -mt-64 rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
      <div className="lg:col-span-1">
        <div className="text-4xl font-display font-black italic tracking-tighter text-white mb-10 translate-x-[-2px]">
          PKG<span className="text-pkg-red">.</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
          The benchmark for Vietnamese high-end industrial lithium technology. Precision engineered for elite global operations.
        </p>
        <div className="flex gap-4 justify-center md:justify-start grayscale opacity-50">
           {['LinkedIn', 'Facebook', 'Youtube', 'Zalo'].map(s => (
             <span key={s} className="text-[9px] uppercase tracking-widest font-bold cursor-pointer hover:text-pkg-red transition-colors">{s}</span>
           ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-[10px] font-display tracking-[0.2em] font-bold uppercase mb-8 text-white">Advanced Solutions</h4>
        <ul className="flex flex-col gap-5 text-xs text-gray-500 font-medium">
           {['Forklift Energy Systems', 'AGV / AMR Power Solutions', 'Utility Cart Lithium Series', 'High-Density Storage (ESS)'].map(item => (
             <li key={item} className="hover:text-pkg-red cursor-pointer transition-colors px-2 border-l border-transparent hover:border-pkg-red">{item}</li>
           ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-[10px] font-display tracking-[0.2em] font-bold uppercase mb-8 text-white">Innovation Center</h4>
        <ul className="flex flex-col gap-5 text-xs text-gray-500 font-medium">
           {['BMS Cloud Analytics', 'R&D Lab Vietnam', 'Sustainability Roadmap', 'Maintenance Network'].map(item => (
             <li key={item} className="hover:text-pkg-red cursor-pointer transition-colors px-2 border-l border-transparent hover:border-pkg-red">{item}</li>
           ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-[10px] font-display tracking-[0.2em] font-bold uppercase mb-8 text-white">Headquarters</h4>
        <div className="flex flex-col gap-4 text-xs text-gray-500 font-medium leading-relaxed">
           <p className="flex items-center gap-2"><ExternalLink size={12} className="shrink-0" /> Floor 12, Energy Plaza, Ho Chi Minh City</p>
           <p className="flex items-center gap-2"><Settings size={12} className="shrink-0" /> Plant 04, Industrial Park 2, Dong Nai</p>
           <p className="hover:text-white cursor-pointer mt-4 font-bold text-white text-base">+84 901 234 567</p>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
       <div className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold">© 2024 PKG INDUSTRIAL BATTERY CORP. ASIA ENGINEERING EXCELLENCE.</div>
       <div className="flex gap-10 text-[9px] text-gray-600 uppercase tracking-widest font-bold">
         <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
         <span className="hover:text-white cursor-pointer transition-colors">Compliance</span>
         <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
       </div>
    </div>
  </footer>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Reveal animation trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-shown');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="selection:bg-pkg-red selection:text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-pkg-red origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="relative">
        <Hero />
        <TechnicalSnapshot />
        <Benefits />
        <EngineeringSection />
        <SpecTable />
        <Documentation />
        <RFQForm />
      </main>
      
      <Footer />
      <StickyAction />
      
      {/* Visual Accents */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-4 z-40 hidden xl:flex">
         {[0,1,2,3,4,5].map(i => (
           <div key={i} className={`w-1 transition-all duration-500 rounded-full ${i === 0 ? 'h-6 bg-pkg-red' : 'h-2 bg-gray-200'}`} />
         ))}
      </div>
    </div>
  );
}
