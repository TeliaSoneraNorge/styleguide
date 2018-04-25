import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

import pkg from './package.json';

export default [{
    // perf: true, // Outputs performance information
    input: 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
        { file: pkg.module, format: 'es', sourcemap: 'inline' }
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
            presets: ['react', ['env', {
                modules: false,
                targets: {
                    browsers :['last 2 versions'],
                }
            }], 'stage-0', 'stage-1', 'stage-2'],
            plugins: ['external-helpers']
        }),
        cjs({
            extensions: ['.js', '.jsx']
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
    ],
    watch: {
        chokidar: true,
        include: ['./**']
    }
}];
