module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          ie: '11',
        },
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign',
    'lodash',
  ],
  ignore: [
    // Avoid bringing story files into the dist output,
    // but we need to process them when running storybook.
    // The env var is set by .storybook/webpack.config.js
    ...(process.env['STORYBOOK'] ? [] : ['**/*.stories.tsx']),

    // Avoid processing .d.ts files:
    // scripts/copy-type-files.js copies the src/*.d.ts files to dist/,
    // and tsc generates dist/*.d.ts files from src/*.ts files.
    '**/*.d.ts',
  ],
  env: {
    development: {},
    // jest doesn't take account of BABEL_ENV, you need to set NODE_ENV - https://facebook.github.io/jest/docs/getting-started.html#using-babel
    commonjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: false,
            modules: 'commonjs',
          },
        ],
      ],
      plugins: [
        'transform-react-constant-elements',
        'transform-dev-warning',
        ['transform-react-remove-prop-types', { mode: 'wrap' }],
      ],
    },
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: false,
            modules: false,
          },
        ],
      ],
    },
  },
};
