import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Globe2, HeadphonesIcon, Laptop, Shield } from 'lucide-react';

const features = [
  { icon: Eye, title: 'Real-Time Visibility', desc: 'Track your shipments 24/7 with our advanced digital portal.' },
  { icon: Zap, title: 'Fast Customs Processing', desc: 'AEO certified rapid clearance avoiding costly delays.' },
  { icon: Globe2, title: 'Global Network', desc: 'Partnerships and presence in over 50 countries worldwide.' },
  { icon: HeadphonesIcon, title: '24/7 Dedicated Support', desc: 'Expert logistics consultants always available.' },
  { icon: Laptop, title: 'Tech-Driven Operations', desc: 'Modern EDI and API integrations for seamless data flow.' },
  { icon: Shield, title: 'Secure Cargo Movement', desc: 'Stringent safety protocols and comprehensive insurance options.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">The Ishwar Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Industry Leaders Choose Us
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                We blend decades of hands-on logistics expertise with cutting-edge technology to deliver unmatched reliability, speed, and transparency.
              </p>
              
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300 rounded-full font-medium">
                Partner With Us
              </a>
            </motion.div>
          </div>
          
          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl border border-white/5 flex gap-4 items-start hover:bg-white/[0.03] transition-colors"
              >
                <div className="p-3 bg-brand-dark rounded-lg shrink-0 border border-white/10">
                  <feature.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
