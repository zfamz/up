import { render } from './render'
import { initState } from './state'
import './style.less'

render()
initState()

if (import.meta.hot) {
  import.meta.hot.accept(['./render.ts', './state.ts'], modules => {
    console.log(modules)
    const [renderModule, stateModule] = modules
    if (renderModule) {
      renderModule.render()
    }
    if (stateModule) {
      stateModule.initState()
    }
  })
}
