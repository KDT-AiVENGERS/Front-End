/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 5s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "none" },
          "100%": {
            textShadow: [
              "0 0 10px #F7D64D",
              "0 0 20px #F7D64D",
              "0 0 40px #F7D64D",
              "0 0 80px #F7D64D",
              "0 0 160px #F7D64D",
            ],
          },
        },
      },
      height: {
        200: "50rem",
      },
      spacing: {
        "4/5": "80%",
        "3/5": "60%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-page": 'url("/images/onboarding/mainPageUpscaled.png")',
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
        "main-background-color": "#010717",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
        HakgyoansimWoojuR: ["HakgyoansimWoojuR"],
        SpoqaHanSansNeo: ["Spoqa Han Sans Neo"],
        OmyuPretty: ["omyu_pretty"],
      },
    },
  },
  plugins: [],
};
