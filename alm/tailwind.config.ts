import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
     
      boxShadow: {
        'custom': '0px 0px 1px 0px rgba(0, 0, 0, 0.40)',
        'custom2': '0px 6px 6px -6px rgba(0, 0, 0, 0.16)',
      },
      
    },
  },
  plugins: [],
  
}
export default config
