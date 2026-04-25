import { motion } from 'motion/react';
import { Partner } from '../partnersData';

// Minimalist SVG Reconstructions of Brand Logos
export const PartnerLogo = ({ partner, isActive, isHovered }: { partner: Partner, isActive: boolean, isHovered: boolean }) => {
  const getLogo = () => {
    switch (partner.id) {
      case 'nike':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M21 7.6a33.5 33.5 0 0 0-11.4 3.7c-3.1 1.6-4.6 3.6-5 5-.3 1-.1 1.7.5 2 1 .5 2.5.1 4.5-1.5a43.5 43.5 0 0 0 11.4-9.2Z" />
          </svg>
        );
      case 'spotify':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.3-2.8-1.7-6.2-2.1-10.3-1.2-.5.1-.9-.2-1-.6-.1-.5.2-.9.6-1 4.5-1 8.3-.6 11.4 1.3.4.2.6.8.4 1.2zm1.5-3.3c-.3.4-.8.6-1.2.3-3.2-2-8-2.5-11.7-1.4-.5.2-1-.2-1.1-.7-.2-.5.2-1 .7-1.1 4.2-1.3 9.5-.7 13.2 1.6.4.3.5.8.3 1.3zm.1-3.4c-3.8-2.3-10.2-2.5-13.9-1.4-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.3-1.3 11.3-1.1 15.7 1.5.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4v.2z" />
          </svg>
        );
      case 'airbnb':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M23.1 18.3c-.2-.6-.5-1.2-.8-1.8a24.1 24.1 0 0 0-3.1-4.7c-1-1.2-2-2.2-3.2-3.1a15 15 0 0 0-3-1.8 4 4 0 0 0-1-.3h-.1a3.8 3.8 0 0 0-1 .3 15 15 0 0 0-3 1.8c-1.1.9-2.2 1.9-3.2 3a24.1 24.1 0 0 0-3.1 4.8c-.3.6-.6 1.2-.8 1.8a4.8 4.8 0 0 0 0 3c.3 1 1 2 1.8 2.5a5.5 5.5 0 0 0 3 .9c1.4 0 2.8-.5 3.9-1.5a10 10 0 0 0 2.5-4.1l.1-.3.1.3a10 10 0 0 0 2.5 4.1 5.5 5.5 0 0 0 3.9 1.5c1.1 0 2.2-.3 3.1-.9a4.4 4.4 0 0 0 1.8-2.5 4.8 4.8 0 0 0 0-3zm-11.1 2.3a7.3 7.3 0 0 1-1.7-2.8c-.4-1-.6-2-.6-3.2 0-.4.3-.8.7-.8s.8.3.8.7c0 1 .2 1.9.5 2.8a5.7 5.7 0 0 0 1.3 2.1c.3.3.3.8 0 1.1a.8.8 0 0 1-.5.3.8.8 0 0 1-.5-.2z" />
          </svg>
        );
      case 'stripe':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M13.4 8.7c0-.8-.7-1.1-1.8-1.1-1.8 0-3.6.8-3.6.8l-.6-2.5s2-.9 4.6-.9c3 0 5 1.5 5 4.1 0 4.1-5.6 4.7-5.6 6.7 0 .9.7 1.2 2 1.2 2 0 3.9-.9 3.9-.9l.7 2.6s-2 1.1-4.9 1.1c-3.4 0-5.4-1.6-5.4-4.2.1-4 5.7-4.7 5.7-6.9z" />
          </svg>
        );
      case 'apple':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M17.1 11c0-2.3 1.9-3.4 2-3.5-1.1-1.5-2.7-1.7-3.3-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.6 0-3 .9-3.8 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 2.9 2.4s1.6-.7 3-.7c1.3 0 1.8.7 3.1.7s2.1-1.2 2.9-2.3c.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.5h.5zM15.4 3.7c.6-.7 1.1-1.8 1-2.8-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1.1 2.8 1.1.1 2.2-.7 2.9-1.5z" />
          </svg>
        );
       case 'tesla':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M21.5 5.5s-2.5.5-4 .5c0 0-1.5-2.5-3-4.5 0 0-1.5 2.5-3 4.5 0 0-1.5-.5-4-.5L12 18l9.5-12.5z" />
          </svg>
        );
      default:
        return <div className="font-bold text-xs uppercase tracking-widest">{partner.name}</div>;
    }
  };

  return (
    <motion.div
      className={`w-full h-full flex items-center justify-center p-6 transition-colors duration-500 ${
        isActive || isHovered ? '' : 'text-neutral-400'
      }`}
      style={{
        color: (isActive || isHovered) ? partner.color : undefined
      }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
        {getLogo()}
      </div>
    </motion.div>
  );
};
