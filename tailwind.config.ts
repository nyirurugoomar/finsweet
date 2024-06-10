import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':"#232536",
        'yellow':"#FFD050",
        'purpo':"#592EA9",
        'darkGray':"#4C4C4C",
        'mediumGray':"#6D6E76",
        'lightGray':"#F4F4F4",
        'lavender':"#F4F0F8",
        'lightYellow':"#FBF6EA"

      },
      backgroundImage: {
        'hero-bg':"url('/Hero-bg.png')",
        'mission-about-bg':"url('/aboutMissionbg.png')"
      },
    },
  },
  plugins: [],
};
export default config;
