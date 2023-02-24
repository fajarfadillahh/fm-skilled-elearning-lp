/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)",
        "gradient1-50":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        gradient2: "linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)",
        "gradient2-50":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
        "hero-mobile": "url('/assets/image-hero-mobile@2x.png')",
        "hero-tablet": "url('/assets/image-hero-tablet@2x.png')",
        "hero-desktop": "url('/assets/image-hero-desktop@2x.png')",
      },
      dropShadow: {
        "hero-card": "0px 25px 50px rgba(6, 22, 141, 0.0442381)",
      },
    },
    colors: {
      white: "#FFF",
      black: "#000",
      blue: {
        300: "#666CA3",
        700: "#13183F",
      },
      gray: {
        50: "#F0F1FF",
        700: "#83869A",
      },
      red: {
        700: "#F74780",
        300: "#FFA7C3",
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      sans: ["'Plus Jakarta Sans'", "sans-serif"],
    },
    fontSize: {
      "heading-xl": [
        "3.5rem",
        {
          lineHeight: "4.4375rem",
          fontWeight: "800",
        },
      ],
      "heading-l": [
        "2.5rem",
        {
          lineHeight: "3.125rem",
          fontWeight: "800",
        },
      ],
      "heading-m": [
        "2rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "800",
        },
      ],
      "heading-s": [
        "1.5rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "800",
        },
      ],
      "hero-m": [
        "1.25rem",
        {
          lineHeight: "1.5625rem",
          fontWeight: "800",
        },
      ],
      base: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "500",
        },
      ],
      "body-s": [
        "1rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
