import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import directive from './modules/directive'
import jsx from './modules/jsx'
import render from './modules/render'
import someone from './modules/someone'
import fetch from './modules/fetch'
import lbs from './modules/lbs'
import camera from './modules/camera'
import elementui from './modules/elementui'
import baiduMap from './modules/baiduMap'
import filters from './modules/filters'
import build from './modules/build'

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
  render,
  someone,
  fetch,
  lbs,
  camera,
  elementui,
  baiduMap,
  filters,
  build
]

export default new Router({
  routes: constantRouterMap
})
