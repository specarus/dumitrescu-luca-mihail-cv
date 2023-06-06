/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        mobile: "350px",
        tablet: "810px",
        laptop: "1290px",
        desktop: "1870px",
      },
      colors: {
        primary: "#286090",
      },
    },
    fontSize: {
      "4xs": "5px",
      "3xs": "7px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "40px",
    },
  },
  plugins: [],
};
