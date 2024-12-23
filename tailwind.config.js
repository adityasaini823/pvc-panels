/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA',
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        accent: {
          light: '#34D399',
          DEFAULT: '#059669',
          dark: '#065F46',
        },
        secondary: {
          light: '#9333EA',
          DEFAULT: '#7E22CE',
          dark: '#6B21A8',
        },
        tertiary: {
          light: '#0EA5E9',
          DEFAULT: '#0284C7',
          dark: '#075985',
        }
      }
    },
  },
  plugins: [],
};