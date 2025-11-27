import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

const BrandCard: React.FC<{ brand: typeof BRANDS[0]; index: number }> = ({ brand, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative md:min-h-screen md:sticky md:top-0 flex items-center justify-center overflow-hidden py-20 ${brand.color}`}>
      
      {/* Subtle pattern overlay using internal tailwind config asset */}
      <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile: flex-col-reverse (Image Top, Content Bottom). Desktop: Row/Row-Reverse */}
        <div className={`flex flex-col-reverse ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex-1 px-4 md:px-16 lg:px-24 w-full"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.accent }} />
                <span className="text-xs uppercase tracking-widest text-white/80">{brand.name.split('|')[0]}</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-white leading-tight">
                {brand.name.includes('|') ? brand.name.split('|')[1] : brand.name}
            </h2>
            
            <p className="text-lg md:text-xl text-brand-gold mb-8 italic font-serif tracking-wide">{brand.tagline}</p>
            
            <p className="text-gray-300 mb-10 leading-relaxed font-light text-base md:text-lg border-l-2 border-white/10 pl-6">
                {brand.description}
            </p>

            <div className="mb-12">
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Key Offerings</h4>
                <ul className="space-y-4">
                    {brand.services.map((service, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-200 font-light text-sm md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            <a 
                href={brand.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-black transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
            >
                {brand.linkText}
                <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group w-full"
          >
            <div className="relative aspect-[4/5] md:aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black">
                <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t border-r border-white/30 rounded-tr-3xl" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b border-l border-white/30 rounded-bl-3xl" />
            </div>
            
            {/* Abstract Glow Behind - Reduced opacity to ensure foreground text readability is paramount */}
            <div 
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] opacity-30" 
                style={{ backgroundColor: brand.accent }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const BrandShowcase: React.FC = () => {
  return (
    <section id="brands" className="bg-black relative z-20">
      <div className="py-32 text-center bg-black z-30 relative border-b border-white/10">
          <p className="text-brand-gold uppercase tracking-[0.3em] text-xs mb-6">One Vision. Three Strengths.</p>
          <h2 className="font-display text-5xl md:text-7xl text-white font-light">Our Brands</h2>
          <div className="w-px h-20 bg-gradient-to-b from-brand-gold to-transparent mx-auto mt-10" />
      </div>
      <div className="relative">
        {BRANDS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
        ))}
      </div>
    </section>
  );
};

export default BrandShowcase;