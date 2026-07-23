import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Search,
  Share2,
  TrendingUp,
  FileCode,
  Layout,
  Layers,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Tv,
  Users,
  Compass,
  DollarSign
} from 'lucide-react';

const serviceProcesses = {
  website: {
    title: 'Website Development Pipeline',
    desc: 'We construct high-speed, secure, and fully responsive websites compiled using custom next-gen architectures.',
    steps: [
      {
        phase: '01',
        name: 'UI/UX Design',
        icon: Layout,
        title: 'Figma Layout & Wireframing',
        description: 'We map the visual interfaces, mobile responsive layouts, and typography grids in high-fidelity Figma files.',
        deliverables: ['Custom Figma design files', 'Interactive UX flow charts', 'Typography guidelines'],
      },
      {
        phase: '02',
        name: 'Development',
        icon: FileCode,
        title: 'React & Next.js Coding',
        description: 'Our engineers build optimized modular pages, compile backend APIs, and synchronize Supabase or Firebase nodes.',
        deliverables: ['Next.js / React component kits', 'RESTful API synchronization', 'Database schemas setup'],
      },
      {
        phase: '03',
        name: 'Optimization',
        icon: Layers,
        title: 'Speed & Accessibility Audits',
        description: 'We run core web vitals checks to ensure page loads under 0.8 seconds and guarantee full WCAG accessibility.',
        deliverables: ['Speed optimization logs', 'WCAG accessibility checks', 'Cross-browser rendering check'],
      },
      {
        phase: '04',
        name: 'Deployment',
        icon: Rocket,
        title: 'CDN Launch & DNS Link',
        description: 'Deploy static assets to AWS/Vercel edges, bind secure SSL certifications, and verify indexing sitemaps.',
        deliverables: ['Vercel / AWS hosting build', 'SSL certificates binding', 'XML sitemaps indexing'],
      },
    ],
  },
  seo: {
    title: 'SEO Ranking Growth Pipeline',
    desc: 'We optimize technical crawling paths and keywords indexing to scale organic search impressions.',
    steps: [
      {
        phase: '01',
        name: 'Crawl Audit',
        icon: Search,
        title: 'Technical Crawl Auditing',
        description: 'We audit page speed bottlenecks, redirection loops, canonical labels, and console warnings.',
        deliverables: ['Crawl error logging reports', 'Page speed diagnostics', 'Sitemap schema fixes'],
      },
      {
        phase: '02',
        name: 'Keyword Logs',
        icon: Compass,
        title: 'Bespoke Keyword Research',
        description: 'Identify search volume queries and transactional keywords that competitors are ranks for.',
        deliverables: ['Competitor keyword gap files', 'Bidding keywords value logs', 'Search intent classification'],
      },
      {
        phase: '03',
        name: 'On-Page Fixes',
        icon: FileCode,
        title: 'Schema & Meta Optimization',
        description: 'Inject structured microdata markup codes, meta descriptors, and clean heading tag hierarchies.',
        deliverables: ['JSON-LD schema code inputs', 'Meta description tags updates', 'H1-H3 layout optimizations'],
      },
      {
        phase: '04',
        name: 'Authority link',
        icon: TrendingUp,
        title: 'High-Rank Backlinking',
        description: 'Establish external authority paths to direct high-quality rank flow values back to your URL pages.',
        deliverables: ['Outreach pitch profiles', 'High-authority backlink logs', 'Press release sitemaps'],
      },
    ],
  },
  smm: {
    title: 'Social Media Strategy Pipeline',
    desc: 'We compile brand profiles, storyboard reels, and deploy retargeting social ad frameworks.',
    steps: [
      {
        phase: '01',
        name: 'Brand Style',
        icon: Layout,
        title: 'Style Guides & Avatars',
        description: 'Design visual grids, post borders, avatar mockups, and color palettes that fit your brand identity.',
        deliverables: ['Social kit style files', 'Grid layouts presets', 'Brand typography rules'],
      },
      {
        phase: '02',
        name: 'Calendars',
        icon: Tv,
        title: 'Content storyboards',
        description: 'Schedule daily updates grids, draft video hooks copy, and storyboard interactive reel timelines.',
        deliverables: ['Content schedule sheets', 'Copywriting drafts assets', 'Video scripts outlines'],
      },
      {
        phase: '03',
        name: 'Meta Ads',
        icon: Users,
        title: 'Retargeting Ad Campaign',
        description: 'Deploy demographic target profiles, link custom audience files, and install Meta pixel triggers.',
        deliverables: ['Meta tracking pixels sync', 'Lookalike audience grids', 'Creative ad mockups'],
      },
      {
        phase: '04',
        name: 'Engagement',
        icon: Share2,
        title: 'CRM Leads Integration',
        description: 'Route message signals, capture profile inquiries, and track campaign comment metrics.',
        deliverables: ['CRM routing scripts', 'Weekly followers metrics', 'Lead acquisition records'],
      },
    ],
  },
  ppc: {
    title: 'PPC & Google Ads Campaign Pipeline',
    desc: 'We launch targeted ad copies and bidding strategies to maximize conversions return on ad spend.',
    steps: [
      {
        phase: '01',
        name: 'Bid Research',
        icon: DollarSign,
        title: 'Cost-Per-Click Bid Audit',
        description: 'Analyze keyword search bidding costs, daily budgets requirements, and negative keyword files.',
        deliverables: ['Bidding budget models', 'Negative keyword lists', 'Target CPC records'],
      },
      {
        phase: '02',
        name: 'Ad Copy',
        icon: Layout,
        title: 'Landing Page Conversion Hook',
        description: 'Write high-engagement headlines copy, A/B test ad variations, and construct targeted checkout landing pages.',
        deliverables: ['High-ROAS ad copy files', 'Landing page visual templates', 'CTA placement grids'],
      },
      {
        phase: '03',
        name: 'Tag Setup',
        icon: ShieldCheck,
        title: 'GTM Event Tracking Sync',
        description: 'Configure Google Tag Manager scripts, click event triggers, and purchases value telemetry pipelines.',
        deliverables: ['Google Tag Manager configs', 'Telemetry event setup', 'Conversions tracker logs'],
      },
      {
        phase: '04',
        name: 'Optimization',
        icon: Rocket,
        title: 'Bidding Scale Reviews',
        description: 'Audit search queries results weekly, adjust conversion value parameters, and scale budget lines.',
        deliverables: ['Bidding efficiency logs', 'Conversion scale reports', 'ROAS benchmark checks'],
      },
    ],
  },
};

