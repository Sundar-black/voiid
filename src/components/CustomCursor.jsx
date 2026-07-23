import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Track hovered items
    const updateHoverState = () => {
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, .interactive-card, .magnetic-btn, .portfolio-card'
      );

      const handleOver = () => setHovered(true);
      const handleOut = () => setHovered(false);

      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', handleOver);
          el.removeEventListener('mouseleave', handleOut);
        });
      };
    };

    // Run hover checks initial + poll on DOM updates
    const cleanupHoverListeners = updateHoverState();
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });

    // Tick loop for lag follow effect
    let animationFrameId;
    const tick = () => {
      // Inner dot: instant position
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      // Outer ring: smooth interpolation (lerp)
      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;

      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
      cleanupHoverListeners();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#247B1B',
          zIndex: 99999,
          pointerEvents: 'none',
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          transform: 'translate3d(0,0,0)',
          ...(hovered && {
            width: 12,
            height: 12,
            top: -6,
            left: -6,
          }),
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(36, 123, 27, 0.45)',
          backgroundColor: 'transparent',
          zIndex: 99998,
          pointerEvents: 'none',
          opacity: hidden ? 0 : 1,
          boxShadow: hovered ? '0 0 15px rgba(36, 123, 27, 0.3)' : 'none',
          transition: 'opacity 0.25s ease, border-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease, background-color 0.2s ease',
          transform: 'translate3d(0,0,0)',
          ...(hovered && {
            width: 64,
            height: 64,
            top: -32,
            left: -32,
            borderColor: 'rgba(36, 123, 27, 0.9)',
            backgroundColor: 'rgba(36, 123, 27, 0.05)',
          }),
          ...(clicked && {
            transform: 'scale(0.85)',
          }),
        }}
      />
    </>
  );
}
