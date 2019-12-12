import fullLayout from '@/components/layout/full-layout.vue'
// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
// console.log(new Vue({
//   render: h => h('<router-view></router-view>')
// }))
const router = {
  path: '/elementui',
  component: fullLayout,
  redirect: '/elementui/index',
  name: 'elementui',
  meta: {
    title: 'elementui'
  },
  children: [
    {
      path: '/elementui/tree',
      component: () => import('@/views/elementui/tree'),
      name: 'elementuiTree',
      meta: {
        title: '树型组件'
      }
    },
    {
      path: '/elementui/slider',
      component: () => import('@/views/elementui/slider'),
      name: 'elementuiSlider',
      meta: {
        title: '滑块'
      }
    },
    {
      path: '/elementui/hah',
      // component: {
      //   template: '<router-view></router-view>'// render: h => h('<router-view></router-view>')
      // },
      component: Vue.compile('<router-view></router-view>'),
      name: 'elementuiHah',
      meta: {
        title: '父组件'
      },
      children: [
        {
          path: '/elementui/hah/index',
          component: () => import('@/views/elementui/index'),
          name: 'elementuiHahIndex',
          meta: {
            title: '子组件'
          }
        }
      ]
    },
    {
      path: '/elementui/checkbox',
      component: () => import('@/views/elementui/checkbox'),
      name: 'elementuiCheckbox',
      meta: {
        title: 'checkbox'
      }
    },
    {
      path: '/elementui/pagination',
      component: () => import('@/views/elementui/pagination'),
      name: 'elementuiPagination',
      meta: {
        title: 'pagination'
      }
    },
    {
      path: '/elementui/form',
      component: () => import('@/views/elementui/form'),
      name: 'elementuiForm',
      meta: {
        title: 'form 校验'
      }
    }
  ]
}

export default router
