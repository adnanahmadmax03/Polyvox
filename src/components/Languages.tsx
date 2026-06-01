/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe2, Compass, Layers, CheckCircle } from 'lucide-react';
import { LANGUAGES } from '../data';
import { Language } from '../types';

export const Languages: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const families = ['All', 'Romance', 'East Asian', 'Germanic', 'Semitic', 'Slavic'];

  const filteredLanguages = selectedFamily === 'All'
    ? LANGUAGES
    : LANGUAGES.filter(lang => lang.badgeText === selectedFamily);

  return (
    <section id="languages" className="py-24 md:py-32 bg-brand-offwhite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Languages Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-blue block">
            Polyvox Curriculum
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#14324F] tracking-tight">
            Eleven Gates to the World.
          </h2>
          <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-lg mx-auto">
            Explore our meticulously designed pathways. Each language is treated as an immersive cultural ecosystem, built from basic phonetics to professional articulation.
          </p>

          {/* Interactive filter badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6" id="language-families">
            {families.map((family) => (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFamily === family
                    ? 'bg-brand-blue text-white shadow-xs'
                    : 'bg-white text-[#14324F]/70 border border-brand-dark/10 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {family}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Languages Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="languages-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredLanguages.map((lang) => {
              const isHovered = hoveredId === lang.id;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  key={lang.id}
                  className="relative bg-white border border-brand-dark/5 p-6 flex flex-col justify-between group transition-all duration-300 rounded-sm hover:-translate-y-1 hover:shadow-xl cursor-default"
                  onMouseEnter={() => setHoveredId(lang.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    borderColor: isHovered ? '#7A00C6' : 'rgba(20, 50, 79, 0.05)',
                  }}
                  id={`lang-card-${lang.id}`}
                >
                  {/* Card Background Subtle Accent */}
                  <div className="absolute top-0 right-0 p-3 select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 font-sans font-black text-7xl text-brand-blue">
                    {lang.abbreviation}
                  </div>

                  <div>
                    {/* Header: Class family and typographic abbreviation */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-xs">
                        {lang.badgeText}
                      </span>
                      
                      {/* Typographic emblem representing elegance */}
                      <span className="font-mono text-xs font-bold text-neutral-300 group-hover:text-brand-blue transition-colors duration-200">
                        {lang.abbreviation} · {lang.iconText}
                      </span>
                    </div>

                    {/* Language Headings */}
                    <div className="space-y-0.5 mb-3">
                      <h3 className="font-sans font-extrabold text-lg text-[#14324F] group-hover:text-brand-blue transition-colors duration-200">
                        {lang.name}
                      </h3>
                      <div className="font-sans font-bold text-xs text-neutral-400 tracking-wide">
                        {lang.nativeName}
                      </div>
                    </div>

                    {/* Cultural quote / characteristic */}
                    <p className="font-serif italic text-[12.5px] leading-relaxed text-neutral-500 mb-6 group-hover:text-neutral-600">
                      "{lang.accentQuote}"
                    </p>
                  </div>

                  {/* Footing detail */}
                  <div className="pt-4 border-t border-dashed border-neutral-100 flex items-center gap-2 text-[10.5px] text-neutral-500 font-medium">
                    <Globe2 size={12} className="text-neutral-400 group-hover:text-[#7A00C6] transition-colors" />
                    <span className="truncate">{lang.region}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {/* Curated quote footer below the grid */}
        <div className="text-center mt-12 text-xs font-mono text-neutral-400">
          All courses will support Beginner (A1) through Superior (C2) proficiencies.
        </div>
      </div>
    </section>
  );
};

export default Languages;
