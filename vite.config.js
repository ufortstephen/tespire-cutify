import { fileURLToPath, URL } from 'node:url'
import https from "https";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname } from "path";
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
  define: {
    "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/_variables.scss";
         ` ,
      },
    },
  }
})
