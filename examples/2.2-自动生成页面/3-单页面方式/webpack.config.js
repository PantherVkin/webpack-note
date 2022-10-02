const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    home: './src/index.js',
    a: './src/a.js'
  },
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: 'scripts/[name].[chunkhash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'a.html',
      chunks: ['a']
    })
  ]
}
