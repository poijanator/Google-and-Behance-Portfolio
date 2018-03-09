// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
Vue.use(VueRouter)
Vue.use(VueResource)


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
