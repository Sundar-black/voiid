import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Compass, Award, Percent, DollarSign, Target } from 'lucide-react';

const graphPoints = [
  { month: 'Jan', visits: '12k', keywords: '84', conversion: '1.2%' },
  { month: 'Mar', visits: '35k', keywords: '240', conversion: '1.8%' },
  { month: 'May', visits: '58k', keywords: '412', conversion: '2.1%' },
  { month: 'Jul', visits: '82k', keywords: '690', conversion: '2.5%' },
  { month: 'Sep', visits: '105k', keywords: '930', conversion: '2.9%' },
  { month: 'Nov', visits: '128k', keywords: '1,280', conversion: '3.4%' },
];

export default function SEOAndMarketing() {
  const [hoverIndex, setHoverIndex] = useState(5); // Default to last data point
  const [adSpend, setAdSpend] = useState(5000); // Default spend slider value

  // ROI computations
  const estimatedROAS = adSpend < 3000 ? 3.2 : adSpend < 8000 ? 4.5 : 5.8;
  const estimatedRevenue = Math.round(adSpend * estimatedROAS);
  const costPerLead = 15;
  const totalLeads = Math.round(adSpend / costPerLead);

  return (
    <section id="seo-marketing" style={{ position: 'relative' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(36, 123, 27, 0.03)',
          filter: 'blur(130px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Performance</span>
        <h2 className="section-title">Growth & Lead Acquisition</h2>
        <p className="section-subtitle">
          We combine hyper-speed page loading benchmarks, search indexing algorithms, and conversion metrics to scale revenues.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Interactive SEO Graph */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            borderRadius: '24px',
            background: 'rgba(10,10,10,0.5)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(36, 123, 27,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Search size={20} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', fontWeight: 500 }}>
                Keyword & Organic Traffic Index
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Live analytics growth metric projection</p>
            </div>
          </div>

          {/* Interactive SVG Chart */}
          <div style={{ position: 'relative', height: '200px', width: '100%', marginTop: '30px' }}>
            <svg
              viewBox="0 0 500 200"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              {/* Grid Lines */}
              <line x1="0" y1="180" x2="500" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Chart Line Gradient */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area path */}
              <path
                d="M 10 180 Q 100 150, 150 120 T 300 80 T 450 30 L 450 180 L 10 180 Z"
                fill="url(#chartGradient)"
                style={{ transition: 'all 0.5s ease' }}
              />

              {/* Line path */}
              <path
                d="M 10 180 Q 100 150, 150 120 T 300 80 T 450 30"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                style={{ filter: 'drop-shadow(0 0 6px rgba(36, 123, 27, 0.5))' }}
              />

              {/* Interactive Data points */}
              {graphPoints.map((pt, idx) => {
                // Plot coordinates
                const x = 10 + idx * 88;
                const y = 180 - idx * 28;
                const active = hoverIndex === idx;

                return (
                  <g key={idx} onMouseEnter={() => setHoverIndex(idx)} style={{ cursor: 'none' }}>
                    <circle
                      cx={x}
                      cy={y}
                      r={active ? 8 : 4}
                      fill={active ? '#050505' : 'var(--primary)'}
                      stroke="var(--primary)"
                      strokeWidth={active ? 3 : 1}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    <text
                      x={x}
                      y="196"
                      fill={active ? '#fff' : 'var(--text-secondary)'}
                      fontSize="9"
                      textAnchor="middle"
                      style={{ fontFamily: 'monospace', fontWeight: active ? 'bold' : 'normal' }}
                    >
                      {pt.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Hover values tooltip display inside SEO box */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginTop: '36px',
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>MONTHLY TRAFFIC</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>
                {graphPoints[hoverIndex].visits}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>KEYWORD RANKS</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>
                {graphPoints[hoverIndex].keywords}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>CONVERSION RATE</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                {graphPoints[hoverIndex].conversion}
              </div>
            </div>
          </div>

          {/* Performance stats mini card row */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <div className="glass-panel" style={{ flex: 1, padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>PAGE LOAD</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>0.8s</div>
            </div>
            <div className="glass-panel" style={{ flex: 1, padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>SEO AUDIT</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>100/100</div>
            </div>
            <div className="glass-panel" style={{ flex: 1, padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>VITALS</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>PASS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Digital Marketing & Campaign ROI calculator */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            borderRadius: '24px',
            background: 'rgba(10,10,10,0.5)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(36, 123, 27,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={20} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', fontWeight: 500 }}>
                Digital Marketing Calculator
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Model return metrics dynamically</p>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '30px' }}>
            Adjust the slider below to represent your proposed monthly Meta & Google advertising budget. The system estimates ROI outputs based on VOIID ad templates.
          </p>

          {/* Slider input */}
          <div style={{ marginBottom: '35px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>Monthly Ad Budget</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace' }}>
                ${adSpend.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={adSpend}
              onChange={(e) => setAdSpend(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '3px',
                outline: 'none',
                WebkitAppearance: 'none',
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Interactive ROI Indicators */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--glass-border)',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Percent size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projected ROAS</span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{estimatedROAS}x Return</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                background: 'rgba(36, 123, 27, 0.02)',
                borderRadius: '12px',
                border: '1px solid rgba(36, 123, 27, 0.15)',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <DollarSign size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projected Revenue</span>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace' }}>
                ${estimatedRevenue.toLocaleString()}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--glass-border)',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Est. High-Quality Leads</span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{totalLeads} / Month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
