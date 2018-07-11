const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

const options = {
  sourceMap: config.cssSourceMap,
  extract: isProduction,
}

// 这里有个问题, 如果用了sass, 这里如果指定css的extract为true, 会报错原因不知, 目前的解决方法是production不extract了,
module.exports = {
  loaders: {
    css: utils.generateLoaders(options)(),
    postcss: utils.generateLoaders(options)(),
    scss: utils.generateLoaders(options)('sass', {}, true)
  }
}
// module.exports = {
//   loaders: {
//     css: utils.generateLoaders(options)(),
//     postcss: utils.generateLoaders(options)(),
//     // scss: utils.generateLoaders(options)('sass'),
//   }
// }
