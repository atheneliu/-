const path = require('path')

module.exports = {
  env: { NODE_ENV: '"production"' },
  port: 9856,
  apiDomain: 'localhost:8060',
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: false,
  cssSourceMap: false,
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report,
  logger: {
    name: 'rainie-vue',
    streams: [{
      level: require('bunyan').ERROR,
      stream: process.stdout,
    }, {
      type: 'rotating-file',
      path: '/logs/rainie-vue/app.log',
      period: '1d',   // daily rotation
      count: 10,
    }],
  },
}
