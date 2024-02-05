// eslint-disable-next-line import/no-extraneous-dependencies
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'cjs',
    exports: 'named',
    preserveModules: true,
  },
  plugins: [nodeResolve()],

  // Ignore warnings when using "use client" directive
  onwarn(warning, warn) {
    if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
      warn(warning);
    }
  },
};
