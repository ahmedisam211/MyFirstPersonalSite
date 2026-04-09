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

export default function CoolLinks( ) {
  return (
    <section id="links" className="relative px-6 md:px-10 py-24 md:py-32">
      <SectionHeading color="text-neon-cyan">Cool Links</SectionHeading>

      {/* Removed mx-auto and max-w-4xl to align left */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {LINKS.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group block p-6 border border-ash/10 hover:border-neon-cyan/30 hover:bg-ash/5 transition-all"
          >
            <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest border border-current mb-4 ${tagColors[link.tag] || 'text-ash/40'}`}>
              {link.tag}
            </span>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-ash group-hover:text-white transition-colors">
                  {link.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-ash/20 group-hover:text-neon-cyan transition-colors" />
              </div>
              <p className="text-sm text-ash/40 leading-relaxed">
                {link.note}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <div className="w-8 h-px bg-ash/10 group-hover:w-12 group-hover:bg-neon-cyan transition-all" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
