import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',
          section: '#0D0D0D',
          card: '#151515',
          gold: '#D4AF37',
          purple: '#C084FC',
          text: '#FFFFFF',
          muted: '#B8B8B8',
          border: '#2A2A2A',
          'btn-text': '#000000',
        },
        // legacy aliases (keep for backward compat with existing city pages)
        ink: '#141414',
        muted: '#60646c',
        line: '#2A2A2A',
        linen: '#0D0D0D',
        sage: '#5f7d68',
        coral: '#D4AF37',
        gold: '#D4AF37'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(212, 175, 55, 0.08)',
        gold: '0 4px 24px rgba(212, 175, 55, 0.25)',
      }
    }
  },
  plugins: []
};

export default config;
