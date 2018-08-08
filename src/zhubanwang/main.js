// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ress' // eslint-disable-line
import 'animate.css/animate.min.css'
import 'vue-ydui/dist/ydui.base.css'
import { Button } from 'vue-ydui/dist/lib.rem/button'
import { CellGroup, CellItem } from 'vue-ydui/dist/lib.rem/cell'
import FastClick from 'fastclick'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

FastClick.attach(document.body)
Vue.config.productionTip = false
sync(store, router)

Vue.component(Button.name, Button)
Vue.component(CellGroup.name, CellGroup)
Vue.component(CellItem.name, CellItem)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
