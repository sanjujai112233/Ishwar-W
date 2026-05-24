import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const contacts = [
    { name: 'Dharmendra Jain', phone: '+91 9810501334', email: 'dharmendra@ilpl-india.com' },
    { name: 'Krishan Yadav', phone: '+91 9999119053', email: 'krishan@ilpl-india.com' },
    { name: 'Gaurav Sood', phone: '+91 9999798423', email: 'gaurav@ilpl-india.com' },
  ];
  const addresses = [
    {
      title: 'Head Office (New Delhi)',
      lines: [
        'KIWI Towers - Khasra No 439 Plot No 18 Shahbad Mohammadpur',
        'Behind IGI T3 Near Sai Mandir',
        'New Delhi – 110061',
      ],
    },
    {
      title: 'Mumbai Office',
      lines: [
        '401-C, Neptune Flying Colours,',
        "Pandit DinDayal Upadhyay Marg, L.B.S Cross Road,",
        'Near Mulund Check Naka, Mulund (west),',
        'Mumbai- 400080, India',
      ],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Reach Our Leadership Team</h3>
        </motion.div>

        {/* Leadership contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contacts.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.2 }} className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-2">{c.name}</h4>
              <p className="text-slate-300 flex items-center mb-1"><Phone className="w-4 h-4 mr-2" />{c.phone}</p>
              <p className="text-slate-300 flex items-center"><Mail className="w-4 h-4 mr-2" />{c.email}</p>
            </motion.div>
          ))}
        </div>

        {/* Office addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addresses.map((addr, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-3"><MapPin className="w-4 h-4 mr-2 inline" />{addr.title}</h4>
              {addr.lines.map((line, i) => (
                <p key={i} className="text-slate-300">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
