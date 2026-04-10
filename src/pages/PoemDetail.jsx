import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { POEMS } from '../lib/poemsData';
import Navbar from '../components/navbar';
import NoiseOverlay from '../components/Noiseoverlay';
import ProgressBar from '../components/Progressbar';
import CustomCursor from '../components/CustomcCursor';

const accentMap = {
  digital: { heading: 'text-neon-cyan', bar: 'bg-neon-cyan' },
  loss: { heading: 'text-neon-magenta', bar: 'bg-neon-magenta' },
  night: { heading: 'text-neon-violet', bar: 'bg-neon-violet' },
  connection: { heading: 'text-neon-lime', bar: 'bg-neon-lime' },
  solitude: { heading: 'text-neon-cyan', bar: 'bg-neon-cyan' },
  distance: { heading: 'text-neon-magenta', bar: 'bg-neon-magenta' },
};

export default function PoemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const poem = POEMS.find((p) => p.id === id);

  if (!poem) {
    return (
      <main className="bg-onyx text-ash min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-mono text-muted-foreground">poem not found.</p>
        <button
          onClick={() => navigate('/poems')}
          className="font-mono text-xs text-neon-cyan uppercase tracking-widest"
          data-hoverable
        >
          ← back to poems
        </button>
      </main>
    );
  }

  const accent = accentMap[poem.tag] || { heading: 'text-neon-cyan', bar: 'bg-neon-cyan' };

  return (
    <main className="bg-onyx text-ash min-h-screen relative overflow-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <ProgressBar />
      <Navbar />
      <div className="px-6 md:px-10 py-24 md:py-32">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] bg-neon-cyan/5" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] bg-neon-magenta/5" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pt-4">


        {/* Tag */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4"
        >
          // {poem.tag}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`text-5xl md:text-7xl font-black tracking-tighter ${accent.heading} mb-2 leading-tight`}
        >
          {poem.title}
        </motion.h1>

        {/* Poet */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-muted-foreground mb-14"
        >
          by {poem.poet}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`h-px w-full ${accent.bar} opacity-30 mb-14 origin-left`}
        />

        {/* Poem lines */}
        <div className="space-y-1">
          {poem.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className={`text-base md:text-lg leading-relaxed ${line === '' ? 'h-4' : 'text-ash/85 italic'}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 pt-8 border-t border-border/30 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] text-muted-foreground/50">
            © {poem.poet} — all words reserved
          </span>
          <motion.button
            onClick={() => navigate('/poems')}
            whileHover={{ x: -4 }}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-neon-cyan transition-colors"
            data-hoverable
          >
            ← more poems
          </motion.button>
        </motion.div>
      </div>
      </div>
    </main>
  );
}