export default function Process() {
  const [selectedService, setSelectedService] = useState('website');
  const [activeStep, setActiveStep] = useState(0);

  const currentProcess = serviceProcesses[selectedService];
  const stepsList = currentProcess.steps;

  const handleServiceChange = (serviceKey) => {
    setSelectedService(serviceKey);
    setActiveStep(0); // Reset stepper index on change
  };

  return (
    <section id="process" style={{ position: 'relative' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(36, 123, 27, 0.03)',
          filter: 'blur(130px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Execution Pipeline</span>
        <h2 className="section-title">Our Service Workflows</h2>
        <p className="section-subtitle">
          Select a core division to view the step-by-step timeline of how we design, optimize, and deploy your business campaign.
        </p>
      </div>

      {/* Service selection switcher tabs */}
      <div className="process-tabs-container">
        {[
          { key: 'website', label: 'Website Development', icon: Globe },
          { key: 'seo', label: 'SEO Optimization', icon: Search },
          { key: 'smm', label: 'Social Media Marketing', icon: Share2 },
          { key: 'ppc', label: 'PPC & Google Ads', icon: TrendingUp },
        ].map((btn) => {
          const BtnIcon = btn.icon;
          const isActive = selectedService === btn.key;

          return (
            <button
              key={btn.key}
              onClick={() => handleServiceChange(btn.key)}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 500,
                background: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
                color: isActive ? '#050505' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: isActive ? 'var(--primary)' : 'var(--glass-border)',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <BtnIcon size={16} />
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Timeline tracker stepper navigation row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto 50px',
          padding: '20px 10px',
          gap: '20px',
        }}
      >
        {/* Progress track line */}
        <div
          style={{
            position: 'absolute',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.05)',
            top: '50%',
            left: '27px',
            right: '27px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Dynamic active line track */}
        <div
          style={{
            position: 'absolute',
            height: '2px',
            background: 'var(--primary)',
            boxShadow: '0 0 10px var(--primary)',
            top: '50%',
            left: '27px',
            width: `calc(${(activeStep / (stepsList.length - 1)) * 100}% - ${(activeStep / (stepsList.length - 1)) * 54}px)`,
            transform: 'translateY(-50%)',
            zIndex: 2,
            pointerEvents: 'none',
            transition: 'width 0.4s ease',
          }}
        />

        {stepsList.map((step, idx) => {
          const StepIcon = step.icon;
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                background: 'transparent',
                border: 'none',
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              {/* Stepper Node circle */}
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--primary)' : '#0f0f0f',
                  border: isCompleted || isActive ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.08)',
                  boxShadow: isActive ? '0 0 20px rgba(36, 123, 27, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <StepIcon
                  size={20}
                  color={isActive ? '#050505' : isCompleted ? 'var(--primary)' : 'var(--text-secondary)'}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  marginTop: '10px',
                  color: isActive ? 'var(--primary)' : isCompleted ? '#fff' : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                }}
              >
                {step.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Description Card content block */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedService}-${activeStep}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="process-desc-card glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              textAlign: 'left',
              background: 'rgba(12, 12, 12, 0.5)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Step Summary */}
            <div>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                }}
              >
                PHASE {stepsList[activeStep].phase} // {currentProcess.title}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#fff',
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              >
                {stepsList[activeStep].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {stepsList[activeStep].description}
              </p>
            </div>

            {/* Deliverables list */}
            <div className="process-deliverables" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '30px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '16px',
                  letterSpacing: '0.5px',
                }}
              >
                KEY DELIVERABLES
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {stepsList[activeStep].deliverables.map((del, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
