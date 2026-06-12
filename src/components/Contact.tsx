import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, User, MessageSquare, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const validateForm = () => {
    const tempErrors = { name: '', email: '', phone: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number (min 7 digits)';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Please write a message of at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      // Graceful fallback for local development or preview if API key hasn't been configured yet
      console.warn("VITE_WEB3FORMS_ACCESS_KEY environment variable is not defined. Simulating submission mode.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Inquiry from Polyvox Website",
          from_name: "Polyvox Website",
          to: "connect@polyvox.in"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setIsSubmitting(false);
        setFormError(result.message || 'Submission failed. Please check your Access Key.');
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setIsSubmitting(false);
      setFormError('Failed to send message. Please check your internet connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t border-brand-dark/5 scroll-mt-20 relative overflow-hidden">
      {/* Decorative sophisticated abstract graphic background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct contact info & email link */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-blue block">
              Contact Polyvox
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#14324F] tracking-tight leading-tight">
              Have questions about our language programs? We'd love to hear from you.
            </h2>
            <p className="font-sans text-neutral-600 leading-relaxed font-light text-sm sm:text-base">
              Whether you are looking to master a new language for professional growth, academic excellence, or personal enrichment, our team is always ready to guide you.
            </p>

            <div className="pt-6 border-t border-brand-dark/5 space-y-4">
              <p className="font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-400">
                Direct Communication
              </p>
              
              <div 
                className="inline-flex flex-col md:flex-row items-stretch md:items-center p-4 bg-brand-offwhite rounded-[28px] border border-brand-dark/5 shadow-xs relative overflow-hidden w-full lg:w-auto animate-in fade-in"
                id="contact-unified-card"
              >
                {/* Email Section (Left) */}
                <a 
                  href="mailto:connect@polyvox.in"
                  className="flex items-center gap-4 py-2 px-3 hover:bg-[#14215c]/5 rounded-[20px] transition-all duration-300 group"
                  id="contact-email-section"
                >
                  <div className="w-12 h-12 rounded-full bg-[#14215c]/5 group-hover:bg-[#14215c]/10 flex items-center justify-center transition-colors">
                    <Mail size={18} className="text-[#14215c] group-hover:text-brand-accent transition-colors" />
                  </div>
                  <div className="text-left pr-2">
                    <span className="block font-mono text-[8px] uppercase tracking-wider text-neutral-400">Email Address</span>
                    <span className="font-sans font-extrabold text-sm text-[#14215c] group-hover:text-brand-accent transition-colors">
                      connect@polyvox.in
                    </span>
                  </div>
                </a>

                {/* Vertical Divider (Visible on desktop) */}
                <div className="hidden md:block w-[1px] h-10 bg-[#14215c]/10 mx-2" />

                {/* Horizontal Divider (Visible on mobile only) */}
                <div className="block md:hidden h-[1px] bg-[#14215c]/10 my-3 mx-3" />

                {/* Social Section (Right) */}
                <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/polyvox-in/"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-[#14215c]/5 hover:bg-[#14215c] hover:scale-110 text-[#14215c] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs"
                    id="contact-linkedin-link"
                  >
                    <Linkedin size={16} />
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/polyvox.in?igsh=NDZoMjA4dHN5aDRw"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-[#14215c]/5 hover:bg-[#14215c] hover:scale-110 text-[#14215c] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs"
                    id="contact-instagram-link"
                  >
                    <Instagram size={16} />
                  </a>

                  {/* YouTube */}
                  <a 
                    href="#youtube"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-full bg-[#14215c]/5 hover:bg-[#14215c] hover:scale-110 text-[#14215c] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs"
                    id="contact-youtube-link"
                  >
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7 bg-brand-offwhite/50 border border-brand-dark/5 rounded-xs p-6 sm:p-10 shadow-xs relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  id="contact-success-state"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-sans font-extrabold text-[#14324F] text-xl">Message Sent Successfully</h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-sm">
                    Thank you for contacting Polyvox. We'll get back to you shortly.
                  </p>
                  <p className="font-mono text-[10px] text-brand-accent font-bold uppercase tracking-widest">
                    We typically respond within 24–48 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2.5 bg-brand-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-brand-blue/90 shadow-sm transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  id="contact-form"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-500">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-3.5 text-neutral-400" />
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="Your Name"
                          className={`w-full bg-white border rounded-sm py-3.5 pl-10 pr-4 text-xs font-semibold placeholder:text-neutral-400 outline-none transition-all ${
                            errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-dark/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[10px] text-red-500 font-mono mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="emailAddress" className="block font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-500">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-3.5 text-neutral-400" />
                        <input
                          type="email"
                          id="emailAddress"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="you@example.com"
                          className={`w-full bg-white border rounded-sm py-3.5 pl-10 pr-4 text-xs font-semibold placeholder:text-neutral-400 outline-none transition-all ${
                            errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-dark/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-mono mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="phoneNumber" className="block font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-500">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-3.5 text-neutral-400" />
                        <input
                          type="tel"
                          id="phoneNumber"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="Enter your phone number"
                          className={`w-full bg-white border rounded-sm py-3.5 pl-10 pr-4 text-xs font-semibold placeholder:text-neutral-400 outline-none transition-all ${
                            errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-dark/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[10px] text-red-500 font-mono mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="messageText" className="block font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-500">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={14} className="absolute left-3 top-4 text-neutral-400" />
                      <textarea
                        id="messageText"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Tell us about your language learning goals..."
                        className={`w-full bg-white border rounded-sm py-3.5 pl-10 pr-4 text-xs font-semibold placeholder:text-neutral-400 outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-brand-dark/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-[10px] text-red-500 font-mono mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Form Submission Error Indicator */}
                  {formError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-sm text-xs font-semibold"
                      id="contact-form-error"
                    >
                      {formError}
                    </motion.div>
                  )}

                  {/* Send Message Button & Helper text */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border border-brand-blue"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={12} className={isSubmitting ? 'animate-pulse' : ''} />
                    </button>
                    
                    <span className="font-mono text-[9px] text-neutral-400">
                      *We typically respond within 24–48 hours.
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
