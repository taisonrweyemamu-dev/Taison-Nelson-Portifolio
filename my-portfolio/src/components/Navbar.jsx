import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Jina lako */}
          <div className="flex-shrink-0 font-bold text-xl text-blue-600">
            Taison Nelson
          </div>

          {/* Links za Desktop (Hazionekani kwenye simu) */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <a 
              href="/Taison_Nelson_CV.pdf" 
              download="Taison_Nelson_CV.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Download CV
            </a>
          </div>

          {/* Kitufe cha Hamburger (Kinaonekana kwenye Simu pekee) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none p-2"
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
      </div>

      {/* Menu ya Simu (Inafunguka pale Hamburger inapobonyezwa) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            Contact
          </a>
          <div className="pt-2">
            <a 
              href="/Taison-Nelson-CV.pdf" 
              download="Taison-Nelson-CV.pdf"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}