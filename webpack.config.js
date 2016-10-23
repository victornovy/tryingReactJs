var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        libs: ['react', 'react-dom', 'material-ui']
    },
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'libs',
          minChunks: Infinity,
          filename: 'libs.js'
        })
    ],
    module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: ['./node_modules'],
      },
    ]
  }
};