import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from '../components/CustomcCursor';
import NoiseOverlay from '../components/Noiseoverlay';
import { Github, Linkedin, Instagram } from 'lucide-react';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@$%&';
const PHRASES = [
  "still cooking 🍳",
  "brb adding chaos",
  "almost done (lying)",
  "compiling vibes...",
  "loading ahmed.exe",
  "syntax error: life",
  "git push --force",
];

function GlitchText({ text }) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration) return text[i];
            if (char === ' ') return ' ';
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join('')
      );
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayed(text);
      }
      if (frame % 2 === 0) iteration++;
      frame++;
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

function FloatingBlob({ color, style }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${color}`}
      style={style}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

const SOCIAL_LINKS = [ 
  {
    label: 'GitHub',
    href: 'https://github.com/ahmedisam211',
    icon: Github,
    color: 'hover:text-neon-lime hover:border-neon-lime/50',
    glow: 'hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]',
    tag: '// code',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmed-isam249 ',
    icon: Linkedin,
    color: 'hover:text-neon-cyan hover:border-neon-cyan/50',
    glow: 'hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
    tag: '// network',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ahmed._isam/',
    icon: Instagram,
    color: 'hover:text-neon-magenta hover:border-neon-magenta/50',
    glow: 'hover:shadow-[0_0_20px_rgba(255,0,85,0.2)]',
    tag: '// vibes',
  },
];

export default function ComingSoon() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [glitchKey, setGlitchKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
      setGlitchKey((k) => k + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-onyx text-ash min-h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <CustomCursor />
      <NoiseOverlay />

      {/* Blobs */}
      <FloatingBlob color="bg-neon-cyan/10 w-96 h-96" style={{ top: '-5%', left: '-10%' }} />
      <FloatingBlob color="bg-neon-magenta/10 w-80 h-80" style={{ bottom: '5%', right: '-8%' }} />
      <FloatingBlob color="bg-neon-lime/5 w-64 h-64" style={{ top: '50%', left: '60%' }} />

      {/* Giant ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black tracking-tighter text-white/[0.03] leading-none">WIP</span>
      </div>

      {/* Scattered decorative chars */}
      {['01', '{}', '//', '->','</>','??'].map((char, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-white/5 text-2xl md:text-4xl font-bold select-none pointer-events-none"
          style={{
            top: `${[15, 75, 25, 60, 80, 40][i]}%`,
            left: `${[5, 88, 70, 12, 55, 45][i]}%`,
          }}
          animate={{ opacity: [0.03, 0.08, 0.03], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          {char}
        </motion.span>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">

        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-3 py-1"
        >
          // My corner of the internet
        </motion.span>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none"
        >
          <span className="text-neon-cyan">COMING</span>
          <br />
          <span className="text-neon-lime">SOON</span>
          <span className="text-neon-magenta">.</span>
        </motion.h1>

        {/* Rotating phrase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 flex items-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-sm md:text-base text-muted-foreground"
            >
              <GlitchText key={glitchKey} text={PHRASES[phraseIndex]} />
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-neon-cyan via-neon-lime to-neon-magenta origin-left"
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, color, glow, tag }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 bg-card border border-border px-5 py-3 font-mono text-sm text-ash/70 transition-all duration-300 ${color} ${glow}`}
              data-hoverable
            >
              <Icon size={16} />
              <span>{label}</span>
              <span className="text-[10px] text-muted-foreground/50 ml-1">{tag}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="font-mono text-[12px] text-muted-foreground/400 mt-4 max-w-x"
        >
          i'm building something cool here. or at least trying to. no cap.
        </motion.p>
      </div>
    </main>
  );
}