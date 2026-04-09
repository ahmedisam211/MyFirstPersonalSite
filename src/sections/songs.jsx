// import { motion } from 'framer-motion';
// import { Play, Pause } from 'lucide-react';
// import { useState } from 'react';
// import SectionHeading from '../components/SectionHeading';

// const SONGS = [
//   { title: 'Midnight Static', duration: '3:34', mood: 'dreamy' },
//   { title: 'Broken Frequencies', duration: '4:11', mood: 'chaotic' },
//   { title: 'Ghost in the Wire', duration: '2:58', mood: 'melancholic' },
//   { title: 'Neon Rain', duration: '5:02', mood: 'euphoric' },
//   { title: 'Signal Lost', duration: '3:47', mood: 'ambient' },
// ];

// const moodColors = {
//   dreamy: 'bg-neon-violet',
//   chaotic: 'bg-neon-magenta',
//   melancholic: 'bg-neon-cyan',
//   euphoric: 'bg-neon-lime',
//   ambient: 'bg-white',
// };

// function SongRow({ song, index }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.08 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-border/50 hover:border-neon-cyan/30 transition-colors"
//       data-hoverable
//     >
//       {/* Index / Play */}
//       <div className="w-10 flex items-center justify-center">
//         {hovered ? (
//           <Play size={16} className="text-neon-cyan" />
//         ) : (
//           <span className="font-mono text-xs text-muted-foreground">
//             {String(index + 1).padStart(2, '0')}
//           </span>
//         )}
//       </div>

//       {/* Mood indicator */}
//       <div className={`w-1.5 h-8 rounded-full ${moodColors[song.mood]} opacity-40 group-hover:opacity-100 transition-opacity`} />

//       {/* Title */}
//       <div className="flex-1">
//         <h3 className="text-base md:text-lg font-medium text-foreground group-hover:text-white transition-colors">
//           {song.title}
//         </h3>
//         <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
//           {song.mood}
//         </span>
//       </div>

//       {/* Visualizer bars on hover */}
//       <div className="hidden md:flex items-end gap-px h-5">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-0.5 bg-neon-cyan/40 group-hover:bg-neon-cyan rounded-full"
//             animate={hovered ? { 
//               height: [4, Math.random() * 16 + 4, 4],
//             } : { height: 4 }}
//             transition={hovered ? { 
//               duration: 0.4 + Math.random() * 0.3, 
//               repeat: Infinity, 
//               repeatType: 'reverse' 
//             } : {}}
//           />
//         ))}
//       </div>

//       {/* Duration */}
//       <span className="font-mono text-xs text-muted-foreground w-12 text-right">
//         {song.duration}
//       </span>
//     </motion.div>
//   );
// }

// export default function Songs() {
//   return (
//     <section id="songs" className="relative px-6 md:px-10 py-24 md:py-32">
//       <SectionHeading color="text-neon-magenta" align="left">Songs</SectionHeading>

//       <div className="max-w-3xl ml-auto">
//         {SONGS.map((song, i) => (
//           <SongRow key={song.title} song={song} index={i} />
//         ))}
//       </div>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="font-mono text-xs text-muted-foreground mt-8 text-right italic"
//       >
//         * audio coming soon. for now, just feel the titles.
//       </motion.p>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const SONGS = [
  { id: '01', title: 'Midnight Static', mood: 'Dreamy', duration: '3:34', color: 'bg-neon-violet' },
  { id: '02', title: 'Broken Frequencies', mood: 'Chaotic', duration: '4:11', color: 'bg-neon-magenta' },
  { id: '03', title: 'Ghost in the Wire', mood: 'Melancholic', duration: '2:58', color: 'bg-neon-cyan' },
  { id: '04', title: 'Neon Rain', mood: 'Euphoric', duration: '5:02', color: 'bg-neon-lime' },
  { id: '05', title: 'Signal Lost', mood: 'Ambient', duration: '3:47', color: 'bg-ash/40' },
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

      {/* Removed max-w-4xl and mx-auto to align left */}
      <div className="mt-12 w-full max-w-5xl">
        {SONGS.map((song, i) => (
          <SongRow key={song.id} song={song} index={i} />
        ))}
      </div>
    </section>
  );
}
