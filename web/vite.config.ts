import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
       registerType: "prompt",
       includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
       manifest: {
          name: "Mytodo",
          short_name: "Mytodo",
          description: "show todo",
          theme_color: "#317EFB",
          start_url: "/",
          icons: [
            {
              src: 'logo192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'logo512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'logo512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ],
       },
    }),
 ],
})
