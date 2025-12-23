
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.experience-card');
        
        gsap.set(cards, { autoAlpha: 0, y: 50 }); // Set initial state manually

        gsap.to(cards, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          autoAlpha: 1, // Handles opacity and visibility
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          overwrite: 'auto'
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-950'}`}>
            PROFESSIONAL <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>JOURNEY</span>
          </h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div 
              key={exp.id}
              className={`experience-card group relative p-8 md:p-10 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] ${
                isDark 
                  ? 'bg-space-800/50 border-white/5 hover:border-neon-teal/30 hover:shadow-neon-teal/10 backdrop-blur-md' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-blue-500/10'
              }`}
            >
              {/* Decorative Corner Gradient on Hover */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neon-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl ${!isDark && 'from-blue-500/10'}`}></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4 relative z-10">
                <div>
                  <h3 className={`font-display text-2xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {exp.role}
                    <ArrowUpRight size={18} className={`opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${isDark ? 'text-neon-teal' : 'text-blue-600'}`} />
                  </h3>
                  <div className={`flex items-center gap-2 mt-2 font-medium transition-colors duration-300 ${isDark ? 'text-neon-aqua group-hover:text-neon-teal' : 'text-blue-700 group-hover:text-blue-800'}`}>
                    <Briefcase size={16} className="group-hover:animate-bounce" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className={`flex flex-col gap-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  <div className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'group-hover:text-gray-300' : 'group-hover:text-slate-900'}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'group-hover:text-gray-300' : 'group-hover:text-slate-900'}`}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 relative z-10">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isDark ? 'bg-neon-teal group-hover:shadow-[0_0_8px_#00F0FF]' : 'bg-blue-600 group-hover:bg-blue-500'}`}></span>
                    <span className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
