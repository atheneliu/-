import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import counter from './modules/counter'
import config from '../../../config'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    counter,
  },
})

// hot-reload 注意必须携程modules的形式才能有效果
if (config.hot) {
  module.hot.accept([
    './modules/app',
    './modules/counter',
  ], () => {
    store.hotUpdate({
      modules: {
        app: require('./modules/app').default,
        counter: require('./modules/counter').default,
      },
    })
  })
}
export default store
