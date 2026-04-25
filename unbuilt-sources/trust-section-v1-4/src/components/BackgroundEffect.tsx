import { motion } from 'motion/react';

export const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial Dot Grid */}
      <div 
        className="absolute inset-0 opacity-100" 
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Noise Texture for that subtle premium feel */}
      <div className="absolute inset-0 noise-bg opacity-[0.01] contrast-150" />
    </div>
  );
};
