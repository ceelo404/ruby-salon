import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // <-- 1. IMPORT THE PLUGIN


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Example configuration for PNG files
      png: {
        quality: 80, // Compresses PNGs to 80% of their original quality
      },
    }),
  ],
});