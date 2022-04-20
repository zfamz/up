import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const buildOptions = {
  input: ['src/index.js', 'src/utils.js'],
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      plugins: [terser()],
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), commonjs()],
}

export default buildOptions
