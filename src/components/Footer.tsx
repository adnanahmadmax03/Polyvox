/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Will evaluate to 2026 based on environment

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#14215C] text-white pt-16 pb-12 border-t border-white/5">
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
              <img
                 src="/logo 2.svg"
                 alt="Polyvox"
                 className="w-[42px] h-[42px] opacity-95 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-widest text-[#F7F5F2] text-md leading-tight">
                  POLYVOX
                </span>
                <span className="font-mono text-[9px] font-bold tracking-wider text-white/70 leading-none">
                  SPEAK BEYOND BORDERS
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-white/80 leading-relaxed max-w-sm font-light">
              An elite international language collective preparing global citizens for the boardrooms, cultural arenas, and classrooms of tomorrow.
            </p>
          </div>

          {/* Sitemaps */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/65">
              Academy Sections
            </h4>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <a href="#about" className="hover:text-white text-white/85 transition-colors">Vision & Values</a>
              <a href="#languages" className="hover:text-white text-white/85 transition-colors">14 Languages</a>
              <a href="#features" className="hover:text-white text-white/85 transition-colors">Curriculum Standard</a>
            </div>
          </div>

          {/* Socials & Compliance */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/65">
              Global Headquarters
            </h4>
            <div className="space-y-2">
              <p className="font-sans text-xs text-white/90 leading-tight">
                New Delhi, India
              </p>
              <div>
                <a 
                  href="mailto:connect@polyvox.in" 
                  className="font-sans text-xs text-white/90 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white font-semibold"
                >
                  connect@polyvox.in
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.linkedin.com/company/polyvox-in/" aria-label="LinkedIn" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/polyvox.in?igsh=NDZoMjA4dHN5aDRw" aria-label="Instagram" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#youtube" aria-label="YouTube" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                <Youtube size={16} />
              </a>
              <a href="mailto:connect@polyvox.in" aria-label="Email" className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-white/60 font-mono">
          <div>
            &copy; {currentYear} Polyvox – Speak Beyond Borders. All rights reserved. Registered Educational Guild.
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
