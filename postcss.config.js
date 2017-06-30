module.exports = {
    plugins: {
        'postcss-easy-import': {
            extensions: '.pcss'
        },
        'postcss-functions': {
            functions: {
                rem: value => `${value / 16}rem`
            }
        },
        'postcss-nested': {},
        'postcss-custom-properties': {},
        'postcss-calc': {}
    }
};
