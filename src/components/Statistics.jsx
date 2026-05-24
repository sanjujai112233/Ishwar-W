import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: 17, suffix: '+' },
  { label: 'Team Members', value: 180, suffix: '+' },
  { label: 'Global Locations', value: 500, suffix: '+' },
  { label: 'Countries Served', value: 50, suffix: '+' },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const end = value;
      const incrementTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden border-y border-brand-accent/20">
      {/* Decorative abstract elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-brand-dark/80 font-bold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
