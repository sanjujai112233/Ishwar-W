import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Core</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Values</span>
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Ishwar Logistics Pvt. Ltd., client satisfaction is paramount to us. We understand your need for reliable, flexible, expedient delivery and we pride ourselves on providing 100% customer satisfaction with every transaction.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-dark rounded-xl border border-white/5">
                  <Target className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Our industry experience and proven track record, paired with helpful service associates and customized shipping solutions is the hallmark of our success.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-dark rounded-xl border border-white/5">
                  <ShieldCheck className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Confidence & Reliability</h4>
                  <p className="text-slate-400 leading-relaxed">
                    If ISHWAR LOGISTICS PVT. LTD. is handling your freight, you can be confident of accurate, on-time performance and a job well done.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square md:aspect-[4/3] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80" 
                alt="Logistics teamwork and satisfaction" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-5 rounded-xl border border-white/20 backdrop-blur-md text-center">
                  <Heart className="w-10 h-10 text-rose-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-brand-accent text-sm font-semibold uppercase tracking-wider">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
