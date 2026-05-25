import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home', hash: '#home' },
  { name: 'About', href: '/#about', hash: '#about' },
  //{ name: 'Services', href: '/#services', hash: '#services' },
  // { name: 'Technology', href: '/#technology', hash: '#technology' },
  //{ name: 'Presence', href: '/#presence', hash: '#presence' },
  { name: 'Mission', href: '/mission', hash: null },
  { name: 'Clients', href: '/clients', hash: null },
  { name: 'Director', href: '/director', hash: null },
  { name: 'Ports', href: '/ports', hash: null },
  { name: 'Certificates', href: '/certificates', hash: null },
  { name: 'Contacts', href: '/contact', hash: null },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 glass ${isScrolled ? ' py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Ishwar Logistics Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight text-white">ISHWAR<span className="text-brand-accent"> LOGISTICS</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href === '/mission' || link.href === '/clients' || link.href === '/director' || link.href === '/contact' || link.href === '/ports' || link.href === '/certificates' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
    key={link.name}
    to={location.pathname === '/' ? (link.hash || '/') : link.href}
    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    {link.name}
  </Link>
              )
            ))}
            <Link to="/contact" className="px-5 py-2 rounded-full bg-brand-blue text-white text-sm font-medium hover:bg-brand-accent transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-card border-t-0 py-4 md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                link.href === '/mission' || link.href === '/clients' || link.href === '/director' || link.href === '/contact' || link.href === '/ports' || link.href === '/certificates' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={location.pathname === '/' ? link.hash : link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
