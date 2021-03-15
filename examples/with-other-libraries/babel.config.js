module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-typescript'];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ];

  return { presets, plugins };
};
