const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const calculateHash = (url) => {
  const filePath = path.resolve(__dirname, './dist', url);

  if (fs.existsSync(filePath)) {
    const hash = crypto.createHash('sha1');
    const fileContent = fs.readFileSync(filePath);
    hash.update(fileContent);
    return hash.digest('hex');
  }

  return '';
};

module.exports = {
  plugins: {
    'postcss-easy-import': {
      extensions: '.pcss',
    },
    'postcss-functions': {
      functions: {
        // Pixels to rem
        rem: (px) => `${px / 16}rem`,
        // Pixels to em
        em: (px, base = 16) => `${px / base}em`,
      },
    },
    'postcss-nested': {},
    'postcss-calc': {},
    'postcss-replace': {
      data: {
        // For Storybook, we serve the contents of /assets directly under /
        // (i.e. ./assets/fonts/* is served under http://localhost:6006/fonts/*)
        assetPath: process.env.STORYBOOK === 'true' ? '' : process.env.LOCAL_DEV === 'true' ? '../assets' : './assets',
      },
    },
    'postcss-url': {
      filter: '**',
      url: (asset) => `${asset.url}?${calculateHash(asset.url)}`,
    },
    'postcss-hexrgba': {},
  },
};
