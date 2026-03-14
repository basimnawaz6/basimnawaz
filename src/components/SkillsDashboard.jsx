import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCrosshair, FiShield, FiGrid, FiCode } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const SkillBar = ({ name, level, delay = 0, color = 'blue' }) => {
  const colors = {
    blue: { bar: 'from-royal to-royal-glow', glow: 'shadow-[0_0_10px_rgba(59,130,246,0.4)]', text: 'text-royal-glow' },
    wine: { bar: 'from-wine to-wine-glow', glow: 'shadow-[0_0_10px_rgba(220,38,38,0.4)]', text: 'text-wine-glow' },
    green: { bar: 'from-emerald-700 to-neon-green', glow: 'shadow-[0_0_10px_rgba(0,255,65,0.3)]', text: 'text-neon-green' },
    cyan: { bar: 'from-cyan-700 to-neon-cyan', glow: 'shadow-[0_0_10px_rgba(0,255,245,0.3)]', text: 'text-neon-cyan' },
  };
  const c = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
          {name}
        </span>
        <span className={`font-mono text-xs ${c.text}`}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} ${c.glow}`}
        />
      </div>
    </motion.div>
  );
};

const categories = [
  {
    id: 'offensive',
    label: 'Offensive Security',
    icon: FiCrosshair,
    color: 'wine',
    data: 'offensive',
  },
  {
    id: 'defensive',
    label: 'Defensive Security',
    icon: FiShield,
    color: 'blue',
    data: 'defensive',
  },
  {
    id: 'domains',
    label: 'Frameworks & Standards',
    icon: FiGrid,
    color: 'green',
    data: 'domains',
  },
  {
    id: 'programming',
    label: 'Programming & Scripting',
    icon: FiCode,
    color: 'cyan',
    data: 'programming',
  },
];

const SkillsDashboard = () => {
  const [active, setActive] = useState('offensive');

  const activeCategory = categories.find((c) => c.id === active);
  const skills = resumeData.skills[activeCategory.data];

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="02" title="SKILLS.MATRIX" subtitle="Capability assessment modules" />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'glass border-royal-light/40 text-royal-glow box-glow-blue'
                    : 'bg-gray-900/30 border border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{cat.label.toUpperCase()}</span>
                <span className="sm:hidden">{cat.id.toUpperCase().slice(0, 3)}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${
                activeCategory.color === 'wine' ? 'bg-wine-light' :
                activeCategory.color === 'green' ? 'bg-neon-green' :
                activeCategory.color === 'cyan' ? 'bg-neon-cyan' : 'bg-royal-glow'
              } animate-pulse`} />
              <span className="font-mono text-xs text-gray-500 tracking-widest">
                {activeCategory.label.toUpperCase()} MODULE
              </span>
            </div>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.08}
                  color={activeCategory.color}
                />
              ))}
            </div>
          </motion.div>

          {/* Radar-style Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Decorative Radar */}
            <div className="relative w-64 h-64">
              {/* Circles */}
              {[1, 0.75, 0.5, 0.25].map((scale) => (
                <div
                  key={scale}
                  className="absolute inset-0 border border-royal-light/10 rounded-full"
                  style={{
                    transform: `scale(${scale})`,
                    top: `${(1 - scale) * 50}%`,
                    left: `${(1 - scale) * 50}%`,
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                  }}
                />
              ))}
              {/* Cross lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-royal-light/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-royal-light/10" />

              {/* Sweep */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left"
                style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.5), transparent)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Skill Points */}
              {skills.map((skill, i) => {
                const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
                const radius = (skill.level / 100) * 110;
                const x = Math.cos(angle) * radius + 128;
                const y = Math.sin(angle) * radius + 128;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="absolute w-3 h-3 rounded-full bg-royal-glow shadow-[0_0_8px_#3b82f6]"
                    style={{ left: x - 6, top: y - 6 }}
                    title={skill.name}
                  />
                );
              })}

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neon-green/50 shadow-[0_0_15px_rgba(0,255,65,0.5)] animate-pulse" />
            </div>

            <div className="mt-6 font-mono text-xs text-gray-500 text-center">
              SKILL DISTRIBUTION RADAR • {activeCategory.label.toUpperCase()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;