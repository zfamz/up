import { defineConfig, loadEnv, normalizePath } from 'vite'
// import  inspect  from "vite-plugin-inspect";
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { resolve } from 'path'
import virtual from './plugins/virtual-module'
import svgr from './plugins/svgr'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env:', command, mode, env)
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          test: resolve(__dirname, 'test.html'),
        }
      }
    },
    plugins: [
      // inspect(),
      react(),
      virtual(),
      svgr(),
      Unocss({
        presets: [presetUno()],
        rules: [
          // [/^m-(\d+)$/, ([,d]) => ({margin: `${d}px`})],
          // [/^p-(\d+)$/, (match) => ({padding: `${match[1]priamry}px`})]
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${normalizePath(resolve('./src/styles/variable.less'))}";`,
        },
      },
    },
  }
})
