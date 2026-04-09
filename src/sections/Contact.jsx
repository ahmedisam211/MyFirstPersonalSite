import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-neon-cyan/5" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full blur-[100px] bg-neon-magenta/5" />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 relative z-10"
      >
        // say hi
      </motion.span>

      <motion.a
        href="mailto:ahmdsamth@gmail.com"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white hover:text-neon-cyan transition-colors duration-300"
        data-hoverable
      >
        ahmdsamth@gmail.com
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs text-muted-foreground mt-8 max-w-xs relative z-10"
      >
        or find me where the wifi is weak and the ideas are strong.
      </motion.p>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-muted-foreground/50"
      >
        <span>© AHMED {new Date().getFullYear()}</span>
        <span>crafted with controlled entropy</span>
      </motion.div>
    </section>
  );
}