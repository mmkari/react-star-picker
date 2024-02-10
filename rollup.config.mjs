/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' with { type: "json" };

const input = ['./src/index.js'];

const kebabToPascal = (string) => {
  return string.replace(/(^\w|-\w)/g, (replaceString) =>
    replaceString.replace(/-/, '').toUpperCase()
  );
};

export default [
  // ESM & CJS
  {
    input,
    output: [
      {
        dir: 'lib/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'lib/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [nodeResolve(), typescript(), css(), commonjs(), terser()],
    external: ['react', 'react-dom'],

    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    },
  },
  // UMD
  {
    input,
    output: [
      {
        file: `lib/${pkg.name}.min.js`,
        format: 'umd',
        name: kebabToPascal(pkg.name),
        esModule: false,
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [nodeResolve(), typescript(), css(), commonjs(), terser()],
    external: ['react', 'react-dom'],

    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    },
  },
];
