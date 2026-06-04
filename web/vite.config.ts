import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// During dev the frontend talks to the Express API at :4000 through a proxy,
// so the browser only ever sees same-origin /api requests.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
});
