import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ number, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="font-mono text-royal-glow text-sm tracking-widest">
          {number}
        </span>
        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-royal-light/50 to-transparent" />
      </div>
      <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold">
        <span className="bg-gradient-to-r from-royal-glow via-white to-wine-glow bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="font-mono text-sm text-gray-500 mt-2 tracking-wider">
          {'// '}{subtitle}
        </p>
      )}
      <div className="mt-4 h-[2px] w-32 bg-gradient-to-r from-royal-light via-wine-light to-transparent rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;