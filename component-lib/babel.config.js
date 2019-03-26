module.exports = {
    presets: [
        ['@babel/preset-env', {
            modules: false,
            targets: {
                ie: '11'
            }
        }],
        ['@babel/preset-react']
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-modules-commonjs',
        'lodash'
    ],
    env: {
        development: {},
        production: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['transform-react-remove-prop-types', { mode: 'wrap' }]
            ]
        }
    }
};