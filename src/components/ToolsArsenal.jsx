import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBug, FaNetworkWired, FaSearch, FaLinux, FaLock, FaDatabase,
  FaCode, FaShieldAlt, FaTerminal, FaEye, FaKey, FaFingerprint,
  FaServer, FaCrosshairs,
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const iconMap = {
  'Burp Suite': FaBug,
  'Metasploit': FaCrosshairs,
  'Nmap': FaNetworkWired,
  'Wireshark': FaEye,
  'Wazuh SIEM': FaShieldAlt,
  'Shodan': FaSearch,
  'Nessus': FaFingerprint,
  'OpenVAS': FaServer,
  'Kali Linux': FaLinux,
  'Autopsy': FaDatabase,
  'John the Ripper': FaKey,
  'Hashcat': FaLock,
  'OWASP ZAP': FaBug,
  'Git/GitHub': FaCode,
};

const ToolsArsenal = () => {
  return (
    <section id="tools" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="03" title="TOOLS.ARSENAL" subtitle="Security toolkit & platforms" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {resumeData.tools.map((tool, i) => {
            const Icon = iconMap[tool.name] || FaTerminal;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-3 cursor-default group hover:border-royal-light/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="relative">
                  <Icon className="text-2xl text-gray-400 group-hover:text-royal-glow transition-colors duration-300" />
                  <div className="absolute inset-0 blur-lg bg-royal-glow/0 group-hover:bg-royal-glow/20 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <div className="font-mono text-[10px] text-gray-300 group-hover:text-white transition-colors leading-tight">
                    {tool.name}
                  </div>
                  <div className="font-mono text-[8px] text-gray-600 mt-0.5">
                    {tool.category}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsArsenal;