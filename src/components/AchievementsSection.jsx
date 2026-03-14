import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const AchievementsSection = () => {
  const achievementIcons = [FiTrendingUp, FiStar, FiAward];

  return (
    <section id="achievements" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="06" title="ACHIEVEMENTS.LOG" subtitle="Hacker profile & certifications" />

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {resumeData.achievements.map((ach, i) => {
            const Icon = achievementIcons[i] || FiAward;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group hover:border-royal-light/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-wine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-royal-deep/40 border border-royal/20">
                      <Icon className="text-xl text-royal-glow" />
                    </div>
                    <div className="font-orbitron text-3xl font-black bg-gradient-to-r from-royal-glow to-neon-cyan bg-clip-text text-transparent">
                      {ach.metric}
                    </div>
                  </div>

                  <h3 className="font-orbitron text-sm font-bold text-white mb-1">
                    {ach.title}
                  </h3>
                  <p className="font-mono text-[10px] text-royal-glow/70 mb-3">
                    {ach.platform}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {ach.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-gray-500">COMPLETION</span>
                      <span className="text-royal-glow">{ach.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ach.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-royal to-neon-cyan shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <FiCheckCircle className="text-neon-green" />
            <span className="font-mono text-xs text-neon-green/70 tracking-widest">
              VERIFIED CERTIFICATIONS
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-neon-green/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-green/20 transition-colors">
                  <FiAward className="text-neon-green text-sm" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">
                    {cert.name}
                  </h4>
                  <p className="font-mono text-[10px] text-gray-500 mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;