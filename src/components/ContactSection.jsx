import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="10" title="CONTACT.INIT" subtitle="Establish secure communication" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Terminal Style Info */}
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-neon-green/60 mb-4 tracking-widest">
                CONNECTION DETAILS
              </div>

              <div className="space-y-4">
                {[
                  { icon: FiMail, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
                  { icon: FiPhone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}` },
                  { icon: FiMapPin, label: 'Location', value: resumeData.location },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-royal-light/40 transition-all">
                      <Icon className="text-royal-glow text-sm" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-gray-600 tracking-wider">
                        {label.toUpperCase()}
                      </div>
                      {href ? (
                        <a href={href} className="text-sm text-gray-300 hover:text-royal-glow transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-300">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-royal-glow/60 mb-4 tracking-widest">
                SOCIAL PROTOCOLS
              </div>
              <div className="space-y-3">
                {[
                  { icon: FiLinkedin, label: 'LinkedIn', href: resumeData.linkedin, cmd: 'connect_linkedin' },
                  { icon: FiGithub, label: 'GitHub', href: resumeData.github, cmd: 'open_github' },
                  { icon: FiMail, label: 'Email', href: `mailto:${resumeData.email}`, cmd: 'send_email' },
                ].map(({ icon: Icon, label, href, cmd }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 border border-gray-800/50 hover:border-royal-light/30 transition-all group"
                  >
                    <Icon className="text-gray-400 group-hover:text-royal-glow transition-colors" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {label}
                      </div>
                      <div className="font-mono text-[9px] text-gray-600">
                        $ {cmd}
                      </div>
                    </div>
                    <FiExternalLink className="text-xs text-gray-600 group-hover:text-royal-glow transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl overflow-hidden">
              {/* Form Header */}
              <div className="px-6 py-4 border-b border-gray-800/50 bg-gray-900/40">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-wine-light/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-neon-green/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-500 ml-2">
                    secure_message_protocol
                  </span>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="font-mono text-xs text-gray-600 mb-4">
                  <span className="text-neon-green">$</span> init_secure_channel --encrypt
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'IDENTIFIER', placeholder: 'Your name', type: 'text' },
                    { name: 'email', label: 'EMAIL_ADDR', placeholder: 'your@email.com', type: 'email' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-mono text-[10px] text-gray-500 tracking-wider mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg font-mono text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-royal-light/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-gray-500 tracking-wider mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg font-mono text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-royal-light/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-gray-500 tracking-wider mb-2">
                    PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg font-mono text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-royal-light/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-royal to-royal-dark border border-royal-light/30 rounded-lg font-mono text-sm text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {sent ? (
                    <>
                      <span className="text-neon-green">✓</span> MESSAGE TRANSMITTED
                    </>
                  ) : (
                    <>
                      <FiSend />
                      TRANSMIT MESSAGE
                    </>
                  )}
                </button>

                <div className="font-mono text-[10px] text-gray-700 text-center">
                  // All communications are end-to-end encrypted
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;