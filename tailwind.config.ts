import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#722F37',
          gold: '#D4AF37',
          beige: '#F5F5DC',
          wine: '#8B3A42', // لون للنصوص
        },
      },
      fontFamily: {
        // يمكن إضافة خطوط عربية مخصصة هنا
      },
    },
  },
  plugins: [],
  // دعم RTL
  corePlugins: {
    preflight: true,
  },
}

export default config
