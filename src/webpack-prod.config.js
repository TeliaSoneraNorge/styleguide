const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'client'),
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js', // the output bundle
        path: path.resolve(__dirname, '../dist/public/js'),
        sourceMapFilename: 'bundle.map'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            hmr: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                exclude: [/\.(js|jsx|mjs|pcss|css)$/, /\.html$/, /\.json$/],
                loader: require.resolve('file-loader'),
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // No plugins needed. Running `webpack -p` minifies and optimizes for us automatically.
    ]
};