
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import SparkCanvas from './SparkCanvas';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial Reveal Animation
      tl.from(textContainerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      })
      .from(imageContainerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=1") 
      .from(".hero-action-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6");

      // Smooth floating animation
      gsap.to(imageContainerRef.current, {
        y: 12,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !glowRef.current) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 10;
    const yPos = (clientY / window.innerHeight - 0.5) * 10;

    gsap.to(imageRef.current, { x: xPos, y: yPos, duration: 1.2, ease: "power2.out" });
    gsap.to(glowRef.current, { x: -xPos * 1.5, y: -yPos * 1.5, duration: 1.5, ease: "power2.out" });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <SparkCanvas isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div ref={textContainerRef} className="flex-1 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase backdrop-blur-sm ${
              isDark ? 'border-neon-teal/20 bg-neon-teal/5 text-neon-teal' : 'border-blue-600/10 bg-blue-50 text-blue-700'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-neon-teal' : 'bg-blue-600'}`}></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1 className={`font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              ANJALI <br/>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-neon-teal to-neon-blue' : 'from-blue-700 to-cyan-600'}`}>
                PARMAR
              </span>
            </h1>

            <p className={`max-w-md mx-auto lg:mx-0 text-lg md:text-xl mb-10 font-medium leading-relaxed ${isDark ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
              Senior Frontend Engineer building <span className={isDark ? 'text-white' : 'text-blue-900 font-bold'}>high-performance</span> web systems with a focus on precision and scalability.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
              
              {/* Premium Download Resume Button */}
              <a 
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Anjali_Parmar_Resume.pdf"
                className={`hero-action-item group relative overflow-hidden flex items-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest text-xs transition-all duration-500 shadow-2xl ${
                  isDark 
                    ? 'bg-white text-black hover:bg-neon-teal' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30'
                }`}
              >
                {/* Scanner Effect on Button */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full">
                    <div className={`absolute -inset-full top-0 block h-full w-full skew-x-12 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:animate-scan group-hover:opacity-100 ${
                         isDark ? 'via-black/10' : 'via-white/20'
                    }`}></div>
                </div>

                <div className="relative z-10 flex items-center gap-3">
                  <Download size={20} className="transition-transform group-hover:translate-y-0.5" />
                  <span>DOWNLOAD RESUME</span>
                </div>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-8">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hero-action-item flex items-center gap-2 font-bold tracking-widest text-[11px] transition-all duration-300 ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Linkedin size={18} />
                  LINKEDIN
                </a>
                
                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className={`hero-action-item flex items-center gap-2 font-bold tracking-widest text-[11px] transition-all duration-300 ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Mail size={18} />
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div ref={imageContainerRef} className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div 
                ref={glowRef}
                className={`absolute inset-0 rounded-full blur-[80px] opacity-20 ${isDark ? 'bg-neon-teal' : 'bg-blue-400'}`}
              ></div>
              
              <div className={`relative w-full h-full rounded-full p-2 border transition-all duration-700 overflow-hidden backdrop-blur-sm ${
                 isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-2xl'
              }`}>
                 <img 
                    ref={imageRef}
                    src="../public/anjali-profile.png" 
                    alt="Anjali Parmar" 
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000"
                 />
              </div>

              {/* ReactJS Expert Badge */}
              <div className={`absolute -bottom-2 -right-2 px-6 py-3 rounded-full border backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:scale-105 ${
                isDark ? 'bg-black/80 border-white/20 text-neon-teal shadow-neon-teal/10' : 'bg-white/95 border-slate-200 text-blue-700'
              }`}>
                <span className="text-[11px] font-black tracking-[0.3em] uppercase">ReactJS EXPERT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
