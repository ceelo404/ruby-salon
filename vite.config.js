import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // <-- 1. IMPORT THE PLUGIN


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        // The compression quality for PNG files (0-100)
        quality: 80,
      },
      jpeg: {
        // The compression quality for JPEG files (0-100)
        quality: 80,
      },
      jpg: {
        // Also works for .jpg extensions
        quality: 80,
      },
    }),
  ],
});