const rollup = require('rollup')

const build = async () => {
  const bundle = await rollup.rollup({
    input: ['./src/index.js'],
  })
  const result = await bundle.generate({})
  console.log('result: ', result)
}

build()
