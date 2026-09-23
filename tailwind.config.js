/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0E211D",   // near-black teal — quickfacts bar, footer, hero overlay
          DEFAULT: "#28564F", // medium teal — accents, two-tone headings, logo mark
          gold: "#C79A3D",    // buttons, labels, bullets, stat numbers
          maroon: "#A9432E",  // outline buttons, links, FAQ active state
          cream: "#F5F2EA",   // page background
          card: "#EDE7DA",    // beige card background (forms, buy-property panel)
          ink: "#14201D",     // near-black body/heading text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        "4xl": "28px",
      },
    },
  },
  plugins: [],
};
