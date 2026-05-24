import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center "></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/80 to-brand-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
            <Globe className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-slate-300">Worldwide Freight Forwarding</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl leading-tight">
            Global Logistics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Customs Solutions</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Trusted international freight forwarding and customs clearance partner delivering seamless logistics solutions across air, sea, and land transportation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-accent transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center justify-center gap-2 group">
              Request Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-50"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
