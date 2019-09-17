/*
 ./webpack.config.js
*/

const path = require('path'); // path utility
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {

 entry: './src/index.js', // archivo js que codearemos

 output: {
  path: path.resolve('./dist'), //resolver el path de salida
  filename: 'bundle.js' // archivo js compilado
 },

 module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
},

 resolve: {
  extensions: ['.js', '.jsx']
 },

 devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

 plugins: [new HtmlWebpackPlugin({
                                 template: './dist/index.html', // archivo de nuestra vista
                                 filename: "./index.html"
                                })] // configuración de nuestra vista

}

module.exports = config; //exportamos a webpack nuestra configuración