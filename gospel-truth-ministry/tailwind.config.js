/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gospel Truth Ministry brand blue
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // ← main blue
          600: '#2563eb',  // ← darker blue (buttons, navbar)
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',  // ← darkest blue (footer, hero)
        }
      },
      fontFamily: {
        heading: [ 'Playfair Display','Georgia', 'serif'],   // for titles — feels classic & churchlike
        body: ['Inter', 'sans-serif'],   // for body text — clean & readable
      },
    },
  },
  plugins: [],
}
