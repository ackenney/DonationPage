import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
      },
      colors: {
        'color1': '#ff7849',
        'color2': '#969696',
        
        
        'salmon': '#F2655A',
        'navy': '#293954',
        'nearGreen':'#6AA870',
        'lightBlue':'#88D2FF',
        'nearBlack':'#0D190F',
        'offWhite':'#FFFFF5',
    
      },
      
    },
  },
  plugins: [],
} satisfies Config;
