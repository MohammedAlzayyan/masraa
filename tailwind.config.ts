import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          burgundy: 'rgb(var(--brand-burgundy-rgb) / <alpha-value>)',
          gold: 'rgb(var(--brand-gold-rgb) / <alpha-value>)',
          beige: 'rgb(var(--brand-beige-rgb) / <alpha-value>)',
          wine: 'rgb(var(--brand-wine-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Arabic"', 'sans-serif'],
        serif: ['"Playfair Display"', '"Amiri"', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

export default config
