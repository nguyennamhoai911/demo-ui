import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Partner {
  id: string;
  name: string;
  period: string;
  type: string;
  description: string;
  industry: string;
  status: string;
  monoLogo: string;
  colorLogo: string;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'EV Mobility',
    period: 'Hợp tác từ 2021',
    type: 'Cung cấp pin lithium LFP / NMC cho xe điện 3–4 bánh',
    description: 'PKG Battery cung cấp hệ thống pin tùy chỉnh cho các nhà sản xuất xe điện nội địa, đạt chuẩn IP67 và chu kỳ sạc trên 2.000 lần.',
    industry: 'Xe điện & Mobility',
    status: 'Đối tác chiến lược',
    monoLogo: '⚡',
    colorLogo: '⚡'
  },
  {
    id: '2',
    name: 'Logistics & Kho',
    period: 'Hợp tác từ 2020',
    type: 'Pin forklift & xe nâng điện — thay thế acid–chì',
    description: 'Giải pháp pin LFP 24V–80V cho toàn bộ hệ thống xe nâng và AGV trong nhà máy, kho vận — tuổi thọ gấp 3 lần ắc quy chì truyền thống.',
    industry: 'Logistics & Kho vận',
    status: 'Đối tác lâu dài',
    monoLogo: '🏭',
    colorLogo: '🏭'
  },
  {
    id: '3',
    name: 'Năng lượng tái tạo',
    period: 'Hợp tác từ 2022',
    type: 'Hệ thống lưu trữ năng lượng BESS — điện mặt trời & gió',
    description: 'PKG cung cấp module pin LFP dung lượng lớn (50–500 kWh) cho các dự án điện mặt trời áp mái và trang trại gió tại miền Trung – Tây Nguyên.',
    industry: 'Năng lượng tái tạo',
    status: 'Đối tác chiến lược',
    monoLogo: '☀️',
    colorLogo: '☀️'
  },
  {
    id: '4',
    name: 'Khai khoáng & Công nghiệp nặng',
    period: 'Hợp tác từ 2021',
    type: 'Pin cho xe tải mỏ điện & máy khoan công nghiệp',
    description: 'Hệ thống pin 48V–96V chịu rung sốc, chống bụi IP54, phục vụ các phương tiện vận tải nội mỏ và máy móc công nghiệp nặng.',
    industry: 'Khai khoáng & Công nghiệp',
    status: 'Đối tác tiêu chuẩn',
    monoLogo: '⛏️',
    colorLogo: '⛏️'
  },
  {
    id: '5',
    name: 'Du lịch & Sightseeing',
    period: 'Hợp tác từ 2019',
    type: 'Pin cho xe điện du lịch, xe golf & shuttle bus',
    description: 'Pin lithium 48V/100Ah tích hợp BMS thông minh, cung cấp cho hàng trăm xe điện du lịch tại các khu resort, sân golf và khu công nghiệp.',
    industry: 'Du lịch & Sightseeing',
    status: 'Đối tác lâu dài',
    monoLogo: '🌿',
    colorLogo: '🌿'
  },
  {
    id: '6',
    name: 'Hàng hải & Đường thủy',
    period: 'Hợp tác từ 2023',
    type: 'Pin cho tàu điện, ca nô & phà nội địa',
    description: 'Hệ thống pin chống ẩm muối biển tiêu chuẩn IEC, dùng cho tàu khách điện nội địa, ca nô tuần tra và phương tiện thủy công nghiệp.',
    industry: 'Hàng hải & Đường thủy',
    status: 'Đang triển khai',
    monoLogo: '⚓',
    colorLogo: '⚓'
  }
];

