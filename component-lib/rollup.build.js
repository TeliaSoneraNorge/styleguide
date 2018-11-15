import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import nodeGlobals from 'rollup-plugin-node-globals';

import pkg from './package.json';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'propTypes',
    'lodash-es': 'lodash-es',
};
export default [{
    //perf: true, // Outputs performance information
    input: 'src/index.js',
    external: Object.keys(globals),
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: 'inline', globals },
        { file: pkg.module, format: 'es', sourcemap: 'inline', globals },
    ],
    plugins: [
        eslint(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        babel({
            runtimeHelpers: true,
            babelrc: false,
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react', ['@babel/preset-env', {
                modules: false,
                targets: {
                    browsers :['last 2 versions'],
                }
            }]],
            plugins: [
                'lodash',
                '@babel/plugin-proposal-class-properties',
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                '@babel/plugin-proposal-do-expressions',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-function-bind',
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-json-strings',
                '@babel/plugin-proposal-logical-assignment-operators',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-optional-chaining',
                ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
                '@babel/plugin-proposal-throw-expressions',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-import-meta']
        }),
        cjs({
            ignoreGlobal: true,
            include: 'node_modules/**',
            extensions: ['.js', '.jsx']
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        //(process.env.NODE_ENV === 'production' && uglify()),
        nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
        sizeSnapshot(),
    ],
    watch: {
        chokidar: true,
        include: ['./**']
    }
}];
