import opn from 'opn'
import config from '../config'

process.env.NODE_ENV = process.env.NODE_ENV || JSON.parse(config.env.NODE_ENV)
const isDev = process.env.NODE_ENV === 'development'

export default (app) => {
  // 只有dev才使用dev-server
  if (isDev) {
    const webpackConfig = process.env.NODE_ENV === 'test'
      ? require('../webpack/webpack.test.conf')
      : require('../webpack/webpack.dev.conf')
    const port = process.env.PORT || config.port
    const autoOpenBrowser = !!config.autoOpenBrowser
    const compiler = require('webpack')(webpackConfig)
    const devMiddleware = require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        chunks: false,
      },
      quiet: false,
    })
    const hotMiddleware = require('webpack-hot-middleware')(compiler, {
      log: () => {
      },
    })
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        // hotMiddleware.publish({ action: 'reload' })
        cb()
      })
    })
    const uri = `http://localhost:${port}`
    devMiddleware.waitUntilValid(() => {
      console.log(`> Listening at ${uri}\n`)
      if (autoOpenBrowser) {
        opn(uri)
      }
    })

    app.use(devMiddleware)
    app.use(hotMiddleware)
  }
}
