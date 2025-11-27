import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl md:text-7xl text-white mb-6"
            >
                Ready to <span className="text-brand-gold italic font-serif pr-2">grow?</span>
            </motion.h2>
            <p className="text-xl text-gray-400 font-light">Book a consultation for tailored UAE solutions.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
                <div>
                    <h3 className="font-display text-3xl text-white mb-8">Get in Touch</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-brand-gold transition-colors text-lg">{COMPANY_INFO.email}</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                                <a href="tel:+971529155461" className="text-white hover:text-brand-gold transition-colors text-lg">+971 529155461</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Visit Us</p>
                                <p className="text-white text-lg">Dubai Digital Park, Dubai Silicon Oasis, UAE</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-display text-xl text-white mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-all duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Form */}
            <motion.form 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-panel p-10 rounded-3xl"
            >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="Doe" />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>

                <div className="mb-8">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-brand-gold focus:outline-none transition-colors" placeholder="How can we help you?" />
                </div>

                <button type="submit" className="w-full bg-brand-gold text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-brand-goldLight transition-colors">
                    Send Message
                </button>
            </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;