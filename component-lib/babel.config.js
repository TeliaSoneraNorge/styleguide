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
        'lodash'
    ],
    env: {
        development: {},
        // jest doesn't take account of BABEL_ENV, you need to set NODE_ENV - https://facebook.github.io/jest/docs/getting-started.html#using-babel
        commonjs: {
            presets: [
                ['@babel/preset-env', {
                    useBuiltIns: false,
                    modules: 'commonjs'
                }]
            ],
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['transform-react-remove-prop-types', { mode: 'wrap' }]
            ]
        },
        es: {
            presets: [
                ['@babel/preset-env', {
                    useBuiltIns: false,
                    modules: false
                }]
            ]
        }
    }
};