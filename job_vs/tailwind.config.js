/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      Pretendard_100: ["Pretendard-Thin"],
      Pretendard_200: ["Pretendard-ExtraLight"],
      Pretendard_300: ["Pretendard-Light"],
      Pretendard_400: ["Pretendard-Regular"],
      Pretendard_500: ["Pretendard-Medium"],
      Pretendard_600: ["Pretendard-SemiBold"],
      Pretendard_700: ["Pretendard-Bold"],
      Pretendard_800: ["Pretendard-ExtraBold"],
      Pretendard_900: ["Pretendard-Black"],
      HakgyoansimWoojuR: ["HakgyoansimWoojuR"],
    },
  },
  plugins: [],
};
