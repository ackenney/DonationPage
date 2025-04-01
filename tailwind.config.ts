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
      },
      fontFamily: {
        sans: ["Playfair", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
