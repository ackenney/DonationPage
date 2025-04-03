import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        'color1': '#ff7849',
        'color2': '#969696',
        'TextColor1':'#525252',
        'TextColor2':'#000000'
      },
      fontFamily: {
        sans: ["Playfair", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
