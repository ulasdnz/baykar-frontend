/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '769px', // 576px
      'md': '960px',
      'mds':'972px',
      'mdx':'1226px',
      'mdxl':'1351px',
      'lg': '1440px',
      'lgs':'1491px',
      'lgm':'1584px',
      'xl': '1920px',
      'xxl': '2560px',
      'xxlm':'2582px',
      'xxlb':'2808px',
    },
    extend: {
      boxShadow: {
        third:
          "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10);",
        video:
          "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25);",
        carouselCard:
          "0px 0px 6px 0px rgba(0, 0, 0, 0.07), 0px 10px 15px -3px rgba(0, 0, 0, 0.10);",
        buttonShadow:
          "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);",
      },
      fontFamily: {
        roboto: ["roboto"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
        },
        blue_gray: "#0F172A",
        blue_gray_200:"#E2E8F0",
        blue_gray_700:"#334155",
        fourth_back: "#FFFDF6",
        fifth_middle: "#FFFEFA",
        fifth_back: "#FFFEF9",
        sixth_back:"#78350F",
        sixth_text_back:"#D6DBE3",
        blue_light: "#0369A1",
        brown_buble:"#C07A45",
        light_amb: "#FFFCF2",
      },
    },
  },
  plugins: [],
};
