// Tech Stack Chips Marquee Component

const techList1 = [
  'React',
  'Next.js',
  'Flutter',
  'Node.js',
  'FastAPI',
  'Python',
  'Supabase',
  'Firebase',
  'AWS',
];

const techList2 = [
  'PostgreSQL',
  'MongoDB',
  'Vue.js',
  'Docker',
  'GitHub',
  'Figma',
  'Tailwind CSS',
  'TypeScript',
  'Express.js',
];

function TechChip({ text }) {
  return (
    <div
      className="glass-panel"
      style={{
        padding: '12px 24px',
        borderRadius: '50px',
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        fontWeight: 500,
        color: '#fff',
        background: 'rgba(15, 15, 15, 0.6)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        whiteSpace: 'nowrap',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--primary)',
          boxShadow: '0 0 8px var(--primary)',
        }}
      />
      {text}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ overflow: 'hidden', paddingBottom: '80px' }}>
      <div className="section-header">
        <span className="section-tag">Technology Stack</span>
        <h2 className="section-title">The Tools We Deploy</h2>
        <p className="section-subtitle">
          We integrate industry-leading tools and architectures to construct scalable digital systems.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container" style={{ marginBottom: '24px' }}>
        <div className="marquee-content">
          {techList1.map((tech, idx) => (
            <TechChip key={`row1-a-${idx}`} text={tech} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {techList1.map((tech, idx) => (
            <TechChip key={`row1-b-${idx}`} text={tech} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reversed direction) */}
      <div className="marquee-container">
        <div className="marquee-content reverse">
          {techList2.map((tech, idx) => (
            <TechChip key={`row2-a-${idx}`} text={tech} />
          ))}
        </div>
        <div className="marquee-content reverse" aria-hidden="true">
          {techList2.map((tech, idx) => (
            <TechChip key={`row2-b-${idx}`} text={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
