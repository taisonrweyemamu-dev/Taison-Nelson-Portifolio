import React from 'react';
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#ede7de] text-[#1c1917] px-6 transition-colors duration-500">
      <div data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Sehemu ya Juu: Maelezo na Code Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Upande wa Kushoto: Maelezo ya Kukuhusu */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif tracking-tight font-normal text-[#1c1917]">
              More About Me
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base sm:text-lg font-light leading-relaxed">
              <p>
                My web development journey began during my Information Technology studies, where I discovered a passion for building practical, user-focused applications. I enjoy turning complex ideas into clean, maintainable code using modern technologies like PHP, React, HTML & CSS, JavaScript, and MySQL[cite: 4].
              </p>
              <p>
                I have built several full-stack applications—including a Horticulture Management System, Poultry Market Link, an Expense Tracker and House Finder. These projects provided hands-on experience in user authentication, data management, responsive UI design, and API optimization[cite: 5].
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-700" />
                <span>Tanzania</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-amber-700" />
                <span>Available for remote work</span>
              </div>
            </div>
          </div>

          {/* Upande wa Kulia: Code Editor Box kama ilivyo kwenye picha */}
          <div className="lg:col-span-5">
            <div className="bg-[#121110] rounded-2xl shadow-2xl border border-white/10 overflow-hidden text-gray-300 font-mono text-xs sm:text-sm">
              {/* Window Header Dots */}
              <div className="bg-[#1a1716] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-xs font-mono">developer.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto leading-relaxed">
                <span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> = &#123;<br/>
                &nbsp;&nbsp;name: <span className="text-emerald-300">"Taison"</span>,<br/>
                &nbsp;&nbsp;role: <span className="text-emerald-300">"Full Stack Developer"</span>,<br/>
                &nbsp;&nbsp;skills: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"HTML/CSS"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"PHP"</span>, <span className="text-emerald-300">"MySQL"</span><br/>
                &nbsp;&nbsp;],<br/>
                &nbsp;&nbsp;learning: <span className="text-amber-400">true</span>,<br/>
                &nbsp;&nbsp;building: <span className="text-emerald-300">"real world projects"</span><br/>
                &#125;;<br/><br/>
                <span className="text-gray-500 italic">// Better solutions, always.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sehemu ya Chini: Education Card */}
        <div className="bg-[#fcf8f2] border border-[#dcd2c4] p-8 rounded-3xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#121110] text-white rounded-2xl shadow-md">
              <GraduationCap size={28} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#e5ddd0] text-gray-700 px-2.5 py-1 rounded-md">
                  Education
                </span>
                <span className="text-xs text-gray-500">Degree Completed</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1c1917] pt-1">
                Bachelor of Science In Information Technology.
              </h3>
              <p className="text-sm text-gray-600 font-light">
                INSTITUTE OF FINANCE MANAGEMENT — Comprehensive in Software Development & Databases.
              </p>
            </div>
          </div>

          <div className="bg-[#ede7de] border border-[#dcd2c4] px-4 py-2 rounded-xl text-xs font-medium text-gray-700 w-fit">
            Capstone: Web Portfolio System
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}