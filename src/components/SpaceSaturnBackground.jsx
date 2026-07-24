import { useEffect, useRef } from 'react';

export default function SpaceSaturnBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class for Saturn's rings
    class RingParticle {
      constructor(planetRadius) {
        this.reset(planetRadius);
      }

      reset(planetRadius) {
        // Distribute particles across Saturn's ring system (A, B, C rings and gaps)
        const ringMin = planetRadius * 1.15;
        const ringMax = planetRadius * 2.65;
        
        // Organic radial distribution with gaps (e.g. Cassini Division)
        let r = ringMin + Math.random() * (ringMax - ringMin);
        
        // Mock Cassini Division gap around 1.95x to 2.05x planet radius
        if (r > planetRadius * 1.9 && r < planetRadius * 2.02 && Math.random() > 0.15) {
          r = Math.random() > 0.5 ? planetRadius * 1.85 : planetRadius * 2.08;
        }

        this.radius = r;
        this.theta = Math.random() * 2 * Math.PI;
        
        // Keplerian orbital speed: inner particles rotate faster than outer particles
        this.speed = 0.0028 * Math.pow(planetRadius / this.radius, 1.5);
        
        this.size = Math.random() * 2.2 + 0.8;
        
        // Warm cream-grey color palette (original Saturn colors)
        const rand = Math.random();
        const baseOpacity = Math.random() * 0.35 + 0.2;
        if (rand < 0.75) {
          this.color = `rgba(200, 195, 185, ${baseOpacity})`; // Warm cream-grey
        } else if (rand < 0.9) {
          this.color = `rgba(140, 135, 125, ${baseOpacity * 0.75})`; // Darker grey
        } else {
          this.color = `rgba(255, 255, 255, ${baseOpacity * 1.3})`; // Pure white
        }
      }

      update() {
        this.theta += this.speed;
      }
    }

    // Static background stars (brighter and twinkling clearly)
    class BackgroundStar {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.4 + 0.3; // Slightly larger stars
        this.alpha = Math.random() * 0.65 + 0.15; // Brighter stars
        this.twinkleSpeed = 0.005 + Math.random() * 0.012; // Faster, clear twinkling
      }

      update() {
        this.alpha += this.twinkleSpeed;
        if (this.alpha > 0.85 || this.alpha < 0.15) {
          this.twinkleSpeed *= -1;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Variables & Constants
    let ringOffset = 0;
    const planetRadius = Math.min(window.innerWidth, window.innerHeight) * 0.22; // Large planet size
    const numParticles = 2400; // Dense ring system
    const numStars = 150;
    
    const particles = [];
    const stars = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push(new RingParticle(planetRadius));
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new BackgroundStar());
    }

    // Stable position in one place (centered slightly to the right for layout balance)
    const getGalaxyCenter = () => {
      const isMobile = window.innerWidth < 768;
      return {
        x: isMobile ? window.innerWidth * 0.5 : window.innerWidth * 0.68,
        y: isMobile ? window.innerHeight * 0.45 : window.innerHeight * 0.5
      };
    };

    // 3D Projection configuration (Fixed tilt angles)
    const tiltX = 73 * (Math.PI / 180); // X-axis tilt (viewing angle)
    const tiltZ = -26 * (Math.PI / 180); // Z-axis tilt (orbital tilt on screen)

    // Helper function to draw crisp concentric vector rings (animated rotation & shadow gradient)
    const drawVectorRings = (center, startAngle, endAngle) => {
      ctx.save();
      
      // Draw 18 distinct concentric vector ellipses with thickness to make rotation clear
      for (let r = planetRadius * 1.12; r < planetRadius * 2.65; r += 7) {
        // Cassini Division gap (skip drawing here to keep it empty and sharp)
        if (r > planetRadius * 1.88 && r < planetRadius * 2.01) continue;
        
        let opacity = 0.35;
        if (r > planetRadius * 2.45) opacity = 0.12; // Outer ring edge decay
        if (r < planetRadius * 1.35) opacity = 0.10; // Inner ring edge decay
        if (r > planetRadius * 1.7 && r < planetRadius * 1.85) opacity = 0.55; // Bright B-ring core
        
        // Linear gradient matching the shadow axis to dim the rings in the shadow zone
        const ringGrad = ctx.createLinearGradient(
          center.x - planetRadius * 1.3, center.y - planetRadius * 0.6,
          center.x + planetRadius * 1.3, center.y + planetRadius * 0.6
        );
        ringGrad.addColorStop(0, `rgba(215, 205, 190, ${opacity * 1.25})`); // Lit warm side
        ringGrad.addColorStop(0.5, `rgba(180, 175, 160, ${opacity})`);
        ringGrad.addColorStop(0.72, `rgba(30, 28, 25, ${opacity * 0.15})`); // Shadow
        ringGrad.addColorStop(1, `rgba(170, 165, 150, ${opacity * 0.75})`);
        
        ctx.strokeStyle = ringGrad;
        ctx.lineWidth = 2.5; // Thicker lines for clear visibility
        
        // High-contrast dash pattern that rotates clearly
        ctx.setLineDash([90, 50, 45, 20]);
        ctx.lineDashOffset = -ringOffset * (planetRadius / r) * 2.8;

        ctx.beginPath();
        ctx.ellipse(center.x, center.y, r, r * Math.cos(tiltX), tiltZ, startAngle, endAngle);
        ctx.stroke();
      }
      ctx.restore();
    };

    // Animation Loop
    const tick = () => {
      // Clean canvas (very dark background)
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const center = getGalaxyCenter();

      // Update ring rotation offset (Faster rotation speed for clearly visible movement)
      ringOffset += 0.85;

      // 1. Draw static background twinkling stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // 2. Project ring particles into 3D and split them into back and front layers
      const backParticles = [];
      const frontParticles = [];

      particles.forEach((p) => {
        p.update();

        // 3D coordinates relative to center (flat plane)
        const x3d = p.radius * Math.cos(p.theta);
        const z3d = p.radius * Math.sin(p.theta);
        const y3d = 0;

        // Apply X-rotation (tiltX)
        const xRotX = x3d;
        const yRotX = y3d * Math.cos(tiltX) - z3d * Math.sin(tiltX);
        const zRotX = y3d * Math.sin(tiltX) + z3d * Math.cos(tiltX); // Depth

        // Apply Z-rotation (tiltZ)
        const finalX = xRotX * Math.cos(tiltZ) - yRotX * Math.sin(tiltZ);
        const finalY = xRotX * Math.sin(tiltZ) + yRotX * Math.cos(tiltZ);

        const projected = {
          x: center.x + finalX,
          y: center.y + finalY,
          size: p.size,
          color: p.color
        };

        // If depth (zRotX) is negative, particle is behind the planet sphere
        if (zRotX < 0) {
          backParticles.push(projected);
        } else {
          frontParticles.push(projected);
        }
      });

      // Save context and set global alpha (Reduced to 0.20 for dim, non-distracting lighting)
      ctx.save();
      ctx.globalAlpha = 0.20;

      // 3. Draw Back Rings (Vector lines first, then particles on top - offset by tiltZ for correct 3D wrapping)
      drawVectorRings(center, Math.PI - tiltZ, 2 * Math.PI - tiltZ);
      backParticles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Erase back rings inside the planet sphere using destination-out to keep the sphere completely solid
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(center.x, center.y, planetRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();

      // 4. Draw Planet Sphere (Static, sharp horizontal stripes)
      ctx.save();
      ctx.beginPath();
      ctx.arc(center.x, center.y, planetRadius, 0, 2 * Math.PI);
      ctx.clip();

      // Base shading of Saturn (Opaque pure black & extremely dark charcoal bands)
      const planetGrad = ctx.createLinearGradient(
        center.x, center.y - planetRadius,
        center.x, center.y + planetRadius
      );
      planetGrad.addColorStop(0, '#000000');
      planetGrad.addColorStop(0.12, '#0c0c0c');
      planetGrad.addColorStop(0.24, '#000000');
      planetGrad.addColorStop(0.38, '#080808');
      planetGrad.addColorStop(0.52, '#000000');
      planetGrad.addColorStop(0.68, '#0a0a0a');
      planetGrad.addColorStop(0.82, '#000000');
      planetGrad.addColorStop(1, '#050505');
      
      ctx.fillStyle = planetGrad;
      ctx.fillRect(
        center.x - planetRadius, center.y - planetRadius,
        planetRadius * 2, planetRadius * 2
      );

      // Spherical 3D light shadow overlay (keeps lit side clear, darkens shadow side)
      const shadowGrad = ctx.createRadialGradient(
        center.x - planetRadius * 0.2, center.y - planetRadius * 0.2, planetRadius * 0.2,
        center.x, center.y, planetRadius
      );
      shadowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
      shadowGrad.addColorStop(0.6, 'rgba(0, 0, 0, 0.22)');
      shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      
      ctx.fillStyle = shadowGrad;
      ctx.fillRect(
        center.x - planetRadius, center.y - planetRadius,
        planetRadius * 2, planetRadius * 2
      );
      ctx.restore();

      // (Sharp outline removed to let the planet sphere and rings blend naturally as one unified object)

      // 5. Draw Front Rings (Vector lines first, then particles on top - offset by tiltZ for correct 3D wrapping)
      drawVectorRings(center, -tiltZ, Math.PI - tiltZ);
      frontParticles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fill();
      });

      // 6. Draw Planet Silhouette Outer Glow (Signature green atmospheric theme halo)
      const haloGrad = ctx.createRadialGradient(
        center.x, center.y, planetRadius * 0.95,
        center.x, center.y, planetRadius * 1.05
      );
      haloGrad.addColorStop(0, 'rgba(36, 123, 27, 0.15)');
      haloGrad.addColorStop(0.5, 'rgba(36, 123, 27, 0.05)');
      haloGrad.addColorStop(1, 'rgba(36, 123, 27, 0)');
      
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(center.x, center.y, planetRadius * 1.05, 0, 2 * Math.PI);
      ctx.fill();

      ctx.restore(); // Restore global context alpha

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: '#050505',
      }}
    />
  );
}
