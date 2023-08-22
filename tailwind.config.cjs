/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      l: "425px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "#3f3cbb",
        veryDarkGray: "hsl(0, 0%, 41%)",
        red: "red",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      backgroundImage: {
        mobile: "url('src/assets/mobile/image-hero.jpg')",
        desktop: "url('src/assets/desktop/image-hero.jpg')",
      },
      gridTemplateColumns: {
        13: "repeat(5, minmax(min-content, min-content))",
      },
      maxWidth: {},
    },
  },
  plugins: [],
};
