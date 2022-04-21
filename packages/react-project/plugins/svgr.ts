import { Plugin } from 'vite'
import * as fs from 'fs'
import * as resolve from 'resolve'

interface SvgrOptions {
  defaultExport: 'url' | 'component'
}

export default function viteSvgrPlugin(options: SvgrOptions = { defaultExport: 'component' }): Plugin {
  const { defaultExport } = options
  return {
    name: 'vite-plugin-svgr',
    async transform(code: string, id: string) {
      if (!id.endsWith('svg')) {
        return code
      }
      const svgrTransform = require('@svgr/core').transform
      const esbuildPackagePath = resolve.sync('esbuild', { basedir: require.resolve('vite') })
      const esbuild = require(esbuildPackagePath)
      const svg = await fs.promises.readFile(id, 'utf8')
      const svgrResult = await svgrTransform(svg, {}, { componentName: 'ReactComponent' })
      let componentCode = svgrResult
      if (defaultExport === 'url') {
        componentCode += code
        componentCode = svgrResult.replace('export default ReactComponent', 'export { ReactComponent }')
      }
      const result = await esbuild.transform(componentCode, {
        loader: 'jsx',
      })
      return {
        code: result.code,
        map: null,
      }
    },
  }
}
