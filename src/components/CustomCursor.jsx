import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const mouse = { x: 0, y: 0 };

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

    const cleanupHoverListeners = updateHoverState();
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });

    let animationFrameId;
    const dotPos = { x: 0, y: 0 };
    
    const tick = () => {
      dotPos.x += (mouse.x - dotPos.x) * 0.18;
      dotPos.y += (mouse.y - dotPos.y) * 0.18;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
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
          width: 14,
          height: 14,
          top: -7,
          left: -7,
          backgroundColor: '#247B1B',
          boxShadow: '0 0 10px rgba(36, 123, 27, 0.5)',
        }),
        ...(clicked && {
          transform: 'scale(0.8)',
        }),
      }}
    />
  );
}

