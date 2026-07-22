import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Database,
  Terminal,
  ArrowUpRight,
  X,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

function ServiceCard({ title, icon: Icon, items, onClick }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="glass-panel"
      style={{
        position: 'relative',
        borderRadius: '24px',
        padding: '36px',
        textAlign: 'left',
        background: 'rgba(12, 12, 12, 0.5)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '380px',
        transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s ease',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
        cursor: 'none', // Preserves custom premium mouse
      }}
    >
      {/* Premium Spotlight Mouse border glow */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            padding: '1px',
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 255, 102, 0.3), transparent 60%)`,
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      )}

      {/* Spotlight Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          background: isHovered
            ? `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(0, 255, 102, 0.05), transparent 80%)`
            : 'none',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated icon container */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(0, 255, 102, 0.06)',
            border: '1px solid rgba(0, 255, 102, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
            boxShadow: isHovered ? '0 0 20px rgba(0, 255, 102, 0.2)' : 'none',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'none',
          }}
        >
          <Icon size={28} color="var(--primary)" />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.6rem',
            fontWeight: 500,
            marginBottom: '18px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {title}
        </h3>

        {/* Sub-elements list */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {items.slice(0, 5).map((item, idx) => (
            <li
              key={idx}
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: isHovered ? 'var(--primary)' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'background 0.3s ease',
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link in card */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '30px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: isHovered ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease, transform 0.3s ease',
            transform: isHovered ? 'rotate(45deg)' : 'none',
          }}
        >
          <ArrowUpRight size={16} color={isHovered ? '#050505' : '#fff'} />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    };
  }, [activeService]);

  const servicesList = [
    {
      title: 'Website Development',
      icon: Globe,
      items: [
        'Custom Web Development',
        'Ecommerce Systems',
        'Landing Pages',
        'Headless CMS Integrations',
        'Corporate Websites',
        'Portfolio Portals',
      ],
      overview: 'High-performance website engineering designed to load in sub-second times, maximize search crawler indexing, and convert visitors into active customers.',
      capabilities: [
        'Custom interactive interfaces styled in high-fidelity React frameworks.',
        'Seamless integration with payment channels like Webizaar and Razorpay.',
        'High speed optimization mapping sub-second first contentful paint values.',
        'Fully fluid grid scales responsive across mobile Safari and desktop displays.',
        'Tailored database synchronization paths using lightweight GraphQL nodes.'
      ],
      impact: {
        metric: '95%',
        label: 'Speed Score Benchmark',
        desc: 'Sub-second speeds reduce client dropouts by up to 45% and drive form submissions by +80%.'
      }
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      items: [
        'Flutter Applications',
        'iOS & Android native specs',
        'Cross-Platform integrations',
        'Firebase / Supabase integrations',
        'REST APIs & Backend sync',
      ],
      overview: 'Cross-platform mobile applications constructed using Flutter and native engines, backed by serverless cloud real-time datastores.',
      capabilities: [
        'Unified cross-device codebase architectures running smoothly on iOS and Android.',
        'Real-time cloud database structures powered by Firebase and Supabase.',
        'Biometric secure user verification (FaceID/TouchID) integrations.',
        'Automated app store compilation and deployment pipelines.',
        'Offline caching and locally stored data synchronization triggers.'
      ],
      impact: {
        metric: '250%',
        label: 'Client Retain Growth',
        desc: 'Direct device push notifications and offline storage support increase customer loyalty.'
      }
    },
    {
      title: 'SEO Optimization',
      icon: Search,
      items: [
        'Technical SEO Audits',
        'Local SEO configuration',
        'Keyword Research',
        'Data Analytics dashboards',
        'Performance optimization',
      ],
      overview: 'Strategic search engine positioning targeting high-intent organic keywords, resolving index crawl barriers, and boosting local pack rankings.',
      capabilities: [
        'Google Business Profile localization mappings for neighborhood search pack.',
        'Dynamic structured schemas and XML index crawl configurations.',
        'Deep competitive keyword search volume mapping to capture transaction intents.',
        'High-authority regional link acquisition and citation networks building.',
        'Custom Rankmath/Semrush monitoring nodes linked to Google Search Console.'
      ],
      impact: {
        metric: '300%',
        label: 'Organic Traffic Boost',
        desc: 'Local map pack presence expands business leads by 120% and drives visitor streams.'
      }
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      items: [
        'Meta Ads (Facebook & Insta)',
        'Google PPC Ads campaign',
        'Instagram growth strategies',
        'Content Marketing pipeline',
        'Email list campaigns',
      ],
      overview: 'Multi-channel advertising campaigns across Google Ads, Instagram, and Facebook built on conversion-rate optimization (CRO) principles.',
      capabilities: [
        'Audience demography breakdowns and target interest segment mapping.',
        'Google PPC search negative keywords filter structures for tight bidding budget protection.',
        'Product dynamic remarketing grids configured to recover checkout dropouts.',
        'Engagement calendar schedules and Reels visual hook briefing pipelines.',
        'A/B split testing metrics for visual assets and conversion landing page content.'
      ],
      impact: {
        metric: '4x',
        label: 'Ad Spend ROAS Yield',
        desc: 'Scales sales return ratios while dropping customer acquisition budgets by up to 40%.'
      }
    },
    {
      title: 'Backend Development',
      icon: Database,
      items: [
        'FastAPI & Node.js scripts',
        'Express framework',
        'MongoDB / PostgreSQL design',
        'Custom admin dashboards',
        'Secure API authentication',
      ],
      overview: 'Robust backend system design running on Node.js/FastAPI, utilizing memory-cache architectures and secure relational databases.',
      capabilities: [
        'RESTful / GraphQL API routes powered by Node.js, Express, and FastAPI.',
        'Normalized relational schema designs utilizing PostgreSQL and MongoDB.',
        'Secure JWT user token generation and server-side route guards.',
        'Redis database caching networks for immediate content deliveries.',
        'Third-party cloud media hosting pipelines and automated backups.'
      ],
      impact: {
        metric: ' 50%',
        label: 'API Response Latency',
        desc: 'Ultra-low delays scale platform throughput to handle over 10,000 parallel user actions.'
      }
    },

    {
      title: 'Software Development',
      icon: Terminal,
      items: [
        'Custom CRM & ERP software',
        'Inventory tracking systems',
        'Analytics Dashboards',
        'Cloud storage integrations',
        'Automated workflows',
      ],
      overview: 'Tailored enterprise solutions built to automate internal manual workflows, optimize warehouse logistics, and coordinate resources.',
      capabilities: [
        'Custom administrative client grids matching specific organizational flows.',
        'Live stock inventory monitoring layouts linked to database collections.',
        'Automated email/SMS notification loops reporting milestones.',
        'Enterprise analytics tracking grids displaying department stats.',
        'Encrypted database migrations securing corporate files and transaction histories.'
      ],
      impact: {
        metric: '60%',
        label: 'Overhead Reductions',
        desc: 'Workflow automations replace manual operations, eliminating coordination bottlenecks.'
      }
    },
  ];

  const handleCTA = () => {
    setActiveService(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(0, 255, 102, 0.04)',
          filter: 'blur(130px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">Futuristic Web & App Ecosystems</h2>
        <p className="section-subtitle">
          Our specialized divisions deliver standard-setting digital solutions to expand your business metrics.
        </p>
      </div>

      {/* Grid container */}
      <div className="services-grid">
        {servicesList.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
          >
            <ServiceCard
              title={srv.title}
              icon={srv.icon}
              items={srv.items}
              onClick={() => setActiveService(srv)}
            />
          </motion.div>
        ))}
      </div>

      {/* Premium Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(5, 5, 5, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '750px',
                maxHeight: '82vh',
                borderRadius: '30px',
                background: 'rgba(10, 10, 10, 0.95)',
                position: 'relative',
                boxShadow: '0 30px 90px rgba(0, 255, 102, 0.08)',
                border: '1px solid rgba(0, 255, 102, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'none',
                  zIndex: 10,
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0, 255, 102, 0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              >
                <X size={20} />
              </button>

              {/* Scrollable Content Container */}
              <div
                data-lenis-prevent
                style={{
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  padding: '40px',
                }}
              >

              {/* Service Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', textAlign: 'left' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    background: 'rgba(0, 255, 102, 0.08)',
                    border: '1px solid rgba(0, 255, 102, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(0, 255, 102, 0.1)',
                  }}
                >
                  {(() => {
                    const Icon = activeService.icon;
                    return <Icon size={30} color="var(--primary)" />;
                  })()}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--primary)',
                      fontSize: '0.8rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Division Expertise
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.1rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginTop: '4px',
                    }}
                  >
                    {activeService.title}
                  </h2>
                </div>
              </div>

              {/* Service Modal Content Grid */}
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {/* Overview Paragraph */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '10px', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                    Overview
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {activeService.overview}
                  </p>
                </div>

                {/* Core Capabilities with check icons */}
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '14px', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                    Capabilities & Deliverables
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
                    {activeService.capabilities.map((cap, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'start', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Performance Impact glowing panel */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    borderRadius: '20px',
                    background: 'rgba(0, 255, 102, 0.02)',
                    border: '1px solid rgba(0, 255, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  <div style={{ textAlign: 'center', minWidth: '100px' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                      {activeService.impact.metric}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px' }}>
                      {activeService.impact.label}
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '24px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: '#fff', fontSize: '0.9rem', marginBottom: '4px', fontWeight: 500 }}>
                      <TrendingUp size={14} color="var(--primary)" />
                      <span>Business Performance Impact</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                      {activeService.impact.desc}
                    </p>
                  </div>
                </div>

                {/* Modal CTA Action Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button
                    onClick={handleCTA}
                    style={{
                      padding: '12px 28px',
                      background: 'var(--primary)',
                      border: 'none',
                      borderRadius: '30px',
                      color: '#050505',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'none',
                      boxShadow: '0 0 20px rgba(0,255,102,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 0 30px rgba(0,255,102,0.4)';
                      e.target.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 0 20px rgba(0,255,102,0.2)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Inquire About This Service
                  </button>
                </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
