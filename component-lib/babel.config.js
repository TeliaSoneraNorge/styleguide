let defaultPresets;

// We release an ES version of Styleguide.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).

if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
}
else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['modules', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
}

const defaultAlias = {
    '@telia/styleguide': './src',
};

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        [
            '@babel/plugin-proposal-object-rest-spread',
            {
                // Workaround for https://github.com/babel/babel/issues/8323
                loose: process.env.BABEL_ENV !== 'es',
            },
        ],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
        'lodash',
    ],
    env: {
        test: {
            sourceMaps: 'both',
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        root: ['./'],
                        alias: defaultAlias,
                    },
                ],
            ],
        },
        development: {},
        es: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'wrap',
                    },
                ],
            ],
            // It's most likely a babel bug.
            // We are using this ignore option in the CLI command but that has no effect.
            ignore: ['**/*.test.js'],
        },
        production: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'wrap',
                    },
                ],
            ],
            // It's most likely a babel bug.
            // We are using this ignore option in the CLI command but that has no effect.
            ignore: ['**/*.test.js'],
        },
    },
};