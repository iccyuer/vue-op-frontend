import fullLayout from '@/components/layout/full-layout.vue'
const router = {
  path: '/camera',
  component: fullLayout,
  redirect: '/camera/index',
  name: 'camera',
  meta: {
    title: 'camera'
  },
  children: [
    {
      path: '/camera/index',
      component: () => import('@/views/camera/photoUpload'),
      name: 'cameraIndex',
      meta: {
        title: '拍照上传'
      }
    }
  ]
}

export default router
