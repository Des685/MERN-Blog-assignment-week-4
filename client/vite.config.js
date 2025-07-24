// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // React app will run on port 3000
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your Express server port
        changeOrigin: true, // Change the origin header to the target URL
        secure: false, // For development, if you don't have HTTPS on backend
      },
    },
  },
});