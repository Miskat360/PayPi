/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens:{
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        blue1: "#598DC7",
        blue2: "#115DB1",
        blue3: "#0155B5",
        blue4: "#041E42",
        yellow1: "#F0D882",
        yellow2: "#fbe389",
        yellow3: "#F9D759",
        green: "#62B959",
        coral: "#E27C7C",
        gray1: "#F3F3F3",
        gray2: "#F4F4F4",
        gray3: "#F5F5F5",
        gray4: "#D3D3D4",
        gray5: "#D7D6D4",
        gray6: "#A5A5A5",
        black1: "#6A6A6D",
        black2: "#262626",
        black3: "#222529",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.2rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          lg: "984px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
