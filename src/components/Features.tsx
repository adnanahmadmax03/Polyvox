/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, GraduationCap, HelpCircle, ArrowRight } from 'lucide-react';
import { FEATURES } from '../data';

export const Features: React.FC = () => {
  // Map icons to the hardcoded features lists
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case 'live-classes':
        return <Users size={20} className={className} />;
      case 'expert-mentors':
        return <Award size={20} className={className} />;
      case 'free-demo':
        return <GraduationCap size={20} className={className} />;
      case 'live-doubt':
        return <HelpCircle size={20} className={className} />;
      default:
        return <HelpCircle size={20} className={className} />;
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-blue block">
              The Polyvox Experience
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#14324F] tracking-tight">
              Rethinking Language Instruction.
            </h2>
            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
              We are assembling a holistic, high-retention standard for modern learners. No gimmicks, no superficial drills. Just real competency.
            </p>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-[#14324F]">
            <span>Est. Launch 2026</span>
            <ArrowRight size={13} className="text-brand-blue" />
          </div>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="features-container">
          {FEATURES.map((feat, index) => (
            <div
              key={feat.id}
              className="p-8 bg-brand-offwhite/50 border border-brand-dark/5 flex flex-col justify-between rounded-sm group hover:border-[#14324F]/30 hover:bg-brand-offwhite/70 transition-all duration-300"
              id={`feature-card-${feat.id}`}
            >
              <div className="space-y-6">
                {/* Header of feature card */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white border border-brand-dark/5 flex items-center justify-center rounded-sm text-brand-accent shadow-xs">
                    {getIcon(feat.id, 'text-brand-accent')}
                  </div>
                  
                  <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest group-hover:text-brand-accent transition-colors">
                    0{index + 1} — {feat.tag}
                  </span>
                </div>

                {/* Content details */}
                <div className="space-y-2">
                  <h3 className={`font-sans font-extrabold text-lg ${feat.id === 'free-demo' ? 'text-brand-accent' : 'text-[#14324F]'}`}>
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Decorative premium line */}
              <div className="mt-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-neutral-400 font-bold tracking-widest uppercase">
                  Polyvox Signature Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-brand-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
