import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
  attributify: true,
  theme: {
    textColor: {
      m1: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
    alias: {
      hstack: 'flex items-center',
    },
  },
})
