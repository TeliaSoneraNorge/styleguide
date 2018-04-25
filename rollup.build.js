import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

export default [
    {
        // perf: true, // Outputs performance information
        input: 'src/components/index.js',
        external: ['react', 'react-dom', 'prop-types'],
        output: [
            // {file: pkg.main, format: 'cjs', sourcemap: 'inline'},
            {file: pkg.module, format: 'es', sourcemap: 'inline'}
        ],
        plugins: [
            // eslint(),
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                presets: [['es2015', {modules: false}], 'stage-0', 'react'],
                plugins: ['external-helpers', 'transform-flow-comments']
            }),
            cjs({
                exclude: [],
                include: [],
                extensions: ['.js', '.jsx']
            }),
            replace({
                ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            (process.env.NODE_ENV === 'production' && uglify()),
        ],
        watch: {
            chokidar: true,
            include: ['src/components/**']
        }
    }
]