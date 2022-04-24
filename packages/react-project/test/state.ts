export function initState() {
  const getAndIncCount = (count = 0) => {
    const data = import.meta.hot?.data || {
      count
    }
    data.count = data.count + 1
    return data.count
  }
  timer = setInterval(() => {
    let countEle = document.getElementById('count')
    countEle!.innerHTML = getAndIncCount()
  }, 1000)
}

let timer: number | undefined
if (import.meta.hot) {
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0
  }
  import.meta.hot.dispose(() => {
    timer && clearInterval(timer)
  })
}
