/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0B0B0E',
          raised: '#111115',
        },
        bone: '#ECECEE',
        fog: '#A3A3AC',
        faint: '#6E6E76',
        brass: {
          DEFAULT: '#C9A26B',
          bright: '#DDB87E',
        },
        line: 'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
