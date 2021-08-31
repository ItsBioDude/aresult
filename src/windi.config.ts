import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';
import WindiScroll from '@windicss/plugin-scrollbar';

export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  //   attributify: true,
  extract: {
    include: ['*.{html,js}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    maxWidth: {
      ...defaultTheme.maxWidth,
      con: `${1440 / 16}rem`,
    },
    extend: {
      gridTemplateColumns: {
        layout: 'repeat(auto-fill, minmax(15rem,1fr))',
        header: 'max-content 1fr max-content',
      },
      gridTemplateRows: {
        card: '45% minmax(min-content,1fr) max-content',
      },
      backgroundImage: () => ({
        card: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E"),linear-gradient(to bottom right,var(--tw-gradient-stops));`,
      }),
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],

      serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
    },
    screens: {
      md: '48em',
      // => @media (min-width: 768px) {  }

      lg: '64em',
      // => @media (min-width: 1024px) {  }

      xl: '80em',
      // => @media (min-width: 1280px) {  }
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      DEFAULT: '100%',
    },
  },
  plugins: [WindiScroll],
  variants: {
    scrollbar: ['rounded'],
  },
});
