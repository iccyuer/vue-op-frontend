import fetch from '@/utils/fetch'

export function testGet (data) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: data
  })
}
export function testPost (data) {
  return fetch({
    url: '/user/info',
    method: 'post',
    data
  })
}
export function test2 (data) {
  return fetch({
    url: '/dashi/wechat/get_web_access_token',
    method: 'get',
    params: data
  })
}
export function testCookie (data) {
  return fetch({
    url: '/user/cookie',
    method: 'get',
    params: data
  })
}
