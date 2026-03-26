import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiDownload, FiSend, FiTerminal } from 'react-icons/fi';
import { resumeData } from '../data/resumeData';

const TypeWriter = ({ texts, speed = 80, deleteSpeed = 40, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {displayText}
      <span className="animate-typing-cursor text-neon-green">|</span>
    </span>
  );
};

const HeroSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* HEX Grid Background Decor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-royal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-wine/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Top Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
            <span className="text-neon-green">●</span>
            <span>SECURE CONNECTION ESTABLISHED</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span className="hidden sm:inline">{time.toLocaleTimeString()} UTC+5</span>
          </div>
          <div className="font-mono text-xs text-gray-600">
            THREAT LEVEL: <span className="text-yellow-500">ELEVATED</span>
          </div>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="glass rounded-xl overflow-hidden mb-8"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-royal-light/10 bg-black/40">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-wine-light/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon-green/80" />
            </div>
            <span className="font-mono text-xs text-gray-500 ml-3">
              root@basim-sec:~/portfolio
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-10">
            <div className="font-mono text-xs text-gray-600 mb-4">
              <span className="text-royal-glow">basim@cyberops</span>
              <span className="text-gray-500">:</span>
              <span className="text-neon-green">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-400">cat identity.txt</span>
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-royal-glow via-white to-royal-glow bg-clip-text text-transparent">
                {resumeData.name.split(' ')[0]}
              </span>
              <br />
              <span className="bg-gradient-to-r from-wine-glow via-white to-wine-glow bg-clip-text text-transparent">
                {resumeData.name.split(' ')[1]}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="font-mono text-base md:text-lg text-gray-400 mb-6"
            >
              <span className="text-wine-glow mr-2">$</span>
              <TypeWriter
                texts={[
                  'Cybersecurity Analyst',
                  'Penetration Tester',
                  'VAPT Specialist',
                  'Threat Intelligence Analyst',
                  'Security Instructor',
                ]}
              />
            </motion.div>

            {/* Bio Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-gray-500 max-w-2xl text-sm md:text-base mb-8 leading-relaxed"
            >
              <span className="text-neon-green/60">{'> '}</span>
              Expert in Web/API vulnerability assessment, OSINT, and CTI.
              Ranked <span className="text-royal-glow font-semibold">Top 2%</span> on TryHackMe.
              Stanford-funded Fellow. ICPC 2025 Finalist.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal to-royal-dark border border-royal-light/30 rounded-lg font-mono text-sm text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
              >
                <FiTerminal className="group-hover:rotate-12 transition-transform" />
                ACCESS PORTFOLIO
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-wine-dark to-wine-deep border border-wine-light/30 rounded-lg font-mono text-sm text-white hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 hover:scale-105"
              >
                <FiSend className="group-hover:translate-x-1 transition-transform" />
                CONTACT
              </a>
              <a
                href="/../data/BasimNawaz.pdf"
                download="/../data/BasimNawaz.pdf"
                className="group flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-neon-green/40 rounded-lg font-mono text-sm text-gray-400 hover:text-neon-green transition-all duration-300 hover:scale-105"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                DOWNLOAD CV
              </a>
              {/*
              <button className="group flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-neon-green/40 rounded-lg font-mono text-sm text-gray-400 hover:text-neon-green transition-all duration-300 hover:scale-105">
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                DOWNLOAD CV
              </button>
              */}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'THM Rank', value: 'Top 2%', color: 'text-neon-green' },
            { label: 'Students Trained', value: '300+', color: 'text-royal-glow' },
            { label: 'Vulns Found', value: '50+', color: 'text-wine-glow' },
            { label: 'Community', value: '15k+', color: 'text-neon-cyan' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-lg p-4 text-center hover:border-royal-light/30 transition-all group"
            >
              <div className={`font-orbitron text-2xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-gray-500 tracking-wider mt-1">
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 hover:text-royal-glow transition-colors"
          >
            <FiChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
