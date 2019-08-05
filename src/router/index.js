import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import directive from './modules/directive'
import jsx from './modules/jsx'
import someone from './modules/someone'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '首页'
    }
  },
  directive,
  jsx,
  someone
]

export default new Router({
  routes: constantRouterMap
})
