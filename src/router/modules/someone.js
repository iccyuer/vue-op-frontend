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
    },
    {
      path: '/someone/index',
      component: () => import('@/views/someone/index'),
      name: 'someoneIndex',
      meta: {
        title: 'props传Functional'
      }
    },
    {
      path: '/someone/index2',
      component: () => import('@/views/someone/index2'),
      name: 'someoneIndex2',
      meta: {
        title: 'subway'
      }
    },
    {
      path: '/someone/rolling',
      component: () => import('@/views/someone/rolling'),
      name: 'someoneRolling',
      meta: {
        title: 'rolling'
      }
    },
    {
      path: '/someone/global_vars',
      component: () => import('@/views/someone/globalVars'),
      name: 'someoneGlobalVars',
      meta: {
        title: '全局sass变量'
      }
    },
    {
      path: '/someone/communication',
      component: () => import('@/views/someone/communication'),
      name: 'someoneCommunication',
      meta: {
        title: '组件间通信'
      }
    }
  ]
}

export default router
