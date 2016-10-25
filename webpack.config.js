var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },
    plugins: []
};