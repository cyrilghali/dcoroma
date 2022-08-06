/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,json}",
    "./components/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Crimson Text"'],
        'body': ['"Crimson Text"'],
        'sans': ['"Crimson Text"'],
        'serif': ['"Crimson Text"'],
        'mono': ['"Crimson Text"'],
      }

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
