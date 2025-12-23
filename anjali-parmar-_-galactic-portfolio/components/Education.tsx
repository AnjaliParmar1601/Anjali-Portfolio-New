
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1
        },
        height: 0,
        ease: "none"
      });

      // Animate Nodes
      gsap.from(".edu-node", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: "back.out(1.7)"
      });

      // Animate Cards
      gsap.from(".edu-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-950'}`}>
            ACADEMIC <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>FOUNDATION</span>
          </h2>
          <div className={`h-1 w-20 mx-auto ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 bg-gradient-to-b ${
              isDark 
                ? 'from-transparent via-neon-teal to-transparent' 
                : 'from-transparent via-blue-400 to-transparent'
            }`}
          >
            <div ref={lineRef} className={`w-full h-full bg-inherit opacity-50`}></div>
          </div>

          <div className="space-y-16">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={edu.id} className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* Center Node */}
                <div className={`edu-node absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 z-10 flex items-center justify-center ${
                  isDark 
                    ? 'bg-space-900 border-neon-teal shadow-[0_0_15px_rgba(0,240,255,0.5)]' 
                    : 'bg-white border-blue-600 shadow-md'
                }`}>
                  <GraduationCap size={14} className={isDark ? 'text-neon-teal' : 'text-blue-600'} />
                </div>

                {/* Content Card */}
                <div className={`edu-card w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                   index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className={`p-6 rounded-xl border backdrop-blur-md transition-all hover:scale-[1.02] ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-neon-teal/30' 
                      : 'bg-white border-gray-100 shadow-lg'
                  }`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                      isDark 
                        ? 'bg-neon-teal/10 text-neon-teal' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {edu.period}
                    </span>
                    <h3 className={`font-display text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {edu.institution}
                    </h3>
                    <h4 className={`text-lg font-medium mb-2 ${isDark ? 'text-neon-aqua' : 'text-blue-600'}`}>
                      {edu.degree}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
                      {edu.location} • <span className="font-semibold text-current">{edu.grade}</span>
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for Grid Alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
