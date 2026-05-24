import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Operations" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 bg-brand-blue rounded-lg">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">AEO Certified</h4>
                    <p className="text-slate-300 text-sm">Authorized Economic Operator Custom Broker</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">About Ishwar Logistics</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Delivering Excellence Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">2007</span>
            </h3>
            
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              We are a premier Custom House Agent (CHA) and international freight forwarding company based in India. With over 17 years of deep industry expertise, we navigate the complexities of global trade to ensure your cargo reaches its destination securely and on time.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">17+ Years of Industry Expertise</h4>
                  <p className="text-slate-400 text-sm">Founded on principles of reliability and speed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Comprehensive Global Network</h4>
                  <p className="text-slate-400 text-sm">Seamlessly connecting your business to the world.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                <div className="text-3xl font-bold text-white mb-1">180+</div>
                <div className="text-brand-accent text-sm font-medium">Professionals</div>
              </div>
              <div className="glass-card p-5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-brand-accent text-sm font-medium">Countries Network</div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
