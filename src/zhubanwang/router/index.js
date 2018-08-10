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
const StudentHome = () => import('../pages/StudentHome')
const Counter = () => import('../pages/Counter')
const Temp = () => import('../pages/Temp')
const Test = () => import('../pages/test')


Vue.use(Router)
Vue.use(actionTypePlugin)

const routes = [{
  path: '/zhubanwang',
  name: 'Home',
  component: Home,
}, {
  path: '/zhubanwang/counter',
  name: 'Counter',
  component: Counter,
}, {
  path: '/zhubanwang/temp',
  name: 'Temp',
  component: Temp,
}, {
  path: '/zhubanwang/student',
  name: 'StudentHome',
  component: StudentHome,
}, {
  path: '/zhubanwang/test',
  name: 'Test',
  component: Test,
}]

export default new Router({
  mode: 'history',
  routes,
})
