import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Briefcase, CheckCircle2 } from 'lucide-react';

const keyBrandsSpecial = [
  {
    title: 'H&M',
    description: 'Management services of custom clearance, Domestic trucking to ports, air-freight.',
    icon: <Star className="w-8 h-8 text-brand-blue" />
  },
  {
    title: 'CHA',
    description: 'MAERSK & APLL.',
    icon: <Award className="w-8 h-8 text-brand-accent" />
  }
];

const keyBrandsPairs = [
  'Target & Target.com - Next',
  'Wal-Mart - Monsoon',
  'William Sonoma - H&M',
  'Zara - Pier-1',
  'TJ Maxx - Tommy Hillfinger',
  'Urban Outfitters - Sainsbury',
  'RH - Dillard’s',
  'Marks & Spencer - Messy',
  'B&Q - Heine',
  'Liz Claiborn - Kohl’s',
  'RNA Sources - Gap Inc',
  'World Market - Dillard',
  'Coscto Wholesale - K-Mart'
];

const valuableClients = [
  'Shivalik Prints Ltd', 'Orient Craft', 'CTA Apparel', 'Global fashion',
  'Pacco Industrial corporation', 'Vamani overseas', 'Marque Impex', 'CL Gupta',
  'Designco and etc.', 'Jayanita Exports Pvt. Ltd.', 'Faze3', 'Mittal International',
  'Golden Terry Towels', 'Gupta Overseas', 'Richa Global', 'Karam Shoes',
  'Obeetee Pvt. Ltd.', 'Kapoor Industries', 'Devgiri Exports', 'Raj Overseas',
  'Modelama Exports', 'Stalwart Home styles', 'RMX Industries', 'Kaleen Life Style',
  'Dileep Industries', 'Padia Exports Pvt. Ltd.', 'Liberty Shoes'
];

const Clients = () => {
  return (
    <div className="py-24 bg-brand-dark relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>

      {/* Decorative background blobs */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Network</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Global Leaders</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              We take pride in our extensive portfolio of clients, ranging from global retail giants to prominent domestic manufacturers.
            </p>
          </motion.div>
        </div>

        {/* Key Brands Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Briefcase className="w-6 h-6 text-brand-blue" />
            <h4 className="text-3xl font-bold text-white">Key Brands</h4>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {keyBrandsSpecial.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-brand-blue/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 bg-brand-dark/50 rounded-xl border border-white/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold text-white mb-3">{item.title}</h5>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyBrandsPairs.map((pair, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="glass p-4 rounded-xl border border-white/10 hover:border-brand-accent/30 transition-all hover:bg-white/5 flex items-center justify-center text-center"
              >
                <span className="text-slate-200 font-medium">{pair}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Valuable Clients Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <CheckCircle2 className="w-6 h-6 text-brand-accent" />
            <h4 className="text-3xl font-bold text-white">Our Valuable Clients</h4>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {valuableClients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.05 }}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all cursor-default text-sm md:text-base font-medium"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clients;
