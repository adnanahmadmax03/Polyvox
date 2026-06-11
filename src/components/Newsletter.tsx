/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Mail, Sparkles, Award, Globe, Users, ArrowRight } from 'lucide-react';
import { WaitlistRecord } from '../types';
import { LANGUAGES } from '../data';

export const Newsletter: React.FC = () => {
  return null; /*temp hidden section */
  const [email, setEmail] = useState('');
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [learningGoal, setLearningGoal] = useState('professional');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(1482);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentEntriesCount, setRecentEntriesCount] = useState(1481);

  // Load existing data from localStorage to make it authentic
  useEffect(() => {
    const saved = localStorage.getItem('polyvox_waitlist');
    if (saved) {
      try {
        const records: WaitlistRecord[] = JSON.parse(saved);
        if (records.length > 0) {
          // If they already signed up in this browser session
          const mostRecent = records[records.length - 1];
          setEmail(mostRecent.email);
          setSelectedLangs(mostRecent.languages);
          setLearningGoal(mostRecent.role);
          setIsSubmitted(true);
        }
        setWaitlistNumber(1482 + records.length);
        setRecentEntriesCount(1481 + records.length);
      } catch (e) {
        console.error(e);
      }
    } else {
      // Seed a pleasant count
      setWaitlistNumber(1482);
    }
  }, []);

  const handleLanguageToggle = (id: string) => {
    if (selectedLangs.includes(id)) {
      setSelectedLangs(selectedLangs.filter(l => l !== id));
    } else {
      setSelectedLangs([...selectedLangs, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid academic or personal email address.');
      return;
    }

    if (selectedLangs.length === 0) {
      setErrorMessage('Please select at least one language of interest.');
      return;
    }

    // Prepare waitlist object
    const newRecord: WaitlistRecord = {
      email,
      languages: selectedLangs,
      role: learningGoal,
      createdAt: new Date().toISOString()
    };

    // Store in localStorage
    try {
      const existing = localStorage.getItem('polyvox_waitlist');
      const records: WaitlistRecord[] = existing ? JSON.parse(existing) : [];
      // Don't save duplicates in simple state
      const isDuplicate = records.some(r => r.email.toLowerCase() === email.toLowerCase());
      if (!isDuplicate) {
        records.push(newRecord);
        localStorage.setItem('polyvox_waitlist', JSON.stringify(records));
      }
      
      const pos = 1482 + records.length;
      setWaitlistNumber(pos);
      setIsSubmitted(true);
      window.scrollTo({
        top: document.getElementById('newsletter')?.offsetTop ? document.getElementById('newsletter')!.offsetTop - 80 : undefined,
        behavior: 'smooth'
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    // Clear and sign up another
    setEmail('');
    setSelectedLangs([]);
    setLearningGoal('professional');
    setIsSubmitted(false);
  };

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-brand-offwhite border-t border-brand-dark/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main interactive Container */}
        <div className="bg-white border border-brand-dark/5 p-8 md:p-14 relative overflow-hidden rounded-xs shadow-sm">
          {/* Subtle grid accent inside waitlist card */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] grid-dots" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 relative z-10"
              >
                {/* Headline group */}
                <div className="text-center space-y-3">
                  <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full">
                    Exclusive Early Access
                  </span>
                  <h2 className="font-sans text-2xl sm:text-3.5xl font-extrabold text-[#14324F] tracking-tight">
                    Be the first to experience Polyvox.
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-lg mx-auto">
                    Secure your custom cohort ranking. Members of the early waitlist receive free foundational syllabus access, exclusive event invitations, and priority coach booking.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
                  {/* Goal Dropdown and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 flex flex-col">
                      <label htmlFor="email-input" className="block font-mono text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-1 animate-none select-none">
                        Primary Email Address
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          id="email-input"
                          type="email"
                          placeholder="you@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 bg-brand-offwhite/50 hover:bg-brand-offwhite/80 focus:bg-white text-sm font-medium border border-brand-dark/10 rounded-xs focus:ring-1 focus:ring-brand-blue focus:border-brand-blue focus:outline-none transition-all placeholder-neutral-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="goal-select" className="block font-mono text-[10px] font-bold tracking-widest uppercase text-neutral-400 mb-1">
                        Your Learning Objective
                      </label>
                      <select
                        id="goal-select"
                        value={learningGoal}
                        onChange={(e) => setLearningGoal(e.target.value)}
                        className="w-full px-4 py-3.5 bg-brand-offwhite/50 hover:bg-brand-offwhite/80 focus:bg-white text-sm font-medium border border-brand-dark/10 rounded-xs focus:ring-1 focus:ring-brand-blue focus:border-brand-blue focus:outline-none transition-all text-neutral-700"
                      >
                        <option value="professional">Career & Global Commerce</option>
                        <option value="academic">CEFR Academic Verification</option>
                        <option value="relocation">Relocation & Immigration</option>
                        <option value="cultural">Art, Literature & Heritage</option>
                      </select>
                    </div>
                  </div>

                  {/* Languages Selector Grid of Bubbles */}
                  <div className="space-y-2">
                    <label className="block font-sans text-xs font-semibold text-neutral-600">
                      Select Your Focus Languages (Choose one or more)
                    </label>
                    
                    <div className="flex flex-wrap gap-2" id="waitlist-lang-bubbles">
                      {LANGUAGES.map((lang) => {
                        const isSelected = selectedLangs.includes(lang.id);
                        return (
                          <button
                            key={lang.id}
                            type="button"
                            onClick={() => handleLanguageToggle(lang.id)}
                            className={`px-3 py-2 text-xs font-semibold tracking-wider transition-all duration-150 rounded-xs border cursor-pointer select-none flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                                : 'bg-brand-offwhite text-neutral-700 hover:bg-neutral-200/60 border-brand-dark/5'
                            }`}
                          >
                            <span>{lang.name}</span>
                            <span className="opacity-60 text-[10px] font-normal">({lang.nativeName})</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-red-600 text-xs font-medium text-center bg-red-50 p-2.5 rounded-sm">
                      {errorMessage}
                    </p>
                  )}

                  {/* Primary Blue CTA Button */}
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-w-[240px] px-10 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-brand-blue inline-flex items-center justify-center gap-2"
                    >
                      Secure Early Seat
                      <ArrowRight size={13} className="text-white" />
                    </button>
                    <p className="text-[10px] font-mono text-neutral-400 mt-3">
                      Join <span className="font-semibold text-neutral-600">{recentEntriesCount}</span> international aspirants who registered this month.
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              // Luxury Success Waitlist Ticket State
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6 space-y-8 relative z-10"
              >
                {/* Confirmation check circle */}
                <div className="mx-auto w-14 h-14 bg-brand-accent/10 text-brand-accent flex items-center justify-center rounded-full border border-brand-accent/20">
                  <Check size={26} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-2xl font-black text-[#14324F] tracking-tight">
                    You are on the list.
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed max-w-md mx-auto">
                    Your early cohort reservation ticket has been generated successfully and stored locally. A representative will contact you as course seats become available.
                  </p>
                </div>

                {/* Highly polished Admission Ticket Visual Mockup */}
                <div className="max-w-md mx-auto bg-brand-offwhite border border-brand-dark/10 p-6 md:p-8 rounded-sm relative text-left overflow-hidden shadow-xs">
                  {/* Left and right notch cutouts for coupon/ticket aesthetic */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white border border-brand-dark/10 rounded-full z-10 -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white border border-brand-dark/10 rounded-full z-10 -translate-y-1/2" />
                  
                  {/* Ticket Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-dashed border-neutral-300">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] font-bold text-neutral-400 tracking-wider uppercase">POLYVOX PASSPORT</span>
                      <span className="font-sans font-extrabold text-[#14324F] text-[13px] tracking-widest mt-0.5">EST. 2026 COHORT</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase">PRIORITY LEVEL</span>
                      <span className="block font-mono text-[11px] font-bold text-brand-accent">EARLY ELITE</span>
                    </div>
                  </div>

                  {/* Ticket core stats */}
                  <div className="py-5 space-y-4 text-xs font-sans text-neutral-600">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 tracking-wider uppercase mb-0.5">REGISTERED EMAIL</span>
                        <span className="font-semibold text-[#14324F] truncate block">{email}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 tracking-wider uppercase mb-0.5">QUEUE POSITION</span>
                        <span className="font-mono font-bold text-brand-accent">#{waitlistNumber}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 tracking-wider uppercase mb-0.5">LEARNING PATHWAYS</span>
                        <span className="font-medium text-[#14324F] block">
                          {selectedLangs.map(l => LANGUAGES.find(lang=>lang.id === l)?.name || l).join(', ')}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-neutral-400 tracking-wider uppercase mb-0.5">GOAL SPECIFICATION</span>
                        <span className="font-medium text-[#14324F] capitalize block">{learningGoal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Footer barcode accent representing extreme tech-startup attention to detail */}
                  <div className="pt-4 border-t border-dashed border-neutral-300 text-center flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1 opacity-70">
                      <Globe size={11} className="text-neutral-400" />
                      <span className="font-mono text-[8.5px] uppercase tracking-widest font-semibold text-neutral-400">
                        VALUED EDUCATION EXCELLENCE
                      </span>
                    </div>
                    {/* Fake structural barcode */}
                    <div className="h-6 w-full flex justify-between px-2 opacity-55 select-none" aria-hidden="true">
                      {Array.from({ length: 42 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-neutral-800"
                          style={{
                            width: (i % 3 === 0 ? '1.5px' : i % 5 === 0 ? '3px' : '1px'),
                            height: '100%'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    onClick={() => {
                      // Trigger native print or simple screenshot invite message
                      window.print();
                    }}
                    className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs tracking-wider uppercase rounded-xs transition-all cursor-pointer"
                  >
                    Print Passport
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-neutral-400 hover:text-[#14324F] font-mono text-[10px] tracking-wider uppercase underline cursor-pointer"
                  >
                    Register Another Account
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;
