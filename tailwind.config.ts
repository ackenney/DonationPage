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
        'TextColor2':'#000000',
        
        'salmon': '#F2655A',
        'navy': '#293954',
        'green':'#6AA870',
        'lightBlue':'#88D2FF',
        'NearBlack':'#0D190F',
        'OffWhite':'#FFFFF5',
        




      },
      fontFamily: {
        sans: ["Playfair", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
