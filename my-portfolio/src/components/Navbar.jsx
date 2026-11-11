import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Kitendakazi cha kuteremsha ukurasa taratibu (Smooth Scroll)
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Kufunga menu ya simu ikibonyezwa
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121110]/95 backdrop-blur-md z-50 border-b border-white/5 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Logo ya Box */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Links zilizopangwa kwa mtiririko sahihi (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="hover:text-white transition cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition cursor-pointer">About</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition cursor-pointer">Experience</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition cursor-pointer">Skills</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition cursor-pointer">Contact</a>
        </div>

        {/* Download CV Button (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="/Taison-Nelson-CV.pdf" 
            download="Taison-Nelson-CV.pdf"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-md text-sm"
          >
            Download CV
          </a>
        </div>

        {/* Kitufe cha Hamburger (Kinaonekana kwenye Simu pekee) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icon ya X (Kufunga)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon ya Mistari Mitatu (Hamburger)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Menu ya Simu (Inafunguka pale Hamburger inapobonyezwa) */}
      {isOpen && (
        <div className="md:hidden bg-[#121110] border-t border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="block text-gray-300 hover:text-white font-medium py-1">Home</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="block text-gray-300 hover:text-white font-medium py-1">About</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="block text-gray-300 hover:text-white font-medium py-1">Experience</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="block text-gray-300 hover:text-white font-medium py-1">Skills</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="block text-gray-300 hover:text-white font-medium py-1">Projects</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="block text-gray-300 hover:text-white font-medium py-1">Contact</a>
          <div className="pt-2">
            <a 
              href="/Taison-Nelson-CV.pdf" 
              download="Taison-Nelson-CV.pdf"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}