
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_DATA } from '../constants';

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
  category: typeof SKILLS_DATA[0];
  isDark: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, isDark }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    
    // 3D Tilt Effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformStyle: "preserve-3d"
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  return (
    <div 
      className="skill-card-wrapper h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className={`skill-category relative h-full p-8 rounded-3xl overflow-hidden transition-all duration-300
          ${isDark 
            ? 'bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' 
            : 'bg-white border border-slate-300 shadow-xl shadow-slate-300/50'
          } backdrop-blur-xl group`}
      >
        {/* Spotlight Effect */}
        <div 
          className="absolute pointer-events-none -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,163,255,0.1)'}, transparent 40%)`
          }}
        />

        {/* Content */}
        <div className="relative z-10 translate-z-20">
          <h3 className={`font-display text-lg font-bold mb-6 pb-2 border-b inline-block ${
            isDark ? 'text-neon-aqua border-white/10' : 'text-blue-700 border-slate-300'
          }`}>
            {category.title}
          </h3>
          
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill) => (
              <span 
                key={skill}
                className={`skill-tag text-sm font-medium px-3.5 py-1.5 rounded-xl border transition-all duration-300 
                  ${isDark 
                    ? 'bg-black/20 border-white/5 text-gray-300 group-hover:border-neon-teal/30 group-hover:text-white group-hover:bg-white/5' 
                    : 'bg-slate-100 border-slate-300 text-slate-800 group-hover:border-blue-500 group-hover:text-blue-700 group-hover:bg-white'
                  } group-hover:scale-105 cursor-default shadow-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const ctx = gsap.context(() => {
        const wrappers = gsap.utils.toArray('.skill-card-wrapper');
        const tags = gsap.utils.toArray('.skill-tag');
        
        // Initial states
        gsap.set(wrappers, { autoAlpha: 0, y: 50 });
        gsap.set(tags, { autoAlpha: 0, scale: 0.5 });

        // Animate Cards Entry
        gsap.to(wrappers, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          overwrite: 'auto'
        });
        
        // Animate Tags Entry with a delay
        gsap.to(tags, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          autoAlpha: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.02,
          ease: "back.out(2)",
          delay: 0.5,
          overwrite: 'auto'
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" ref={containerRef} className={`py-24 ${isDark ? 'bg-space-800/30' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            TECHNICAL <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>ARSENAL</span>
          </h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            A comprehensive suite of modern technologies and tools I utilize to build world-class applications.
          </p>
        </div>

        {/* Updated grid to handle more items: 2 columns on tablet, 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category) => (
            <SkillCard key={category.title} category={category} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
