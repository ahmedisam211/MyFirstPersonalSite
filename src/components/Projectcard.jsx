import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProjectCard({ title, category, image, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };

  const colors = ['from-neon-cyan/20', 'from-neon-lime/20', 'from-neon-magenta/20', 'from-neon-violet/20'];
  const gradientColor = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { setHovered(false); resetMouse(); }}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative aspect-[4/5] bg-card border border-border overflow-hidden group"
      data-hoverable
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            filter: hovered ? 'hue-rotate(15deg) saturate(1.3)' : 'none',
            transition: 'filter 0.4s ease',
          }}
        />
      </motion.div>

      {/* Glitch overlay on hover */}
      {hovered && (
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'glitch 0.3s infinite',
          }}
        />
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Dark bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon-cyan mb-2 block">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h3>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-neon-lime opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}