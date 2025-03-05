/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hunter-green': '#2A4E38', // Darker forest green
        'royal-purple': '#4A2B83', // Darker royal purple
        'academy-blue': '#0A3161', // Darker navy blue
      },
      fontFamily: {
        'serif': ['EB Garamond', 'Garamond', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Times New Roman', 'serif'],
        'sans': ['Source Sans 3', 'Optima', 'Segoe UI', 'Candara', 'Calibri', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}