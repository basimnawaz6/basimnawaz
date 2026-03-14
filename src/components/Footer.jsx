import React from 'react';
import { FiShield, FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FiShield className="text-royal-glow" />
            <span className="font-orbitron text-sm tracking-wider">
              <span className="text-royal-glow">BASIM</span>
              <span className="text-wine-glow">.</span>
              <span className="text-gray-400">SEC</span>
            </span>
          </div>

          {/* Center */}
          <div className="font-mono text-xs text-gray-600 flex items-center gap-1">
            Built with <FiHeart className="text-wine-light text-[10px]" /> by {resumeData.name} ©{' '}
            {new Date().getFullYear()}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: resumeData.github },
              { icon: FiLinkedin, href: resumeData.linkedin },
              { icon: FiMail, href: `mailto:${resumeData.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center text-gray-500 hover:text-royal-glow hover:border-royal/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-6 pt-4 border-t border-gray-800/30 text-center">
          <div className="font-mono text-[10px] text-gray-700">
            root@basim-sec:~$ echo "Thanks for visiting" && exit
          </div>
          <div className="font-mono text-[10px] text-neon-green/30 mt-1">
            [Session terminated]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;