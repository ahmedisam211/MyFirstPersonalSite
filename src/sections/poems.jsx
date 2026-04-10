import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { useNavigate } from 'react-router-dom';
import { POEMS } from '../lib/poemsData';

// const POEMS = [
//   {
//     title: 'the weight of pixels',
//     lines: [
//       'i built a house from light,',
//       'but the shadows moved in first.',
//       'every window was a screen,',
//       'every door, a loading bar.',
//     ],
//   },
//   {
//     title: '404',
//     lines: [
//       'you searched for me',
//       'in all the wrong URLs.',
//       'i was cached somewhere',
//       'between your last tab',
//       'and the one you forgot to close.',
//     ],
//   },
//   {
//     title: 'soft crash',
//     lines: [
//       'the system went down',
//       'at 3am on a tuesday.',
//       'nobody noticed',
//       'except the moon,',
//       'who had been watching',
//       'my blinking cursor all night.',
//     ],
//   },
//   {
//     title: 'bandwidth',
//     lines: [
//       'we had infinite connection',
//       'but limited bandwidth.',
//       'so we compressed our feelings',
//       'into tiny, lossy packets',
//       'and hoped they\'d arrive intact.',
//     ],
//   },
// ];

// function PoemCard({ poem, index }) {
//   const accents = ['border-neon-cyan', 'border-neon-lime', 'border-neon-magenta', 'border-neon-violet'];
//   const textAccents = ['text-neon-cyan', 'text-neon-lime', 'text-neon-magenta', 'text-neon-violet'];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40, rotate: (index % 2 === 0 ? -1 : 1) }}
//       whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//       viewport={{ once: true, margin: '-50px' }}
//       transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
//       className={`border-l-2 ${accents[index % accents.length]} pl-6 md:pl-8 py-6 md:py-8`}
//     >
//       <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${textAccents[index % textAccents.length]}`}>
//         {poem.title}
//       </h3>
//       <div className="space-y-1">
//         {poem.lines.map((line, i) => (
//           <motion.p
//             key={i}
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
//             className="text-base md:text-lg text-ash/80 leading-relaxed italic"
//           >
//             {line}
//           </motion.p>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default function Poems() {
//   return (
//     <section id="poems" className="relative px-6 md:px-10 py-24 md:py-32">
//       <SectionHeading color="text-neon-lime">Poems</SectionHeading>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
//         {POEMS.map((poem, i) => (
//           <PoemCard key={poem.title} poem={poem} index={i} />
//         ))}
//       </div>
//     </section>
//   );
// }




function PoemCard({ poem, index }) {
  const navigate = useNavigate();
  const accents = ['border-neon-cyan', 'border-neon-lime', 'border-neon-magenta', 'border-neon-violet'];
  const textAccents = ['text-neon-cyan', 'text-neon-lime', 'text-neon-magenta', 'text-neon-violet'];

  return (
    <motion.button
      initial={{ opacity: 0, y: 40, rotate: (index % 2 === 0 ? -1 : 1) }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={() => navigate(`/poems/${poem.id}`)}
      className={`text-left border-l-2 ${accents[index % accents.length]} pl-6 md:pl-8 py-6 md:py-8 group`}
      data-hoverable
    >
      <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${textAccents[index % textAccents.length]}`}>
        {poem.title}
      </h3>
      <div className="space-y-1">
        {poem.lines.slice(0, 4).map((line, i) => (
          <p key={i} className="text-base md:text-lg text-ash/80 leading-relaxed italic">
            {line}
          </p>
        ))}
        <p className="text-sm text-muted-foreground font-mono pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          read more →
        </p>
      </div>
    </motion.button>
  );
}

export default function Poems() {
  return (
    <section id="poems" className="relative px-6 md:px-10 py-24 md:py-32">
      <SectionHeading color="text-neon-lime">Poems</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
        {POEMS.map((poem, i) => (
          <PoemCard key={poem.title} poem={poem} index={i} />
        ))}
      </div>
    </section>
  );
}