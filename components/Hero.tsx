import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
            <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
                Three Brands. One Vision.
            </span>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8"
        >
            <div className="overflow-hidden">
                <motion.h1 
                    initial={{ y: 100 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="block text-white/90"
                >
                    Technology,
                </motion.h1>
            </div>
            <div className="overflow-hidden py-2">
                <motion.span 
                    initial={{ y: 100 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="block italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] bg-[length:200%_auto] animate-[shine_8s_linear_infinite]"
                >
                    Wellness,
                </motion.span>
            </div>
            <div className="overflow-hidden">
                <motion.span 
                    initial={{ y: 100 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="block text-white/90"
                >
                    & Digital Identity
                </motion.span>
            </div>
        </motion.div>

        <motion.p 
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          {COMPANY_INFO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
            <a 
                href="#brands" 
                className="group relative px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 rounded-sm"
            >
                <span className="relative z-10">Explore Our Brands</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a 
                href="#contact" 
                className="group px-8 py-4 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold font-bold uppercase tracking-widest text-xs transition-all rounded-sm"
            >
                Contact Us
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;