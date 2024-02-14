/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' with { type: "json" };
import { dts } from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";

const input = ['./src/index.ts'];

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
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
        globals,
      },
      // {
      //   dir: 'lib/cjs',
      //   format: 'cjs',
      //   exports: 'named',
      //   sourcemap: true,
      //   globals,
      // },
    ],
    plugins: [
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.json' }), 
      css({
        // Optional: filename to write all styles to
        output: 'bundle.css'
      }),
      styles(),
      commonjs(),
      // terser()
    ],
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
        name: 'ReactStarPicker',
        esModule: false,
        exports: 'named',
        sourcemap: true,
        globals,
      },
    ],
    plugins: [
      nodeResolve(), 
      typescript({ tsconfig: './tsconfig.json' }), 
      // css({
      //   // Optional: filename to write all styles to
      //   output: 'bundle.css'
      // }), 
      styles(),
      commonjs(), 
      // terser(),
    ],
    external: ['react', 'react-dom'],

    // Ignore warnings when using "use client" directive
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning);
      }
    },
  },
  {
    input: "lib/esm/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ['react', 'react-dom', /\.css$/]
  },
];