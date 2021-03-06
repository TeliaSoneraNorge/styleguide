/**
 * This variable is used for conditional configuration in babel.config.js
 */
process.env['STORYBOOK'] = true;

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.module.rules.push({
    test: /\.md$/,
    loader: require.resolve('markdown-loader'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  /**
   * Because of `sideEffects: false` in package.json, we need to explicitly add
   * the .pcss files with `sideEffects: true` for them not to be tree-shaken away.
   */
  config.module.rules.push({
    test: /\.pcss$/,
    sideEffects: true,
    loaders: ['style-loader', 'postcss-loader'],
  });

  config.module.rules.push({
    test: '/.(png|jpg)',
    loader: 'file-loader',
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  });

  return config;
};
