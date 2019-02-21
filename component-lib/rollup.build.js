import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import filesize from 'rollup-plugin-filesize';
import { eslint } from 'rollup-plugin-eslint';

const isProdBuild = 'production' === process.env.NODE_ENV;
const input = './src/index.js';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'lodash': 'lodash',
    'classNames': 'classNames',
};
const babelOptions = {
    exclude: /node_modules/,
    // We are using @babel/plugin-transform-runtime
    runtimeHelpers: true,
    configFile: './babel.config.js',
};

const commonPlugins = [
    eslint(),
    nodeResolve({
        extensions: ['.jsx', '.js'], main: true,
        jsnext: true,
        browser: true,
    }),
    babel(babelOptions),
    nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    filesize({
        showGzippedSize: false,
    }),
    replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    })
];

const prodPlugins = [
    uglify(),
    sizeSnapshot()
];

export default [{
    input,
    external: Object.keys(globals),
    plugins: commonPlugins.concat(isProdBuild ? prodPlugins : []),
    output: [],
    watch: {
        chokidar: true,
        include: ['./**'],
    }
}];
