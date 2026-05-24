import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ship, 
  Plane, 
  FileCheck, 
  Package, 
  Truck, 
  Anchor, 
  Wrench, 
  Cpu 
} from 'lucide-react';

const services = [
  {
    icon: Ship,
    title: 'Sea Freight Forwarding',
    description: 'Cost-effective and reliable FCL and LCL ocean freight solutions connecting major global ports.',
  },
  {
    icon: Plane,
    title: 'Air Freight Forwarding',
    description: 'Express and consolidated air cargo services for time-critical shipments worldwide.',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description: 'Expert AEO-certified brokerage ensuring swift, compliant customs processing at all major ports.',
  },
  {
    icon: Package,
    title: 'Warehousing & Distribution',
    description: 'Secure, modern storage facilities with inventory management and strategic distribution.',
  },
  {
    icon: Truck,
    title: 'Inland Transportation',
    description: 'Extensive road and rail networks providing seamless door-to-door domestic logistics.',
  },
  {
    icon: Anchor,
    title: 'Port Handling',
    description: 'Efficient stevedoring, cargo loading/unloading, and port operations management.',
  },
  {
    icon: Wrench,
    title: 'Project Cargo',
    description: 'Specialized handling for heavy-lift, oversized, and complex industrial equipment.',
  },
  {
    icon: Cpu,
    title: 'SCM Technology Solutions',
    description: 'Advanced digital tracking, EDI integration, and supply chain visibility platforms.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Logistics Solutions</span>
          </h3>
          <p className="text-slate-400 text-lg">
            Comprehensive freight, clearance, and supply chain services engineered for modern global trade demands.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-brand-blue/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-brand-accent/50">
                  <service.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-accent transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
