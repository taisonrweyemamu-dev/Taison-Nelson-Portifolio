import React from 'react';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#100e0d] text-white px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl font-serif tracking-tight font-normal">
            Let's build something <span className="italic text-gray-400">remarkable</span> together.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Whether you have an exciting project idea, a full-time role, or just want to discuss modern web development—my inbox is always open.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="mailto:taisonrweyemamu@gmail.com" 
            className="bg-[#e5ded8] text-[#121110] hover:bg-white px-6 py-3.5 rounded-xl text-sm font-medium transition shadow-md flex items-center gap-2"
          >
            <Mail size={16} /> Send Me an Email <ArrowUpRight size={16} />
          </a>
          <a 
            href="#resume" 
            className="bg-[#1a1716] border border-white/10 hover:bg-[#26211f] text-white px-6 py-3.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
          >
            <FileText size={16} /> Download Resume
          </a>
        </div>

        {/* Social Cards Chini zikiwa na Link Sahihi */}
        <div className="grid sm:grid-cols-3 gap-4 pt-12 text-left">
          
          {/* Email Link Card */}
          <a 
            href="mailto:taisonrweyemamu@gmail.com" 
            className="bg-[#151312] border border-white/10 hover:border-amber-200/40 p-6 rounded-2xl space-y-2 transition-all duration-300 hover:-translate-y-1 block group"
          >
            <Mail size={20} className="text-gray-400 group-hover:text-amber-200 transition" />
            <div className="text-xs text-gray-400 uppercase tracking-wider">Direct Email</div>
            <div className="text-sm font-medium text-white truncate">taisonrweyemamu@gmail.com</div>
          </a>

          {/* GitHub Link Card */}
          <a 
            href="https://github.com/taisonrweyemamu-dev" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-[#151312] border border-white/10 hover:border-amber-200/40 p-6 rounded-2xl space-y-2 transition-all duration-300 hover:-translate-y-1 block group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-200 transition" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <div className="text-xs text-gray-400 uppercase tracking-wider">GitHub</div>
            <div className="text-sm font-medium text-white">github.com/taison</div>
          </a>

          {/* LinkedIn Link Card */}
          <a 
            href="https://www.linkedin.com/in/taison-rweyemamu-78ba91425" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-[#151312] border border-white/10 hover:border-amber-200/40 p-6 rounded-2xl space-y-2 transition-all duration-300 hover:-translate-y-1 block group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-amber-200 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <div className="text-xs text-gray-400 uppercase tracking-wider">LinkedIn</div>
            <div className="text-sm font-medium text-white">linkedin.com/in/taison</div>
          </a>

        </div>

        <div className="pt-12 text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Taison. Built with React & Tailwind CSS.
        </div>

      </div>
    </section>
  );
}