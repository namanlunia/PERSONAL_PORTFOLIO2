import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: '#0F1214',
      surface: '#161B1E',
      'surface-2': '#1C2226',
      line: '#2B3439',
      text: '#E8E4D8',
      muted: '#8E9993',
      accent: '#E5A03A',
      'amber-dim': '#8A6224',
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      DEFAULT: '0px',
      md: '0px',
      lg: '2px',
      xl: '2px',
      '2xl': '2px',
      '3xl': '2px',
      full: '2px',
    },
    boxShadow: {
      none: 'none',
      DEFAULT: 'none',
      sm: 'none',
      md: 'none',
      lg: 'none',
      xl: 'none',
      '2xl': 'none',
      inner: 'none',
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-chakra)', 'sans-serif'],
        body: ['var(--font-ibm-plex)', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
      },
    },
  },
  plugins: [],
};

export default config;
