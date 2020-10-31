import fetch from '@/utils/fetch'

export function testUpload (data) {
  return fetch({
    url: '/user/upload',
    method: 'post',
    data
  })
}
