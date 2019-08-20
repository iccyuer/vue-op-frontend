import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/fetch',
  component: fullLayout,
  redirect: '/fetch/index',
  name: 'fetch',
  meta: {
    title: 'fetch'
  },
  children: [
    {
      path: '/fetch/index',
      component: () => import('@/views/fetch/index'),
      name: 'fetchIndex',
      meta: {
        title: 'fetchIndex'
      }
    },
    {
      path: '/fetch/upload',
      component: () => import('@/views/fetch/upload'),
      name: 'fetchUpload',
      meta: {
        title: 'fetchUpload'
      }
    }
  ]
}

export default router
