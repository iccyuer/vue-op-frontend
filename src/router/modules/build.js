import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/build',
  component: fullLayout,
  redirect: '/build/index',
  name: 'build',
  meta: {
    title: 'build'
  },
  children: [
    {
      path: '/build/index',
      component: () => import('@/views/build/index'),
      name: 'buildIndex',
      meta: {
        title: '服务器打包'
      }
    }
  ]
}

export default router
