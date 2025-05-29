import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.VITE_API_URL;
const apiKey = process.env.VITE_API_KEY;
const fromEmail = process.env.VITE_FROM_EMAIL;


const root = resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  define: {
    __API_URL__: JSON.stringify(apiUrl),
    __API_KEY__: JSON.stringify(apiKey),
    __FROM_EMAIL__: JSON.stringify(fromEmail),
},
  base: "/",
  build:{
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        app: resolve(root, 'app', 'index.html'),
        FundApplication: resolve(root, 'FundApplication', 'index.html'),
        GrantApplication: resolve(root, 'GrantApplication', 'index.html'),
      

      }
    }
  }

})
