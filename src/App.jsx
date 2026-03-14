import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsDashboard from './components/SkillsDashboard';
import ToolsArsenal from './components/ToolsArsenal';
import ProjectsSection from './components/ProjectsSection';
import ThreatIntelPanel from './components/ThreatIntelPanel';
import AchievementsSection from './components/AchievementsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import CommunitySection from './components/CommunitySection';
import TerminalInterface from './components/TerminalInterface';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const bootSequence = [
    { text: '[SYSTEM] Initializing BasimOS v2.0...', delay: 0 },
    { text: '[  OK  ] Loading kernel modules...', delay: 400 },
    { text: '[  OK  ] Mounting encrypted filesystem...', delay: 700 },
    { text: '[  OK  ] Starting security daemon...', delay: 1000 },
    { text: '[  OK  ] Loading threat intelligence feeds...', delay: 1300 },
    { text: '[  OK  ] Establishing secure connection...', delay: 1600 },
    { text: '[  OK  ] All systems operational.', delay: 1900 },
    { text: '', delay: 2200 },
    { text: '> ACCESS GRANTED', delay: 2400 },
  ];

  useEffect(() => {
    bootSequence.forEach(({ text, delay }) => {
      setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay);
    });
    setTimeout(onComplete, 3200);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-cyber-black flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl w-full px-6">
        <div className="font-mono text-sm md:text-base space-y-1">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={
                line.includes('ACCESS GRANTED')
                  ? 'text-neon-green glow-green text-lg font-bold mt-4'
                  : line.includes('OK')
                  ? 'text-neon-green/80'
                  : line.includes('SYSTEM')
                  ? 'text-royal-glow'
                  : 'text-gray-500'
              }
            >
              {line}
            </motion.div>
          ))}
          <span className="terminal-cursor text-neon-green" />
        </div>
      </div>
    </motion.div>
  );
};

/* ====== FLOATING PARTICLES ====== */
const CyberParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0 ? '#3b82f6' : p.id % 3 === 1 ? '#dc2626' : '#00fff5',
            boxShadow: `0 0 ${p.size * 3}px ${
              p.id % 3 === 0 ? '#3b82f6' : p.id % 3 === 1 ? '#dc2626' : '#00fff5'
            }`,
          }}
          animate={{
            y: [0, -60, -20, -80, 0],
            x: [0, 20, -15, 10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-cyber-black text-gray-200 font-rajdhani">
      <AnimatePresence>
        {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <MatrixRain />
          <CyberParticles />
          <div className="cyber-grid-bg fixed inset-0 pointer-events-none z-0" />

          <div className="relative z-10">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsDashboard />
            <ToolsArsenal />
            <ProjectsSection />
            <ThreatIntelPanel />
            <AchievementsSection />
            <ExperienceTimeline />
            <CommunitySection />
            <TerminalInterface />
            <ContactSection />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;