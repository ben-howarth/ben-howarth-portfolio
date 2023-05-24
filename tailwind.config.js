/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      'bright-blue' : '#7DF9FF',
      'bright-yellow' : '#FFDB98',
      'bright-green' : '#90EE90',
      'bright-purple' : '#9723C9',
      'bright-pink' : '#FF00F5',
      },
      dropShadow: {
        '2xl': '16px 16px rgba(0, 0, 0, 255)',
        '3xl': '35px 35px rgba(0, 0, 0, 255)',
        '4xl': '45px 45px rgba(0, 0, 0, 255)',
    },
  },
  plugins: [],
}
}