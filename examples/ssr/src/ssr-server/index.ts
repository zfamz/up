import path from 'path'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import express, { RequestHandler, Express } from 'express'
import { ViteDevServer } from 'vite'

const isProd = process.env.NODE_ENV === 'production'
const cwd = process.cwd()

function resolveTemplatePath() {
  return isProd ? path.join(cwd, 'dist/client/index.html') : path.join(cwd, 'index.html')
}

async function loadSsrEntryModule(vite: ViteDevServer | null) {
  if (isProd) {
    const entryPath = path.join(cwd, 'dist/server/entry-server.js')
    return require(entryPath)
  } else {
    const entryPath = path.join(cwd, 'src/entry-server.tsx')
    return vite!.ssrLoadModule(entryPath)
  }
}

async function createSsrMiddleware(app: Express): Promise<RequestHandler> {
  let vite: ViteDevServer | null = null
  if (!isProd) {
    vite = await (await import('vite')).createServer({
      root: cwd,
      server: {
        middlewareMode: 'ssr'
      }
    })
    app.use(vite.middlewares)
  }
  return async (req, res, next) => {
    const url = req.originalUrl
    // if (!matchPageUrl(url)) {
    //   return await next()
    // }
    const { ServerEntry, fetchData } = await loadSsrEntryModule(vite)
    const data = await fetchData()
    const appHtml = renderToString(React.createElement(ServerEntry, { data }))
    const templatePath = resolveTemplatePath()
    let template = fs.readFileSync(templatePath, 'utf-8')
    if (!isProd && vite) {
      template = await vite.transformIndexHtml(url, template)
    }
    const html = template
      .replace('<!-- SSR_APP -->', appHtml)
      .replace('<!-- SSR_DATA -->', `<script>window.__SSR_DATA__=${JSON.stringify(data)}</script>`)
    // console.log(html)
    res.status(200).setHeader('Content-Type', 'text/html').end(html)
  }
}

async function createServer() {
  const app = express()
  app.use(await createSsrMiddleware(app))
  app.listen(4000, () => {
    console.log('Server is started')
    console.log('http://localhost:4000')
  })
}

createServer()
