import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv"

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://xsaul.github.io/drinkally/",
  plugins: [react()],
})
