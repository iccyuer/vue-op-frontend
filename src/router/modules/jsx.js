import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/jsx',
  component: fullLayout,
  redirect: '/jsx/index',
  name: 'jsx',
  meta: {
    title: 'jsx'
  },
  children: [
    {
      path: '/jsx/index',
      component: () => import('@/views/jsx/index'),
      name: 'jsxIndex',
      meta: {
        title: 'jsx事件'
      }
    },
    {
      path: '/jsx/idnex2',
      component: () => import('@/views/jsx/index2'),
      name: 'jsxIndex2',
      meta: {
        title: 'jsx循环'
      }
    },
    {
      path: '/jsx/idnex3',
      component: () => import('@/views/jsx/index3'),
      name: 'jsxIndex3',
      meta: {
        title: 'jsx v-model'
      }
    },
    {
      path: '/jsx/idnex4',
      component: () => import('@/views/jsx/index4'),
      name: 'jsxIndex4',
      meta: {
        title: 'jsx 条件渲染'
      }
    },
    {
      path: '/jsx/idnex5',
      component: () => import('@/views/jsx/index5'),
      name: 'jsxIndex5',
      meta: {
        title: 'jsx 绑定属性'
      }
    },
    {
      path: '/jsx/todo',
      component: () => import('@/views/jsx/todo'),
      name: 'jsxTodo',
      meta: {
        title: 'jsx 组件'
      }
    },
    {
      path: '/jsx/index6',
      component: () => import('@/views/jsx/index6'),
      name: 'jsxIndex6',
      meta: {
        title: 'jsx .js'
      }
    }
  ]
}

export default router
