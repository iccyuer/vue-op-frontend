import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/someone',
  component: fullLayout,
  redirect: '/someone/llipsis',
  name: 'someone',
  meta: {
    title: 'someone'
  },
  children: [
    {
      path: '/someone/llipsis',
      component: () => import('@/views/someone/llipsis'),
      name: 'someoneL',
      meta: {
        title: 'llipsis'
      }
    }
  ]
}

export default router
