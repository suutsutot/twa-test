import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: './docs'
  },
  base: '/twa-test/',
  server: {
    proxy: {
      '/api': {
        target: 'https://nhl-bot-be.onrender.com/',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
});
