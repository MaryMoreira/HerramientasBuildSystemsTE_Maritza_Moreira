const path = require("path");

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, "src/index.js"),
  mode: 'development',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: '[file].map',
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  watchOptions: { // detecta cambios
      poll: true,
  },

  devServer: {
    contentBase: path.resolve(__dirname), // New
    historyApiFallback: true,
  },

  plugins: [
    new WebpackNotifierPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],

};