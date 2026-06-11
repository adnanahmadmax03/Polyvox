/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Globe, MessageSquare, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white/70 border-y border-brand-dark/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Large Accent */}
          <div className="lg:col-span-5 flex flex-col justify-between h-auto">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-blue block">
                Academy Story & Values
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#14324F] tracking-tight leading-tight">
                Global Communication.<br />
                Cultivated Fluency.
              </h2>
            </div>
            
            {/* Elegant visual block representing premium high-culture literature vibe */}
            <div className="relative mt-8 p-6 bg-brand-offwhite border-l-2 border-brand-accent/50 italic text-neutral-600 font-serif text-sm leading-relaxed rounded-r-xs hidden lg:block">
              "To have another language is to possess a second soul."
              <span className="block mt-2 font-mono text-[9px] uppercase tracking-widest text-[#14324F]/70 italic not-italic">
                — Charlemagne
              </span>
            </div>
          </div>

          {/* Right Column: Mission Text & Value Pillars */}
          <div className="lg:col-span-7 space-y-10">
            <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed font-light">
              <strong className="font-semibold text-neutral-900">Polyvox</strong> is a premier international language academy designed for contemporary practitioners. By completely bypassing sterile, repetitive drills and mechanical applications, we offer structured, deep immersion designed to establish natural, confident, and highly immediate global communication.
            </p>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 border-t border-brand-dark/5">
              <div className="space-y-3" id="pillar-cultural">
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <Globe size={15} className="text-brand-accent" />
                </div>
                <h3 className="font-sans font-bold text-[#14324F] text-sm tracking-tight">Cultural Context</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  Fluency is more than vocabulary. Wrap sentences in idioms, business etiquette, and local nuance.
                </p>
              </div>

              <div className="space-y-3" id="pillar-practical">
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <MessageSquare size={15} className="text-brand-accent" />
                </div>
                <h3 className="font-sans font-bold text-[#14324F] text-sm tracking-tight">Active Speech</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  Focus purely on verbal agile reflexes and ear training with intensive, micro-feedback structures.
                </p>
              </div>

              <div className="space-y-3" id="pillar-academic">
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <BookOpen size={15} className="text-brand-accent" />
                </div>
                <h3 className="font-sans font-bold text-[#14324F] text-sm tracking-tight">CEFR Rigor</h3>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  Organized, verified learning framework aligned with global benchmarks for measurable fluency gains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
