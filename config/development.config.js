
module.exports = {
  env: { NODE_ENV: '"development"' },
  port: 9856,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  apiDomain: 'localhost:8060',
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  cssSourceMap: false,
  autoOpenBrowser: false,
  hot: true,
  logger: {
    name: 'rainie-vue',
    streams: [{
      level: require('bunyan').DEBUG,
      stream: process.stdout,
    }, {
      type: 'rotating-file',
      path: '/logs/rainie-vue/app.log',
      period: '1d',   // daily rotation
      count: 10,
    }],
  },
}
