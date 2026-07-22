import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        padding: '80px 20px 40px',
        position: 'relative',
        zIndex: 10,
        background: '#030303',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          textAlign: 'left',
          marginBottom: '60px',
        }}
      >
        {/* Logo and Tagline Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Green Ring Logo SVG */}
            <svg width="32" height="32" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="#4caf50"
                strokeWidth="12"
                fill="none"
              />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '1px',
              }}
            >
              VOIID
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px' }}>
            Building Digital Experiences That Grow Businesses. We create high-performance assets that scale.
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>

            <a
              href="https://www.linkedin.com/company/voiid-in/"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'none',
                transition: 'color 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/voiid.in?igsh=MWduMGh0Zzk4cXRjaA%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'none',
                transition: 'color 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a
              href="https://wa.me/916379108978"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'none',
                transition: 'color 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 2.51 1.489 4.821 1.49 5.361 0 9.749-4.387 9.754-9.75.002-2.597-.998-5.042-2.825-6.87C16.57 2.196 14.122 1 11.538 1 6.183 1 1.8 5.38 1.796 10.735c-.001 2.1.536 3.1 1.483 4.743L2.247 21.75l6.398-1.684zM16.89 13.91c-.266-.134-1.577-.779-1.82-.867-.243-.089-.42-.134-.596.133-.176.267-.68.867-.833 1.045-.152.178-.305.2-.572.066-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.324-1.577-1.479-1.844-.155-.267-.016-.41.118-.543.12-.12.267-.312.4-.468.133-.156.177-.267.266-.445.09-.178.044-.334-.022-.468-.066-.134-.596-1.436-.816-1.97-.215-.518-.432-.447-.597-.456-.154-.008-.33-.01-.506-.01-.176 0-.464.066-.707.332-.243.267-.93.91-.93 2.22s.952 2.58 1.085 2.758c.133.178 1.874 2.862 4.54 4.012.634.273 1.13.436 1.517.559.638.203 1.22.175 1.68.107.513-.076 1.578-.645 1.8-1.247.223-.6.223-1.114.156-1.225-.067-.11-.244-.177-.51-.311z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              color: '#fff',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Sitemap
          </h4>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    cursor: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              color: '#fff',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Newsletter
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: 1.5 }}>
            Subscribe to receive technical analysis logs, platform architecture case-studies, and deployment workflows.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'flex',
              gap: '8px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid var(--glass-border)',
              padding: '4px',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.85rem',
                paddingLeft: '12px',
                outline: 'none',
                flex: 1,
                cursor: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--primary)',
                color: '#050505',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                cursor: 'none',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright row */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} VOIID Agency. All rights reserved. Designed for scale.
        </span>

        {/* Scroll back to top */}
        <button
          onClick={handleScrollTop}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            cursor: 'none',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
