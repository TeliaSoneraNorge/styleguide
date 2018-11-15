import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import pkg from './package.json';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default [{
    // perf: true, // Outputs performance information
    input: 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: 'inline', globals },
        { file: pkg.module, format: 'es', sourcemap: 'inline', globals },
        { file: `dist/index.umd.js`, format: 'umd',  sourcemap: 'inline', name: 'index', globals }
    ],
    plugins: [
        eslint(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react', ['@babel/preset-env', {
                modules: false,
                targets: {
                    browsers :['last 2 versions'],
                }
            }]],
            plugins: [
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
                '@babel/plugin-syntax-import-meta',
                'lodash']
        }),
        cjs({
            extensions: ['.js', '.jsx']
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
        sizeSnapshot(),
    ],
    watch: {
        chokidar: true,
        include: ['./**']
    }
}];
