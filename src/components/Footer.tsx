/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Will evaluate to 2026 based on environment

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#14324F] text-white/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Upper Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-2 space-y-4">
            <div 
              onClick={handleScrollToTop}
              className="flex items-center gap-3 cursor-pointer group"
              id="footer-brand-logo"
            >
              {/* White inverted logo representation */}
              <Logo size={42} showWordmark={false} className="opacity-95 group-hover:scale-105 transition-transform" light={true} />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-widest text-[#F7F5F2] text-md leading-tight">
                  POLYVOX
                </span>
                <span className="font-mono text-[9px] font-bold tracking-wider text-white/60 leading-none">
                  LAND OF LANGUAGES
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-white/60 leading-relaxed max-w-sm">
              An elite international language collective preparing global citizens for the boardrooms, cultural arenas, and classrooms of tomorrow.
            </p>
          </div>

          {/* Sitemaps */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/50">
              Academy Sections
            </h4>
            <div className="flex flex-col gap-2 text-xs font-medium">
              <a href="#about" className="hover:text-white text-white/75 transition-colors">Vision & Values</a>
              <a href="#languages" className="hover:text-white text-white/75 transition-colors">11 Languages</a>
              <a href="#features" className="hover:text-white text-white/75 transition-colors">Curriculum Standard</a>
              <a href="#newsletter" className="hover:text-white text-white/75 transition-colors">Join Waitlist</a>
            </div>
          </div>

          {/* Socials & Compliance */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/50">
              Global Headquarters
            </h4>
            <p className="font-sans text-xs text-white/75 leading-tight">
              New Delhi, India
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="#twitter" aria-label="Twitter X" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#instagram" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-white/50 font-mono">
          <div>
            &copy; {currentYear} Polyvox – Land of Languages. All rights reserved. Registered Educational Guild.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Enrollment</a>
            <a href="#privacy" className="hover:text-white transition-colors">Academic Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
