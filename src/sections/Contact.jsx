import { color, motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';


const SOCIAL_LINKS = [ 
  {
    label: 'Email',
    href: 'mailto:ahmdsamth@gmail.com',
    icon: Mail,
    color: 'hover:text-neon-magenta hover:border-neon-magenta/50',
    glow: 'hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
    tag: '//big talk',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ahmedisam211',
    icon: Github,
    color: 'hover:text-neon-lime hover:border-neon-lime/50',
    glow: 'hover:shadow-[0_0_20px_rgba(204,255,0,0.2)]',
    tag: '// codes',
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
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1}}
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
        <br></br>
        <br></br>
        <br></br>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="font-mono text-1xs text-muted-foreground mt-8 max-w-xs relative z-10"
      >
        or find me where the wifi is weak and the ideas are strong.
      </motion.p>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[13px] text-muted-foreground/50"
      >
        <span>© AHMED {new Date().getFullYear()}</span>
        <span>crafted with controlled entropy</span>
      </motion.div>
    </section>
  );
}