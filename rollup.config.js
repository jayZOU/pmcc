import buble from 'rollup-plugin-buble';

export default {
    moduleName: 'pmcc',
    entry: './src/pmcc.js',
    sourceMap: true,
    useStrict: false,
    plugins: [ 
        buble()
    ],
    targets: [
        {
            format: 'es',
            dest: './dist/pmcc.js'
        }, 
        {
            format: 'cjs',
            dest: './dist/pmcc.cjs.js'
        }, 
        {
            format: 'umd',
            dest: './dist/pmcc.umd.js'
        }
    ],
    external: ['html'],

    globals: {
        html: 'html'
    }
};