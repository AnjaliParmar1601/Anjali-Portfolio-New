import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingShapes: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       // Animate shapes
       gsap.to(".floating-shape", {
         y: "random(-50, 50)",
         x: "random(-30, 30)",
         rotation: "random(-20, 20)",
         duration: "random(10, 20)",
         repeat: -1,
         yoyo: true,
         ease: "sine.inOut",
         stagger: {
           amount: 5,
           from: "random"
         }
       });

       // Rotate crystals continuously
       gsap.to(".crystal-shape", {
         rotation: 360,
         duration: "random(40, 60)",
         repeat: -1,
         ease: "none"
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
       {/* Large Atmospheric Blobs */}
       <div className={`floating-shape absolute top-0 -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 transition-colors duration-700 ${isDark ? 'bg-purple-900' : 'bg-blue-200'}`} />

       <div className={`floating-shape absolute bottom-0 -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20 transition-colors duration-700 ${isDark ? 'bg-neon-blue/30' : 'bg-cyan-200'}`} />
       
       <div className={`floating-shape absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full blur-[90px] opacity-10 transition-colors duration-700 ${isDark ? 'bg-neon-teal/20' : 'bg-purple-200'}`} />

       {/* Crystal Geometric Shapes */}
       {/* Crystal 1 (Top Right) */}
       <div className={`floating-shape crystal-shape absolute top-[15%] right-[10%] w-24 h-24 border rotate-45 backdrop-blur-[1px] opacity-40 transition-colors duration-700 ${
         isDark ? 'border-white/10 bg-white/5' : 'border-blue-500/20 bg-blue-500/5'
       }`} />

       {/* Crystal 2 (Bottom Left) */}
       <div className={`floating-shape crystal-shape absolute bottom-[20%] left-[5%] w-16 h-16 border rounded-lg rotate-12 backdrop-blur-[1px] opacity-30 transition-colors duration-700 ${
         isDark ? 'border-neon-teal/20' : 'border-blue-400/20'
       }`} />

        {/* Crystal 3 (Center Background) */}
       <div className={`floating-shape crystal-shape absolute top-[60%] right-[30%] w-32 h-32 border border-dashed rounded-full opacity-20 transition-colors duration-700 ${
         isDark ? 'border-neon-aqua/20' : 'border-purple-400/20'
       }`} />
    </div>
  );
};

export default FloatingShapes;