import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gradientStart: '#021526',
        gradientMid1: '#070F2B',
        gradientMid2: '#0E2954',
        gradientEnd: '#84A7A1',
        primaryDark: '#153448',
        secondaryDark: '#3C5B6F',
        accent: '#948979',
        lightAccent: '#DFD0B8',
      },
      fontFamily: {
        sans: ['"Code New Roman"', 'monospace'],
      },
      
    },
  },
  plugins: [],
};
export default config;
