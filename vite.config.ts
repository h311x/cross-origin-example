import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest })],
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
})
