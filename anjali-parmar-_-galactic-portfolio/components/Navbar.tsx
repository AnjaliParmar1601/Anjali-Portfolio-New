
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    // Initial reveal
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isDark 
          ? 'bg-space-900/95 border-white/5 text-white shadow-lg' 
          : 'bg-white/95 border-slate-200 text-slate-900 shadow-md'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Scrolls to Top */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-display font-bold text-2xl tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 ${isDark ? 'text-neon-teal focus-visible:ring-neon-teal' : 'text-blue-700 focus-visible:ring-blue-600'}`}
            >
              ANJALI<span className={isDark ? 'text-white' : 'text-slate-900'}>.DEV</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-sans font-medium text-sm uppercase tracking-widest transition-colors duration-300 relative group py-2 focus-visible:outline-none focus-visible:ring-1 rounded-sm px-1 ${
                    isDark 
                      ? 'text-gray-300 hover:text-neon-teal focus-visible:ring-neon-teal/50' 
                      : 'text-slate-700 hover:text-blue-600 focus-visible:ring-blue-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDark ? 'bg-neon-teal' : 'bg-blue-600'
                  }`}></span>
                </a>
              ))}
              
              {/* Refined Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-1 ring-offset-2 ${
                  isDark 
                    ? 'bg-white/10 text-yellow-400 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(253,224,71,0.3)] focus-visible:ring-neon-teal/50' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus-visible:ring-blue-400/50'
                }`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={20} fill="currentColor" className="opacity-90" /> : <Moon size={20} fill="currentColor" />}
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2 sm:gap-4">
            <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-1 ${
                    isDark ? 'text-yellow-400 hover:bg-white/10 focus-visible:ring-neon-teal/50' : 'text-slate-700 hover:bg-slate-100 focus-visible:ring-blue-400/50'
                }`}
            >
                {isDark ? <Sun size={22} fill="currentColor" /> : <Moon size={22} fill="currentColor" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-1 transition-colors duration-300 ${
                isDark ? 'text-gray-300 hover:text-neon-teal focus-visible:ring-neon-teal/50' : 'text-slate-700 hover:text-blue-600 focus-visible:ring-blue-400/50'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute w-full transition-colors duration-300 shadow-xl ${isDark ? 'bg-space-900 border-b border-white/5' : 'bg-white border-b border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-neon-teal hover:bg-white/5' 
                    : 'text-slate-800 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
