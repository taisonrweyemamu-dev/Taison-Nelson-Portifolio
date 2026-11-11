import React from 'react';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project4Img from '../assets/project4.jpg';



export default function Projects() {
  const projects = [
    {
      title: 'Horticulture Management System',
      category: 'Full-Stack Horticulture System',
      description: 'A comprehensive Horticulture Management System built to assist farmers in managing their agricultural products. The system enables users to track crop production, organize farm inventories, and buy products while in the farm, bridging the gap between farm management and market access.',
      tech: ['Html', 'SQLDB', 'REST APIs', 'Tailwind CSS', 'PHP', 'JavaScript'],
      image: project1Img,
      liveDemo: '#',
      github: 'https://github.com/taisonrweyemamu-dev/Horticulture'
    },
    {
      title: 'Poultry Market Link',
      category: 'chicken farmers connector',
      description: 'A specialized web application designed to connect broiler chicken farmers directly with buyers. The platform streamlines poultry trading by eliminating middlemen, making it easy to list products, view prices, and manage sales.',
      tech: ['Html', 'SQLDB', 'REST APIs', 'CSS', 'PHP', 'JavaScript'],
      image: project2Img,
      liveDemo: '#',
      github: 'https://github.com/taisonrweyemamu-dev/poultry_market_link'
    },
    {
      title: 'Expense Tracker',
      category: 'Budget and Expense Platform',
      description: 'A feature-rich, native Android application built using Java to help users monitor,manage and optimize their daily financial habits.The application emphasizes security, real-time budget tracking, and reliable offline data storage.',
      tech: ['JAVA', 'SQLite', 'JavaScript', 'Tailwind CSS'],
      image: project3Img,
      liveDemo: '#',
      github: 'https://github.com/taisonrweyemamu-dev/ExpenseTracker'
    },
       {
      title: 'House Finder ',
      category: ' Platform',
      description: 'Developed a modern web application for finding, renting, and listing residential properties',
      tech: ['React', 'REST API', 'JavaScript',"HTML", 'Tailwind CSS'],
      image: project4Img,
      liveDemo: '#',
      github: 'https://github.com/taisonrweyemamu-dev/house-finder'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white px-4 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2">Hands-On Experience</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Experience & Projects</h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">Real-world full-stack web applications, collaborative client software, and production deployments.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition duration-300 shadow-xl"
            >
              {/* Picha ya Mradi */}
              <div className="h-52 overflow-hidden bg-slate-950 border-b border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-90 hover:opacity-100"
                />
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-slate-950 border border-slate-800 text-gray-300 px-3.5 py-1.5 rounded-lg font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Vifungo vya Live Demo na GitHub */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                    <a 
                      href={project.liveDemo} 
                      className="bg-white text-slate-950 hover:bg-gray-200 px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow"
                    >
                      Live Demo &rarr;
                    </a>
                    <a 
                      href={project.github} 
                      className="bg-slate-950 border border-slate-800 text-gray-300 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}