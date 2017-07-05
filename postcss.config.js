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
        'postcss-calc': {}
    }
};
