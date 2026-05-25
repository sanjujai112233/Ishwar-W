import React from 'react';

import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f18] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-brand-blue/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Ishwar Logistics Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl tracking-tight text-white">ISHWAR <span className="text-brand-accent">LOGISTICS</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering global trade through innovative logistics, reliable freight forwarding, and seamless customs clearance solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors border border-white/10">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/Documents/Director_Message_Ishwar_Logistics.pdf" target="_blank" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">About Us</a>
              </li>
              <li>
                <a href="/Documents/Ishwar_Logistics_About_Us.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">Director Message</a>
              </li>
              <li>
                <a href="/clients" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">Clients</a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Sea Freight', 'Air Freight', 'Inland Haulage Arrangements', 'Warehousing & Distribution',
                , 'Port Handling', 'Project Movement', 'Supply Chain Consulting'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">{link}</a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to receive the latest logistics insights and company updates.
            </p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-blue w-full"
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-accent text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ishwar Logistics Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
