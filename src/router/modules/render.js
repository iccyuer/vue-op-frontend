import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/render',
  component: fullLayout,
  redirect: '/render/llipsis',
  name: 'render',
  meta: {
    title: 'render'
  },
  children: [
    {
      path: '/render/index',
      component: () => import('@/views/render/index'),
      name: 'renderIndex',
      meta: {
        title: 'render 官网案例'
      }
    },
    {
      path: '/render/index2',
      component: () => import('@/views/render/index2'),
      name: 'renderIndex2',
      meta: {
        title: 'render v-if'
      }
    },
    {
      path: '/render/index3',
      component: () => import('@/views/render/index3'),
      name: 'renderIndex3',
      meta: {
        title: 'render 循环'
      }
    },
    {
      path: '/render/index4',
      component: () => import('@/views/render/index4'),
      name: 'renderIndex4',
      meta: {
        title: 'render 事件'
      }
    },
    {
      path: '/render/index5',
      component: () => import('@/views/render/index5'),
      name: 'renderIndex5',
      meta: {
        title: 'render 组件'
      }
    },
    {
      path: '/render/index6',
      component: () => import('@/views/render/index6'),
      name: 'renderIndex6',
      meta: {
        title: 'render 函数式组件'
      }
    },
    {
      path: '/render/progress',
      component: () => import('@/views/render/progress'),
      name: 'renderProgress',
      meta: {
        title: 'el-progress'
      }
    }
  ]
}

export default router
