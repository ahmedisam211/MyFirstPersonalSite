import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const checkHover = (e) => {
      const el = e.target;
      const isInteractive = el.closest('a, button, [role="button"], input, textarea, [data-hoverable]');
      setHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', checkHover);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  // Hide on mobile/touch
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-neon-cyan mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 24 : 16),
          y: pos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-neon-lime mix-blend-difference"
        animate={{
          x: pos.x - (clicking ? 6 : 3),
          y: pos.y - (clicking ? 6 : 3),
          width: clicking ? 12 : 6,
          height: clicking ? 12 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
      />
    </>
  );
}