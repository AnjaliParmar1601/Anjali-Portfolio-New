
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Globe, Cpu, Sparkles, Zap, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-tile", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Simple counter animation for stats
      gsap.from(".stat-counter", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-950'}`}>
            CORE <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>IDENTITY</span>
          </h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Philosophy Card */}
          <div className={`about-tile md:col-span-8 p-8 md:p-10 rounded-3xl border backdrop-blur-xl flex flex-col justify-center relative overflow-hidden ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
          }`}>
            <div className={`absolute top-0 right-0 p-8 opacity-10 ${isDark ? 'text-neon-teal' : 'text-blue-600'}`}>
              <Layers size={120} strokeWidth={1} />
            </div>
            <div className={`flex items-center gap-3 mb-6 ${isDark ? 'text-neon-teal' : 'text-blue-600'}`}>
              <Code2 size={24} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">Engineering Philosophy</span>
            </div>
            <h3 className={`font-display text-2xl md:text-3xl font-bold mb-4 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              I don't just write code; <br/>
              <span className={isDark ? 'text-neon-aqua' : 'text-blue-700'}>I architect digital ecosystems.</span>
            </h3>
            <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              My approach lives at the intersection of high-fidelity design and performance engineering. 
              I specialize in bridging the gap between complex backend requirements and seamless, 
              intuitive user interfaces that scale across global markets.
            </p>
          </div>

          {/* Stats Card - Global Experience */}
          <div className={`about-tile md:col-span-4 p-8 rounded-3xl border backdrop-blur-xl flex flex-col items-center justify-center text-center ${
            isDark ? 'bg-neon-teal/5 border-neon-teal/20' : 'bg-blue-50 border-blue-200 shadow-xl'
          }`}>
            <Globe className={`mb-4 ${isDark ? 'text-neon-teal' : 'text-blue-600'}`} size={40} />
            <div className={`text-5xl font-display font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className="stat-counter">6</span>+
            </div>
            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Global Markets Scaled
            </p>
          </div>

          {/* Experience Counter Card */}
          <div className={`about-tile md:col-span-4 p-8 rounded-3xl border backdrop-blur-xl flex flex-col items-center justify-center text-center ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
          }`}>
            <Zap className={`mb-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} size={40} />
            <div className={`text-5xl font-display font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className="stat-counter">3</span>+
            </div>
            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Years of Engineering
            </p>
          </div>

          {/* Technical DNA Card */}
          <div className={`about-tile md:col-span-8 p-8 md:p-10 rounded-3xl border backdrop-blur-xl relative overflow-hidden flex flex-col justify-center ${
            isDark ? 'bg-space-800/80 border-white/5' : 'bg-slate-900 border-slate-950 shadow-2xl'
          }`}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="flex items-center gap-3 mb-6 text-neon-teal">
              <Cpu size={24} />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/50">Tech Stack DNA</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
               {['ReactJS', 'Angular', 'TypeScript', 'Node.js', 'RxJS', 'GSAP', 'Tailwind'].map((tech) => (
                 <div key={tech} className={`px-4 py-2 rounded-lg border text-sm font-bold tracking-wider ${
                   isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/10 border-white/20 text-white'
                 }`}>
                   {tech}
                 </div>
               ))}
               <div className="px-4 py-2 rounded-lg border border-dashed border-white/20 text-white/40 text-sm font-bold">
                 ...& more
               </div>
            </div>
            <p className="mt-6 text-white/60 text-sm italic leading-relaxed">
              "Building systems that don't just work, but inspire."
            </p>
          </div>

          {/* Aesthetic/Design Card */}
          <div className={`about-tile md:col-span-12 p-8 md:p-12 rounded-3xl border backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 ${
            isDark ? 'bg-gradient-to-r from-white/5 to-transparent border-white/10' : 'bg-gradient-to-r from-white to-slate-50 border-slate-200'
          }`}>
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-neon-teal/10' : 'bg-blue-600/10'}`}>
               <Sparkles className={isDark ? 'text-neon-teal' : 'text-blue-600'} size={48} />
            </div>
            <div className="flex-1">
              <h4 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Beyond the Grid</h4>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                My technical proficiency is matched by an eye for aesthetic detail. Whether it's crafting custom SIM activation portals or plug-and-play finance widgets, I ensure the user's journey is frictionless, responsive, and visually delightful.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-4">
               <div className={`w-12 h-12 rounded-full border border-dashed flex items-center justify-center ${isDark ? 'border-white/20 text-white/20' : 'border-slate-300 text-slate-300'}`}>JS</div>
               <div className={`w-12 h-12 rounded-full border border-dashed flex items-center justify-center ${isDark ? 'border-white/20 text-white/20' : 'border-slate-300 text-slate-300'}`}>UI</div>
               <div className={`w-12 h-12 rounded-full border border-dashed flex items-center justify-center ${isDark ? 'border-white/20 text-white/20' : 'border-slate-300 text-slate-300'}`}>UX</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
