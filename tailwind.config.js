/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customBackground: '#0B0C10',
        customTextColor: '#66FCF1',
        customSearchBar: '#1F2833'
      },
    },
  },
  plugins: [],
};
