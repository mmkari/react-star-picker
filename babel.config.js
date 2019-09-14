module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-flow',
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = ['@babel/plugin-proposal-export-default-from'];

  return {
    presets,
    plugins,
  };
};
