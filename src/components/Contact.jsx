import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);

    // Mock network transmission latency
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      // Reset success state after a few seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'rgba(36, 123, 27, 0.03)',
          filter: 'blur(140px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Connection</span>
        <h2 className="section-title">Initiate a Project</h2>
        <p className="section-subtitle">
          Contact our development team to discuss scoping schedules, custom integrations, or conversion optimizations.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Contact Information */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 500,
                color: '#fff',
                marginBottom: '16px',
              }}
            >
              Let's craft the future.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Have an enterprise app, custom ecommerce build, or marketing campaign to scale? Send our core coordinators a message.
            </p>
          </div>

          {/* Core Info Specs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(36, 123, 27, 0.06)',
                  border: '1px solid rgba(36, 123, 27, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>EMAIL CONNECT</div>
                <a href="mailto:destiny@voiid.in" style={{ fontSize: '0.95rem', color: '#fff', textDecoration: 'none', cursor: 'none' }}>
                  destiny@voiid.in
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(36, 123, 27, 0.06)',
                  border: '1px solid rgba(36, 123, 27, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>PHONE RELAY</div>
                <a href="tel:+916379108978" style={{ fontSize: '0.95rem', color: '#fff', textDecoration: 'none', cursor: 'none' }}>
                  +91 6379108978
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(36, 123, 27, 0.06)',
                  border: '1px solid rgba(36, 123, 27, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={18} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>HEADQUARTERS</div>
                <span style={{ fontSize: '0.95rem', color: '#fff' }}>
                  Coimbatore, Tamil Nadu , India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            borderRadius: '24px',
            background: 'rgba(10,10,10,0.6)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Full Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="name"
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.boxShadow = '0 0 10px rgba(36, 123, 27, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--glass-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="email"
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.boxShadow = '0 0 10px rgba(36, 123, 27, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--glass-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Project Description</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows="5"
                placeholder="Briefly describe your site, application, or digital timeline constraints..."
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'none',
                  cursor: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.boxShadow = '0 0 10px rgba(36, 123, 27, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--glass-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="magnetic-btn magnetic-btn-primary"
              style={{
                width: '100%',
                border: 'none',
                cursor: 'none',
                opacity: loading || success ? 0.8 : 1,
                pointerEvents: loading || success ? 'none' : 'auto',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                fontSize: '1rem',
              }}
            >
              {loading ? (
                <>Transmitting Systems...</>
              ) : success ? (
                <>
                  Connection Established!{' '}
                  <CheckCircle2 size={18} color="#050505" />
                </>
              ) : (
                <>
                  Initialize Connection{' '}
                  <Send size={16} style={{ transform: 'translateY(-1px)' }} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
