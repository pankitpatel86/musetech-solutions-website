import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BrandShowcase from './components/BrandShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black text-white min-h-screen selection:bg-brand-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <BrandShowcase />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Global decorative gradient overlay using internal tailwind config asset */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-grain mix-blend-overlay"></div>
    </div>
  );
}

export default App;