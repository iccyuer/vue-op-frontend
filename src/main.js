import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import * as filters from '@/filters' // 全局filter

import '@/style/var.scss'

// EventBus
Vue.prototype.$vbus = new Vue()

Object.keys(filters).forEach(key => {
  console.log('key', key)
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
