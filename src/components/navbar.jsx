import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', type: 'scroll' },
  // { label: 'Projects', href: '#projects', type: 'scroll' },
  { label: 'Songs', href: '#songs', type: 'scroll' },
  { label: 'Poems', href: '#poems', type: 'scroll' },
  { label: 'Links', href: '#links', type: 'scroll' },
  { label: 'Contact', href: '#contact', type: 'scroll' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (item) => {
    setOpen(false);
    
    if (item.type === 'link') {
      navigate(item.href);
    } else {
      // If we're not on the home page, go home first then scroll
      if (location.pathname !== '/home') {
        navigate('/home');
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <motion.button
            onClick={() => handleNav({ type: 'scroll', href: '#hero' })}
            className="text-white font-mono text-sm tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
            data-hoverable
          >
            Ahmed
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNav(item)}
                className="text-white font-mono text-xs tracking-wider uppercase relative group"
                whileHover={{ y: -2 }}
                data-hoverable
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            data-hoverable
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-onyx/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(item)}
                className="text-white font-mono text-2xl tracking-wider uppercase"
                data-hoverable
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
