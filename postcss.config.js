const fs = require('fs');
const crypto = require('crypto');

const calculateHash = (path) => {
    const filePath = __dirname + path;

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
            extensions: '.pcss'
        },
        'postcss-functions': {
            functions: {
                // Pixels to rem
                rem: px => `${px / 16}rem`,
                // Pixels to em
                em: (px, base = 16) => `${px / base}em`
            }
        },
        'postcss-nested': {},
        'postcss-custom-properties': {},
        'postcss-calc': {},
        'postcss-url': {
            filter: '**',
            url: (asset) => `${asset.url}?${calculateHash(asset.url)}`
        }
    }
};
