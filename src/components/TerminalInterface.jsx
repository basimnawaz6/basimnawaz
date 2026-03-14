import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { resumeData } from '../data/resumeData';

const commandResponses = {
  help: {
    output: `Available commands:
  about        - Operator profile summary
  skills       - List security capabilities
  tools        - View security arsenal
  projects     - Mission reports
  experience   - Professional timeline
  certs        - Certifications list
  achievements - Hacker profile stats
  contact      - Contact information
  social       - Social media links
  education    - Academic background
  whoami       - Identity check
  resume       - Download resume
  clear        - Clear terminal
  help         - Show this menu`,
  },
  whoami: {
    output: `root@basim-sec:~# id
uid=1337(basim) gid=1337(security) groups=1337(security),27(sudo),100(pentester)
Name: ${resumeData.name}
Role: Cybersecurity Analyst & VAPT Specialist
Location: ${resumeData.location}
Status: ACTIVE`,
  },
  about: {
    output: resumeData.profile,
  },
  skills: {
    output: `[OFFENSIVE SECURITY]
${resumeData.skills.offensive.map((s) => `  ▸ ${s.name} [${s.level}%]`).join('\n')}

[DEFENSIVE SECURITY]
${resumeData.skills.defensive.map((s) => `  ▸ ${s.name} [${s.level}%]`).join('\n')}

[FRAMEWORKS & STANDARDS]
${resumeData.skills.domains.map((s) => `  ▸ ${s.name} [${s.level}%]`).join('\n')}`,
  },
  tools: {
    output: `Security Arsenal:
${resumeData.tools.map((t) => `  [${t.category.toUpperCase().padEnd(13)}] ${t.name}`).join('\n')}`,
  },
  projects: {
    output: resumeData.projects
      .map(
        (p, i) =>
          `[MISSION-${String(i + 1).padStart(3, '0')}] ${p.title}
  Status: ${p.status} | Severity: ${p.severity}
  ${p.description.slice(0, 120)}...`
      )
      .join('\n\n'),
  },
  experience: {
    output: resumeData.experience
      .map((e) => `▸ ${e.role} @ ${e.company}\n  ${e.period}`)
      .join('\n\n'),
  },
  certs: {
    output: resumeData.certifications
      .map((c) => `  ✓ ${c.name}\n    Issued by: ${c.issuer} | ${c.year}`)
      .join('\n\n'),
  },
  certifications: {
    output: resumeData.certifications
      .map((c) => `  ✓ ${c.name}\n    Issued by: ${c.issuer} | ${c.year}`)
      .join('\n\n'),
  },
  achievements: {
    output: resumeData.achievements
      .map((a) => `  ★ ${a.title} - ${a.metric}\n    ${a.description}`)
      .join('\n\n'),
  },
  contact: {
    output: `[CONTACT INFORMATION]
  Email    : ${resumeData.email}
  Phone    : ${resumeData.phone}
  Location : ${resumeData.location}
  LinkedIn : ${resumeData.linkedin}
  GitHub   : ${resumeData.github}`,
  },
  social: {
    output: `  LinkedIn : ${resumeData.linkedin}
  GitHub   : ${resumeData.github}
  Email    : ${resumeData.email}`,
  },
  education: {
    output: resumeData.education
      .map((e) => `  ▸ ${e.degree}\n    ${e.institution} | ${e.period}`)
      .join('\n\n'),
  },
  resume: {
    output: `[*] Preparing download...\n[*] Resume: Basim_Nawaz_CV.pdf\n[  ] Download initiated. Check your downloads folder.`,
  },
};

const TerminalInterface = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: '╔══════  ═══════════════════════════════════╗' },
    { type: 'system', text: '║     BasimOS Terminal v2.0                ║' },
    { type: 'system', text: '║     Cybersecurity Portfolio Interface     ║' },
    { type: 'system', text: '╚══════════════════════════════════════════╝' },
    { type: 'system', text: '' },
    { type: 'output', text: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const processCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === 'clear') {
      setHistory([]);
      return null;
    }

    if (trimmed === '') return null;

    const response = commandResponses[trimmed];
    if (response) {
      return { type: 'output', text: response.output };
    }

    return {
      type: 'error',
      text: `bash: ${trimmed}: command not found. Type "help" for available commands.`,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const inputEntry = { type: 'input', text: input };
    const response = processCommand(input);

    setCmdHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);

    if (response === null && input.trim().toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, inputEntry, ...(response ? [response] : [])]);
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="terminal" className="relative py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="09" title="TERMINAL" subtitle="Interactive command interface" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/60 border-b border-gray-800/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-neon-green/80" />
            </div>
            <span className="font-mono text-xs text-gray-500 ml-3">
              basim@cyberops:~/portfolio — bash
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 h-[400px] overflow-y-auto no-scrollbar font-mono text-sm">
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                {entry.type === 'input' && (
                  <div className="flex items-start gap-0">
                    <span className="text-royal-glow">basim</span>
                    <span className="text-gray-500">@</span>
                    <span className="text-neon-green">cyberops</span>
                    <span className="text-gray-500">:~$ </span>
                    <span className="text-gray-300">{entry.text}</span>
                  </div>
                )}
                {entry.type === 'output' && (
                  <pre className="text-gray-400 whitespace-pre-wrap text-xs leading-relaxed pl-0">
                    {entry.text}
                  </pre>
                )}
                {entry.type === 'error' && (
                  <pre className="text-red-400 whitespace-pre-wrap text-xs">{entry.text}</pre>
                )}
                {entry.type === 'system' && (
                  <pre className="text-royal-glow/70 whitespace-pre-wrap text-xs">
                    {entry.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-0">
              <span className="text-royal-glow">basim</span>
              <span className="text-gray-500">@</span>
              <span className="text-neon-green">cyberops</span>
              <span className="text-gray-500">:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-gray-200 caret-neon-green font-mono text-sm"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-4 justify-center"
        >
          {['help', 'about', 'skills', 'projects', 'contact', 'whoami'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                setTimeout(() => {
                  const inputEntry = { type: 'input', text: cmd };
                  const response = processCommand(cmd);
                  setHistory((prev) => [...prev, inputEntry, ...(response ? [response] : [])]);
                }, 100);
              }}
              className="px-3 py-1.5 rounded-lg bg-gray-900/40 border border-gray-800 font-mono text-[10px] text-gray-500 hover:text-royal-glow hover:border-royal/30 transition-all"
            >
              $ {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalInterface;