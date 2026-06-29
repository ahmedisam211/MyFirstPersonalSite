import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const SONGS = [
  { id: '01', title: 'Midnight Static', mood: 'Dreamy', duration: '3:34', color: 'bg-neon-violet' },
  { id: '02', title: 'Broken Frequencies', mood: 'Chaotic', duration: '4:11', color: 'bg-neon-magenta' },
  { id: '03', title: 'Ghost in the Wire', mood: 'Melancholic', duration: '2:58', color: 'bg-neon-cyan' },
  { id: '04', title: 'Neon Rain', mood: 'Euphoric', duration: '5:02', color: 'bg-neon-lime' },
];

function SongRow({ song, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex items-center py-6 border-b border-ash/10 hover:bg-ash/5 transition-colors px-4 -mx-4"
    >
      <span className="font-mono text-xs text-ash/40 w-12">{song.id}</span>
      
      <div className="flex items-center gap-4 flex-1">
        <div className={`w-1 h-6 ${song.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]`} />
        <div>
          <h3 className="text-lg font-medium text-ash group-hover:text-white transition-colors">
            {song.title}
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-ash/40 mt-0.5">
            {song.mood}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-0.5 items-end h-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 12, 6, 10, 4] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1 + Math.random(),
                ease: "easeInOut" 
              }}
              className={`w-0.5 ${song.color} opacity-40`}
            />
          ))}
        </div>
        <span className="font-mono text-sm text-ash/40">{song.duration}</span>
      </div>
    </motion.div>
  );
}

export default function Songs() {
  return (
    <section id="songs" className="relative px-6 md:px-10 py-24 md:py-32">
      <SectionHeading color="text-neon-magenta">Songs</SectionHeading>
      
      <p className="text-ash/60 mb-12 font-mono text-sm tracking-widest uppercase">
        songs you should listn to
      </p>

      <div className="mt-12 w-full max-w-5xl">
        {SONGS.map((song, i) => (
          <SongRow key={song.id} song={song} index={i} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Link 
          to="/more-songs"
          className="inline-flex items-center gap-4 group"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-ash/60 group-hover:text-neon-magenta transition-colors">
            View More Songs
          </span>
          <div className="w-12 h-px bg-ash/20 group-hover:w-24 group-hover:bg-neon-magenta transition-all duration-500" />
        </Link>
      </motion.div>
    </section>
  );
}
