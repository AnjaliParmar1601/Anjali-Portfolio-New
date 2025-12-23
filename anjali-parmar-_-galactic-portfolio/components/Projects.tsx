
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from '../constants';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  project: typeof PROJECTS_DATA[0];
  isDark: boolean;
}

const ProjectCard: React.FC<CardProps> = ({ project, isDark }) => {
  return (
    <div className="project-card-wrapper w-full h-full">
      <div 
        className={`project-card group h-full relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${
          isDark 
            ? 'bg-space-800/40' 
            : 'bg-white shadow-xl'
        } backdrop-blur-md`}
      >
        {/* ============================== */}
        {/* DEPTH EFFECT                   */}
        {/* ============================== */}
        
        {/* Base Depth Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
           <div className={`absolute inset-0 bg-gradient-to-br ${
             isDark ? 'from-neon-teal/5 to-transparent' : 'from-blue-400/5 to-transparent'
           }`}></div>
        </div>

        {/* ============================== */}
        {/* SCANNER EFFECT                 */}
        {/* ============================== */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
            {/* Broad scanner beam */}
            <div className={`absolute -inset-full top-0 block h-full w-full skew-x-12 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:animate-scan group-hover:opacity-100 ${
                 isDark ? 'via-neon-teal/10' : 'via-blue-600/10'
            }`}></div>
            
            {/* Sharper scanner line */}
             <div className={`absolute -inset-full top-0 block h-full w-full skew-x-12 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:animate-scan group-hover:opacity-100 ${
                 isDark ? 'via-neon-teal/40' : 'via-blue-600/40'
            }`} style={{ animationDelay: '0.1s' }}></div>
        </div>

        {/* ============================== */}
        {/* GLOSSY CORNERS                 */}
        {/* ============================== */}
        
        {/* Top Left */}
        <div className={`absolute top-0 left-0 w-12 h-12 rounded-tl-2xl border-t-[1px] border-l-[1px] transition-all duration-500 z-10 ${
            isDark ? 'border-white/40' : 'border-gray-400/50'
        }`}>
             <div className={`absolute top-0 left-0 w-full h-full rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                isDark ? 'from-white/30 to-transparent' : 'from-blue-600/20 to-transparent'
            }`}></div>
        </div>

        {/* Top Right */}
        <div className={`absolute top-0 right-0 w-12 h-12 rounded-tr-2xl border-t-[1px] border-r-[1px] transition-all duration-500 z-10 ${
            isDark ? 'border-white/40' : 'border-gray-400/50'
        }`}>
             <div className={`absolute top-0 right-0 w-full h-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl ${
                isDark ? 'from-white/30 to-transparent' : 'from-blue-600/20 to-transparent'
            }`}></div>
        </div>

        {/* Bottom Left */}
        <div className={`absolute bottom-0 left-0 w-12 h-12 rounded-bl-2xl border-b-[1px] border-l-[1px] transition-all duration-500 z-10 ${
            isDark ? 'border-white/40' : 'border-gray-400/50'
        }`}>
             <div className={`absolute bottom-0 left-0 w-full h-full rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${
                isDark ? 'from-white/30 to-transparent' : 'from-blue-600/20 to-transparent'
            }`}></div>
        </div>

        {/* Bottom Right */}
        <div className={`absolute bottom-0 right-0 w-12 h-12 rounded-br-2xl border-b-[1px] border-r-[1px] transition-all duration-500 z-10 ${
            isDark ? 'border-white/40' : 'border-gray-400/50'
        }`}>
             <div className={`absolute bottom-0 right-0 w-full h-full rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl ${
                isDark ? 'from-white/30 to-transparent' : 'from-blue-600/20 to-transparent'
            }`}></div>
        </div>

        {/* ============================== */}
        {/* CARD CONTENT                   */}
        {/* ============================== */}

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
             <h3 className={`font-display text-xl font-bold tracking-wide transition-colors duration-300 ${
                 isDark ? 'text-white group-hover:text-neon-teal' : 'text-slate-900 group-hover:text-blue-600'
             }`}>
              {project.title}
            </h3>
             <div className={`h-2 w-2 rounded-full transition-all duration-500 ${
                 isDark 
                 ? 'bg-neon-teal shadow-[0_0_8px_#00F0FF] group-hover:shadow-[0_0_15px_#00F0FF] group-hover:scale-125' 
                 : 'bg-blue-600 group-hover:bg-blue-500'
             }`}></div>
          </div>
         
          <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className={`text-[10px] uppercase font-bold px-2 py-1 rounded border transition-colors duration-300 ${
                  isDark 
                    ? 'border-neon-teal/30 text-neon-teal bg-neon-teal/5 group-hover:border-neon-teal/60' 
                    : 'border-blue-200 text-blue-600 bg-blue-50 group-hover:border-blue-300'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`pt-4 border-t transition-colors duration-300 ${
              isDark ? 'border-white/10 group-hover:border-white/20' : 'border-gray-100 group-hover:border-blue-100'
          }`}>
            <h4 className={`text-xs uppercase tracking-widest font-bold mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className={`text-sm flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                  <span className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      isDark ? 'bg-neon-aqua group-hover:bg-neon-teal group-hover:shadow-[0_0_5px_#00F0FF]' : 'bg-blue-400 group-hover:bg-blue-500'
                  }`}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 20%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className={`py-24 relative ${isDark ? 'bg-space-800' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            SELECTED <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>WORKS</span>
          </h2>
          <div className={`h-1 w-20 mb-6 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
          <p className={`max-w-2xl text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Engineered scalable solutions and intuitive interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
