import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const LINKS = [
  { title: 'The Useless Web', url: 'https://theuselessweb.com', tag: 'chaos', note: 'click and surrender' },
  { title: 'Windows 93', url: 'https://www.windows93.net', tag: 'nostalgia', note: 'the OS that never was' },
  { title: 'Earth FM', url: 'https://earth.fm', tag: 'nature', note: 'sounds from the real world' },
  { title: 'Neal.fun', url: 'https://neal.fun', tag: 'wonder', note: 'interactive rabbit holes' },
  { title: 'Radio Garden', url: 'https://radio.garden', tag: 'global', note: 'spin the globe, hear a station' },
  { title: 'This Person Does Not Exist', url: 'https://thispersondoesnotexist.com', tag: 'AI', note: 'uncanny valley tours' },
  { title: 'Pointer Pointer', url: 'https://pointerpointer.com', tag: 'fun', note: 'it always finds you' },
];

const tagColors = {
  chaos: 'text-neon-magenta',
  nostalgia: 'text-neon-cyan',
  nature: 'text-neon-lime',
  wonder: 'text-neon-violet',
  global: 'text-neon-cyan',
  AI: 'text-neon-magenta',
  fun: 'text-neon-lime',
};

export default function CoolLinks() {
  return (
    <section id="links" className="relative px-6 md:px-10 py-24 md:py-32">
      <SectionHeading color="text-neon-violet">Cool Links</SectionHeading>

             <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {LINKS.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ x: -8 }}
            className="group flex items-center gap-4 md:gap-6 py-4 px-4 md:px-6 rounded-lg hover:bg-card/50 transition-colors"
            data-hoverable
          >
            <span className={`font-mono text-[10px] tracking-wider uppercase ${tagColors[link.tag] || 'text-muted-foreground'} w-16 shrink-0`}>
              {link.tag}
            </span>

            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-medium text-foreground group-hover:text-white transition-colors truncate">
                {link.title}
              </h3>
              <p className="font-mono text-[10px] md:text-xs text-muted-foreground italic">
                {link.note}
              </p>
            </div>

            <ExternalLink size={14} className="text-muted-foreground group-hover:text-neon-cyan transition-colors shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}