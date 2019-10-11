import fullLayout from '@/components/layout/full-layout.vue'
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
      path: '/elementui/index',
      component: () => import('@/views/elementui/tree'),
      name: 'elementuiTree',
      meta: {
        title: '树型组件'
      }
    }
  ]
}

export default router
