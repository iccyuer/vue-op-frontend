import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/filters',
  component: fullLayout,
  redirect: '/filters/index',
  name: 'filters',
  meta: {
    title: '过滤器'
  },
  children: [
    {
      path: '/filters/currency',
      component: () => import('@/views/filters/currency'),
      name: 'filtersCurrency',
      meta: {
        title: '货币过滤器'
      }
    }
  ]
}

export default router
