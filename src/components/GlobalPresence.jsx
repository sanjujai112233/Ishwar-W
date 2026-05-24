import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Delhi (HQ)', top: '35%', left: '72%', isHq: true },
  { name: 'Mumbai', top: '48%', left: '68%', isHq: false },
  { name: 'Dubai', top: '42%', left: '60%', isHq: false },
  { name: 'Singapore', top: '60%', left: '80%', isHq: false },
  { name: 'London', top: '25%', left: '48%', isHq: false },
  { name: 'New York', top: '30%', left: '25%', isHq: false },
];

const GlobalPresence = () => {
  return (
    <section id="presence" className="py-24 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Global Reach, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Local Expertise</span>
          </h3>
          <p className="text-slate-400 text-lg">
            Strategically located across major trade lanes to ensure uninterrupted supply chain continuity.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#0c1220] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Abstract World Map Background */}
          <div className="absolute inset-0  bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"></div>

          {/* Map Markers */}
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: 'spring' }}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* Pulse effect */}
              <div className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${loc.isHq ? 'bg-brand-accent' : 'bg-brand-blue'}`}></div>

              {/* Pin */}
              <div className={`relative z-10 w-4 h-4 rounded-full border-2 border-brand-dark ${loc.isHq ? 'bg-brand-accent scale-150' : 'bg-brand-blue'}`}></div>

              {/* Tooltip */}
              <div className="absolute top-full mt-2 bg-brand-dark border border-white/10 text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                {loc.name}
              </div>
            </motion.div>
          ))}

          {/* India Highlight Note */}
          <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl border-l-4 border-l-brand-accent max-w-xs">
            <h4 className="text-white font-bold mb-1">Strong India Network</h4>
            <p className="text-slate-400 text-xs">
              Extensive coverage across all major Indian ports (Nhava Sheva, Mundra, Chennai) and Inland Container Depots (ICDs).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
