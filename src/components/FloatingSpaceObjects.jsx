import { motion } from 'framer-motion';

export default function FloatingSpaceObjects() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1, // Place behind foreground content, but above solid backgrounds
        overflow: 'hidden',
      }}
    >
      {/* Object 1 - Top Right */}
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '140px',
          height: '140px',
          opacity: 0.18,
          filter: 'drop-shadow(0 0 20px rgba(36, 123, 27, 0.2))',
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { repeat: Infinity, duration: 9, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 30, ease: 'linear' },
        }}
      >
        <img
          src="/projects/floating-sphere.png"
          alt="Floating Space Object"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </motion.div>

      {/* Object 2 - Mid Left */}
      <motion.div
        style={{
          position: 'absolute',
          top: '45%',
          left: '5%',
          width: '90px',
          height: '90px',
          opacity: 0.14,
          filter: 'drop-shadow(0 0 15px rgba(36, 123, 27, 0.15))',
        }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, -360],
        }}
        transition={{
          y: { repeat: Infinity, duration: 11, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 40, ease: 'linear' },
        }}
      >
        <img
          src="/projects/floating-sphere.png"
          alt="Floating Space Object"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </motion.div>

      {/* Object 3 - Bottom Right */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '12%',
          width: '170px',
          height: '170px',
          opacity: 0.15,
          filter: 'drop-shadow(0 0 25px rgba(36, 123, 27, 0.25))',
        }}
        animate={{
          y: [0, -35, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { repeat: Infinity, duration: 13, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 50, ease: 'linear' },
        }}
      >
        <img
          src="/projects/floating-sphere.png"
          alt="Floating Space Object"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </motion.div>
    </div>
  );
}
