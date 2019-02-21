

// We release an ES version of Styleguide.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).

let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
}
else {
    defaultPresets = [
        [ '@babel/preset-env', { modules: 'commonjs' } ]
    ];
}

const defaultAlias = {
    '@telia/styleguide': './src'
};

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
        'lodash'
    ],
    env: {
        test: {
            sourceMaps: 'both',
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        root: ['./'],
                        alias: defaultAlias
                    }
                ]
            ]
        },
        development: {},
        es: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                [
                    'transform-react-remove-prop-types',
                    { mode: 'wrap' }
                ]
            ]
        },
        production: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                [
                    'transform-react-remove-prop-types',
                    { mode: 'wrap' }
                ]
            ]
        }
    }
};