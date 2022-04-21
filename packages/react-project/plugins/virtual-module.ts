import { Plugin, ResolvedConfig } from 'vite'

const virtualFibModuleId = 'virtual:fib'
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId

const virtualEnvModuleId = 'virtual:env'
const resolvedEnvVIrtualModuleId = '\0' + virtualEnvModuleId

export default function virtualFibModulePlugin(): Plugin {
  let config: ResolvedConfig | null = null
  return {
    name: 'vite-plugin-virtual-module',
    configResolved(c: ResolvedConfig) {
      config = c
    },
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId
      }
      if (id === virtualEnvModuleId) {
        return resolvedEnvVIrtualModuleId
      }
    },
    load(id) {
      if (id === resolvedFibVirtualModuleId) {
        return `export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }`
      }
      if (id === resolvedEnvVIrtualModuleId) {
        return `export default ${JSON.stringify(config!.env)}`
      }
    },
  }
}
