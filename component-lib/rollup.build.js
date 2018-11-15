import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import filesize from 'rollup-plugin-filesize';
import { eslint } from 'rollup-plugin-eslint';

const isProdBuild = 'production' === process.env.NODE_ENV;
const input = './src/index.js';
const name = 'index';
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
const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
};

const commonPlugins = [
    eslint(),
    nodeResolve({
        extensions: ['.jsx', '.js'], main: true,
        jsnext: true,
        browser: true,
    }),
    babel(babelOptions),
    commonjs(commonjsOptions),
    nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    filesize({
        showGzippedSize: false,
    }),
    replace({
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
];

const prodPlugins = [
    uglify(),
    sizeSnapshot(),
];

const sourcemap = isProdBuild ? false : 'inline';

export default [{
    input,
    external: Object.keys(globals),
    plugins: commonPlugins.concat(isProdBuild ? prodPlugins : []),
    output: [
        {
            file: `dist/${name}.cjs.js`, format: 'cjs',
            sourcemap,
            name, globals,
        },
        {
            file: `dist/umd/${name}.development.js`, format: 'umd',
            sourcemap,
            name, globals,
        },
        {
            file: `dist/umd/${name}.production.min.js`,
            format: 'umd', name, globals,
        },
    ],
    watch: {
        chokidar: true,
        include: ['./**'],
    },
}];
