
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import StarBackground from './components/StarBackground';
import FloatingShapes from './components/FloatingShapes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Initialize state based on the same logic as index.html
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      
      if (storedTheme === 'light' || (!storedTheme && systemLight)) {
        return false;
      }
      return true; // Default to dark
    }
    return true;
  });

  // Handle HTML class and localStorage updates when state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    // GSAP Transition overlay for smooth visual switch
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = isDark ? '#F4F7F9' : '#06080B';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    document.body.appendChild(overlay);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDark((prev) => !prev);
        // Fade out overlay after state change
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          onComplete: () => {
             if(document.body.contains(overlay)) {
                document.body.removeChild(overlay);
             }
          }
        });
      }
    });

    tl.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut'
    });
  };

  return (
    <div className={`relative min-h-screen font-sans antialiased transition-colors duration-300 ${isDark ? 'text-white bg-space-900' : 'text-slate-900 bg-slate-50'}`}>
      <StarBackground isDark={isDark} />
      <FloatingShapes isDark={isDark} />
      
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <AboutMe isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects isDark={isDark} />
        <Education isDark={isDark} />
        <Skills isDark={isDark} />
      </main>

      <Contact isDark={isDark} />
    </div>
  );
};

export default App;
