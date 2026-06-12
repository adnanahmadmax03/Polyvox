import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Logo from './Logo';
import { LANGUAGES } from '../data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languagesDropdownOpen, setLanguagesDropdownOpen] = useState(false);
  const [mobileLanguagesOpen, setMobileLanguagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setLanguagesDropdownOpen(false);
    setMobileLanguagesOpen(false);
    
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLanguageClick = (langId: string) => {
    scrollToSection('languages');
    // Find the language target element and highlight it gently or trigger filter on page
    const langCard = document.getElementById(`lang-card-${langId}`);
    if (langCard) {
      langCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Temporary visually striking outline effect
      langCard.classList.add('ring-2', 'ring-brand-accent');
      setTimeout(() => {
        langCard.classList.remove('ring-2', 'ring-brand-accent');
      }, 2000);
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-offwhite/90 backdrop-blur-md border-b border-brand-dark/5 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Group */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-group"
          >
            {/* Minimalist logo symbol */}
            <Logo
                size={36}
                showWordmark={false}
                className="text-[#14215c] transition-transform duration-500 group-hover:rotate-12"
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-widest text-[#14324F] text-base leading-tight">
                POLYVOX
              </span>
              <span className="font-mono text-[6.5px] sm:text-[7.5px] font-bold tracking-widest text-[#14324F]/70 leading-none uppercase">
                SPEAK BEYOND BORDERS
              </span>
            </div>
          </div>

          {/* Clean, Modular Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a]/80" id="desktop-nav">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-brand-blue transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-brand-blue transition-colors duration-200 cursor-pointer"
            >
              About
            </button>
            
            {/* LANGUAGES DROPDOWN - Custom Hover Trigger Container */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setLanguagesDropdownOpen(true)}
              onMouseLeave={() => setLanguagesDropdownOpen(false)}
              id="desktop-languages-dropdown-trigger"
            >
              <button
                className="hover:text-brand-blue transition-colors duration-200 cursor-pointer flex items-center gap-1 uppercase"
                onClick={() => scrollToSection('languages')}
              >
                <span>Languages</span>
                <ChevronDown size={13} className={`transition-transform duration-300 ${languagesDropdownOpen ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>

              {/* Smooth Animated Hover Dropdown Menu */}
              <AnimatePresence>
                {languagesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 bg-brand-offwhite border border-brand-dark/10 rounded-xs shadow-xl z-55 overflow-hidden py-2"
                    id="languages-desktop-dropdown-list"
                  >
                    <div className="px-3 pb-1 mb-1 border-b border-brand-dark/5 font-mono text-[9px] font-extrabold text-neutral-400 tracking-widest flex items-center gap-1.5 uppercase">
                      <Globe size={11} className="text-brand-blue/60" />
                      Global Pathways
                    </div>
                    
                    <div className="grid grid-cols-1 max-h-[320px] overflow-y-auto">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => handleLanguageClick(lang.id)}
                          className="w-full text-left px-4 py-2 hover:bg-[#14215C] group flex items-center justify-between transition-colors duration-150 cursor-pointer"
                        >
                          <span className="font-sans font-bold text-neutral-700 group-hover:text-white transition-colors text-[12.5px]">
                            {lang.name}
                          </span>
                          <span className="font-mono text-[9.5px] text-neutral-400 group-hover:text-white/80 transition-colors">
                            {lang.nativeName}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-brand-blue transition-colors duration-200 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-brand-blue transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Balanced spacer for aesthetic alignment equality instead of asymmetric CTA */}
          <div className="hidden md:block w-36 text-right font-mono text-[10px] text-neutral-400 font-extrabold tracking-widest uppercase">
            EST. 2026
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#14324F] hover:text-brand-blue p-1 cursor-pointer transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Premium Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-0 top-0 pt-24 pb-6 bg-brand-offwhite border-b border-brand-dark/10 shadow-lg z-40 flex flex-col px-6 gap-4 md:hidden"
            id="mobile-drawer"
          >
            <div className="flex flex-col text-left font-sans text-sm font-extrabold tracking-wider uppercase">
              <button
                onClick={() => scrollToSection('home')}
                className="py-3 text-neutral-800 hover:text-brand-blue transition-colors cursor-pointer border-b border-brand-dark/5 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="py-3 text-neutral-800 hover:text-brand-blue transition-colors cursor-pointer border-b border-brand-dark/5 text-left"
              >
                About
              </button>
              
              {/* Expandable Mobile Languages Under-menu */}
              <div className="border-b border-brand-dark/5">
                <button
                  onClick={() => setMobileLanguagesOpen(!mobileLanguagesOpen)}
                  className="w-full py-3 text-neutral-800 hover:text-brand-blue transition-colors cursor-pointer flex items-center justify-between text-left"
                >
                  <span>Languages</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileLanguagesOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileLanguagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 pb-2 grid grid-cols-2 gap-2 text-[11px]"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleLanguageClick(lang.id);
                          }}
                          className="py-1.5 text-neutral-600 hover:text-brand-blue transition-colors font-semibold text-left"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection('features')}
                className="py-3 text-neutral-800 hover:text-brand-blue transition-colors cursor-pointer border-b border-brand-dark/5 text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="py-3 text-neutral-800 hover:text-brand-blue transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
