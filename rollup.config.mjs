/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' with { type: "json" };
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete"
// import preserveDirectives from "rollup-plugin-preserve-directives";
import postcss from 'rollup-plugin-postcss';

const input = ['./src/index.ts'];

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
};

export default [
  // ESM
  {
    input,
    output: [
      {
        // file: `lib/esm/index.js`,
        dir: "lib/esm",
        format: 'esm',
        exports: 'named',
        sourcemap: false,
        globals,
        banner: `'use client';`,
        // preserveModules: true,
        // entryFileNames: (chunkInfo) => {
        //   if (chunkInfo.name.includes('node_modules')) {
        //     return chunkInfo.name.replace('node_modules', 'external') + '.js';
        //   }
  
        //   return '[name].js';
        // }
      },
    ],
    plugins: [
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.esm.json' }), 
      postcss({
        minimize: { preset: 'default' },
        extract: 'styles.css', // Extracts CSS into a separate file
      }),
      commonjs(),
      // preserveDirectives(),
      terser({
        compress: {
          directives: false,
        }
      })
    ],
    external: ['react', 'react-dom'],

    // Ignore warnings when using "use client" directive
    // onwarn(warning, warn) {
    //   if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
    //     warn(warning);
    //   }
    // },
  },
  {
    input: "lib/esm/dts/index.d.ts",
    output: [{ file: pkg.types, format: "esm" }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: "./lib/esm/dts" }),
    ],
    external: ['react', 'react-dom', /\.css$/]
  },
];
