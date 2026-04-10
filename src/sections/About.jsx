import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <SectionHeading color="text-neon-cyan">About</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-ash/80 font-sans text-lg md:text-xl leading-relaxed"
          >
            <p>
              I am <span className="text-white font-bold">Ahmed Isam</span>, a digital creator exploring the intersection of technology and art. My work spans across software development, visual design, and poetic expression.
            </p>
            <p>
              Driven by a fascination with how code can manifest as emotion, I build digital experiences that are not just functional, but resonant. Whether it's through a line of code, a verse of poetry, or a visual composition, I strive to create moments of connection in the digital void.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              {['React', 'Tailwind', 'Framer Motion', 'UI/UX', 'Creative Coding'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 border border-neon-cyan/30 rounded-full text-xs font-mono text-neon-cyan uppercase tracking-widest bg-neon-cyan/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual/Quote Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-neon-cyan/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan" />
              <blockquote className="font-mono text-sm md:text-base italic text-ash/60 space-y-4">
                <p>"Code is the ink, the screen is the paper, and the logic is the rhythm of the soul."</p>
                <footer className="text-neon-cyan not-italic">— Ahmed Isam</footer>
              </blockquote>
              
              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan/40 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-neon-cyan/20 animate-pulse delay-75" />
                <div className="w-2 h-2 rounded-full bg-neon-cyan/10 animate-pulse delay-150" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
