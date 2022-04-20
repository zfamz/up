const rollup = require('rollup')

const inputOptions = {
  input: './src/index.js',
  external: ['lodash'],
  plugins: [],
}

const outputOptionsList = [
  {
    dir: 'dist/cjs',
    entryFileNames: `[name].[hash].cjs`,
    chunkFileNames: `chunk-[hash].cjs`,
    assetFileNames: `assets/[name]-[hash][extname]`,
    format: 'cjs',
    sourcemap: true,
    globals: {
      lodash: '_',
    },
  },
  {
    dir: 'dist/es',
    entryFileNames: `[name].[hash].js`,
    chunkFileNames: `chunk-[hash].js`,
    assetFileNames: `assets/[name]-[hash][extname]`,
    sourcemap: true,
    globals: {
      lodash: '_',
    },
  },
]

async function build() {
  let bundle
  let buildFailed = false
  try {
    bundle = await rollup.rollup(inputOptions)
    for (const outputOptions of outputOptionsList) {
      // generate不会把output写入磁盘，但write会
      // const { output } = await bundle.generate(outputOptions)
      // console.log('output: ', output)
      await bundle.write(outputOptions)
    }
  } catch (error) {
    buildFailed = true
    console.error('======> ', error)
  }
  if (bundle) {
    await bundle.close()
  }
  process.exit(buildFailed ? 1 : 0)
}

build()
