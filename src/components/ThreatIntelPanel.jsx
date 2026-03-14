import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiActivity, FiShield, FiGlobe } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const mockCVEs = [
  { id: 'CVE-2024-21762', severity: 'CRITICAL', cvss: 9.8, product: 'FortiOS SSL VPN', status: 'Exploited' },
  { id: 'CVE-2024-3400', severity: 'CRITICAL', cvss: 10.0, product: 'Palo Alto PAN-OS', status: 'Active' },
  { id: 'CVE-2024-1709', severity: 'HIGH', cvss: 8.1, product: 'ConnectWise ScreenConnect', status: 'Patched' },
  { id: 'CVE-2023-46805', severity: 'HIGH', cvss: 8.2, product: 'Ivanti Connect Secure', status: 'Exploited' },
  { id: 'CVE-2024-27198', severity: 'CRITICAL', cvss: 9.8, product: 'JetBrains TeamCity', status: 'Active' },
];

const mockAlerts = [
  { type: 'Ransomware', msg: 'LockBit 3.0 variant detected in South Asia region', time: '2m ago', level: 'critical' },
  { type: 'Phishing', msg: 'New campaign targeting financial sector via spoofed emails', time: '15m ago', level: 'high' },
  { type: 'DDoS', msg: 'Volumetric attack detected on educational infrastructure', time: '1h ago', level: 'medium' },
  { type: 'APT', msg: 'Suspected APT29 activity in government networks', time: '3h ago', level: 'critical' },
];

const ThreatIntelPanel = () => {
  const [stats, setStats] = useState({
    attacks: 2847,
    vulns: 1293,
    alerts: 847,
    blocked: 2401,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        attacks: prev.attacks + Math.floor(Math.random() * 5),
        vulns: prev.vulns + Math.floor(Math.random() * 2),
        alerts: prev.alerts + Math.floor(Math.random() * 3),
        blocked: prev.blocked + Math.floor(Math.random() * 4),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: 'Attacks Detected', value: stats.attacks, icon: FiActivity, color: 'text-red-400', bg: 'bg-red-500/10' },
    { label: 'CVEs Tracked', value: stats.vulns, icon: FiAlertTriangle, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { label: 'Active Alerts', value: stats.alerts, icon: FiGlobe, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { label: 'Threats Blocked', value: stats.blocked, icon: FiShield, color: 'text-neon-green', bg: 'bg-neon-green/10' },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="05" title="THREAT.INTEL" subtitle="Live security monitoring feed" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 group hover:border-royal-light/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <Icon className={`text-sm ${stat.color}`} />
                  </div>
                </div>
                <div className={`font-orbitron text-2xl font-bold ${stat.color}`}>
                  {stat.value.toLocaleString()}
                </div>
                <div className="font-mono text-[10px] text-gray-500 tracking-wider mt-1">
                  {stat.label.toUpperCase()}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* CVE Feed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-800/50 flex items-center gap-2">
              <FiAlertTriangle className="text-orange-400" />
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                LATEST CVE ADVISORIES
              </span>
              <div className="ml-auto w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="divide-y divide-gray-800/30">
              {mockCVEs.map((cve, i) => (
                <motion.div
                  key={cve.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-6 py-3 hover:bg-royal/5 transition-colors cursor-default"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-royal-glow">{cve.id}</span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded ${
                      cve.severity === 'CRITICAL'
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                        : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      CVSS {cve.cvss}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{cve.product}</span>
                    <span className={`font-mono text-[9px] ${
                      cve.status === 'Exploited' ? 'text-red-400' :
                      cve.status === 'Active' ? 'text-yellow-400' : 'text-neon-green'
                    }`}>
                      {cve.status.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Alert Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-800/50 flex items-center gap-2">
              <FiActivity className="text-red-400" />
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                SECURITY ALERTS
              </span>
              <div className="ml-auto flex items-center gap-1">
                <span className="font-mono text-[9px] text-red-400">LIVE</span>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </div>
            </div>
            <div className="divide-y divide-gray-800/30">
              {mockAlerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-6 py-4 hover:bg-wine-deep/20 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      alert.level === 'critical' ? 'bg-red-500 animate-pulse' :
                      alert.level === 'high' ? 'bg-orange-500' : 'bg-yellow-500'
                    }`} />
                    <span className="font-mono text-xs font-bold text-gray-300">{alert.type}</span>
                    <span className="ml-auto font-mono text-[9px] text-gray-600">{alert.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 pl-4">{alert.msg}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreatIntelPanel;