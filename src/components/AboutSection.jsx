import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const AboutSection = () => {
  const highlights = [
    { label: 'Specialization', value: 'Web/API VAPT & OSINT' },
    { label: 'Framework', value: 'OWASP Top 10 & MITRE ATT&CK' },
    { label: 'Recognition', value: 'Stanford-funded Fellow' },
    { label: 'Global Rank', value: 'Top 2% TryHackMe' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="01" title="SYSTEM.PROFILE" subtitle="About the operator" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 relative overflow-hidden group">
              {/* Scan line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-glow/50 to-transparent animate-scan" />
              </div>

              {/* Avatar */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-royal-light to-wine-light p-[2px] animate-border-glow">
                  <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
                    <div className="font-orbitron text-5xl font-black bg-gradient-to-br from-royal-glow to-wine-glow bg-clip-text text-transparent">
                      BN
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-royal-glow/10 blur-xl" />
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                  {resumeData.name}
                </h3>
                <p className="font-mono text-xs text-royal-glow tracking-wider">
                  CYBERSECURITY ANALYST
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: FiMapPin, text: resumeData.location },
                  { icon: FiMail, text: resumeData.email },
                  { icon: FiPhone, text: resumeData.phone },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-400">
                    <Icon className="text-royal-glow text-xs flex-shrink-0" />
                    <span className="font-mono text-xs truncate">{text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {[
                  { icon: FiLinkedin, href: resumeData.linkedin, label: 'LinkedIn' },
                  { icon: FiGithub, href: resumeData.github, label: 'GitHub' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-royal-glow hover:border-royal-light/40 transition-all group/icon"
                  >
                    <Icon className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* System Info Panel */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-xs text-neon-green/70 tracking-widest">
                  OPERATOR BRIEFING
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {resumeData.profile}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-royal-light/30 transition-all group cursor-default"
                >
                  <div className="font-mono text-[10px] text-gray-600 tracking-wider mb-1">
                    {item.label.toUpperCase()}
                  </div>
                  <div className="font-rajdhani font-semibold text-gray-200 group-hover:text-royal-glow transition-colors">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-wine-glow/70 tracking-widest mb-4">
                EDUCATION LOG
              </div>
              {resumeData.education.map((edu) => (
                <div key={edu.degree} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div className="w-2 h-2 rounded-full bg-wine-light mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 font-semibold text-sm">{edu.degree}</div>
                    <div className="font-mono text-xs text-gray-500">
                      {edu.institution} | {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;