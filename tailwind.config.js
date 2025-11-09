/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E85A2E",
        navy: "#14324A",
        cream: "#F8EDE8",
        bgpeach: "#F7E6E3"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        script: ["Dancing Script", "cursive"]
      },
      boxShadow: {
        'note': '0 8px 20px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
}
