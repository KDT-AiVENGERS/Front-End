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
      colors: {
        "space-black": "#0E1821",
        "space-dark-blue": "#091841",
        "space-blue": "#3757D0",
        "space-light-blue": "#90ABD0",
        "space-dark-yellow": "#F7D64D",
        "space-yellow": "#FAEC82",
        "space-light-yellow": "#FDFBAA",
        "space-green": "#9BB355",
        "space-light-red": "#E0635A",
        "space-red": "#E24F4C",
        "space-magenta": "#C24061",
        "space-lightpurple": "#C8D1FC",
      },
      fontFamily: {
        "Pretendard-100": ["Pretendard-Thin"],
        "Pretendard-200": ["Pretendard-ExtraLight"],
        "Pretendard-300": ["Pretendard-Light"],
        "Pretendard-400": ["Pretendard-Regular"],
        "Pretendard-500": ["Pretendard-Medium"],
        "Pretendard-600": ["Pretendard-SemiBold"],
        "Pretendard-700": ["Pretendard-Bold"],
        "Pretendard-800": ["Pretendard-ExtraBold"],
        "Pretendard-900": ["Pretendard-Black"],
        HakgyoansimWoojuR: ["HakgyoansimWoojuR", "Pretendard-ExtraLight"],
      },
    },
  },
  plugins: [],
};
