import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import image from 'rollup-plugin-image';
import pkg from './package.json';
import url from "rollup-plugin-url"

export default [{
    // perf: true, // Outputs performance information
    input: 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: 'inline' },
        { file: pkg.module, format: 'es', sourcemap: 'inline' },
    ],
    plugins: [
        url({
            limit: 10 * 1024,
          }),
       /*  eslint(), */
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        image(),
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
            extensions: ['.js', '.jsx', '.svg']
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
