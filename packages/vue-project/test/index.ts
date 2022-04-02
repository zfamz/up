interface MapFunc {
  (): MapFunc
  (input: string[]): string[]
}
let a: MapFunc = ['asdf', 'asdf'].map(item => item)
console.log('a: ', a)
