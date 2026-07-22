import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// Import Components
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import MobileShowcase from './components/MobileShowcase';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navCompact, setNavCompact] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Watch page scroll for navigation compression
    const handleScroll = () => {
      setNavCompact(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium Cursor Follower */}
      <CustomCursor />

      {/* Screen noise overlay */}
      <div className="noise-overlay" />

      {/* Ambient backgrounds */}
      <div className="aurora-bg">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>

      {/* Premium Floating Header Navigation */}
      <header
        className="glass-panel"
        style={{
          position: 'fixed',
          top: navCompact ? '15px' : '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1200px',
          height: navCompact ? '60px' : '74px',
          borderRadius: '50px',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 30px',
          background: 'rgba(10, 10, 10, 0.75)',
          transition: 'top 0.3s ease, height 0.3s ease, background-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection('root')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'none' }}
        >
          {/* Green Ring Logo SVG */}
          <svg width="24" height="24" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#4caf50"
              strokeWidth="15"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '1px',
            }}
          >
            VOIID
          </span>
        </div>

        {/* Menu Options */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}
          className="desktop-nav"
        >
          {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map((opt) => (
            <button
              key={opt}
              onClick={() => scrollToSection(opt.toLowerCase())}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {opt}
            </button>
          ))}
        </nav>

        {/* Action Call to Action */}
        <div>
          <button
            onClick={() => scrollToSection('contact')}
            className="magnetic-btn magnetic-btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              border: 'none',
              cursor: 'none',
            }}
          >
            Start Project
          </button>
        </div>
      </header>

      {/* Pages Layout Container */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onViewPortfolio={() => scrollToSection('portfolio')}
        />
        <About />
        <Services />
        <Portfolio />
        <MobileShowcase />
        <TechStack />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Inline styling to hide desktop nav on mobile screens */}
      <style>
        {`
          @media (max-width: 820px) {
            .desktop-nav {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default App;
