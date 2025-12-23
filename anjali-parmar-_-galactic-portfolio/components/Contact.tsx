import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <section id="contact" className={`py-16 border-t ${isDark ? 'bg-space-900 border-white/5' : 'bg-light-bg border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-display text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          LET'S <span className={isDark ? 'text-neon-teal' : 'text-blue-600'}>CONNECT</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className={`flex items-center gap-3 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
            <Mail size={20} />
            <span>{SOCIAL_LINKS.email}</span>
          </a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className={`flex items-center gap-3 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
            <Phone size={20} />
            <span>{SOCIAL_LINKS.phone}</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mb-12">
           <a 
            href={SOCIAL_LINKS.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all hover:scale-110 ${
              isDark 
                ? 'border-white/10 bg-white/5 text-neon-teal hover:border-neon-teal hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                : 'border-gray-200 bg-white text-blue-600 hover:shadow-md'
            }`}
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
           <a 
            href={SOCIAL_LINKS.github}
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all hover:scale-110 ${
              isDark 
                ? 'border-white/10 bg-white/5 text-neon-teal hover:border-neon-teal hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                : 'border-gray-200 bg-white text-blue-600 hover:shadow-md'
            }`}
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all hover:scale-110 group ${
              isDark 
                ? 'border-white/10 bg-white/5 text-neon-teal hover:border-neon-teal hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                : 'border-gray-200 bg-white text-blue-600 hover:shadow-md'
            }`}
            title="Chat on WhatsApp"
          >
            <MessageCircle size={24} className="group-hover:animate-pulse" />
          </a>
        </div>

        <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Anjali Parmar. Crafted with React & Tailwind.
        </p>
      </div>
    </section>
  );
};

export default Contact;