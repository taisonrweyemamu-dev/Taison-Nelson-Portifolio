import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import myPhoto from '../assets/picha-yangu.jpg';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#121110] text-[#e5ded8] px-6 sm:px-16 pt-28">
     
           <div data-aos="fade-up" data-aos-duration="1000">
 <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center justify-between">
        
        {/* Upande wa Kushoto: Maelezo na Social Icons Halisi */}
        <div className="lg:col-span-7 space-y-6">
          
          <h2 className="text-xl sm:text-2xl font-light text-gray-300 flex items-center gap-2">
            Hi, I'm <span className="w-2 h-2 rounded-full bg-amber-200/80"></span>
          </h2>

          <h1 className="text-5xl sm:text-7xl font-serif tracking-tight text-white font-normal">
            Taison <span className="font-sans font-light text-gray-400">Nelson.</span>
          </h1>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-mono">
            FULL STACK DEVELOPER
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            I build modern, responsive and user-friendly web applications with a focus on clean code, efficient APIs and real-world problem solving.
          </p>

          {/* Vifungo vya Action */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="bg-[#e5ded8] text-[#121110] hover:bg-white px-6 py-3.5 rounded-xl text-sm font-medium transition shadow-md flex items-center gap-2"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a 
  href="/Taison-Nelson-CV.pdf" 
  download="Taison-Nelson-CV.pdf"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md"
>
  Download CV
</a>
          </div>

          {/* Social Icons Halisi za SVG badala ya Herufi */}
          <div className="pt-6 flex items-center gap-4">
            {/* GitHub Icon */}
            <a 
              href="https://github.com/taisonrweyemamu-dev" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-[#1a1716] border border-white/10 rounded-xl hover:border-amber-200/40 text-gray-400 hover:text-white transition duration-300"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/taison-rweyemamu-78ba91425" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-[#1a1716] border border-white/10 rounded-xl hover:border-amber-200/40 text-gray-400 hover:text-white transition duration-300"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email Icon */}
            <a 
              href="mailto:taisonrweyemamu@gmail.com" 
              className="p-3 bg-[#1a1716] border border-white/10 rounded-xl hover:border-amber-200/40 text-gray-400 hover:text-white transition duration-300"
              title="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Upande wa Kulia: Sehemu ya Kuweka Picha Yako (Ikiwa na alt attribute rasmi) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-t-[140px] rounded-b-2xl bg-[#ede7de] border-4 border-[#1a1716] overflow-hidden shadow-2xl p-2">
            <img 
            src={myPhoto} 

  
              alt="Picha ya Taison - Full Stack Developer" 
              className="w-full h-full object-cover rounded-t-[130px] rounded-b-xl filter  hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}