/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'; // Updated to default import
import pkg from './package.json' with { type: 'json' };
import { dts } from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

const input = ['./src/index.ts'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  // ESM
  {
    input,
    output: [
      {
        dir: 'lib/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: false,
        globals,
        banner: `'use client';`,
      },
    ],
    plugins: [
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.esm.json' }),
      postcss({
        minimize: { preset: 'default' },
        extract: 'styles.css',
      }),
      commonjs(),
      terser({
        compress: {
          directives: false, // Preserve directives like 'use client'
        },
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'lib/esm/dts/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts(), del({ hook: 'buildEnd', targets: './lib/esm/dts' })],
    external: ['react', 'react-dom', /\.css$/],
  },
];
