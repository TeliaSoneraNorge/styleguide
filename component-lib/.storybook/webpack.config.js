/**
 * This variable is used for conditional configuration in babel.config.js
 */
process.env['STORYBOOK'] = true;

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
