import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiUsers, FiCode } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const typeIcons = {
  Internship: FiBriefcase,
  Fellowship: FiAward,
  Training: FiBookOpen,
  Instructor: FiUsers,
  Academic: FiCode,
};

const typeColors = {
  Internship: 'border-royal-glow bg-royal/20 text-royal-glow',
  Fellowship: 'border-neon-green bg-neon-green/10 text-neon-green',
  Training: 'border-wine-glow bg-wine/20 text-wine-glow',
  Instructor: 'border-neon-cyan bg-cyan-500/10 text-neon-cyan',
  Academic: 'border-purple-400 bg-purple-500/10 text-purple-400',
};

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="07" title="MISSION.LOG" subtitle="Professional experience timeline" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-royal-light/30 via-wine-light/20 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {resumeData.experience.map((exp, i) => {
              const Icon = typeIcons[exp.type] || FiBriefcase;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-royal-glow bg-cyber-dark z-10 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2">
                    <div className="glass rounded-2xl p-6 hover:border-royal-light/30 transition-all group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg border ${typeColors[exp.type]}`}>
                          <Icon size={14} />
                        </div>
                        <div>
                          <h3 className="font-orbitron text-sm font-bold text-white group-hover:text-royal-glow transition-colors">
                            {exp.role}
                          </h3>
                          <p className="font-mono text-[11px] text-gray-500">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="font-mono text-[10px] text-royal-glow/60 mb-3 tracking-wider">
                        {exp.period}
                      </div>

                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className="text-royal-glow mt-1 flex-shrink-0">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;