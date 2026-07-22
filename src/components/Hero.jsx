import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Server, Layers, Cpu } from 'lucide-react';

export default function Hero({ onStartProject, onViewPortfolio }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ x: x * 20, y: -y * 20 }); // Limit rotation angles
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10,
        gap: '40px',
        paddingTop: '160px',
        paddingBottom: '100px',
      }}
    >
      {/* Decorative Glow Elements */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          width: '350px',
          height: '350px',
          background: 'rgba(0, 255, 102, 0.08)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Left side text column */}
      <div
        className="hero-content"
        style={{
          flex: '1',
          maxWidth: '650px',
          textAlign: 'left',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-tag"
          style={{ marginBottom: '24px' }}
        >
          Digital Experience Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-2px',
          }}
        >
          Building{' '}
          <span className="text-gradient" style={{ fontWeight: 600 }}>
            Digital Experiences
          </span>{' '}
          That Grow Businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}
        >
          We create high-performance Websites, Mobile Apps, SEO Strategies and
          Digital Marketing campaigns that transform businesses into industry
          leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={onStartProject}
            className="magnetic-btn magnetic-btn-primary"
            style={{ border: 'none', cursor: 'none' }}
          >
            Start Project <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
          <button
            onClick={onViewPortfolio}
            className="magnetic-btn magnetic-btn-secondary"
            style={{ cursor: 'none' }}
          >
            View Portfolio <Play size={16} style={{ marginLeft: '8px' }} />
          </button>
        </motion.div>
      </div>

      {/* Right side interactive 3D scene */}
      <div
        className="hero-graphics"
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '500px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="hero-graphics-wrapper">
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          {/* Laptop 3D mock */}
          <div
            className="glass-panel"
            style={{
              position: 'absolute',
              width: '420px',
              height: '260px',
              borderRadius: '16px',
              transform: 'translateZ(-40px) rotateX(10deg)',
              background: 'rgba(10, 10, 10, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            {/* Screen Content */}
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#FF5F56',
                    }}
                  />
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#FFBD2E',
                    }}
                  />
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#27C93F',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: 'monospace',
                  }}
                >
                  /VOIID_dashboard.js
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    height: '2px',
                    width: '45%',
                    background: 'var(--primary)',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    height: '2px',
                    width: '80%',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    height: '2px',
                    width: '60%',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    height: '2px',
                    width: '75%',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <Server size={24} color="#00FF66" style={{ opacity: 0.6 }} />
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    System Status
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--primary)',
                      fontFamily: 'monospace',
                    }}
                  >
                    OPTIMIZED // 99.8%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop keyboard/base shadow */}
          <div
            style={{
              position: 'absolute',
              width: '440px',
              height: '12px',
              background: 'rgba(0, 255, 102, 0.2)',
              bottom: '90px',
              borderRadius: '50%',
              filter: 'blur(10px)',
              transform: 'translateZ(-50px) rotateX(85deg)',
              pointerEvents: 'none',
            }}
          />

          {/* Mobile phone mock floating in front */}
          <div
            className="glass-panel"
            style={{
              position: 'absolute',
              width: '140px',
              height: '260px',
              borderRadius: '28px',
              background: 'rgba(20, 20, 20, 0.85)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              transform: 'translateX(140px) translateY(50px) translateZ(60px) rotateY(-15deg)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Notch */}
            <div
              style={{
                width: '60px',
                height: '14px',
                background: '#000',
                borderRadius: '0 0 10px 10px',
                margin: '-12px auto 0',
              }}
            />
            {/* Phone content UI */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '15px',
              }}
            >
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: '0 0 12px rgba(0, 255, 102, 0.2)',
                }}
              >
                <Cpu size={20} color="var(--primary)" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  VOIID
                </span>
                <p
                  style={{
                    fontSize: '0.6rem',
                    color: 'var(--text-secondary)',
                    marginTop: '2px',
                  }}
                >
                  Active Cloud Server
                </p>
              </div>
              <div style={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
                <div
                  style={{
                    height: '4px',
                    width: '100%',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '78%',
                      background: 'var(--primary)',
                      borderRadius: '2px',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.55rem',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  <span>Syncing...</span>
                  <span>78%</span>
                </div>
              </div>
            </div>
            {/* Home bar indicator */}
            <div
              style={{
                width: '45px',
                height: '3px',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '2px',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Floating UI Card 1 (Analytics) */}
          <div
            className="glass-panel"
            style={{
              position: 'absolute',
              width: '180px',
              height: '90px',
              borderRadius: '12px',
              padding: '12px',
              transform: 'translateX(-150px) translateY(-80px) translateZ(80px) rotateY(15deg)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
              background: 'rgba(15, 15, 15, 0.75)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '6px',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  background: 'rgba(0, 255, 102, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Layers size={10} color="var(--primary)" />
              </div>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                }}
              >
                CONVERSION RATE
              </span>
            </div>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
              }}
            >
              100%
            </div>
            <div
              style={{
                height: '16px',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '3px',
              }}
            >
              <div
                style={{
                  height: '30%',
                  width: '100%',
                  background: 'rgba(0,255,102,0.2)',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  height: '45%',
                  width: '100%',
                  background: 'rgba(0,255,102,0.2)',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  height: '60%',
                  width: '100%',
                  background: 'rgba(0,255,102,0.2)',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  height: '75%',
                  width: '100%',
                  background: 'var(--primary)',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  background: 'var(--primary)',
                  borderRadius: '1px',
                  boxShadow: '0 0 8px var(--primary)',
                }}
              />
            </div>
          </div>

          {/* Floating UI Card 2 (Projects status) */}
          <div
            className="glass-panel"
            style={{
              position: 'absolute',
              width: '150px',
              height: '80px',
              borderRadius: '12px',
              padding: '12px',
              transform: 'translateX(-160px) translateY(80px) translateZ(40px) rotateY(10deg)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
              background: 'rgba(15, 15, 15, 0.75)',
            }}
          >
            <span
              style={{
                fontSize: '0.55rem',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
              }}
            >
              PROJECT DELIVERIES
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
                marginTop: '4px',
              }}
            >
              <span
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                100%
              </span>
              <span style={{ fontSize: '0.65rem', color: 'var(--primary)' }}>
                ON TIME
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '2px',
                marginTop: '8px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--primary)',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px var(--primary)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
}
