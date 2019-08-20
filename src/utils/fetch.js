import axios from 'axios'
// import store from '@/store'
// import { getToken, removeToken } from '@/utils/auth'
// import router from '@/router'

// 自动携带cookie信息
// axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
  retry: 4, // 最大重新请求次数
  retryDelay: 0 // 重新请求延迟
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // let each request carry token --['X-Token'] as a custom key.
    // please modify it according to the actual situation.

    // if (store.getters.token) {
    //   // let each request carry token --['micecs-token'] as a custom key.
    //   // please modify it according to the actual situation.
    //   config.headers['micecs-token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.status === 500) {
      // Message({
      //   message: '接口调用失败,请稍后重试!',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    }

    // if (res.status === 40001 || res.status === 49999) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   removeToken()
    //   const redirect = router.currentRoute.fullPath
    //   router.push({
    //     path: '/login',
    //     query: {
    //       redirect
    //     }
    //   })
    // }

    return response
  },
  error => {
    // Message({
    //   message: '服务器错误,请联系运维!',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // return Promise.reject(error)
    const config = error.config
    // get 方式重新请求
    if (config.method.toLowerCase() === 'get' && error.message.indexOf('timeout') !== -1) {
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) return Promise.reject(error)

      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 0

      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        // Reject with the error
        // Message({
        //   message: '当前网络环境较差，请稍后重试',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
      }

      // Increase the retry count
      config.__retryCount += 1

      // Create new promise to handle exponential backoff
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, config.retryDelay || 1)
      })
      // Return the promise in which recalls axios to retry the request
      return backoff.then(() => {
        return service(config)
      })
    } else {
      return Promise.reject(error)
    }
  }
)

export default service
