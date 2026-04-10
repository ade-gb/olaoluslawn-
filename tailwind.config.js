/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#0b0b0c",
        graphite: "#16161a",
        steel: "#24242a",
        ash: "#a6a6ab",
        snow: "#f5f5f5",
        smoke: "#c7c7cc",
        charcoal: "#0f0f12"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 255, 255, 0.08)",
        glass: "0 20px 60px rgba(0, 0, 0, 0.4)"
      }
    }
  },
  plugins: []
};
