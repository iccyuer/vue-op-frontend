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
        title: 'jsxIndex'
      }
    }
  ]
}

export default router
