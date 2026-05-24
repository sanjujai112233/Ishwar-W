import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Map, BarChart3, Database } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Digital Innovation</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Ishwar SCM Pro</span>
          </h3>
          <p className="text-slate-400 text-lg">
            Our proprietary enterprise-grade supply chain visibility platform. Control your cargo from origin to destination.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Mockup Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl glass-card border border-white/10 p-2 sm:p-4 shadow-[0_0_50px_rgba(14,165,233,0.15)] overflow-hidden"
          >
            {/* Fake Browser/App Header */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 px-3 py-1 bg-brand-dark rounded text-xs text-slate-400 flex-1 max-w-sm border border-white/5 flex items-center gap-2">
                <Database className="w-3 h-3" /> ishwarslogistics.com/scm-pro
              </div>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="bg-[#0f141e] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
              {/* Sidebar */}
              <div className="w-full md:w-48 bg-[#131924] p-4 border-r border-white/5 hidden md:block">
                <div className="space-y-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={`h-8 rounded ${i === 1 ? 'bg-brand-blue/20 border border-brand-blue/30' : 'bg-white/5'} w-full`}></div>
                  ))}
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 p-4 md:p-6 flex flex-col gap-4">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Active Shipments', val: '142', icon: Activity, color: 'text-green-400' },
                    { label: 'In Transit', val: '86', icon: Map, color: 'text-brand-blue' },
                    { label: 'Pending Clearance', val: '12', icon: FileCheck, color: 'text-yellow-400' },
                    { label: 'Delivered (Mtd)', val: '304', icon: BarChart3, color: 'text-purple-400' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-slate-400">{stat.label}</span>
                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Map & Chart Area */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-lg p-4 relative overflow-hidden flex flex-col">
                    <div className="text-sm font-semibold text-white mb-4">Live Cargo Map</div>
                    <div className="flex-1 bg-[#0b0f16] rounded border border-white/5 relative">
                       {/* Map visualization mock */}
                       <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"></div>
                       <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_10px_#38bdf8] animate-pulse"></div>
                       <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-blue rounded-full shadow-[0_0_10px_#0ea5e9] animate-pulse"></div>
                       <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                          <path d="M 33% 50% Q 50% 30% 75% 33%" fill="transparent" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
                       </svg>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-4 flex flex-col">
                    <div className="text-sm font-semibold text-white mb-4">Recent Updates</div>
                    <div className="flex-1 space-y-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                          <div className="flex-1">
                            <div className="h-3 w-full bg-white/10 rounded mb-1"></div>
                            <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Define FileCheck as it's used in the map above
const FileCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
);

export default Technology;
