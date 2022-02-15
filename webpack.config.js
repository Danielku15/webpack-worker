const path = require('path');

module.exports = {
    entry: {
        simple: './src/simple.js',
        real: './src/real-webpack.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                mylib: { // for simple example
                    minSize: 0,
                    chunks: 'all',
                    name: 'chunk-mylib',
                    priority: 10,
                    test: /.*mylib.*/,
                },

                alphatab: { // for real example
                    minSize: 0,
                    chunks: 'all',
                    name: 'chunk-alphatab',
                    priority: 10,
                    test: /.*alphaTab.*/,
                },
            },
        },
    },
};
