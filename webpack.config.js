const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src/client'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading. only- means to only hot reload for successful updates

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js', // the output bundle
        path: resolve(__dirname, 'public'),
        publicPath: '/public/' // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true, // enable HMR on the server
        contentBase: resolve(__dirname, 'public'), // match the output path
        publicPath: '/public/' // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader' }
                ],
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};