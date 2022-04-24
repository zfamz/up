export const render = () => {
  const app = document.querySelector('#app')!
  app.innerHTML = `
    <h1>Hello vite!</h1>
    <p target="_blank">This is hmr test.123</p>
    <p class="text-[#ff0]">new text12</p>
  `
}

// if (import.meta.hot) {
//   import.meta.hot.accept((mod) => mod.render())
// }
