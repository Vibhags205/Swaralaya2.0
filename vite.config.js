// vite.config.js (The fix is on line 7)

// Use a CommonJS-compatible Vite config to avoid ESM-only plugin import issues
const { defineConfig } = require('vite');

module.exports = defineConfig({
  server: {
    proxy: {
      // Any request starting with /api will be sent to the backend server
      '/api': {
        // 🚨 CHANGE THIS PORT FROM 5000 TO 3000
        target: 'http://localhost:3000', // <--- FIX IS HERE
        changeOrigin: true,
        secure: false,
      },
    },
  },
});