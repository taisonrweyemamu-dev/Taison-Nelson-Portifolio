import React from 'react';

export default function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L12.01 24l-8.58-2.437L1.5 0zm17.036 4.133H5.464l.327 3.667h12.418l-.327 3.667H7.135l.342 3.84 4.533 1.253 4.533-1.253.31-3.48h-2.127l-.142 1.6-2.574.693-2.573-.693-.213-2.4h7.52l-.567 6.347-4.66 1.293-4.66-1.293-.71-7.987H4.378L3.927 2.067h16.146l-.573 2.066z"/></svg> },
    { name: "CSS", icon: <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2l2.2 16.5L12 21l6.8-2.5L21 2H3zm15.4 3.5l-.2 2.5H8.3l.1 1.5h9.8l-.8 8.5-5.4 1.8-5.4-1.8-.4-4.5h1.7l.3 3.1 3.8 1.3 3.8-1.3.5-5.5H6.7L6 5.5h12.4z"/></svg> },
    { name: "JavaScript", icon: <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm15.5 14.5c.3-.5.5-1.1.5-1.8 0-1.7-1.3-2.9-3.2-2.9-.9 0-1.6.3-2.1.8l.9 1.1c.3-.3.7-.5 1.2-.5.7 0 1.1.4 1.1 1 0 .5-.3.9-1 1-.8.2-1.9.7-1.9 2 0 1.1.9 1.8 2.2 1.8.8 0 1.5-.3 2-.8l-.8-1.2c-.3.3-.7.5-1.2.5-.6 0-1-.3-1-.8 0-.5.4-.8 1.4-1 1-.2 1.9-.6 1.9-1.9zM9.3 16.5c.3.5.7.8 1.3.8.6 0 1-.3 1-.8 0-.4-.3-.7-.9-.9l-.4-.2c-.9-.4-1.5-.9-1.5-1.9 0-1 .8-1.8 2.1-1.8.8 0 1.4.3 1.8.7l-.8 1.2c-.3-.3-.6-.5-1-.5-.5 0-.8.3-.8.7 0 .4.2.6.8.8l.4.2c1.1.5 1.6 1 1.6 2 0 1.1-.8 1.9-2.3 1.9-1 0-1.8-.4-2.2-1l.9-1.1z"/></svg> },
    { name: "React", icon: <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(30 12 12)"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(90 12 12)"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(150 12 12)"/></svg> },
    { name: "Tailwind CSS", icon: <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.1 0-3.9 1.1-4.8 2.8C6.3 7.4 4.8 7 3.5 7c-.3 0-.5.2-.5.5 0 2.2 1.5 4 3.5 4.5-.4.8-.6 1.8-.6 2.8 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2C16.1 7.7 14.2 6 12 6z"/></svg> },
   
  ];

  const backendSkills = [
    { name: "PHP", icon: <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 11.2h-1.6v2.1h-1.5v-5.6h3.1c1.1 0 1.8.6 1.8 1.6 0 .8-.5 1.4-1.8 1.9zm-3.1-3.1h1.4c.5 0 .8.3.8.8 0 .5-.3.8-.8.8h-1.4v-1.6zm-4.1 3.1h-1.6v2.1H6.5v-5.6h3.1c1.1 0 1.8.6 1.8 1.6 0 .8-.5 1.4-1.8 1.9zm-3.1-3.1h1.4c.5 0 .8.3.8.8 0 .5-.3.8-.8.8h-1.4v-1.6z"/></svg> },
    { name: "Java", icon: <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8 2c-.3.4-.6.9-.8 1.4-1.2 2.8-.7 5.4.9 7.4-1.2-2.1-1.5-4.6-.6-7.3.1-.3.2-.6.4-.9L10.8 2zm3.1 2c-.2.5-.4 1-.5 1.5-.9 3-.3 5.8 1.4 7.9-1.5-2.2-1.9-4.8-.9-7.7.1-.6.3-1.2.5-1.7l-.5-.0zm-4.7 9.3c-1.4 0-2.8.5-3.8 1.5-1 1-1.5 2.3-1.5 3.7 0 1.4.5 2.7 1.5 3.7 1 1 2.4 1.5 3.8 1.5h6.3c1.4 0 2.8-.5 3.8-1.5 1-1 1.5-2.3 1.5-3.7 0-1.4-.5-2.7-1.5-3.7-1-1-2.4-1.5-3.8-1.5h-6.3zm0 1.5h6.3c1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6 0 1-.4 1.9-1.1 2.6-.7.7-1.6 1.1-2.6 1.1h-6.3c-1 0-1.9-.4-2.6-1.1-.7-.7-1.1-1.6-1.1-2.6 0-1 .4-1.9 1.1-2.6.7-.7 1.6-1.1 2.6-1.1z"/></svg> },
    { name: "Python", icon: <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9 2c-3.1 0-3 1.3-3 1.3v1.6h6v.7H7.4s-2.1-.1-2.1 2.9c0 3 1.8 2.9 1.8 2.9h1.2V10s-.1-1.1 1.1-1.1h4.1s1.1 0 1.1-1.1V4.2s.3-2.2-3.7-2.2zm-2.7 1.8c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7zm3.1 14.3c3.1 0 3-1.3 3-1.3v-1.6H12v-.7h5.5s2.1.1 2.1-2.9c0-3-1.8-2.9-1.8-2.9h-1.2v1.4s.1 1.1-1.1 1.1H9.4s-1.1 0-1.1 1.1v4.6s-.3 2.2 3.7 2.2zm2.7-1.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></svg> },
    { name: "SQL", icon: <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 4.69 2 8s4.48 6 10 6 10-2.69 10-6-4.48-6-10-6zm0 10c-4.41 0-8-1.79-8-4s3.59-4 8-4 8 1.79 8 4-3.59 4-8 4zm0 3c-5.52 0-10 1.79-10 4s4.48 4 10 4 10-1.79 10-4-4.48-4-10-4zm0 6c-4.41 0-8-1.34-8-3s3.59-3 8-3 8 1.34 8 3-3.59 3-8 3z"/></svg> }
  ];

  const toolsList = [
    { name: "Visual Studio", icon: <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.525 2.125a.5.5 0 0 0-.525.025l-10 6.5a.5.5 0 0 0 0 .85l10 6.5a.5.5 0 0 0 .775-.425v-13a.5.5 0 0 0-.25-.425zM6.5 9.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> },
    { name: "Android Studio", icon: <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.75-3.03c.18-.31.07-.71-.24-.89-.31-.18-.71-.07-.89.24l-1.78 3.08C14.93 8.3 13.51 8 12 8s-2.93.3-4.44.88L5.78 5.8c-.18-.31-.58-.42-.89-.24-.31.18-.42.58-.24.89l1.75 3.03C4.33 10.96 3 13.33 3 16h18c0-2.67-1.33-5.04-3.4-6.52zM8 13.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> },
    { name: "Git", icon: <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M22.6 10.6L13.4 1.4c-.8-.8-2-.8-2.8 0L7.4 4.6l2.3 2.3c.4-.2.9-.2 1.3.2.4.4.4.9.2 1.3l2.8 2.8c.4-.2.9-.2 1.3.2.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-.9-.2-1.3L11 9.9V15c.3.2.6.5.8.9.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.5-.4.8-.5v-4.6c-.3-.2-.6-.5-.8-.9-.6-.6-.6-1.5 0-2.1L6.7 3.5 1.4 8.8c-.8.8-.8 2 0 2.8l9.2 9.2c.8.8 2 .8 2.8 0l9.2-9.2c.8-.8.8-2 0-2.8z"/></svg> },
    { name: "GitHub", icon: <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
    { name: "XAMPP", icon: <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> }
  ];

  return (
    <section id="skills" className="py-20 bg-[#141211] text-white px-6 border-t border-white/5">
     
           <div data-aos="fade-up" data-aos-duration="1000">
 <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Kichwa cha Juu */}
        <div className="space-y-1">
          <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em]">
            EXPERTISE & ENVIRONMENT
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-[#f3ede7] font-normal">
            Tech Stack & Tools
          </h2>
        </div>

        {/* 1. Frontend Section */}
        <div className="grid lg:grid-cols-12 gap-6 items-center border-b border-white/10 pb-10">
          <div className="lg:col-span-4">
            <h3 className="text-base font-serif font-medium text-amber-200">
              Frontend Development
            </h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {frontendSkills.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#1c1917]/90 border border-white/10 hover:border-amber-200/40 px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              >
                <div className="group-hover:scale-110 transition duration-300 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition truncate">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Backend & Databases Section */}
        <div className="grid lg:grid-cols-12 gap-6 items-center border-b border-white/10 pb-10">
          <div className="lg:col-span-4">
            <h3 className="text-base font-serif font-medium text-amber-200">
              Backend & Databases
            </h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 gap-3">
            {backendSkills.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#1c1917]/90 border border-white/10 hover:border-amber-200/40 px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              >
                <div className="group-hover:scale-110 transition duration-300 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition truncate">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Development Tools Section */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4">
            <h3 className="text-base font-serif font-medium text-amber-200">
              Development Tools
            </h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {toolsList.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#1c1917]/90 border border-white/10 hover:border-amber-200/40 px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              >
                <div className="group-hover:scale-110 transition duration-300 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition truncate">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}