export default function PartnerTrustSection() {
  const [activePartner, setActivePartner] = useState<Partner>(partners[0]);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '800px',
          height: '800px',
          opacity: 0.08,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            filter: 'blur(80px)',
            background: 'radial-gradient(circle, rgb(209, 213, 219) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Animated Background Lines */}
      <motion.div
        style={{
          position: 'absolute',
          top: '25%',
          right: 0,
          width: '1px',
          height: '256px',
          background: 'linear-gradient(to bottom, transparent, #e5e7eb, transparent)',
        }}
        animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '33%',
          left: '25%',
          width: '256px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)',
        }}
        animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 128px) clamp(24px, 4vw, 64px)',
        }}
      >
        {/* Two-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'start',
          }}
        >

          {/* LEFT SIDE - Detail Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

            {/* Headline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    color: '#000000',
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  Pin lithium cho<br />
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    mọi ngành công nghiệp
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: 0,
                        height: '1px',
                        backgroundColor: '#dc2626',
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </h2>
              </motion.div>

              <motion.p
                style={{
                  fontSize: '18px',
                  color: '#4b5563',
                  maxWidth: '400px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  margin: 0,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                PKG Battery đồng hành cùng các đối tác trong nhiều ngành — từ xe điện, kho vận đến năng lượng tái tạo và hàng hải.
              </motion.p>
            </div>

            {/* Active Partner Detail */}
            <div style={{ position: 'relative' }}>
              {/* Left border accent */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: 0,
                  width: '2px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #dc2626, rgba(220,38,38,0.4), transparent)',
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePartner.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  {/* Partner Name & Period */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(24px, 3vw, 40px)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        color: '#000000',
                        margin: 0,
                      }}
                    >
                      {activePartner.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#9ca3af',
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      {activePartner.period}
                    </p>
                  </div>

                  {/* Type of Work */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#374151',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {activePartner.type}
                    </p>
                    <div
                      style={{
                        height: '1px',
                        width: '64px',
                        backgroundColor: 'rgba(220,38,38,0.3)',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '18px',
                      color: '#4b5563',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      maxWidth: '420px',
                      margin: 0,
                    }}
                  >
                    {activePartner.description}
                  </p>

                  {/* Industry & Status Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '16px' }}>
                    <span
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#f9fafb',
                        color: '#374151',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid rgba(229,231,235,0.5)',
                      }}
                    >
                      {activePartner.industry}
                    </span>
                    <span
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#fef2f2',
                        color: '#b91c1c',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid rgba(254,202,202,0.5)',
                      }}
                    >
                      {activePartner.status}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE - Partner Logos Grid */}
          <div style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(16px, 2.5vw, 40px)',
              }}
            >
              {partners.map((partner, index) => (
                <motion.button
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActivePartner(partner)}
                  onClick={() => setActivePartner(partner)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    border: activePartner.id === partner.id
                      ? '1px solid rgba(209,213,219,0.8)'
                      : '1px solid rgba(229,231,235,0.5)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'border-color 500ms',
                    padding: 0,
                    outline: 'none',
                  }}
                >
                  {/* Hover Background */}
                  <div
                    className="hover-bg"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, #f9fafb, #ffffff)',
                      opacity: 0,
                      transition: 'opacity 400ms',
                    }}
                  />

                  {/* Logo Container */}
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div
                      style={{
                        fontSize: 'clamp(40px, 4vw, 64px)',
                        fontWeight: 300,
                        color: activePartner.id === partner.id ? '#111827' : '#6b7280',
                        lineHeight: 1,
                        transition: 'color 400ms',
                        userSelect: 'none',
                      }}
                    >
                      {partner.monoLogo || partner.name.charAt(0)}
                    </div>
                    <div
                      style={{
                        marginTop: '8px',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: activePartner.id === partner.id ? '#dc2626' : '#9ca3af',
                        fontWeight: 300,
                        transition: 'color 400ms',
                      }}
                    >
                      {partner.name}
                    </div>
                  </div>

                  {/* Active Indicator Bottom Bar */}
                  {activePartner.id === partner.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#dc2626',
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  {/* Subtle Corner Accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '32px',
                      height: '32px',
                      opacity: 0,
                      transition: 'opacity 500ms',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '1px',
                        background: 'linear-gradient(to left, rgba(220,38,38,0.5), transparent)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '1px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(220,38,38,0.5), transparent)',
                      }}
                    />
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Floating Accent Ring */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-48px',
                right: '-48px',
                width: '256px',
                height: '256px',
                border: '1px solid rgba(229,231,235,0.3)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>

        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #d1d5db, transparent)',
        }}
      />
    </section>
  );
}
