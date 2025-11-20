import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-brand-black/80 border-white/10 backdrop-blur-md py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
            {/* Logo Icon Conceptual Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-gold to-amber-600 flex items-center justify-center">
                <span className="font-display text-black font-bold text-xl">M</span>
            </div>
            <div className="hidden md:block">
                <h1 className="font-display text-xl tracking-wider text-white">MUSETECH</h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Solutions FZCO</p>
            </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors relative group font-sans"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all group-hover:w-full duration-300" />
            </a>
          ))}
          <a href="#brands" className="px-6 py-2 border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold">
            Explore Brands
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                  className="text-xl font-display text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;