import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/baidu',
  component: fullLayout,
  redirect: '/baidu/index',
  name: 'baidu',
  meta: {
    title: 'baidu'
  },
  children: [
    {
      path: '/baidu/index',
      component: () => import('@/views/baiduMap/index'),
      name: 'baiduIndex',
      meta: {
        title: '默认标注'
      }
    },
    {
      path: '/baidu/index2',
      component: () => import('@/views/baiduMap/index2'),
      name: 'baiduIndex2',
      meta: {
        title: '自定义标注'
      }
    },
    {
      path: '/baidu/index3',
      component: () => import('@/views/baiduMap/index3'),
      name: 'baiduIndex3',
      meta: {
        title: '默认信息窗口'
      }
    },
    {
      path: '/baidu/index4',
      component: () => import('@/views/baiduMap/index4'),
      name: 'baiduIndex4',
      meta: {
        title: '自定义信息窗口'
      }
    },
    {
      path: '/baidu/index5',
      component: () => import('@/views/baiduMap/index5'),
      name: 'baiduIndex5',
      meta: {
        title: '线路'
      }
    }
  ]
}

export default router
