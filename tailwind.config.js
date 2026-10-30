/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#080b0f',
          900: '#0d1117', // Primary deep matte carbon
          850: '#121720',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        cyber: {
          emerald: '#10b981',
          emeraldHover: '#059669',
          emeraldGlow: 'rgba(16, 185, 129, 0.45)',
          lime: '#bef264',
          limeBright: '#a3e635',
          neon: '#00ff88',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'radar-ping': 'radar-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'radar-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '75%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'emerald-neon': '0 0 25px -3px rgba(16, 185, 129, 0.45), 0 0 10px -2px rgba(190, 242, 100, 0.3)',
        'emerald-subtle': '0 4px 20px -2px rgba(16, 185, 129, 0.15)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
