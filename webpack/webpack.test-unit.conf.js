const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const appPackage = require('../package.json')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { pages } = require('./pages')
const { generateHtmlWebpackPlugin } = require('./utils')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
  .concat(pages.map((page) =>generateHtmlWebpackPlugin(page)))
})
