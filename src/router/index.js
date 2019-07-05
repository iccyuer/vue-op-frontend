import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

export default new Router({
  routes: constantRouterMap
})
