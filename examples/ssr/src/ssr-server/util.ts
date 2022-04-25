import path from 'path'
import { ViteDevServer } from 'vite'

export const isProd = process.env.NODE_ENV === 'production'
export const cwd = process.cwd()

export function matchPageUrl(url: string) {
  return url === '/'
}

export function resolveTemplatePath() {
  return isProd ? path.join(cwd, 'dist/client/index.html') : path.join(cwd, 'index.html')
}

export async function loadSsrEntryModule(vite: ViteDevServer | null) {
  if (isProd) {
    const entryPath = path.join(cwd, 'dist/server/entry-server.js')
    return require(entryPath)
  } else {
    const entryPath = path.join(cwd, 'src/entry-server.tsx')
    return vite!.ssrLoadModule(entryPath)
  }
}

