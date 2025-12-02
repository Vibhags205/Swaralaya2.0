import { defineConfig } from 'vite'

// During dev, proxy requests starting with /api to the backend server.
// Adjust target if your backend listens on a different host/port.
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
