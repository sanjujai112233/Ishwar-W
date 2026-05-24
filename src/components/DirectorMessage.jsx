import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Clock } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-dark relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>

      {/* Decorative background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
                alt="Director"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-5 rounded-xl border border-white/10 backdrop-blur-md">
                  <h4 className="text-white font-bold text-xl">Director's Message</h4>
                  <p className="text-brand-accent text-sm font-medium uppercase tracking-wider mt-1">Ishwar Logistics Pvt. Ltd.</p>
                </div>
              </div>
            </div>

            {/* Quote Icon decorative */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <Quote className="w-8 h-8 text-white transform -rotate-12" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Leadership Vision</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Excellence</span>
            </h3>

            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed relative z-10">
              <Quote className="absolute -top-8 -left-8 w-20 h-20 text-white/5 -z-10 transform -scale-x-100" />

              <p>
                <strong className="text-white font-semibold">Ishwar Logistics Pvt. Ltd.</strong> is the ultimate answer to fast and reliable quality logistics services.
              </p>

              <p>
                With the need for faster service delivery to meet company targets and deadlines, we are committed to giving you timely and efficient delivery of Air, Sea and land Freight.
              </p>

              <p>
                We have fully embraced technology to ensure that our customers have visibility and control over their supplies 24/7 giving them the advantage of:
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 mt-8 flex items-start gap-5 hover:border-brand-blue/30 transition-colors"
              >
                <div className="p-4 bg-brand-blue/20 rounded-xl shrink-0">
                  <Clock className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-2">Time Utilization</h4>
                  <p className="text-slate-400 text-base">Through faster information dissemination and streamlined supply chain management.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
