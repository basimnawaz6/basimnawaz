import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiAward, FiLink } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const statIcons = {
  users: FiUsers,
  team: FiUsers,
  workshop: FiCalendar,
  handshake: FiLink,
};

const CommunitySection = () => {
  const { community } = resumeData;

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="08" title="COMMUNITY.NET" subtitle="Leadership & cybersecurity advocacy" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 md:px-8 py-6 border-b border-gray-800/50 bg-gradient-to-r from-royal-deep/30 to-wine-deep/20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-royal/20 border border-royal/30 w-fit">
                <FiUsers className="text-2xl text-royal-glow" />
              </div>
              <div>
                <h3 className="font-orbitron text-xl font-bold text-white">
                  {community.org}
                </h3>
                <p className="font-mono text-xs text-gray-500">
                  {community.role} • {community.period}
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-gray-800/50">
            {community.stats.map((stat, i) => {
              const Icon = statIcons[stat.icon] || FiAward;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border-r border-b lg:border-b-0 border-gray-800/30 last:border-r-0 text-center group hover:bg-royal/5 transition-colors"
                >
                  <Icon className="text-lg text-royal-glow mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-orbitron text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-wider">
                    {stat.label.toUpperCase()}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Description */}
          <div className="px-6 md:px-8 py-6">
            <ul className="space-y-3">
              {community.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="text-neon-green mt-0.5 flex-shrink-0">▸</span>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;