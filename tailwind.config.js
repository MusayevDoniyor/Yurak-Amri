/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (sizning ishlatgan ranglaringiz)
        brand: {
          primary: "#2f2f2f", // Asosiy brand rangi
          secondary: "#2C2C2C", // Ikkilamchi brand rangi
        },

        // Background colors (pure white/black o'rniga)
        bg: {
          white: "#fafafa", // Pure white o'rniga juda och kulrang
          black: "#171717", // Pure black o'rniga juda qora kulrang
          light: "#f5f5f5", // Gray-50
          lighter: "#f0f0f0", // Gray-100
        },

        // Text colors
        text: {
          primary: "#2f2f2f", // Asosiy matn rangi
          secondary: "#404040", // Ikkilamchi matn rangi
          muted: "#737373", // O'chirilgan matn rangi
          light: "#fafafa", // Och matn rangi
          dark: "#171717", // Qora matn rangi
        },

        // Border colors
        border: {
          light: "#e5e5e5", // Gray-200
          medium: "#d4d4d4", // Gray-300
          dark: "#a3a3a3", // Gray-400
          focus: "#2f2f2f", // Focus uchun
        },
      },

      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
