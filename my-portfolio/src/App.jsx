import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() =>{
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppFloat />
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-right text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Taison. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

