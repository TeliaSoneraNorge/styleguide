module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-viewport'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  /*
  async webpackFinal(config) {

    process.env['STORYBOOK'] = true;

    config.module.rules.push({
      test: /\.md$/,
      loader: require.resolve('markdown-loader'),
    });

    config.resolve.extensions.push('.ts', '.tsx');

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
  },
  */
};
