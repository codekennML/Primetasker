/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        brand: ["Atkinson Hyperlegible", ...defaultTheme.fontFamily.sans],
        noto: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-text": colors.gray["800"],
        "brand-light": colors.gray["700"],
        "brand-text-deep": colors.gray["900"],
        "brand-secondary": colors.slate["100"],
        "brand-accent": colors.green["600"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3ab60cecc0e41d034ef57991c6c7369e-1674663049121/bg-hero-6-1792-x2.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
