module.exports = {
  previewHead: (head) => `
  ${head}
  <meta name="format-detection" content="telephone=no">
  `,
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    'storybook-addon-jsx',
    '@storybook/addon-viewport',
    'storybook-addon-designs',
  ],
};
