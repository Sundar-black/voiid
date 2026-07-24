import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "We got our website done for Skrubline and the experience was great from start to finish. The site looks clean, loads fast, and really represents what our brand is about. Really happy with how it turned out, thank you!",
    name: "Skrubline",
    title: "Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    quote:
      "We asked for help with social media marketing for Foodies Land and honestly the results were great. Our page started getting way more engagement and people started noticing us online. Really happy with the work, thanks a lot!",
    name: "Ashik",
    title: "Founder, Foodies Land",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    quote:
      "Working with the developer on the Rays of Joy website was a fantastic experience. The final site perfectly captured our brand's playful, joyful spirit while staying easy to navigate for parents and kids alike. Professional, creative, and a pleasure to work with!",
    name: "Shruthika",
    title: "Founder, Rays of Joy",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'rgba(36, 123, 27, 0.02)',
          filter: 'blur(130px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Validation</span>
        <h2 className="section-title">Client Verifications</h2>
        <p className="section-subtitle">
          Read how our custom engineered digital platforms deliver performance metrics directly to corporate bottom lines.
        </p>
      </div>

      {/* 3D Stack Carousel Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          height: '380px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {testimonials.map((test, index) => {
          // Compute index offsets for 3D visual layering
          const offset = (index - activeIdx + testimonials.length) % testimonials.length;
          const isActive = offset === 0;
          const isNext = offset === 1;
          const isPrev = offset === testimonials.length - 1;

          // Hide cards that are out of immediate layer stack
          if (!isActive && !isNext && !isPrev) return null;

          // Compute style matrices
          let scale = 1;
          let opacity = 1;
          let zIndex = 1;
          let rotate = 0;
          let translateX = 0;

          if (isActive) {
            scale = 1;
            opacity = 1;
            zIndex = 10;
            rotate = 0;
            translateX = 0;
          } else if (isNext) {
            scale = 0.9;
            opacity = 0.4;
            zIndex = 5;
            rotate = 3;
            translateX = 120;
          } else if (isPrev) {
            scale = 0.9;
            opacity = 0.4;
            zIndex = 5;
            rotate = -3;
            translateX = -120;
          }

          return (
            <motion.div
              key={index}
              animate={{
                scale,
                opacity,
                zIndex,
                x: translateX,
                rotate,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel"
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '650px',
                padding: '40px',
                borderRadius: '24px',
                background: 'rgba(15, 15, 15, 0.75)',
                border: isActive ? '1px solid rgba(36, 123, 27, 0.25)' : '1px solid var(--glass-border)',
                boxShadow: isActive ? '0 20px 45px rgba(36, 123, 27, 0.04)' : '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                textAlign: 'left',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              {/* Quote icon & Star rating */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Quote size={32} color="var(--primary)" style={{ opacity: 0.3 }} />
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
                  lineHeight: 1.6,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  fontStyle: 'italic',
                }}
              >
                "{test.quote}"
              </p>

              {/* Client Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={test.avatar}
                  alt={test.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '1px solid var(--primary)',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{test.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{test.title}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Manual Navigation Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginTop: '40px',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'none',
            transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Carousel indicators */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              style={{
                width: activeIdx === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeIdx === idx ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'none',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'none',
            transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
