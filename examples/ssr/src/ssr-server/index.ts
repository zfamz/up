import path from 'path'
import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import express, { RequestHandler, Express } from 'express'
import { ViteDevServer } from 'vite'
import serve from 'serve-static'
import { isProd, cwd, matchPageUrl, resolveTemplatePath, loadSsrEntryModule } from './util'

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
    try {
      const url = req.originalUrl
      if (!matchPageUrl(url)) {
        return next()
      }
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
    } catch (e: any) {
      vite?.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  }
}

async function createServer() {
  const app = express()
  app.use(await createSsrMiddleware(app))
  if (isProd) {
    app.use(serve(path.join(cwd, 'dist/client')))
  }
  app.listen(4000, () => {
    console.log('Server is started')
    console.log('url: http://localhost:4000')
  })
}

createServer()
