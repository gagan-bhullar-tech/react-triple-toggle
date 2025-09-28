// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'; // Import the TypeScript plugin
import css from 'rollup-plugin-css-only'
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';


export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/react-tripple-toggle.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: false
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false, // Don't emit declaration files for the JS bundles
        declarationDir: null // No specific directory for declarations here
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // Type definitions bundle
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/react-tripple-toggle.d.ts', format: 'esm' }],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
        emitDeclarationOnly: true
      }),
      postcss({
        extract: false
      }),
      dts()
    ],
    external: ['react', 'react-dom']
  },
];