import buble from 'rollup-plugin-buble';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  plugins: [
    buble({
      transforms: { dangerousForOf: true }
    })
  ],
  external: Object.keys(pkg.dependencies).concat([ 'fs', 'path' ]),
  output: [
    {
      format: 'es',
      file: `dist/${pkg.module}`,
      sourcemap: true
    },
    {
      format: 'cjs',
      file: `dist/${pkg.main}`,
      sourcemap: true
    }
  ]
};
