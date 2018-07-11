import Vue from 'vue'
import Router from 'vue-router'
import { ENTER_TYPE_PUSH, ENTER_TYPE_POP, ENTER_TYPE_REPLACE } from '../store/modules/app'

const actionTypePlugin = {
  install(v) {
    let actionType = ENTER_TYPE_PUSH
    window.addEventListener('popstate', () => {
      actionType = ENTER_TYPE_POP
    }, false)
    v.prototype.$cRouter = function $cRouter() {
      return {
        push: (...args) => {
          actionType = ENTER_TYPE_PUSH
          this.$router.push(...args)
        },
        pop: () => {
          actionType = ENTER_TYPE_POP
          this.$router.go(-1)
        },
        replace: (...args) => {
          actionType = ENTER_TYPE_REPLACE
          this.$router.replace(...args)
        },
        getActionType: () => actionType,
      }
    }
  },
}

const Home = () => import('../pages/Home')
const Counter = () => import('../pages/Counter')
const Temp = () => import('../pages/Temp')

Vue.use(Router)
Vue.use(actionTypePlugin)

const routes = [{
  path: '/basic',
  name: 'Home',
  component: Home,
}, {
  path: '/basic/counter',
  name: 'Counter',
  component: Counter,
}, {
  path: '/basic/temp',
  name: 'Temp',
  component: Temp,
}]

export default new Router({
  mode: 'history',
  routes,
})
