import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
            <h2 className="font-display text-2xl text-white mb-1">MUSETECH</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{COMPANY_INFO.tagline}</p>
        </div>
        
        <p className="text-gray-600 text-xs text-center md:text-right">
          {COMPANY_INFO.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;