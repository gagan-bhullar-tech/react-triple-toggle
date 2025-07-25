// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'; // Import the TypeScript plugin
import dts from 'rollup-plugin-dts';

export default [
  // CJS and ESM bundles
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/my-react-component.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/my-react-component.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
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
    output: [{ file: 'dist/my-react-component.d.ts', format: 'esm' }],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
        emitDeclarationOnly: true
      }),
      dts()
    ],
    external: ['react', 'react-dom']
  },
];