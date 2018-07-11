const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const mockMap = {
  '/dr-api/check-tm-login': {
    get: {
      auth: false,
    },
  },
  '/openapi/departments': {
    get: {

    },
  },
  '/openapi/upload/token': {
    get: {
      uptoken: 'test-token',
      domain: 'test-domain',
      zone: 'test-zone',
    },
  },
}

export default (inject) => inject({
  '../../../utils/request': { // 这个地址是在store/app文件中request 的require地址, mock以后, require这个地址将会返回mock的值
    get: async (url) => {
      await delay(500)
      return mockMap[url].get
    },
    post: async (url) => {
      await delay(500)
      return mockMap[url].post
    },
  },
})
