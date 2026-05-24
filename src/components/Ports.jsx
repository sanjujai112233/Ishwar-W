import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cloud, Ship } from 'lucide-react';

const Ports = () => {
  const dryPorts = [
    'ICD Dadri',
    'ICD Ahemdabad',
    'ICD Tughlakabad',
    'ICD Kodiyar',
    'ICD Patparganj',
    'ICD Morbi',
    'ICD ACT',
    'ICD Khatuwas',
    'ICD Piyala',
    'IGI Airport, New Delhi',
    'ICD DICT (Sonipat)',
    'ICD Jattipur',
    'ICD Barhi',
    'ICD Jaipur',
    'ICD Ludhiana',
    'ICD Jodhpur',
    'ICD Palwal',
    'ICD Moradabad',
    'ICD Kashipur',
    'ICD Modinagar',
  ];

  const ports = [
    'Nhava Sheva (Mumbai)',
    'Mundra',
    'Pipavav',
    'Hazira',
    'Chennai',
    'Tuticorin',
  ];

  return (
    <section id="ports" className="bg-brand-dark relative overflow-hidden min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628166568197-ad27e170158f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='py-24 ' style={{ height: "100%", width: "100%", background: 'rgb(0, 0, 0, 0.7)' }}>
        <div className="absolute top-0 left-0 w-full h-px " />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  p-8 rounded">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Network</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ports & Dry Ports</h3>
          </motion.div>


          {/* Dry Port Offices */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center"><MapPin className="w-5 h-5 mr-2 text-brand-accent" />Dry Port Offices</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
              {dryPorts.map((port, idx) => (
                <li key={idx} className="flex items-center">
                  <Cloud className="w-4 h-4 mr-2 text-brand-blue" />{port}
                </li>
              ))}
            </ul>
          </div>

          {/* Port Locations */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center"><Ship className="w-5 h-5 mr-2 text-brand-accent" />Port Locations</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              {ports.map((p, idx) => (
                <li key={idx} className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-brand-blue" />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ports;
