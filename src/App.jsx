import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Technology from './components/Technology';
import Statistics from './components/Statistics';
import Clients from './components/Clients';
import DirectorMessage from './components/DirectorMessage';
import GlobalPresence from './components/GlobalPresence';
import Ports from './components/Ports';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Technology /> */}
      <Statistics />
      <GlobalPresence />
      {/* Contact page is now a separate route */}
    </>
  );
};

const MissionPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Mission />
    </div>
  );
};

const ClientsPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <Clients />
    </div>
  );
};

const DirectorPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <DirectorMessage />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-6 relative"
            >
              <div className="absolute inset-0 bg-brand-blue/30 blur-xl rounded-full"></div>
              <img src="/logo.png" alt="Ishwar Logistics Logo" className="h-20 w-auto relative z-10" />
            </motion.div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-bold text-2xl tracking-widest text-white uppercase">
                Ishwar<span className="text-brand-accent"> Logistics</span>
              </h1>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-brand-blue"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-brand-dark min-h-screen text-slate-50 selection:bg-brand-blue selection:text-white overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/director" element={<DirectorPage />} />
            <Route path="/ports" element={<Ports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
