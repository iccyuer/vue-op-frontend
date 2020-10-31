import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/directive',
  component: fullLayout,
  redirect: '/directive/index',
  name: 'directive',
  meta: {
    title: '自定义指令'
  },
  children: [
    {
      path: '/directive/index',
      component: () => import('@/views/directive/index'),
      name: 'directiveIndex',
      meta: {
        title: 'directiveIndex'
      }
    },
    {
      path: '/directive/disabled',
      component: () => import('@/views/directive/disabled'),
      name: 'directiveDisabled',
      meta: {
        title: '按钮禁用'
      }
    }
  ]
}

export default router
