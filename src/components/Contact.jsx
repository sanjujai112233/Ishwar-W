import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h3>
            <p className="text-slate-400 mb-10 text-lg">
              Connect with our logistics experts to discuss custom solutions for your freight and customs requirements.
            </p>

            <div className="space-y-8">
              {/* HQ */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">New Delhi (Headquarters)</h4>
                  <p className="text-slate-400">123 Logistics Park, Mahipalpur<br />New Delhi, 110037, India</p>
                </div>
              </div>

              {/* Branch */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Mumbai Branch</h4>
                  <p className="text-slate-400">456 Maritime Trade Center, Andheri East<br />Mumbai, 400059, India</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-brand-accent" />
                  <div>
                    <p className="text-sm text-slate-400">Call Us</p>
                    <p className="text-white font-medium">+91 11 4567 8900</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-brand-accent" />
                  <div>
                    <p className="text-sm text-slate-400">Email Us</p>
                    <p className="text-white font-medium">info@ishwarlogistics.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-card p-8 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-2xl font-bold text-white mb-6">Request a Quote</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0b0f16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-[#0b0f16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-[#0b0f16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-[#0b0f16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
                <textarea
                  rows="4"
                  className="w-full bg-[#0b0f16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                  placeholder="Describe your cargo and logistics requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-accent text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                Send Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
