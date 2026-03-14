import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShield } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Arsenal', href: '#tools' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-royal-light/10 shadow-lg shadow-royal/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <FiShield className="text-2xl text-royal-glow group-hover:text-neon-cyan transition-colors duration-300" />
                <div className="absolute inset-0 blur-md bg-royal-glow/30 group-hover:bg-neon-cyan/30 transition-colors duration-300" />
              </div>
              <span className="font-orbitron font-bold text-lg tracking-wider">
                <span className="text-royal-glow">BASIM</span>
                <span className="text-wine-glow">.</span>
                <span className="text-gray-300">SEC</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 font-mono text-xs tracking-wider text-gray-400 hover:text-royal-glow transition-all duration-300 group"
                >
                  <span className="text-royal-light/50 mr-1">{'>'}</span>
                  {item.label.toUpperCase()}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-royal-glow group-hover:w-full transition-all duration-300 shadow-[0_0_5px_#3b82f6]" />
                </a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 border border-neon-green/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_#00ff41]" />
                <span className="font-mono text-[10px] text-neon-green/80 tracking-wider">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-royal-glow hover:text-white transition-colors p-2"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[49] bg-cyber-black/95 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 font-mono text-sm text-gray-400 hover:text-royal-glow hover:bg-royal/10 border-l-2 border-transparent hover:border-royal-glow transition-all rounded-r-lg"
                >
                  <span className="text-royal-light/50 mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;