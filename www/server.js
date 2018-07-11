import path from 'path'
import express from 'express'
import responseTime from 'response-time'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import proxy from 'http-proxy-middleware'
import history from 'connect-history-api-fallback'
import logger from './logger'
import config from '../config'
import injectHot from './inject-hot'

const app = express()
app.use(cookieParser())
app.use(responseTime((req, res, time) => logger.info('response time:', req.method, req.url, time)))
app.use('/check/health', (req, res) => res.status(200).end())
app.use('/api', proxy({ target: config.apiDomain, changeOrigin: true }))

app.use(compression({ level: 9 }))
// history fallback
app.use(history({
  rewrites: [{
    to(context) {
      // 需要自己写规则: (默认只拦截get, 不用实现了)
      // 凡是带.的都不拦截
      // 对应的将以/page/开头的url都转到/view/page.html
      const { path: originPath, pathname } = context.parsedUrl
      if (pathname.indexOf('.') < 0) {
        const page = pathname.match(/^\/[^/]*/)[0].substr(1)
        return `/view/${page}.html`
      }
      return originPath
    },
  }],
}))
// hot 必须写在fallback的后面
injectHot(app)

app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('/static', express.static(path.resolve(__dirname, '../static')))

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({
      result: false,
      error: 500,
      reason: err.message || '',
      time: Date.now(),
    })
  }
  next()
})

console.log('> Starting server...')

const server = app.listen(config.port, (err) => {
  if (err) {
    logger.error('Error when setup server:', err)
  }
  logger.info(`Server is ready for http://localhost:${config.port}!`)
})

export default {
  close: () => {
    server.close()
  },
}

process.on('uncaughtException', (err) => {
  logger.error('uncaughtException:', err.message)
  if (err.message.indexOf(' EADDRINUSE ') > -1) {
    process.exit()
  }
})
process.on('unhandledRejection', (err) => {
  logger.error('unhandledRejection:', err.message)
})
