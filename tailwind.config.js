/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinematic: {
          bg: '#05070a',
          surface: '#080b10',
          card: '#0b0f14',
          cardHover: '#111722',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 240, 255, 0.35)',
          cyan: '#00f0ff',
          cyanMuted: 'rgba(0, 240, 255, 0.12)',
          blue: '#2563eb',
          violet: '#7c3aed',
          text: '#f8fafc',
          textMuted: '#94a3b8',
          textDim: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 35px -5px rgba(0, 240, 255, 0.3)',
        'blue-glow': '0 0 45px -10px rgba(37, 99, 235, 0.25)',
        'card-cinematic': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
