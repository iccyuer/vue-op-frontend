import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/lbs',
  component: fullLayout,
  redirect: '/lbs/index',
  name: 'lbs',
  meta: {
    title: 'lbs'
  },
  children: [
    {
      path: '/lbs/index',
      component: () => import('@/views/lbs/index'),
      name: 'lbsIndex',
      meta: {
        title: 'lbsIndex'
      }
    }
  ]
}

export default router
