/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#191c24',
      'light-gray': '#2A3038',
      'light-blue': '#0090e7',
      'light-green': '#00d25b',
      'black': '#000000',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}