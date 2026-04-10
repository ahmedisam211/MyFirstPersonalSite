import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMAGE = 'https://media.base44.com/images/public/69d7a4a08ccfaa93b4238ed5/86f40c7bb_generated_c414add4.png';

const poeticFragments = [
  { text: 'somewhere between', x: '5%', y: '25%', delay: 0.6 },
  { text: 'code & canvas,', x: '75%', y: '35%', delay: 0.9 },
  { text: 'there is a door —', x: '15%', y: '70%', delay: 1.2 },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={HERO_IMAGE}
          alt="Abstract digital art"
          className="w-full h-[120%] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-onyx" />
      </motion.div>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-neon-cyan/10"
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-neon-magenta/10"
          animate={{ x: [0, -60, 80, 0], y: [0, 50, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '10%', right: '-5%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px] bg-neon-lime/5"
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ top: '40%', right: '30%' }}
        />
      </div>

      {/* Main heading */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18vw] md:text-[14vw] font-black leading-[0.85] tracking-tighter text-center"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #555555 100%)',
          }}
        >
          Ahmed Isam
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mt-6"
        >
          human · loves tech · Student(sometimes)
        </motion.p>
      </motion.div>

      {/* Scattered poetic fragments */}
      {poeticFragments.map((frag, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: frag.delay, duration: 1.5 }}
          className="absolute font-mono text-[10px] md:text-xs text-neon-lime/60 tracking-wider italic hidden md:block"
          style={{ left: frag.x, top: frag.y }}
        >
          {frag.text}
        </motion.span>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}