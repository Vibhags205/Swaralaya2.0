// vite.config.js (FIXED: Using ESM syntax)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // <-- Changed 'require' to 'import'

// NOTE: You may also need to install the 'react' plugin if you didn't previously
// npm install @vitejs/plugin-react --save-dev

export default defineConfig({ // <-- Changed 'module.exports =' to 'export default'
    plugins: [react()],
    server: {
        proxy: {
            // Any request starting with /api will be sent to the backend server
            '/api': {
                // Should be 3000, matching your .env file
                target: 'http://localhost:3000', 
                changeOrigin: true,
                secure: false,
            },
        },
    },
});