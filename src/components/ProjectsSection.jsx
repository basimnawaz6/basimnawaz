import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiAlertTriangle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const severityColors = {
  CRITICAL: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-500' },
  HIGH: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', dot: 'bg-orange-500' },
  MEDIUM: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-500' },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="04" title="CYBER.LAB" subtitle="Mission reports & security projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, i) => {
            const sev = severityColors[project.severity];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl overflow-hidden group hover:border-royal-light/30 transition-all duration-500"
              >
                {/* Header */}
                <div className="px-6 pt-6 pb-4 border-b border-gray-800/50">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-gray-600">
                          MISSION-{String(i + 1).padStart(3, '0')}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${sev.bg} ${sev.border} ${sev.text} border`}>
                          {project.severity}
                        </span>
                      </div>
                      <h3 className="font-orbitron text-base md:text-lg font-bold text-white group-hover:text-royal-glow transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-gray-500 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded text-[9px] font-mono ${
                      project.status === 'COMPLETED' ? 'text-neon-green bg-neon-green/10' : 'text-yellow-400 bg-yellow-400/10'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'COMPLETED' ? 'bg-neon-green' : 'bg-yellow-400'
                      }`} />
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-4">
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {project.details}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-royal-deep/40 border border-royal/20 font-mono text-[10px] text-royal-glow/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  {/*
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 font-mono text-[10px] text-gray-400 hover:text-royal-glow hover:border-royal/40 transition-all">
                      <FiGithub size={12} />
                      SOURCE
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 font-mono text-[10px] text-gray-400 hover:text-neon-green hover:border-neon-green/40 transition-all">
                      <FiExternalLink size={12} />
                      REPORT
                    </button>
                  </div>
                  */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
