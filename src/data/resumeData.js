export const resumeData = {
  name: "Basim Nawaz",
  title: "Cybersecurity Analyst & VAPT Specialist",
  email: "basimnawaz6@gmail.com",
  phone: "+92 331 4610100",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/basimnawaz6",
  github: "https://github.com/basimnawaz6",

  profile:
    "Cybersecurity Analyst and Penetration Tester specializing in Web/API vulnerability assessment, OSINT, and Threat Intelligence (CTI). Expert in manual testing aligned with OWASP Top 10, utilizing Burp Suite, Metasploit, and Wazuh SIEM to uncover critical flaws and deliver actionable, CVSS-scored reports. Selected as a Stanford-funded Career-Prep Fellow (AMAL Academy) among 3,400+ applicants. Founder of Tech Hierarchy (15k+ reach) and ICPC 2025 Finalist, combining offensive security expertise with proven leadership. Ranked Top 2% globally on TryHackMe.",

  skills: {
    offensive: [
      { name: "Web Penetration Testing", level: 95 },
      { name: "Vulnerability Assessment (VAPT)", level: 92 },
      { name: "OSINT Reconnaissance", level: 90 },
      { name: "Red Team Operations", level: 85 },
      { name: "Web Application Exploitation", level: 90 },
    ],
    defensive: [
      { name: "SOC Monitoring (Wazuh SIEM)", level: 88 },
      { name: "Threat Intelligence (CTI)", level: 90 },
      { name: "Incident Response", level: 85 },
      { name: "Digital Forensics", level: 82 },
      { name: "Blue Team Exercises", level: 86 },
    ],
    domains: [
      { name: "OWASP Top 10", level: 95 },
      { name: "CVSS Risk Scoring", level: 90 },
      { name: "NIST CSF", level: 85 },
      { name: "ISO/IEC 27001", level: 88 },
      { name: "MITRE ATT&CK", level: 87 },
      { name: "Secure SDLC", level: 83 },
    ],
    programming: [
      { name: "Python (Automation/Scripting)", level: 88 },
      { name: "Bash Shell Scripting", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "SQL", level: 82 },
      { name: "HTML/CSS", level: 78 },
    ],
  },

  tools: [
    { name: "Burp Suite", category: "Web Testing" },
    { name: "Metasploit", category: "Exploitation" },
    { name: "Nmap", category: "Scanning" },
    { name: "Wireshark", category: "Analysis" },
    { name: "Wazuh SIEM", category: "Monitoring" },
    { name: "Shodan", category: "OSINT" },
    { name: "Nessus", category: "Vulnerability" },
    { name: "OpenVAS", category: "Vulnerability" },
    { name: "Kali Linux", category: "Platform" },
    { name: "Autopsy", category: "Forensics" },
    { name: "John the Ripper", category: "Cracking" },
    { name: "Hashcat", category: "Cracking" },
    { name: "OWASP ZAP", category: "Web Testing" },
    { name: "Git/GitHub", category: "DevOps" },
  ],

  projects: [
    {
      title: "End-to-End Web Application VAPT",
      subtitle: "SAST + Manual Pentest",
      description:
        "Uncovered 8+ high/critical vulnerabilities (SQLi, XSS, Insecure File Upload, Missing Rate Limiting) via manual Burp Suite interception of payment flows, directly preventing potential data breaches and financial fraud.",
      details:
        "Delivered a developer-ready report with PoC validation, CVSS risk scoring, and remediation steps for exposed merchant keys and logic flaws, ensuring secure deployment before launch.",
      tech: ["Burp Suite", "OWASP", "CVSS", "Manual Testing"],
      status: "COMPLETED",
      severity: "CRITICAL",
    },
    {
      title: "Metasploitable 2 Exploitation Lab",
      subtitle: "Service-Based Vulnerability Assessment",
      description:
        "Executed full service enumeration and exploitation chain on 4+ critical services, successfully gaining remote access via vsftpd backdoor (CVE-2011-2523), Samba usermap (CVE-2007-2447), and UnrealIRCd (CVE-2010-2075).",
      details:
        "Documented findings with precise CVE references, reproduction steps, and patching strategies, demonstrating mastery of legacy system hardening and exploit mitigation.",
      tech: ["Metasploit", "Nmap", "CVE Analysis", "Kali Linux"],
      status: "COMPLETED",
      severity: "HIGH",
    },
    {
      title: "OSINT Exposure Assessment via Shodan",
      subtitle: "IoT Device Discovery & Risk Analysis",
      description:
        "Leveraged Shodan device indexing and banner grabbing to identify internet-exposed HELO Plus broadcast encoders in Denmark, filtering by geographic metadata and open port 80 services.",
      details:
        "Validated live video encoding systems with unauthenticated access, highlighting risks of publicly exposed IoT assets and providing recommendations for network segmentation and firewall rules.",
      tech: ["Shodan", "OSINT", "Banner Grabbing", "Network Security"],
      status: "COMPLETED",
      severity: "HIGH",
    },
    {
      title: "Digital Forensic Investigation",
      subtitle: "Data Exfiltration Case",
      description:
        "Investigated a simulated data breach caused by email spoofing, utilizing Autopsy for disk forensics and header analysis to trace the attack vector and identify exfiltrated confidential files.",
      details:
        "Reconstructed the timeline of the incident and produced an incident response report detailing the root cause, scope of data loss, and email authentication improvements to prevent recurrence.",
      tech: ["Autopsy", "Disk Forensics", "Email Analysis", "IR Report"],
      status: "COMPLETED",
      severity: "MEDIUM",
    },
  ],

  experience: [
    {
      role: "CTI and Cyber Security Intern",
      company: "Resecurity",
      period: "Dec 2025 – Feb 2026",
      type: "Internship",
      bullets: [
        "Executed cyber threat intelligence (CTI) investigations including OSINT research, threat actor profiling, and structured vulnerability scanning with manual validation.",
        "Deployed and configured Wazuh SIEM for log monitoring and file integrity, supporting red/blue team exercises and producing enterprise-style reports with PoC and remediation guidance.",
      ],
    },
    {
      role: "Career-Prep Fellow",
      company: "AMAL Academy (Stanford-Funded)",
      period: "Dec 2025 – Mar 2026",
      type: "Fellowship",
      bullets: [
        "Selected among 3,400+ applicants for a competitive fellowship; applying advanced leadership and problem-solving frameworks to drive cybersecurity awareness initiatives.",
        "Collaborating on cross-functional team projects to bridge technical security concepts with business strategy and professional communication standards.",
      ],
    },
    {
      role: "Cybersecurity Trainer",
      company: "IPEI Lahore",
      period: "Nov 2025 – Present",
      type: "Training",
      bullets: [
        "Developed and delivered a comprehensive cybersecurity curriculum covering Networking, Linux, VAPT and Windows Server (ADDS) for 20+ students.",
        "Facilitated practical labs using Packet Tracer, Kali Linux, Nessus/OpenVAS, and Metasploit, enabling trainees to identify, exploit, and document vulnerabilities.",
      ],
    },
    {
      role: "Cyber Security Instructor",
      company: "PNY Trainings",
      period: "Apr 2025 – Present",
      type: "Instructor",
      bullets: [
        "Instructed hands-on training modules for Vulnerability Assessment & Penetration Testing (VAPT) and OSINT using Kali Linux, Burp Suite, Nmap, and Metasploit.",
        "Equipped 20+ students with offensive security skills, directly enabling them to identify and document 50+ critical vulnerabilities across simulated network infrastructures.",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "PUCIT",
      period: "Feb 2024 – Present",
      type: "Academic",
      bullets: [
        "Mentored 300+ undergraduate students across 4 core courses (Programming Fundamentals, DSA, OOP, DLD), conducting lab sessions on C/C++ and digital logic design.",
        "Provided one-on-one tutorial support and code optimization feedback on 50+ weekly submissions, contributing to a 10% increase in average lab scores.",
      ],
    },
  ],

  community: {
    role: "Founder",
    org: "Tech Hierarchy",
    period: "Jan 2024 – Present",
    stats: [
      { label: "Community Reach", value: "15,000+", icon: "users" },
      { label: "Team Members", value: "20+", icon: "team" },
      { label: "Workshops Organized", value: "35+", icon: "workshop" },
      { label: "Industry Partnerships", value: "10+", icon: "handshake" },
    ],
    bullets: [
      "Founded and scaled a student-led tech community by supervising a 20+ member team, organizing 35+ technical workshops, and engaging 15,000+ students industry-wide.",
      "Built strategic partnerships with security professionals and industry mentors to promote skill development, career readiness, and practical exposure in cybersecurity and software engineering.",
    ],
  },

  achievements: [
    {
      title: "Top 2% Global Rank",
      platform: "TryHackMe",
      description: "Completed 120+ rooms and earned 20+ badges in offensive security challenges.",
      metric: "Top 2%",
      progress: 98,
    },
    {
      title: "ICPC 2025 Finalist",
      platform: "International Collegiate Programming Contest",
      description: "Advanced to regional finals among top competitive programmers; solved 150+ algorithmic problems on Codeforces.",
      metric: "Finalist",
      progress: 90,
    },
    {
      title: "Community Leader",
      platform: "Tech Hierarchy",
      description: "Founded Tech Hierarchy, scaling to 15,000+ members and organizing 35+ technical workshops.",
      metric: "15k+",
      progress: 95,
    },
  ],

  certifications: [
    {
      name: "ISO/IEC 27001 Information Security Associate",
      issuer: "Skill Front",
      year: "2025",
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      year: "2025",
    },
    {
      name: "Certified Cybersecurity Educator Professional",
      issuer: "Red Team Leader",
      year: "2025",
    },
  ],

  education: [
    {
      degree: "Bachelor of Science, Software Engineering",
      institution: "PUCIT",
      period: "Sep 2023 – Present",
    },
    {
      degree: "Intermediate - ICS",
      institution: "Punjab Group of Colleges",
      period: "Aug 2021 – Sep 2023",
    },
  ],
};