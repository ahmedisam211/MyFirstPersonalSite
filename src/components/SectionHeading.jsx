import { motion } from 'framer-motion';

export default function SectionHeading({ children, color = 'text-neon-cyan', align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-2">
        //
      </span>
      <h2 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter ${color}`}>
        {children}
      </h2>
    </motion.div>
  );
}