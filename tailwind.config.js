/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'dist/project-page.html'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        'primary': '#0277BD',
        'smoke-white': '#F1F1F1',
        'darken-primary': '#011C39'
      },
    },
    keyframes: {
      scaleUp: {
        "0%": { transform: "scale(0.8)"},
        "50%": { transform: "scale(1.0)"},
        "100%": { transform: "scale(0.8)"}
      }
    },
    animation: {
      scalingUp: "scaleUp 3s linear infinite"
  },
  plugins: [],
}
}
