import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Palette,
  Eye,
  Layers,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Sprint workflows allow us to launch highly refined MVP cycles and production-ready sites quickly without compromising on core code assets.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Every system is built on modular microservices, severless endpoints, and structured database models designed for future scale.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    desc: 'We construct premium interfaces utilizing custom canvas renders, luxury typography hierarchies, and tactile interactions.',
  },
  {
    icon: Eye,
    title: 'SEO Friendly',
    desc: 'Structured metadata schematics, optimized core web vitals, and index-ready layouts ensure high Google rank positions.',
  },
  {
    icon: TrendingUp,
    title: 'Cross Platform Sync',
    desc: 'Connect database assets across web dashboards, custom client portals, and iOS/Android devices seamlessly.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Development',
    desc: 'We configure strict CORS policies, token encryption keys, secure API headers, and Supabase/Firebase backend rules.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    desc: 'Our post-launch SLA systems guarantee responsive website upgrades, technical updates, and server monitoring.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" style={{ position: 'relative' }}>
      {/* Glow asset */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'rgba(0, 255, 102, 0.03)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="why-choose-us-grid">
        {/* Left Side: Sticky Visual Container */}
        <div className="why-choose-us-left">
          <span className="section-tag">VOIID Standards</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 500,
              lineHeight: 1.1,
              marginTop: '12px',
              marginBottom: '24px',
              letterSpacing: '-1px',
            }}
          >
            Why Enterprises{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>
              Partner With Us
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '40px' }}>
            We do not just construct code assets; we consult, model, and deploy complete growth mechanisms for businesses looking to lead their industries.
          </p>

          {/* Decorative Orbital System */}
          <div
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              border: '1px dashed rgba(0, 255, 102, 0.25)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            {/* Center Core */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 30px var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#050505',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
              }}
            >
              VOIID
            </div>

            {/* Orbiting dot 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 0 10px #fff',
                }}
              />
            </motion.div>

            {/* Orbiting dot 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '70%',
                height: '70%',
                borderRadius: '50%',
                border: '1px dashed rgba(0, 255, 102, 0.12)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  boxShadow: '0 0 8px var(--primary)',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Advantage Cards list */}
        <div className="why-choose-us-right">
          {advantages.map((adv, idx) => {
            const AdvIcon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel"
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  textAlign: 'left',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'start',
                  background: 'rgba(12, 12, 12, 0.45)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 255, 102, 0.06)',
                    border: '1px solid rgba(0, 255, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <AdvIcon size={22} color="var(--primary)" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: '#fff',
                      marginBottom: '8px',
                    }}
                  >
                    {adv.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
