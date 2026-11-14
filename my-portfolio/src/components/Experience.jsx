import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Web Application Developer',
      company: 'Freelance & Personal Projects',
      period: '2023 - Present',
      description: 'Built and deployed real-world full-stack web applications including admin dashboards, custom authentication, and responsive user interfaces using modern web stacks.',
      tech: ['React', 'HTML/CSS', 'PHP', 'MySQL', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-white px-4 border-t border-slate-900">
            <div data-aos="fade-up" data-aos-duration="1000">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-center tracking-tight">Experience</h2>
        <p className="text-gray-400 text-center mb-16">Hands-on experience in building scalable web solutions.</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                <span className="text-xs font-semibold bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800 text-gray-400 w-fit">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-gray-300 font-medium text-sm">{exp.company}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-slate-950 text-blue-300 px-3 py-1 rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}