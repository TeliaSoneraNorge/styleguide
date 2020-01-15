module.exports = {
  stories: ['../stories/**/*.stories.{tsx,mdx}', '../src/**/*.stories.{tsx,mdx}'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    'storybook-addon-jsx',
  ],
};
