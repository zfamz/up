const rollup = require('rollup')

const watcher = rollup.watch({
  input: './src/index.js',
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      entryFileNames: `[name].cjs`,
      format: 'cjs',
    },
  ],
  watch: {
    exclude: ['node_modules/**'],
    include: ['src/**'],
  },
})

watcher.on('restart', () => {
  console.log('==> restart')
})

watcher.on('change', () => {
  console.log('==> change')
})

watcher.on('event', e => {
  console.log('code: ', e.code)
  if (e.code === 'BUNDLE_END') {
    console.log('bundle msg: ', e)
  }
})
