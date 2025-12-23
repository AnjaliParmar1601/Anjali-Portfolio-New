
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../constants';
import { Layout, Palette, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={32} />,
  Palette: <Palette size={32} />,
  Zap: <Zap size={32} />,
};

const Services: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className={`py-20 relative ${isDark ? '' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            TECHNICAL <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>EXPERTISE</span>
          </h2>
          <div className={`h-1 w-20 mx-auto ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className={`service-card group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-space-800/40 border-white/5 hover:border-neon-teal/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                  : 'bg-white border-gray-100 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`mb-6 inline-block p-4 rounded-xl transition-colors duration-300 ${
                isDark 
                  ? 'bg-white/5 text-neon-teal group-hover:bg-neon-teal group-hover:text-black' 
                  : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              }`}>
                {iconMap[service.icon]}
              </div>
              
              <h3 className={`font-display text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
