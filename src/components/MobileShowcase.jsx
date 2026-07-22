import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Shield, Zap, Sparkles, Database } from 'lucide-react';

const appCategories = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'PulseCare Pro',
    description: 'EHR records integration, real-time vital tracking, and secure doctor consulting tele-portal.',
    tech: 'Flutter + Firebase',
    stat: '98% Patient Active Time',
    mockBg: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: '#00D2FF',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    title: 'ShopSphere B2B',
    description: 'AR product catalog mapping, one-click global payment processing, and inventory sync.',
    tech: 'Flutter + Supabase',
    stat: '220ms Checkout Speed',
    mockBg: 'linear-gradient(135deg, #1d976c, #93f9b9)',
    color: '#38ef7d',
  },
  {
    id: 'delivery',
    name: 'Delivery',
    title: 'FleetFast Live',
    description: 'WebSocket driver live map tracking, route geometry optimization, and customer billing feeds.',
    tech: 'React Native + Node.js',
    stat: '99.9% Geolocation Sync',
    mockBg: 'linear-gradient(135deg, #f05252, #f59e0b)',
    color: '#f59e0b',
  },
  {
    id: 'ai-apps',
    name: 'AI Applications',
    title: 'NeuralMind Assist',
    description: 'Localized Llama model processing, voice conversion transcripts, and vector memory retrieval.',
    tech: 'Flutter + Python FastAPI',
    stat: '150ms Response Latency',
    mockBg: 'linear-gradient(135deg, #aa3bff, #00FF66)',
    color: 'var(--primary)',
  },
  {
    id: 'finance',
    name: 'Finance',
    title: 'Vortex Ledger',
    description: 'Cryptographic transactions, instant ledger reconciliations, and custom budget triggers.',
    tech: 'iOS Swift + Node.js',
    stat: 'Zero Security Incidents',
    mockBg: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: '#818cf8',
  },
  {
    id: 'booking',
    name: 'Booking',
    title: 'ZenReserve Rooms',
    description: 'Dynamic hotel booking grid, calendar scheduling algorithms, and payment deposit relays.',
    tech: 'Flutter + Firebase',
    stat: '1.8M Check-ins Processed',
    mockBg: 'linear-gradient(135deg, #ff0844, #ffb199)',
    color: '#ff0844',
  },
];

export default function MobileShowcase() {
  const [activeCat, setActiveCat] = useState(appCategories[0]);
  const [rotation, setRotation] = useState({ x: 14, y: 0 });

  // Smooth 3D oscillating roll effect (swings front & back -22deg to +22deg)
  useEffect(() => {
    let animationFrameId;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      // Smooth sine wave oscillation keeping screen text always facing front
      const yRot = Math.sin(elapsed * 1.1) * 22;
      const xRot = 14 + Math.cos(elapsed * 1.1) * 4;
      setRotation({ x: xRot, y: yRot });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="mobile-showcase" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'rgba(0, 255, 102, 0.03)',
          filter: 'blur(160px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Device Engineering</span>
        <h2 className="section-title">Mobile Architectures</h2>
        <p className="section-subtitle">
          We construct high-frequency iOS and Android mobile solutions utilizing cross-platform sync pipelines.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        {/* Left Side: Category picker and specs */}
        <div style={{ textAlign: 'left' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 500,
              marginBottom: '28px',
            }}
          >
            Multiplatform{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>
              Device Synchronization
            </span>
          </h3>

          {/* Categorized Lists Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            {appCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  textAlign: 'left',
                  background: activeCat.id === cat.id ? 'rgba(0, 255, 102, 0.06)' : 'rgba(255,255,255,0.01)',
                  color: activeCat.id === cat.id ? 'var(--primary)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: activeCat.id === cat.id ? 'rgba(0, 255, 102, 0.25)' : 'var(--glass-border)',
                  cursor: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>{cat.name}</span>
                {activeCat.id === cat.id && (
                  <Smartphone size={16} color="var(--primary)" />
                )}
              </button>
            ))}
          </div>

          {/* Core specs cards */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div
              className="glass-panel"
              style={{
                flex: 1,
                minWidth: '150px',
                padding: '20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Shield size={24} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>Android + iOS</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Native Compiles</div>
              </div>
            </div>
            <div
              className="glass-panel"
              style={{
                flex: 1,
                minWidth: '150px',
                padding: '20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Database size={24} color="var(--primary)" />
              <div>
                <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>Cloud Sync</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Firebase / Supabase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Rotating 3D device display */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px',
            height: '450px',
            position: 'relative',
          }}
        >
          {/* Custom floating components orbiting the phone */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="glass-panel"
            style={{
              position: 'absolute',
              top: '40px',
              left: '20px',
              padding: '12px 18px',
              borderRadius: '14px',
              zIndex: 5,
              background: 'rgba(15, 15, 15, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            }}
          >
            <Sparkles size={16} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.55rem', color: 'var(--text-secondary)' }}>CORE ENGINE</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>{activeCat.tech}</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="glass-panel"
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '20px',
              padding: '12px 18px',
              borderRadius: '14px',
              zIndex: 5,
              background: 'rgba(15, 15, 15, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            }}
          >
            <Zap size={16} color="var(--primary)" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.55rem', color: 'var(--text-secondary)' }}>BENCHMARK</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>{activeCat.stat}</div>
            </div>
          </motion.div>

          {/* 3D phone mockup mesh container */}
          <div
            style={{
              width: '240px',
              height: '460px',
              borderRadius: '40px',
              border: '6px solid rgba(255,255,255,0.12)',
              background: '#050505',
              transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s linear',
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px ${activeCat.color}1e`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Phone Notch */}
            <div
              style={{
                width: '100px',
                height: '24px',
                background: '#000',
                borderRadius: '0 0 16px 16px',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
              }}
            />

            {/* Dynamic Interactive Phone Screen Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%',
                  height: '100%',
                  background: activeCat.mockBg,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingTop: '40px',
                }}
              >
                {/* Mock Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#fff', opacity: 0.8 }}>VOIID_OS</span>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      boxShadow: '0 0 8px var(--primary)',
                    }}
                  />
                </div>

                {/* Mock Main Section */}
                <div style={{ textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Smartphone size={20} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{activeCat.title}</h4>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)', marginTop: '4px', lineHeight: 1.4 }}>
                      {activeCat.description}
                    </p>
                  </div>
                </div>

                {/* Mock Metrics visual panel inside phone */}
                <div
                  style={{
                    background: 'rgba(5, 5, 5, 0.4)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '16px',
                    padding: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>SYNC LATENCY</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '2px' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>10.2 ms</span>
                    <span style={{ fontSize: '0.55rem', color: '#00FF66' }}>STABLE</span>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', marginTop: '6px' }}>
                    <div style={{ flex: 1, height: '3px', background: 'var(--primary)' }} />
                    <div style={{ flex: 1, height: '3px', background: 'var(--primary)' }} />
                    <div style={{ flex: 1, height: '3px', background: 'var(--primary)' }} />
                    <div style={{ flex: 1, height: '3px', background: 'var(--primary)' }} />
                    <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
