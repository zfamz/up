import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [
    vue(),
    federation({
      remotes: {
        remote_app: "http://localhost:4001/assets/remoteEntry.js"
      },
      shared: ["vue"]
    })
  ],
  build: {
    target: 'esnext'
  }
})
