const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = config.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// generate loader string to be used with extract text plugin
const generateLoaders = (options) => (loader, loaderOptions, useSassTheme) => {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }
  const loaders = [cssLoader]

  if (loader) {
    loaders.push({
      loader: loader + '-loader',
      options: Object.assign({}, loaderOptions, {
        sourceMap: options.sourceMap
      })
    })
  }
  // if (useSassTheme) { // 用于配置全局的scss, 目前由于是多页, 不知道怎么配
  //   loaders.push({
  //     loader: 'sass-resources-loader',
  //     options: {
  //       // 需更改为项目中实际scss文件路径
  //       resources: path.resolve(__dirname, '../src/basic/theme.scss'),
  //     },
  //   })
  // }

  // Extract CSS when that option is specified
  // (which is the case during production build)
  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}

exports.generateLoaders = generateLoaders

exports.cssLoaders = function (options) {
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(options)(),
    postcss: generateLoaders(options)(),
    less: generateLoaders(options)('less'),
    sass: generateLoaders(options)('sass', { indentedSyntax: true }),
    scss: generateLoaders(options)('sass'),
    stylus: generateLoaders(options)('stylus'),
    styl: generateLoaders(options)('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

// Generate HtmlWebpackPlugin
// https://github.com/ampedandwired/html-webpack-plugin
exports.generateHtmlWebpackPlugin = function(page, options) {
  const base = Object.assign({
    filename: `./view/${page}.html`,
    template: './template.html',
    inject: true,
    chunksSortMode: 'dependency',
    chunks: ['manifest', 'vendor', page],
  }, options)
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    base.minify = {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  }
  return new HtmlWebpackPlugin(base)
}
