const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    pathinfo: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel', 'eslint'], include: path.join(__dirname, 'src'), },
      {
        test: /\.scss/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap',
        ]
      },
      { test: /\.css/, loaders: [ 'style?sourceMap', 'css', ] },
      { test: /\.woff(\?.+?)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?.*?)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?.*?)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*?)?$/, loader: "file" },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader?limit=10240' },
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['', '.js'],
  },
};
