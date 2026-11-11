import React from 'react';
import { FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  
  // Kitendakazi cha kuteremsha ukurasa taratibu (Smooth Scroll)
  const handleScrollTo = (e, id) => {
    e.preventDefault();
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

        {/* Links zilizopangwa kwa mtiririko sahihi (Experience kwanza, kisha Skills) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="hover:text-white transition cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition cursor-pointer">About</a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-white transition cursor-pointer">Experience</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-white transition cursor-pointer">Skills</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition cursor-pointer">Contact</a>
        </div>

        {/* Download CV Button */}
        <div>
        <a 
  href="/Taison-Nelson-CV.pdf" 
  download="Taison-Nelson-CV.pdf"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md"
>
  Download CV
</a>
        </div>

      </div>
    </nav>
  );
}