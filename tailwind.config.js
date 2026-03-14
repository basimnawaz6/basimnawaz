/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050505',
          dark: '#0a0a0f',
          darker: '#030308',
        },
        royal: {
          DEFAULT: '#1e3a8a',
          light: '#3b82f6',
          glow: '#60a5fa',
          dark: '#152670',
          deep: '#0c1a4a',
        },
        wine: {
          DEFAULT: '#7f1d1d',
          light: '#dc2626',
          glow: '#f87171',
          dark: '#5b1a32',
          deep: '#3d0f1e',
        },
        neon: {
          green: '#00ff41',
          cyan: '#00fff5',
          blue: '#4d7cff',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'flicker': 'flicker 3s infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'typing-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
          '25%, 75%': { opacity: 0.9 },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(59,130,246,0.3)' },
          '50%': { borderColor: 'rgba(59,130,246,0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
    },
  },
  plugins: [],
};