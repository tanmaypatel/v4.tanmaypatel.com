/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        title: ["Lato", "Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4xl": ["3.815rem", "4.5rem"],
        "3xl": ["3.052rem", "4.5rem"],
        "2xl": ["2.441rem", "3rem"],
        xl: ["1.953rem", "3rem"],
        lg: ["1.563rem", "3rem"],
        md: ["1.25rem", "3rem"],
        base: ["1rem", "1.5rem"],
        sm: ["0.8rem", "1.5rem"],
        xs: ["0.64rem", "1.5rem"],
      },
      spacing: {
        quarter: "0.375rem",
        half: "0.75rem",
        one: "1.5rem",
        two: "3rem",
        three: "4.5rem",
        four: "6rem",
        five: "7.5rem",
        six: "9rem",
        eight: "12rem",
        twelve: "18rem",
        sixteen: "24rem",
      },
      backgroundImage: {
        "default-background-pattern":
          "url('assets/images/page-background.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
