import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-right text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Taison. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}