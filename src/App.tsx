/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Features from './components/Features';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-offwhite text-neutral-900 selection:bg-brand-blue/10 selection:text-brand-blue font-sans antialiased overflow-x-hidden">
      {/* 1. STICKY GLASSMORPHIC HEADER */}
      <Navbar />

      <main id="main-content-layout">
        {/* 2. MAJESTIC IMMERSIVE HERO */}
        <Hero />

        {/* 3. BRAND ETHOS & ACADEMY STORY */}
        <About />

        {/* 4. 14 MINIMALIST LANGUAGE CARDS */}
        <Languages />

        {/* 5. EXPERIMENTAL CORE VALUES & FEATURES */}
        <Features />

        {/* 6. IMMERSIVE CONTACT FORM */}
        <Contact />

        {/* 7. IMMERSIVE TICKET GENERATOR & WAITLIST */}
        <Newsletter />
      </main>

      {/* 8. GLOBALLY STRUCTURED FOOTER */}
      <Footer />
    </div>
  );
}
