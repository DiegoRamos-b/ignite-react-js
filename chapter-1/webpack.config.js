const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },

    hot: true,
    historyApiFallback: { index: "index.html" }
  },

  plugins: [
    new htmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}