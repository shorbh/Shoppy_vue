import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa'
import dotenv from 'dotenv'

dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  base: '/Shoppy_vue/',
  // base: '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      manifest: {
        name: 'E-shop Shopping Platform',
        short_name: 'E-shop',
        description: 'Online elctronic shopping platform for Shop',
        theme_color: '#9333ea',
        background_color: '#65b5f6',
        display: 'standalone',
        icons: [
          {
            src: 'img/icons/logo-192x192.png' ,
            sizes:  '192x192' ,
            type: ' image/png '
          },
          {
            src: 'img/icons/logo-256x256.png' ,
            sizes:  '256x256' ,
            type: ' image/png '
          },
          {
            src: 'img/icons/logo-384x384.png' ,
            sizes:  '384x384' ,
            type: ' image/png '
          },
          {
            src: 'img/icons/logo-512x512.png' ,
            sizes:  '512x512' ,
            type: ' image/png '
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  // server: {
  //   hmr: {
  //     port: 443
  //   }
  // }
});
