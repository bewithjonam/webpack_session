const path = require('path');
const webpack = require('webpack');

module.exports = {
  // mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '_': 'lodash'
    })
  ],
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  }
};
