var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/' //publicPath tells webpack-dev-server where to serve your bundle in memory
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'ify-loader',
          'transform-loader?plotly.js/tasks/compress_attributes.js',
          ]
      },
    ]
  }
};
