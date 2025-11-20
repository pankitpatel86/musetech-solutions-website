import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHY_CHOOSE, COMPANY_INFO } from '../constants';
import { Diamond, Target, Zap, HeartHandshake } from 'lucide-react';

const iconMap: any = {
  Diamond: Diamond,
  Target: Target,
  Zap: Zap,
  HeartHandshake: HeartHandshake
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-black">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                 <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 max-w-md mx-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                        alt="Musetech Team" 
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 </div>
                 
                 {/* Floating accent balls */}
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gold rounded-full mix-blend-multiply opacity-80 animate-float" />
                 <div className="absolute -top-5 -right-5 w-20 h-20 bg-brand-marketing rounded-full mix-blend-screen opacity-60" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="font-display text-4xl md:text-5xl mb-8 text-white">
                    About <span className="text-brand-gold">Musetech</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light">
                    {COMPANY_INFO.about}
                </p>
                <div className="h-1 w-20 bg-brand-gold" />
            </motion.div>
        </div>

        {/* Why Choose Section */}
        <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-white">Why Choose Musetech?</h2>
            <p className="text-gray-400 text-lg font-light">Purpose-built for clarity, growth, and long-term impact in the UAE.</p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {WHY_CHOOSE.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                    <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-brand-gold/30"
                    >
                        <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                            <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-xl text-white mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">{item.description}</p>
                    </motion.div>
                )
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;