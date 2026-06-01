/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, AlertCircle, Stars } from 'lucide-react';
import Logo from './Logo';

export const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      const offset = 80;
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

  // Cultural/greetings to serve as sophisticated background shapes
  const floatingGreetings = [
    { text: 'Bonjour', x: '12%', y: '18%', delay: 0.1, rotate: -6 },
    { text: 'Hola', x: '82%', y: '22%', delay: 0.4, rotate: 8 },
    { text: 'こんにちは', x: '8%', y: '75%', delay: 0.7, rotate: -12 },
    { text: 'Hello', x: '88%', y: '68%', delay: 0.3, rotate: 14 },
    { text: 'العربية', x: '45%', y: '88%', delay: 1.0, rotate: 0 },
    { text: 'Deutsch', x: '75%', y: '84%', delay: 1.2, rotate: -5 },
    { text: '中文', x: '25%', y: '24%', delay: 1.5, rotate: 10 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden grid-dots"
    >
      {/* Background Floating Typography Accents */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden leading-none">
        {floatingGreetings.map((greet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.85, rotate: greet.rotate - 10 }}
            animate={{ opacity: 0.04, scale: 1, rotate: greet.rotate }}
            transition={{
              duration: 1.6,
              delay: greet.delay,
              ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier
            }}
            className="absolute font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-blue"
            style={{ left: greet.x, top: greet.y }}
          >
            {greet.text}
          </motion.div>
        ))}

        {/* Top & bottom radial masks to blend the grid-dots gracefully */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-transparent to-brand-offwhite" />
        
        {/* Soft abstract ambient floating glows / CSS cloud orbs */}
        {/* Orb 1: Warm ambient indigo glow to the left of the heading */}
        <motion.div
          animate={{
            x: [-15, 20, -15],
            y: [-20, 15, -20],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 rounded-full bg-brand-blue/7 blur-[90px] pointer-events-none"
          style={{ left: '15%', top: '35%' }}
        />

        {/* Orb 2: Dynamic violet-glow behind the main logo/heading */}
        <motion.div
          animate={{
            x: [25, -20, 25],
            y: [15, -25, 15],
            scale: [1, 1.08, 1.02, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 rounded-full bg-brand-blue/5 blur-[110px] pointer-events-none"
          style={{ right: '20%', top: '25%' }}
        />

        {/* Orb 3: Bottom deep accent cloud */}
        <motion.div
          animate={{
            x: [0, 15, -15, 0],
            y: [10, -10, 10, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute w-64 h-64 rounded-full bg-brand-blue/4 blur-[80px] pointer-events-none"
          style={{ left: '40%', bottom: '15%' }}
        />
        
        {/* Soft abstract brand-blue center glowing core */}
        <div className="absolute w-[35rem] h-[35rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue/2 rounded-full blur-[140px]" />
      </div>

      {/* Hero Central Content Container */}
      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* "Launching Soon" luxury modern tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-blue/5 border border-brand-blue/15 shadow-xs rounded-full mb-8"
        >
          <Stars size={13} className="text-brand-blue animate-pulse" />
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-blue">
            Launching Autumn 2026
          </span>
        </motion.div>

        {/* Typographic brand representation instead of logo placeholder container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col items-center gap-2"
        >
          <span className="font-sans font-black tracking-[0.22em] text-3xl sm:text-4xl text-[#14324F] leading-none uppercase">
            POLYVOX
          </span>
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#7A00C6] uppercase">
            Land of Languages
          </span>
        </motion.div>

        {/* Large headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <motion.h1
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -0.4, 0.4, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut"
            }}
            style={{ willChange: "transform" }}
            className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#14324F] leading-none uppercase"
          >
            Coming Soon
          </motion.h1>
        </motion.div>

        {/* Subheadline description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg md:text-xl font-normal tracking-wide text-neutral-600 leading-relaxed mb-10"
        >
          Master global languages with immersive, modern, and practical learning experiences. Built from ground up for builders, career expansionists, and global citizens.
        </motion.p>

        {/* Action Button CTA Groups */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <button
            onClick={scrollToWaitlist}
            className="px-12 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-brand-blue"
          >
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
