import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

function Counter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const timelineMilestones = [
    {
      year: '2021',
      title: 'The Inception',
      desc: 'VOIID was founded with a mission to bridge the gap between creative design and advanced software engineering.',
    },
    {
      year: '2023',
      title: 'Full Stack & Mobile Growth',
      desc: 'Expanded core expertise into cross-platform Flutter app development, Node.js, and serverless backend architecture.',
    },
    {
      year: '2025',
      title: 'Next-Gen Performance & AI',
      desc: 'Integrated AI capabilities, next-generation frameworks (Next.js), and premium conversion strategies.',
    },
    {
      year: '2026',
      title: 'The Future Corporate Scale',
      desc: 'Leading the digital front as an elite agency producing high-performance platforms globally.',
    },
  ];

  return (
    <section id="about" ref={ref} style={{ overflow: 'hidden' }}>
      {/* Decorative Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'rgba(36, 123, 27, 0.05)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />



      <div className="section-header">
        <span className="section-tag">About VOIID</span>
        <h2 className="section-title">A New Standard of Digital Execution</h2>
        <p className="section-subtitle">
          We combine cutting-edge technology stacks with breathtaking aesthetics to construct platforms that scale.
        </p>
      </div>

      {/* Split layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '100px',
        }}
      >
        {/* Left Side: Agency Pitch */}
        <div style={{ textAlign: 'left' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 500,
              marginBottom: '20px',
            }}
          >
            Engineering{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>
              Immersive High-Speed
            </span>{' '}
            Solutions.
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              fontSize: '1.05rem',
            }}
          >
            At VOIID, we don't build template websites. We craft custom-engineered digital pipelines. By blending design expertise with high-frequency SEO optimizations and modular software design, we provide products that look beautiful and perform perfectly.
          </p>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
            }}
          >
            Whether it is an enterprise ERP portal, a mobile booking suite, or an interactive web app, our deployment workflow ensures complete security, responsive layout compliance, and pixel-perfect rendering.
          </p>
        </div>

        {/* Right Side: Grid of Statistics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="glass-panel"
            style={{
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <Award size={28} color="var(--primary)" />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              <Counter value="100" suffix="+" />
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Projects Completed
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="glass-panel"
            style={{
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <Users size={28} color="var(--primary)" />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              <Counter value="95" suffix="%" />
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Client Satisfaction
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="glass-panel"
            style={{
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <Calendar size={28} color="var(--primary)" />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              <Counter value="5" suffix="+" />
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Years Experience
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="glass-panel"
            style={{
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <TrendingUp size={28} color="var(--primary)" />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#fff',
              }}
            >
              <Counter value="1.2" suffix="M+" />
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Leads Generated
            </div>
          </motion.div>
        </div>
      </div>

      {/* Growth Timeline */}
      <div style={{ marginTop: '60px', position: 'relative' }}>
        <h4
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.8rem',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: 500,
          }}
        >
          Company Roadmap
        </h4>

        {/* Timeline Path Line */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(100% - 100px)',
            background: 'linear-gradient(to bottom, var(--primary) 0%, rgba(255, 255, 255, 0.05) 100%)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {timelineMilestones.map((m, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={m.year}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#050505',
                    border: '3px solid var(--primary)',
                    boxShadow: '0 0 10px var(--primary)',
                    zIndex: 5,
                  }}
                />

                {/* Left/Right Card layout depending on index */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: isEven ? 'flex-end' : 'flex-start',
                    width: '100%',
                    paddingRight: isEven ? 'calc(50% + 30px)' : '0',
                    paddingLeft: isEven ? '0' : 'calc(50% + 30px)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="glass-panel"
                    style={{
                      padding: '24px',
                      borderRadius: '16px',
                      maxWidth: '400px',
                      textAlign: 'left',
                      background: 'rgba(10, 10, 10, 0.7)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        marginBottom: '6px',
                      }}
                    >
                      {m.year}
                    </div>
                    <h5
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 500,
                        color: '#fff',
                        marginBottom: '8px',
                      }}
                    >
                      {m.title}
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {m.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
