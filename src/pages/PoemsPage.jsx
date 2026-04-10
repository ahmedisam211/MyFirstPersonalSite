import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { POEMS } from '../lib/poemsData';
import Navbar from '../components/navbar';
import NoiseOverlay from '../components/Noiseoverlay';
import ProgressBar from '../components/Progressbar';
import CustomCursor from '../components/CustomcCursor';

const tagColors = {
  digital: 'text-neon-cyan border-neon-cyan/30',
  loss: 'text-neon-magenta border-neon-magenta/30',
  night: 'text-neon-violet border-neon-violet/30',
  connection: 'text-neon-lime border-neon-lime/30',
  solitude: 'text-neon-cyan border-neon-cyan/30',
  distance: 'text-neon-magenta border-neon-magenta/30',
};

const accentColors = [
  'border-l-neon-cyan',
  'border-l-neon-lime',
  'border-l-neon-magenta',
  'border-l-neon-violet',
];

export default function PoemsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = POEMS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.poet.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  });

  return (
    <main className="bg-onyx text-ash min-h-screen relative overflow-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <ProgressBar />
      <Navbar />

      {/* Decorative floating blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] bg-neon-lime/8"
          animate={{ x: [0, 60, -40, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{ top: '-10%', left: '-5%' }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full blur-[120px] bg-neon-magenta/8"
          animate={{ x: [0, -50, 70, 0], y: [0, 80, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '5%', right: '0%' }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full blur-[80px] bg-neon-cyan/6"
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{ top: '40%', right: '20%' }}
        />
      </div>

      {/* Ghost text decoration */}
      <div className="fixed right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] font-black tracking-tighter text-white/[0.02] leading-none">
          WORDS
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-10 py-24 md:py-32">


      {/* Heading */}
      <div className="mb-12 relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-3"
        >
          // a collection of digital verses
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
        >
          <span className="text-neon-lime">Po</span><span className="text-white">ems</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-32 bg-gradient-to-r from-neon-lime to-transparent mt-4 origin-left"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-[10px] text-muted-foreground/60 mt-2 block"
        >
          {POEMS.length} poems — by Ahmed
        </motion.span>
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative max-w-md mb-16"
      >
        <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="search by title or poet..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-card border border-border rounded-none pl-10 pr-4 py-3 font-mono text-sm text-ash placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/50 transition-colors"
          style={{ cursor: 'text' }}
        />
      </motion.div>

      {/* Poem cards grid */}
      {filtered.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-muted-foreground italic"
        >
          no poems found. maybe try a different signal.
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((poem, i) => (
            <motion.button
              key={poem.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => navigate(`/poems/${poem.id}`)}
              className={`text-left bg-card border border-border border-l-2 ${accentColors[i % accentColors.length]} p-6 md:p-8 group hover:border-border/80 transition-all`}
              data-hoverable
            >
              <div className={`inline-block font-mono text-[10px] tracking-[0.2em] uppercase border px-2 py-0.5 rounded-full mb-4 ${tagColors[poem.tag] || 'text-muted-foreground border-border'}`}>
                {poem.tag}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-neon-lime transition-colors">
                {poem.title}
              </h3>

              <p className="text-sm text-muted-foreground italic leading-relaxed mb-6 line-clamp-2">
                {poem.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">
                  by {poem.poet}
                </span>
                <span className="font-mono text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  read →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      )}
      {/* Footer */}
      <footer className="mt-32 py-8 border-t border-border/30 flex items-center justify-between font-mono text-[10px] text-muted-foreground/50">
        <span>© AHMED {new Date().getFullYear()}</span>
        <span>crafted with controlled entropy</span>
      </footer>
      </div>
    </main>
  );
}